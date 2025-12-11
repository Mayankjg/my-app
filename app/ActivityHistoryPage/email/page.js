// "use client";

// import { useState, useRef, useEffect } from "react";
// import { Editor } from "@tinymce/tinymce-react";

// const defaultTemplate = { 
//   id: "default-1", 
//   name: "Follow-up Template", 
//   content: "<p>Hello, this is a follow-up email.</p>", 
//   isCustom: false 
// };

// export default function EmailSection() {
//   const editorRef = useRef(null);
//   const [emailLogs, setEmailLogs] = useState([]);
//   const [templates, setTemplates] = useState([defaultTemplate]);
//   const [selectedTemplate, setSelectedTemplate] = useState("");
//   const [subject, setSubject] = useState("");
//   const [from, setFrom] = useState("");
//   const [toEmail, setToEmail] = useState("mpl1@gmail.com");
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [newEmailField, setNewEmailField] = useState("");

//   useEffect(() => {
//     try {
//       const savedTemplatesRaw = localStorage.getItem("emailTemplates");
//       let validTemplates = [];
      
//       if (savedTemplatesRaw) {
//         const parsed = JSON.parse(savedTemplatesRaw);
//         if (Array.isArray(parsed)) {
//           // Remove duplicates based on ID
//           const seenIds = new Set();
//           validTemplates = parsed.filter(t => {
//             if (!t || typeof t !== 'object' || !t.id || !t.name) return false;
//             if (seenIds.has(t.id)) return false;
//             seenIds.add(t.id);
//             return true;
//           });
//         }
//       }
      
//       // Save cleaned data back
//       localStorage.setItem("emailTemplates", JSON.stringify(validTemplates));
//       setTemplates([defaultTemplate, ...validTemplates]);
      
//       const savedLogsRaw = localStorage.getItem("emailLogs");
//       let validLogs = [];
      
//       if (savedLogsRaw) {
//         const parsed = JSON.parse(savedLogsRaw);
//         if (Array.isArray(parsed)) {
//           // Remove duplicates based on ID
//           const seenIds = new Set();
//           validLogs = parsed.filter(log => {
//             if (!log || typeof log !== 'object' || !log.id) return false;
//             if (seenIds.has(log.id)) return false;
//             seenIds.add(log.id);
//             return true;
//           });
//         }
//       }
      
//       localStorage.setItem("emailLogs", JSON.stringify(validLogs));
//       setEmailLogs(validLogs);
//     } catch (error) {
//       console.error("Error loading data from localStorage:", error);
//       // Clear corrupted data
//       localStorage.removeItem("emailTemplates");
//       localStorage.removeItem("emailLogs");
//       setTemplates([defaultTemplate]);
//       setEmailLogs([]);
//     }
//   }, []);

//   const resetEmailForm = () => {
//     setFrom("");
//     setSubject("");
//     setToEmail("mpl1@gmail.com");
//     setSelectedTemplate("");
//     if (editorRef.current) {
//       editorRef.current.setContent("");
//     }
//   };

//   const saveTemplate = () => {
//     if (!editorRef.current) return;
//     const html = editorRef.current.getContent().trim();
//     if (!html || html === "<p></p>") {
//       alert("Message is empty!");
//       return;
//     }
    
//     const name = prompt("Enter Template Name:");
//     if (!name || !name.trim()) return;

//     const newTemplate = { 
//       id: crypto.randomUUID(), 
//       name: name.trim(), 
//       content: html, 
//       isCustom: true,
//       createdAt: new Date().toISOString()
//     };
    
//     try {
//       const existingTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");
      
//       // Remove duplicates
//       const seenIds = new Set();
//       const validTemplates = existingTemplates.filter(t => {
//         if (!t || !t.id) return false;
//         if (seenIds.has(t.id)) return false;
//         seenIds.add(t.id);
//         return true;
//       });
      
//       const updatedTemplates = [newTemplate, ...validTemplates];
      
//       localStorage.setItem("emailTemplates", JSON.stringify(updatedTemplates));
//       setTemplates([defaultTemplate, ...updatedTemplates]);
//       alert("Template saved successfully!");
//     } catch (error) {
//       console.error("Error saving template:", error);
//       alert("Error saving template. Please try again.");
//     }
//   };

//   const applyTemplate = (id) => {
//     if (!id) {
//       setSelectedTemplate("");
//       return;
//     }
    
//     setSelectedTemplate(id);
//     const temp = templates.find((t) => t.id === id);
//     if (temp && editorRef.current) {
//       editorRef.current.setContent(temp.content);
//     }
//   };

//   const sendEmail = () => {
//     if (!editorRef.current) return;
//     const message = editorRef.current.getContent();
//     if (!message || message === "<p></p>" || message.trim() === "") {
//       alert("Please write a message!");
//       return;
//     }

//     const newEmail = {
//       id: crypto.randomUUID(),
//       from: from || "(no sender)",
//       to: toEmail,
//       subject: subject || "(no subject)",
//       message,
//       status: "Sent",
//       date: new Date().toLocaleString("en-GB"),
//     };

//     try {
//       const updated = [newEmail, ...emailLogs];
//       setEmailLogs(updated);
//       localStorage.setItem("emailLogs", JSON.stringify(updated));
//       resetEmailForm();
//       alert("Email Sent Successfully!");
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Error sending email. Please try again.");
//     }
//   };

//   const deleteEmailLog = (id) => {
//     if (window.confirm("Are you sure you want to delete this email?")) {
//       try {
//         const updated = emailLogs.filter((log) => log.id !== id);
//         setEmailLogs(updated);
//         localStorage.setItem("emailLogs", JSON.stringify(updated));
//       } catch (error) {
//         console.error("Error deleting email:", error);
//         alert("Error deleting email. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-gray-50 overflow-y-auto pb-20">
//       <style>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }
//       `}</style>
//       <div className="w-full max-w-7xl mx-auto p-2 sm:p-4 md:p-6 lg:p-8 pb-20">

//         <div className="bg-white rounded-t-lg shadow-sm border-b border-gray-300 px-6 py-3">
//           <h1 className="text-xl font-semibold text-gray-600">Activity <strong>history</strong></h1>
//         </div>

//         {showAddForm && (
//           <div className="fixed inset-0 bg-black/30 flex items-start justify-center z-50 pt-20 overflow-y-auto">
//             <div className="bg-white w-[90%] md:w-[500px] rounded-lg shadow-xl p-6 relative animate-slideDown">
//               <button onClick={() => setShowAddForm(false)} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700">×</button>
              
//               <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-3">
//                 Add and verify email address to send mail.
//               </h3>

//               <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded mb-4">
//                 Please check your mail After Click on verify button.
//               </div>

//               <div className="mb-4">
//                 <label className="block mb-2 text-sm text-gray-700 font-medium">Display Name</label>
//                 <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded text-black focus:ring-2 focus:ring-blue-500" 
//                   placeholder="Enter display name" />
//               </div>

//               <div className="mb-6">
//                 <label className="block mb-2 text-sm text-gray-700 font-medium">Email</label>
//                 <input type="email" value={newEmailField} onChange={(e) => setNewEmailField(e.target.value)}
//                   className="w-full border border-gray-300 px-3 py-2 rounded text-black focus:ring-2 focus:ring-blue-500" 
//                   placeholder="Enter email address" />
//               </div>

//               <div className="flex gap-3">
//                 <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium" 
//                   onClick={() => { 
//                     if (newEmailField.trim()) {
//                       alert("Verification email sent to: " + newEmailField); 
//                       setShowAddForm(false); 
//                       setNewEmailField(""); 
//                     } else {
//                       alert("Please enter an email address");
//                     }
//                   }}>
//                   verify
//                 </button>
//                 <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded font-medium" 
//                   onClick={() => { setShowAddForm(false); setNewEmailField(""); }}>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="bg-white shadow-sm px-4 sm:px-6 py-4 rounded-b-lg mb-20">
//           <div className="space-y-4 text-sm">

//             <div className="flex justify-between items-end gap-4">
//               <div className="flex-1">
//                 <label className="block mb-2 text-gray-700 font-medium">From</label>
//                 <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
//                   value={from} placeholder="Enter From" onChange={(e) => setFrom(e.target.value)} />
//               </div>
//               <button onClick={() => setShowAddForm(true)}
//                 className="bg-gray-500 text-white px-5 py-2.5 rounded hover:bg-gray-700 font-medium flex items-center gap-2">
//                 Add More
//               </button>
//             </div>

//             <div>
//               <label className="block mb-2 text-gray-700 font-medium">To</label>
//               <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
//                 value={toEmail} onChange={(e) => setToEmail(e.target.value)} />
//             </div>

//             <div>
//               <label className="block mb-2 text-gray-700 font-medium">Subject</label>
//               <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
//                 value={subject} placeholder="Enter subject" onChange={(e) => setSubject(e.target.value)} />
//             </div>

//             <div>
//               <label className="block mb-2 text-gray-700 font-medium">Reply with Template</label>
//               <select className="border border-gray-300 w-full p-2.5 rounded-sm bg-white focus:ring-2 focus:ring-blue-500"
//                 value={selectedTemplate} onChange={(e) => applyTemplate(e.target.value)}>
//                 <option value="">Choose Template</option>
//                 {templates && templates.length > 0 && templates.map((t) => {
//                   if (!t || !t.id) return null;
//                   return (
//                     <option key={t.id} value={t.id}>
//                       {t.name || 'Untitled Template'}
//                     </option>
//                   );
//                 })}
//               </select>
//             </div>

//             <div>
//               <label className="block mb-2 text-gray-700 font-medium">Message</label>
//               <div className="border-2 border-gray-300 rounded overflow-hidden">
//                 <Editor apiKey="y1s9k2719cryc4c4lhyef3rypkcz2oy6t9fno5q4ngbqts9o"
//                   onInit={(evt, editor) => (editorRef.current = editor)} initialValue="<p>Hello...</p>"
//                   init={{
//                     height: 250, menubar: true,
//                     plugins: ["advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace",
//                       "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "help", "wordcount"],
//                     toolbar: "undo redo | blocks fontsize | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table image media link | removeformat code preview fullscreen | help",
//                     branding: false,
//                   }}
//                 />
//               </div>
//               <button onClick={saveTemplate} className="mt-3 px-4 py-2 bg-blue-100 border border-blue-400 text-blue-700 rounded hover:bg-blue-200">
//                 📄 Save as Template
//               </button>
//             </div>

//             <div className="flex gap-4 mt-4">
//               <button onClick={sendEmail} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Email</button>
//               <button onClick={resetEmailForm} className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100">Cancel</button>
//             </div>
//           </div>

//           <div className="border-t-2 border-gray-300 px-0 py-4 mt-6 pb-4">
//             <h2 className="text-lg font-semibold text-gray-700 mb-4">Email Logs</h2>
            
//             <div className="hidden md:block overflow-x-auto">
//               <table className="w-full text-sm border border-gray-300">
//                 <thead>
//                   <tr className="bg-gray-200">
//                     <th className="p-3 border-b text-left">TO</th>
//                     <th className="p-3 border-b text-right">STATUS</th>
//                     <th className="p-3 border-b text-right">DATE</th>
//                     <th className="p-3 border-b text-right">ACTION</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {emailLogs.length === 0 ? (
//                     <tr><td colSpan="4" className="py-8 text-center text-red-500 font-medium">No Records</td></tr>
//                   ) : (
//                     emailLogs.map((log) => (
//                       <tr key={log.id} className="hover:bg-gray-50">
//                         <td className="p-3 border-t">{log.to}</td>
//                         <td className="p-3 border-t text-right">
//                           <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">{log.status}</span>
//                         </td>
//                         <td className="p-3 border-t text-right">{log.date}</td>
//                         <td className="p-3 border-t text-right">
//                           <button onClick={() => deleteEmailLog(log.id)} className="text-red-500 hover:text-red-700 font-medium">Delete</button>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             <div className="md:hidden space-y-3 pb-4">
//               {emailLogs.length === 0 ? (
//                 <div className="py-8 text-center text-red-500 font-medium border border-gray-300 rounded">No Records</div>
//               ) : (
//                 emailLogs.map((log) => (
//                   <div key={log.id} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
//                     <div className="space-y-3">
//                       <div className="flex justify-between items-start gap-3">
//                         <div className="flex-1 min-w-0">
//                           <div className="text-xs font-medium text-gray-500 mb-1">To:</div>
//                           <div className="font-medium text-gray-800 break-all text-sm">{log.to}</div>
//                         </div>
//                         <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium whitespace-nowrap">{log.status}</span>
//                       </div>
//                       <div>
//                         <div className="text-xs font-medium text-gray-500 mb-1">Date:</div>
//                         <div className="text-sm text-gray-700">{log.date}</div>
//                       </div>
//                       <button onClick={() => deleteEmailLog(log.id)}
//                         className="w-full bg-red-50 text-red-600 hover:bg-red-100 py-2.5 rounded-md font-medium text-sm border border-red-200">
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

const WEB3FORMS_ACCESS_KEY = "237007c8-0a72-4c38-98bf-2500eb92b9b9";

const defaultTemplate = { 
  id: "default-1", 
  name: "Follow-up Template", 
  content: "<p>Hello, this is a follow-up email.</p>", 
  isCustom: false 
};

export default function EmailSection() {
  const editorRef = useRef(null);
  const [emailLogs, setEmailLogs] = useState([]);
  const [templates, setTemplates] = useState([defaultTemplate]);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [toEmail, setToEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
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
      
      localStorage.setItem("emailTemplates", JSON.stringify(validTemplates));
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
      
      localStorage.setItem("emailLogs", JSON.stringify(validLogs));
      setEmailLogs(validLogs);
    } catch (error) {
      console.error("Error loading data:", error);
      localStorage.removeItem("emailTemplates");
      localStorage.removeItem("emailLogs");
      setTemplates([defaultTemplate]);
      setEmailLogs([]);
    }
  }, []);

  const resetEmailForm = () => {
    setFrom("");
    setSubject("");
    setToEmail("");
    setSelectedTemplate("");
    if (editorRef.current) {
      editorRef.current.setContent("");
    }
  };

  const saveTemplate = () => {
    if (!editorRef.current) return;
    const html = editorRef.current.getContent().trim();
    if (!html || html === "<p></p>") {
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
    if (temp && editorRef.current) {
      editorRef.current.setContent(temp.content);
    }
  };

  const sendEmail = async () => {
    if (!editorRef.current) return;
    const message = editorRef.current.getContent();
    
    // Validation
    if (!message || message === "<p></p>" || message.trim() === "") {
      alert("⚠️ Please write a message!");
      return;
    }
    
    if (!from || from.trim() === "") {
      alert("⚠️ Please enter sender email (From field)!");
      return;
    }
    
    if (!toEmail || toEmail.trim() === "") {
      alert("⚠️ Please enter recipient email (To field)!");
      return;
    }
    
    if (!subject || subject.trim() === "") {
      alert("⚠️ Please enter email subject!");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from)) {
      alert("⚠️ Please enter a valid sender email address!");
      return;
    }
    
    if (!emailRegex.test(toEmail)) {
      alert("⚠️ Please enter a valid recipient email address!");
      return;
    }

    // Check API key
    if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      alert("⚠️ Please add your Web3Forms API key first!\n\nVisit https://web3forms.com to get free API key.");
      return;
    }

    setIsSending(true);

    try {
      // Strip HTML tags for plain text version
      const plainText = message.replace(/<[^>]*>/g, '');

      // Send email using Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: from,
          email: from,
          subject: subject,
          message: `To: ${toEmail}\n\nSubject: ${subject}\n\n${plainText}`,
        })
      });

      const result = await response.json();

      if (result.success) {
        console.log("Email sent successfully:", result);

        // Save to logs
        const newEmail = {
          id: crypto.randomUUID(),
          from: from,
          to: toEmail,
          subject: subject,
          message,
          status: "Sent",
          date: new Date().toLocaleString("en-GB"),
        };

        const updated = [newEmail, ...emailLogs];
        setEmailLogs(updated);
        localStorage.setItem("emailLogs", JSON.stringify(updated));
        
        resetEmailForm();
        alert("✅ Email sent successfully!");
      } else {
        throw new Error(result.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      alert(`❌ Failed to send email: ${error.message}\n\nPlease check:\n1. Your API key is correct\n2. Internet connection is working\n3. Email addresses are valid`);
    } finally {
      setIsSending(false);
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
          <h1 className="text-xl font-semibold text-gray-600">
            Activity <strong> history</strong>
          </h1>
        </div>

        {/* Configuration Notice */}
        {WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE" && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white shadow-sm px-4 sm:px-6 py-4 rounded-b-lg mb-20">
          <div className="space-y-4 text-sm">

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                From (Your Email) <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
                value={from} 
                placeholder="your-email@gmail.com" 
                onChange={(e) => setFrom(e.target.value)} 
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                To (Recipient Email) <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
                value={toEmail} 
                placeholder="recipient@gmail.com"
                onChange={(e) => setToEmail(e.target.value)} 
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Subject <span className="text-red-500">*</span>
              </label>
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
                {templates && templates.length > 0 && templates.map((t) => {
                  if (!t || !t.id) return null;
                  return (
                    <option key={t.id} value={t.id}>
                      {t.name || 'Untitled Template'}
                    </option>
                  );
                })}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-gray-300 rounded overflow-hidden">
                <Editor 
                  apiKey="y1s9k2719cryc4c4lhyef3rypkcz2oy6t9fno5q4ngbqts9o"
                  onInit={(evt, editor) => (editorRef.current = editor)} 
                  initialValue="<p>Hello...</p>"
                  init={{
                    height: 250, 
                    menubar: true,
                    plugins: ["advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace",
                      "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "help", "wordcount"],
                    toolbar: "undo redo | blocks fontsize | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table image media link | removeformat code preview fullscreen | help",
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

            <div className="flex gap-4 mt-4">
              <button 
                onClick={sendEmail} 
                disabled={isSending}
                className={`px-6 py-2 rounded font-medium ${
                  isSending
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isSending ? "Sending..." : "📧 Send Real Email"}
              </button>
              <button 
                onClick={resetEmailForm} 
                className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>

          <div className="border-t-2 border-gray-300 px-0 py-4 mt-6 pb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Email Logs</h2>
            
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3 border-b text-left">FROM</th>
                    <th className="p-3 border-b text-left">TO</th>
                    <th className="p-3 border-b text-left">SUBJECT</th>
                    <th className="p-3 border-b text-right">STATUS</th>
                    <th className="p-3 border-b text-right">DATE</th>
                    <th className="p-3 border-b text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {emailLogs.length === 0 ? (
                    <tr><td colSpan="6" className="py-8 text-center text-red-500 font-medium">No Records</td></tr>
                  ) : (
                    emailLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-gray-50">
                        <td className="p-3 border-t">{log.from}</td>
                        <td className="p-3 border-t">{log.to}</td>
                        <td className="p-3 border-t">{log.subject}</td>
                        <td className="p-3 border-t text-right">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">{log.status}</span>
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

            <div className="md:hidden space-y-3 pb-4">
              {emailLogs.length === 0 ? (
                <div className="py-8 text-center text-red-500 font-medium border border-gray-300 rounded">No Records</div>
              ) : (
                emailLogs.map((log) => (
                  <div key={log.id} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-medium text-gray-500 mb-1">From:</div>
                        <div className="font-medium text-gray-800 break-all text-sm">{log.from}</div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500 mb-1">To:</div>
                        <div className="font-medium text-gray-800 break-all text-sm">{log.to}</div>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-500 mb-1">Subject:</div>
                        <div className="text-sm text-gray-700">{log.subject}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">{log.status}</span>
                        <div className="text-xs text-gray-500">{log.date}</div>
                      </div>
                      <button 
                        onClick={() => deleteEmailLog(log.id)}
                        className="w-full bg-red-50 text-red-600 hover:bg-red-100 py-2.5 rounded-md font-medium text-sm border border-red-200"
                      >
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