"use client";

import { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function EmailSection() {
  const editorRef = useRef(null);
  const [emailLogs, setEmailLogs] = useState([]);
  const [templates, setTemplates] = useState([
    {
      id: "default-1",
      name: "Follow-up Template",
      content: "<p>Hello, this is a follow-up email.</p>",
      isCustom: false,
    },
  ]);

  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [toEmail, setToEmail] = useState("mpl1@gmail.com");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEmailField, setNewEmailField] = useState("");

  useEffect(() => {
    const savedTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");

    if (Array.isArray(savedTemplates) && savedTemplates.length > 0) {
      const merged = [
        {
          id: "default-1",
          name: "Follow-up Template",
          content: "<p>Hello, this is a follow-up email.</p>",
          isCustom: false,
        },
        ...savedTemplates
      ];

      setTemplates(merged);
    }

    const savedLogs = JSON.parse(localStorage.getItem("emailLogs") || "[]");
    if (savedLogs.length > 0) {
      setEmailLogs(savedLogs);
    }
  }, []);

  const resetEmailForm = () => {
    setFrom("");
    setSubject("");
    setToEmail("mpl1@gmail.com");
    setSelectedTemplate("");

    if (editorRef.current) {
      editorRef.current.setContent("");
    }
  };

  const handleAddNew = () => {
    setShowAddForm(true);
    setNewEmailField("");
  };

  const handleSaveNew = () => {
    if (!newEmailField.trim()) {
      alert("Please enter email details!");
      return;
    }
    
    // You can customize what happens when Save is clicked
    alert("Email details saved: " + newEmailField);
    setShowAddForm(false);
    setNewEmailField("");
  };

  const handleCancelNew = () => {
    setShowAddForm(false);
    setNewEmailField("");
  };

  const saveTemplate = () => {
    if (!editorRef.current) return;

    const html = editorRef.current.getContent().trim();
    if (!html || html === "<p></p>") {
      alert("Message is empty!");
      return;
    }

    const name = prompt("Enter Template Name:");
    if (!name) return;

    const newTemplate = {
      id: crypto.randomUUID(),
      name,
      content: html,
      isCustom: true,
      createdAt: new Date().toISOString(),
      visibility: "admin"
    };

    const existingTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");
    const updatedCustomTemplates = [newTemplate, ...existingTemplates];

    localStorage.setItem("emailTemplates", JSON.stringify(updatedCustomTemplates));

    const updatedAllTemplates = [
      {
        id: "default-1",
        name: "Follow-up Template",
        content: "<p>Hello, this is a follow-up email.</p>",
        isCustom: false,
      },
      ...updatedCustomTemplates
    ];
    setTemplates(updatedAllTemplates);

    alert("Template saved successfully!");
  };

  const applyTemplate = (id) => {
    setSelectedTemplate(id);

    const temp = templates.find((t) => t.id == id);
    if (temp && editorRef.current) {
      editorRef.current.setContent(temp.content);
    }
  };

  const sendEmail = () => {
    if (!editorRef.current) return;

    const message = editorRef.current.getContent();

    if (!message || message === "<p></p>" || message.trim() === "") {
      alert("Please write a message!");
      return;
    }

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
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-7xl mx-auto p-2 sm:p-4 md:p-6 lg:p-8">

        <div className="bg-white rounded-t-lg shadow-sm border-b border-gray-300 px-6 py-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-600">
              Activity <strong>history</strong>
            </h1>
          </div>
        </div>

        {/* Add New Email Popup */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] md:w-[430px] rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.3)] p-6">
              
              <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
                Add New Email
              </h3>

              <label className="block mb-2 text-sm text-gray-700">
                Email New Email
              </label>

              <input
                type="text"
                value={newEmailField}
                onChange={(e) => setNewEmailField(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded text-black mb-4"
                placeholder="Enter the email"
              />

              <div className="flex justify-end gap-3">
                <button
                  className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded"
                  onClick={handleCancelNew}
                >
                  Cancel
                </button>

                <button
                  className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded"
                  onClick={handleSaveNew}
                >
                  Save
                </button>
              </div>

            </div>
          </div>
        )}

        <div className="bg-white shadow-sm px-6 py-6">
          <div className="space-y-6 text-sm">

            <div>
              <div className="flex justify-between items-end gap-4">
                <div className="flex-1">
                  <label className="block mb-2 text-gray-700 font-medium">From</label>
                  <input
                    type="text"
                    className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
                    value={from}
                    placeholder="Enter From"
                    onChange={(e) => setFrom(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleAddNew}
                  className="bg-gray-500 text-white px-5 py-2.5 rounded hover:bg-gray-700 font-medium flex items-center gap-2"
                >
                  <span className="text-lg">+</span>
                  Add New
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">To</label>
              <input
                type="text"
                className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
                value={toEmail}
                onChange={(e) => setToEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">Subject</label>
              <input
                type="text"
                className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
                value={subject}
                placeholder="Enter subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">Reply with Template</label>

              <select
                className="border border-gray-300 w-full p-2.5 rounded-sm bg-white focus:ring-2 focus:ring-blue-500"
                value={selectedTemplate}
                onChange={(e) => applyTemplate(e.target.value)}
              >
                <option value="">Choose Template</option>

                {templates.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} {t.isCustom ? "" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">Message</label>

              <div className="border-2 border-gray-300 rounded overflow-hidden">
                <Editor
                  apiKey="y1s9k2719cryc4c4lhyef3rypkcz2oy6t9fno5q4ngbqts9o"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue="<p>Hello...</p>"
                  init={{
                    height: 300,
                    menubar: true,
                    plugins: ["advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace",
                      "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "help", "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks fontsize | bold italic forecolor backcolor | " +
                      "alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | " +
                      "table image media link | removeformat code preview fullscreen | help",
                    branding: false,
                  }}
                />
              </div>

              <button
                onClick={saveTemplate}
                className="mt-3 px-4 py-2 bg-blue-100 border border-blue-400 text-blue-700 rounded hover:bg-blue-200"
              >
                📄 Save as Template
              </button>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={sendEmail}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Send Email
              </button>

              <button
                onClick={resetEmailForm}
                className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-b-lg shadow-sm mt-1 mb-6">
          <div className="border-t-2 border-gray-300 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-700">Email Logs</h2>
          </div>

          <div className="px-6 pb-6">
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
                  <tr>
                    <td colSpan="4" className="py-8 text-center text-red-500 font-medium">
                      No Records
                    </td>
                  </tr>
                ) : (
                  emailLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="p-3 border-t">{log.to}</td>
                      <td className="p-3 border-t text-right">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                          {log.status}
                        </span>
                      </td>
                      <td className="p-3 border-t text-right">{log.date}</td>
                      <td className="p-3 border-t text-right">
                        <button
                          onClick={() => deleteEmailLog(log.id)}
                          className="text-red-500 hover:text-red-700 font-medium"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}