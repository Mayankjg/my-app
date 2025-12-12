"use client";

import { useState, useRef, useEffect } from "react";

const defaultTemplate = {
  id: "default-1",
  name: "Follow-up Template",
  content: "<p>Hello, this is a follow-up email.</p>",
  isCustom: false
};

export default function EmailSection() {
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [emailLogs, setEmailLogs] = useState([]);
  const [templates, setTemplates] = useState([defaultTemplate]);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [toEmail, setToEmail] = useState("mpl1@gmail.com");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEmailField, setNewEmailField] = useState("");

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
    loadTemplatesAndLogs();

    const handleStorageChange = (e) => {
      if (e.key === 'emailTemplates') {
        loadTemplatesAndLogs();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    const interval = setInterval(loadTemplatesAndLogs, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const loadTemplatesAndLogs = () => {
    try {
      const savedTemplatesRaw = localStorage.getItem("emailTemplates");
      let validTemplates = [];

      if (savedTemplatesRaw) {
        const parsed = JSON.parse(savedTemplatesRaw);
        if (Array.isArray(parsed)) {
          const seenIds = new Set();
          validTemplates = parsed.filter(t => {
            if (!t || typeof t !== 'object' || !t.id || !t.name) return false;
            if (seenIds.has(t.id)) return false;
            seenIds.add(t.id);
            return true;
          });
        }
      }

      setTemplates([defaultTemplate, ...validTemplates]);

      const savedLogsRaw = localStorage.getItem("emailLogs");
      let validLogs = [];

      if (savedLogsRaw) {
        const parsed = JSON.parse(savedLogsRaw);
        if (Array.isArray(parsed)) {
          const seenIds = new Set();
          validLogs = parsed.filter(log => {
            if (!log || typeof log !== 'object' || !log.id) return false;
            if (seenIds.has(log.id)) return false;
            seenIds.add(log.id);
            return true;
          });
        }
      }

      setEmailLogs(validLogs);
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
      setTemplates([defaultTemplate]);
      setEmailLogs([]);
    }
  };

  const resetEmailForm = () => {
    setFrom("");
    setSubject("");
    setToEmail("mpl1@gmail.com");
    setSelectedTemplate("");
    if (quillRef.current) {
      quillRef.current.setContents([]);
    }
  };

  const saveTemplate = () => {
    if (!quillRef.current) return;
    const html = quillRef.current.root.innerHTML.trim();
    if (!html || html === "<p><br></p>") {
      alert("Message is empty!");
      return;
    }

    const name = prompt("Enter Template Name:");
    if (!name || !name.trim()) return;

    const newTemplate = {
      id: crypto.randomUUID(),
      name: name.trim(),
      content: html,
      isCustom: true,
      createdAt: new Date().toISOString()
    };

    try {
      const existingTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");

      const seenIds = new Set();
      const validTemplates = existingTemplates.filter(t => {
        if (!t || !t.id) return false;
        if (seenIds.has(t.id)) return false;
        seenIds.add(t.id);
        return true;
      });

      const updatedTemplates = [newTemplate, ...validTemplates];

      localStorage.setItem("emailTemplates", JSON.stringify(updatedTemplates));
      setTemplates([defaultTemplate, ...updatedTemplates]);
      alert("Template saved successfully!");
    } catch (error) {
      console.error("Error saving template:", error);
      alert("Error saving template. Please try again.");
    }
  };

  const applyTemplate = (id) => {
    if (!id) {
      setSelectedTemplate("");
      return;
    }

    setSelectedTemplate(id);
    const temp = templates.find((t) => t.id === id);
    if (temp && quillRef.current) {
      quillRef.current.root.innerHTML = temp.content;
    }
  };

  const sendEmail = () => {
    if (!quillRef.current) return;
    const message = quillRef.current.root.innerHTML;
    const text = quillRef.current.getText().trim();

    if (!text || text === "") {
      alert("Please write a message!");
      return;
    }

    const newEmail = {
      id: crypto.randomUUID(),
      from: from || "(no sender)",
      to: toEmail,
      subject: subject || "(no subject)",
      message,
      status: "Sent",
      date: new Date().toLocaleString("en-GB"),
    };

    try {
      const updated = [newEmail, ...emailLogs];
      setEmailLogs(updated);
      localStorage.setItem("emailLogs", JSON.stringify(updated));
      resetEmailForm();
      alert("Email Sent Successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again.");
    }
  };

  const deleteEmailLog = (id) => {
    if (window.confirm("Are you sure you want to delete this email?")) {
      try {
        const updated = emailLogs.filter((log) => log.id !== id);
        setEmailLogs(updated);
        localStorage.setItem("emailLogs", JSON.stringify(updated));
      } catch (error) {
        console.error("Error deleting email:", error);
        alert("Error deleting email. Please try again.");
      }
    }
  };

  return (
    <div className="w-full bg-white">
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
        .ql-container {
          font-family: inherit;
        }

        .ql-tooltip {
          left: auto !important;
          right: 0 !important;
          transform: none !important;
  }
   `}</style>

      <div className="w-full">
        {showAddForm && (
          <div className="fixed inset-0 bg-black/60 flex items-start justify-center z-50 pt-10">
            <div className="bg-white w-[90%] md:w-[700px] rounded-lg shadow-xl p-6 relative animate-slideDown">
              <button onClick={() => setShowAddForm(false)} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700">×</button>

              <h3 className="text-lg font-semibold mb-2 text-gray-800 pb-1">
                Add and verify email address to send mail.
              </h3>

              <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded mb-3">
                Please check your mail After Click on verify button.
              </div>

              <div className="mb-3">
                <label className="block mb-2 text-sm text-gray-700 font-medium">Display Name</label>
                <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded text-black focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter display name" />
              </div>

              <div className="mb-3">
                <label className="block mb-2 text-sm text-gray-700 font-medium">Email</label>
                <input type="email" value={newEmailField} onChange={(e) => setNewEmailField(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded text-black focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email address" />
              </div>

              <div className="flex gap-3">
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium"
                  onClick={() => {
                    if (newEmailField.trim()) {
                      alert("Verification email sent to: " + newEmailField);
                      setShowAddForm(false);
                      setNewEmailField("");
                    } else {
                      alert("Please enter an email address");
                    }
                  }}>
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

        <div className="text-sm">
          <div className="flex justify-between items-end gap-4 mb-4">
            <div className="flex-1">
              <label className="block mb-2 text-gray-700 font-medium">From</label>
              <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100"
                value={from} placeholder="Enter From" onChange={(e) => setFrom(e.target.value)} />
            </div>
            <button onClick={() => setShowAddForm(true)}
              className="bg-gray-500 text-white px-5 py-2.5 rounded hover:bg-gray-700 font-medium flex items-center gap-2">
              Add More
            </button>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">To</label>
            <textarea
              className="border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100 resize"
              value={toEmail}
              onChange={(e) => setToEmail(e.target.value)}
              rows={2}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">Subject</label>
            <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100"
              value={subject} placeholder="Enter subject" onChange={(e) => setSubject(e.target.value)} />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">
              Reply with Template
              <span className="text-xs text-gray-500 ml-2">
                ({templates.length - 1} custom template{templates.length - 1 !== 1 ? 's' : ''} available)
              </span>
            </label>
            <select className="border border-gray-300 w-full p-2.5 rounded-sm bg-white hover:bg-gray-100"
              value={selectedTemplate} onChange={(e) => applyTemplate(e.target.value)}>
              <option value="">Choose Template</option>
              {templates && templates.length > 0 && templates.map((t) => {
                if (!t || !t.id) return null;
                return (
                  <option key={t.id} value={t.id}>
                    {t.isCustom ? '📝 ' : '📄 '}{t.name || 'Untitled Template'}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-medium">Message</label>
            <div className="border-2 border-gray-300 rounded overflow-auto resize">
              <div id="editor" style={{ minHeight: '150px', backgroundColor: 'white' }}></div>
            </div>
          </div>
          <button onClick={saveTemplate} className="mt-3 px-4 py-2 bg-blue-100 border border-blue-400 text-blue-700 rounded hover:bg-blue-200">
            📄 Save as Template
          </button>
        </div>

        <div className="flex gap-4 mt-4">
          <button onClick={sendEmail} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Email</button>
          <button onClick={resetEmailForm} className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100">Cancel</button>
        </div>

        <div className="border-t border-dashed border-gray-300 my-6"></div>

<h2 className="text-lg font-semibold text-gray-700 mb-4">Email Logs</h2>

<div className="hidden md:block">
  <table className="w-full text-sm border-collapse border border-gray-300">
    <thead>
      <tr className="bg-[#e5e7eb]">
        <th className="p-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300">TO</th>
        <th className="p-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300">STATUS</th>
        <th className="p-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300">DATE</th>
        <th className="p-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300">ACTION</th>
      </tr>
    </thead>
    <tbody className="bg-white">
      {emailLogs.length === 0 ? (
        <tr>
          <td colSpan="4" className="py-8 text-center text-red-500 font-medium border border-gray-300">
            No Records
          </td>
        </tr>
      ) : (
        emailLogs.map((log) => (
          <tr key={log.id} className="hover:bg-gray-50">
            <td className="p-3 text-gray-600 border border-gray-300">
              {log.to}
            </td>
            <td className="p-3 border border-gray-300">
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                {log.status}
              </span>
            </td>
            <td className="p-3 text-[#00a7cf] font-medium border border-gray-300">
              {log.date}
            </td>
            <td className="p-3 border border-gray-300">
              <button 
                onClick={() => deleteEmailLog(log.id)} 
                className="text-gray-500 hover:text-red-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>

<div className="md:hidden space-y-3">
  {emailLogs.length === 0 ? (
    <div className="py-8 text-center text-red-500 font-medium border border-gray-300 rounded">No Records</div>
  ) : (
    emailLogs.map((log) => (
      <div key={log.id} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
        <div className="space-y-3">
          <div>
            <div className="text-xs font-medium text-gray-500 mb-1 uppercase">To:</div>
            <div className="text-gray-600 text-sm break-all">{log.to}</div>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-500 mb-1 uppercase">Status:</div>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium whitespace-nowrap">
              {log.status}
            </span>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-500 mb-1 uppercase">Date:</div>
            <div className="text-[#00a7cf] text-sm font-medium">{log.date}</div>
          </div>
          <button 
            onClick={() => deleteEmailLog(log.id)}
            className="w-full bg-red-50 text-red-600 hover:bg-red-100 py-2.5 rounded-md font-medium text-sm border border-red-200 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Delete
          </button>
        </div>
      </div>
    ))
  )}
</div>
      </div>
    </div>
  );
}