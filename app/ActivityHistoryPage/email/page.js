"use client";

import { useState, useRef, useEffect } from "react";
import { Trash2 } from "lucide-react";

const defaultTemplate = {
  id: "default-1",
  name: "Follow-up Template",
  content: "<p>Hello, this is a follow-up email.</p>",
  isCustom: false
};

export default function EmailSection() {
  const quillRef = useRef(null);
  const [emailLogs, setEmailLogs] = useState([]);
  const [templates, setTemplates] = useState([defaultTemplate]);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [toEmail, setToEmail] = useState("mpl1@gmail.com");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showTemplateForm, setShowTemplateForm] = useState(false);
  const [newEmailField, setNewEmailField] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [templateVisibility, setTemplateVisibility] = useState("admin");

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://cdn.quilljs.com/1.3.6/quill.js';
    script.onload = () => {
      if (window.Quill && !quillRef.current) {
        quillRef.current = new window.Quill('#editor', {
          theme: 'snow',
          placeholder: 'Write your message here...',
          modules: {
            toolbar: [
              [{ 'font': [] }, { 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }, { 'align': [] }],
              ['blockquote', 'code-block'],
              ['link', 'image', 'video', 'formula'],
              ['clean']
            ]
          }
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const loadData = () => {
      try {
        const savedTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");
        setTemplates([defaultTemplate, ...savedTemplates.filter(t => t?.id && t?.name)]);
        const savedLogs = JSON.parse(localStorage.getItem("emailLogs") || "[]");
        setEmailLogs(savedLogs.filter(log => log?.id));
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    loadData();
    const interval = setInterval(loadData, 1000);
    return () => clearInterval(interval);
  }, []);

  const resetForm = () => {
    setFrom("");
    setSubject("");
    setToEmail("mpl1@gmail.com");
    setSelectedTemplate("");
    if (quillRef.current) quillRef.current.setContents([]);
  };

  const openTemplateModal = () => {
    if (!quillRef.current) return;
    const html = quillRef.current.root.innerHTML.trim();
    if (!html || html === "<p><br></p>") return alert("Message is empty!");
    setShowTemplateForm(true);
  };

  const saveTemplate = () => {
    if (!templateName.trim()) return alert("Please enter a template name!");
    if (!quillRef.current) return;
    const newTemplate = {
      id: crypto.randomUUID(),
      name: templateName.trim(),
      content: quillRef.current.root.innerHTML.trim(),
      isCustom: true,
      visibility: templateVisibility,
      createdAt: new Date().toISOString()
    };
    try {
      const existing = JSON.parse(localStorage.getItem("emailTemplates") || "[]");
      const updated = [newTemplate, ...existing.filter(t => t?.id)];
      localStorage.setItem("emailTemplates", JSON.stringify(updated));
      setTemplates([defaultTemplate, ...updated]);
      setTemplateName("");
      setTemplateVisibility("admin");
      setShowTemplateForm(false);
      alert("Template saved successfully!");
    } catch (error) {
      alert("Error saving template.");
    }
  };

  const applyTemplate = (id) => {
    if (!id) return setSelectedTemplate("");
    setSelectedTemplate(id);
    const temp = templates.find(t => t.id === id);
    if (temp && quillRef.current) quillRef.current.root.innerHTML = temp.content;
  };

  const sendEmail = () => {
    if (!quillRef.current) return;
    if (!quillRef.current.getText().trim()) return alert("Please write a message!");
    const newEmail = {
      id: crypto.randomUUID(),
      from: from || "(no sender)",
      to: toEmail,
      subject: subject || "(no subject)",
      message: quillRef.current.root.innerHTML,
      status: "Sent",
      date: new Date().toLocaleString("en-GB"),
    };
    try {
      const updated = [newEmail, ...emailLogs];
      setEmailLogs(updated);
      localStorage.setItem("emailLogs", JSON.stringify(updated));
      resetForm();
      alert("Email Sent Successfully!");
    } catch (error) {
      alert("Error sending email.");
    }
  };

  const deleteLog = (id) => {
    if (window.confirm("Delete this email?")) {
      const updated = emailLogs.filter(log => log.id !== id);
      setEmailLogs(updated);
      localStorage.setItem("emailLogs", JSON.stringify(updated));
    }
  };

  return (
    <div className="w-full bg-white">
      <style>{`
        @keyframes slideDown { from { opacity: 0; transform: translateY(-50px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        .ql-container { font-family: inherit; }
        .ql-tooltip { left: auto !important; right: 0 !important; transform: none !important; }
      `}</style>

      {showAddForm && (
        <div className="fixed inset-0 bg-black/60 flex items-start justify-center z-50 pt-10">
          <div className="bg-white w-[90%] md:w-[700px] rounded-lg shadow-xl p-6 relative animate-slideDown">
            <button onClick={() => setShowAddForm(false)} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700">×</button>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Add and verify email address to send mail.</h3>
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded mb-3">Please check your mail After Click on verify button.</div>
            <div className="mb-3"><label className="block mb-2 text-sm text-gray-700 font-medium">Display Name</label>
              <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded" placeholder="Enter display name" /></div>
            <div className="mb-3"><label className="block mb-2 text-sm text-gray-700 font-medium">Email</label>
              <input type="email" value={newEmailField} onChange={(e) => setNewEmailField(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded" placeholder="Enter email address" /></div>
            <div className="flex gap-3">
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium" onClick={() => {
                if (newEmailField.trim()) {
                  alert("Verification sent to: " + newEmailField);
                  setShowAddForm(false); setNewEmailField("");
                } else alert("Enter email");
              }}>Verify</button>
              <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded font-medium" onClick={() => { setShowAddForm(false); setNewEmailField(""); }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showTemplateForm && (
        <div className="fixed inset-0 bg-black/60 flex items-start justify-center z-50 pt-10">
          <div className="bg-white w-[90%] md:w-[800px] rounded-lg shadow-xl p-6 relative animate-slideDown">
            <button onClick={() => { setShowTemplateForm(false); setTemplateName(""); setTemplateVisibility("admin"); }} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700">×</button>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Save as template</h3>
            <div className="mb-4"><label className="block mb-2 text-sm text-gray-700 font-medium">Template Name</label>
              <input type="text" value={templateName} onChange={(e) => setTemplateName(e.target.value)} className="w-full border border-gray-300 px-3 py-2 rounded" placeholder="Enter template name" /></div>
            <div className="mb-4"><label className="block mb-2 text-sm text-gray-700 font-medium">Template</label>
              <div className="border border-gray-300 rounded p-3 bg-gray-50 max-h-[200px] overflow-y-auto"><div dangerouslySetInnerHTML={{ __html: quillRef.current?.root.innerHTML || '' }} /></div></div>
            <div className="mb-6"><div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="visibility" value="admin" checked={templateVisibility === "admin"}
                onChange={(e) => setTemplateVisibility(e.target.value)} className="w-4 h-4 text-cyan-500" />
                <span className="text-sm text-gray-700">Visible To Admin</span></label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="visibility" value="all" checked={templateVisibility === "all"}
                onChange={(e) => setTemplateVisibility(e.target.value)} className="w-4 h-4 text-cyan-500" />
                <span className="text-sm text-gray-700">Visible To All</span></label>
            </div></div>
            <div className="flex gap-3">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded font-medium" onClick={saveTemplate}>Save Template</button>
              <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded font-medium"
                onClick={() => { setShowTemplateForm(false); setTemplateName(""); setTemplateVisibility("admin"); }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="text-sm">
        <div className="flex justify-between items-end gap-4 mb-4">
          <div className="flex-1"><label className="block mb-2 text-gray-700 font-medium">From</label>
            <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100" value={from} placeholder="Enter From" onChange={(e) => setFrom(e.target.value)} /></div>
          <button onClick={() => setShowAddForm(true)} className="bg-gray-500 text-white px-5 py-2.5 rounded hover:bg-gray-700 font-medium">Add More</button>
        </div>
        <div className="mb-4"><label className="block mb-2 text-gray-700 font-medium">To</label>
          <textarea className="border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100 resize" value={toEmail} onChange={(e) => setToEmail(e.target.value)} rows={2} /></div>
        <div className="mb-4"><label className="block mb-2 text-gray-700 font-medium">Subject</label>
          <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100" value={subject} placeholder="Enter subject" onChange={(e) => setSubject(e.target.value)} /></div>
        <div className="mb-4"><label className="block mb-2 text-gray-700 font-medium">Reply with Template</label>
          <select className="border border-gray-300 w-full p-2.5 rounded-sm bg-white hover:bg-gray-100" value={selectedTemplate} onChange={(e) => applyTemplate(e.target.value)}>
            <option value="">Choose Template</option>
            {templates.map(t => t?.id && <option key={t.id} value={t.id}>{t.isCustom ? '📝 ' : '📄 '}{t.name}</option>)}
          </select></div>
        <div className="mb-4"><label className="block mb-2 text-gray-700 font-medium">Message</label>
          <div className="border-2 border-gray-300 rounded overflow-auto resize"><div id="editor" style={{ minHeight: '150px', backgroundColor: 'white' }}></div></div></div>
        <button onClick={openTemplateModal} className="mt-3 px-4 py-2 bg-blue-100 border border-blue-400 text-blue-700 rounded hover:bg-blue-200">📄 Save as Template</button>
      </div>

      <div className="flex gap-4 mt-4">
        <button onClick={sendEmail} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Email</button>
        <button onClick={resetForm} className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100">Cancel</button>
      </div>

      <div className="border-t border-dashed border-gray-300 my-6"></div>
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full text-sm border-collapse border border-gray-300">
          <thead><tr className="bg-[#e8eef2]">
            <th className="px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300">TO</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300">STATUS</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300">DATE</th>
            <th className="px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300">ACTION</th>
          </tr></thead>
          <tbody>
            {emailLogs.length === 0 ? (<tr><td colSpan="4" className="py-8 text-center text-red-500 font-medium border border-gray-300">No Records</td></tr>) : (
              emailLogs.map(log => (<tr key={log.id} className="bg-white">
                <td className="px-4 py-4 text-gray-600 border border-gray-300">{log.to}</td>
                <td className="px-4 py-4 border border-gray-300"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">{log.status}</span></td>
                <td className="px-4 py-4 text-[#00bcd4] font-medium border border-gray-300">{log.date}</td>
                <td className="px-4 py-4 border border-gray-300"><button onClick={() => deleteLog(log.id)} className="text-gray-500 hover:text-gray-700 transition"><Trash2 className="w-5 h-5" /></button></td>
              </tr>))
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-3">
        {emailLogs.length === 0 ? (<div className="py-8 text-center text-red-500 font-medium border border-gray-300 rounded">No Records</div>) : (
          emailLogs.map(log => (<div key={log.id} className="border border-gray-300 bg-white rounded-lg overflow-hidden">
            <div className="border-b border-gray-200 p-4 text-sm text-gray-600">{log.to}</div>
            <div className="border-b border-gray-200 p-4 text-sm"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs inline-block">{log.status}</span></div>
            <div className="border-b border-gray-200 p-4 text-sm font-semibold text-[#00bcd4]">{log.date}</div>
            <div className="p-4 flex justify-start"><button className="text-gray-500 hover:text-gray-700" onClick={() => deleteLog(log.id)}><Trash2 className="w-5 h-5" /></button></div>
          </div>))
        )}
      </div>
    </div>
  );
}