"use client";

import { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function EmailSection() {
  const editorRef = useRef(null);
  const [emailLogs, setEmailLogs] = useState([]);
  const [templates, setTemplates] = useState([
    { id: "default-1", name: "Follow-up Template", content: "<p>Hello, this is a follow-up email.</p>", isCustom: false }
  ]);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [toEmail, setToEmail] = useState("mpl1@gmail.com");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEmailField, setNewEmailField] = useState("");

  useEffect(() => {
    const savedTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");
    if (savedTemplates.length > 0) setTemplates([templates[0], ...savedTemplates]);
    
    const savedLogs = JSON.parse(localStorage.getItem("emailLogs") || "[]");
    if (savedLogs.length > 0) setEmailLogs(savedLogs);
  }, []);

  const resetEmailForm = () => {
    setFrom("");
    setSubject("");
    setToEmail("mpl1@gmail.com");
    setSelectedTemplate("");
    if (editorRef.current) editorRef.current.setContent("");
  };

  const saveTemplate = () => {
    if (!editorRef.current) return;
    const html = editorRef.current.getContent().trim();
    if (!html || html === "<p></p>") return alert("Message is empty!");
    
    const name = prompt("Enter Template Name:");
    if (!name) return;

    const newTemplate = { id: crypto.randomUUID(), name, content: html, isCustom: true };
    const existingTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");
    const updatedTemplates = [newTemplate, ...existingTemplates];
    
    localStorage.setItem("emailTemplates", JSON.stringify(updatedTemplates));
    loadTemplates();
    alert("Template saved successfully!");
  };

  const applyTemplate = (id) => {
    setSelectedTemplate(id);
    const temp = templates.find((t) => t.id == id);
    if (temp && editorRef.current) editorRef.current.setContent(temp.content);
  };

  const sendEmail = () => {
    if (!editorRef.current) return;
    const message = editorRef.current.getContent();
    if (!message || message === "<p></p>" || message.trim() === "") return alert("Please write a message!");

    const newEmail = {
      id: crypto.randomUUID(),
      from: from,
      to: toEmail,
      subject: subject || "(no subject)",
      message,
      status: "Sent",
      date: new Date().toLocaleString("en-GB"),
    };

    const updated = [newEmail, ...emailLogs];
    setEmailLogs(updated);
    localStorage.setItem("emailLogs", JSON.stringify(updated));
    resetEmailForm();
    alert("Email Sent Successfully!");
  };

  const deleteEmailLog = (id) => {
    if (confirm("Are you sure you want to delete this email?")) {
      const updated = emailLogs.filter((log) => log.id !== id);
      setEmailLogs(updated);
      localStorage.setItem("emailLogs", JSON.stringify(updated));
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-y-auto pb-20">
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
      <div className="w-full max-w-7xl mx-auto p-2 sm:p-4 md:p-6 lg:p-8 pb-20">

        <div className="bg-white rounded-t-lg shadow-sm border-b border-gray-300 px-6 py-3">
          <h1 className="text-xl font-semibold text-gray-600">Activity <strong>history</strong></h1>
        </div>

        {showAddForm && (
          <div className="fixed inset-0 bg-black/30 flex items-start justify-center z-50 pt-20 overflow-y-auto">
            <div className="bg-white w-[90%] md:w-[500px] rounded-lg shadow-xl p-6 relative animate-slideDown">
              <button onClick={() => setShowAddForm(false)} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700">×</button>
              
              <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-3">
                Add and verify email address to send mail.
              </h3>

              <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded mb-4">
                Please check your mail After Click on verify button.
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-700 font-medium">Display Name</label>
                <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded text-black focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter display name" />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-700 font-medium">Email</label>
                <input type="email" value={newEmailField} onChange={(e) => setNewEmailField(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded text-black focus:ring-2 focus:ring-blue-500" 
                  placeholder="Enter email address" />
              </div>

              <div className="flex gap-3">
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium" 
                  onClick={() => { if (newEmailField.trim()) alert("Verification email sent to: " + newEmailField); setShowAddForm(false); setNewEmailField(""); }}>
                  verify
                </button>
                <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded font-medium" 
                  onClick={() => { setShowAddForm(false); setNewEmailField(""); }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white shadow-sm px-4 sm:px-6 py-4 rounded-b-lg mb-20">
          <div className="space-y-4 text-sm">

            <div className="flex justify-between items-end gap-4">
              <div className="flex-1">
                <label className="block mb-2 text-gray-700 font-medium">From</label>
                <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
                  value={from} placeholder="Enter From" onChange={(e) => setFrom(e.target.value)} />
              </div>
              <button onClick={() => setShowAddForm(true)}
                className="bg-gray-500 text-white px-5 py-2.5 rounded hover:bg-gray-700 font-medium flex items-center gap-2">
                Add More
              </button>
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">To</label>
              <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
                value={toEmail} onChange={(e) => setToEmail(e.target.value)} />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">Subject</label>
              <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
                value={subject} placeholder="Enter subject" onChange={(e) => setSubject(e.target.value)} />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">Reply with Template</label>
              <select className="border border-gray-300 w-full p-2.5 rounded-sm bg-white focus:ring-2 focus:ring-blue-500"
                value={selectedTemplate} onChange={(e) => applyTemplate(e.target.value)}>
                <option value="">Choose Template</option>
                {templates.map((t) => (
                  <option key={t.id || Math.random()} value={t?.id}>
                    {t?.name || 'Untitled Template'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">Message</label>
              <div className="border-2 border-gray-300 rounded overflow-hidden">
                <Editor apiKey="y1s9k2719cryc4c4lhyef3rypkcz2oy6t9fno5q4ngbqts9o"
                  onInit={(evt, editor) => (editorRef.current = editor)} initialValue="<p>Hello...</p>"
                  init={{
                    height: 250, menubar: true,
                    plugins: ["advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace",
                      "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "help", "wordcount"],
                    toolbar: "undo redo | blocks fontsize | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table image media link | removeformat code preview fullscreen | help",
                    branding: false,
                  }}
                />
              </div>
              <button onClick={saveTemplate} className="mt-3 px-4 py-2 bg-blue-100 border border-blue-400 text-blue-700 rounded hover:bg-blue-200">
                📄 Save as Template
              </button>
            </div>

            <div className="flex gap-4 mt-4">
              <button onClick={sendEmail} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Email</button>
              <button onClick={resetEmailForm} className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100">Cancel</button>
            </div>
          </div>

          <div className="border-t-2 border-gray-300 px-0 py-4 mt-6 pb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Email Logs</h2>
            
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3 border-b text-left">TO</th>
                    <th className="p-3 border-b text-right">STATUS</th>
                    <th className="p-3 border-b text-right">DATE</th>
                    <th className="p-3 border-b text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {emailLogs.length === 0 ? (
                    <tr><td colSpan="4" className="py-8 text-center text-red-500 font-medium">No Records</td></tr>
                  ) : (
                    emailLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-gray-50">
                        <td className="p-3 border-t">{log.to}</td>
                        <td className="p-3 border-t text-right">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">{log.status}</span>
                        </td>
                        <td className="p-3 border-t text-right">{log.date}</td>
                        <td className="p-3 border-t text-right">
                          <button onClick={() => deleteEmailLog(log.id)} className="text-red-500 hover:text-red-700 font-medium">Delete</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="md:hidden space-y-3 pb-4">
              {emailLogs.length === 0 ? (
                <div className="py-8 text-center text-red-500 font-medium border border-gray-300 rounded">No Records</div>
              ) : (
                emailLogs.map((log) => (
                  <div key={log.id} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-medium text-gray-500 mb-1">To:</div>
                          <div className="font-medium text-gray-800 break-all text-sm">{log.to}</div>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium whitespace-nowrap">{log.status}</span>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500 mb-1">Date:</div>
                        <div className="text-sm text-gray-700">{log.date}</div>
                      </div>
                      <button onClick={() => deleteEmailLog(log.id)}
                        className="w-full bg-red-50 text-red-600 hover:bg-red-100 py-2.5 rounded-md font-medium text-sm border border-red-200">
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}