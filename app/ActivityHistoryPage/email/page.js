// "use client";

// import { useState } from "react";
// import { useQuill } from "react-quilljs";
// import "quill/dist/quill.snow.css";

// export default function EmailSection() {
//   const { quillRef, quill } = useQuill({
//     theme: "snow",
//     modules: {
//       toolbar: [
//         ["bold", "italic", "underline"],
//         [{ size: [] }],
//         [{ font: [] }],
//         [{ list: "ordered" }, { list: "bullet" }],
//         ["link", "image"],
//         ["clean"],
//       ],
//     },
//   });

//   /* EMAIL LOGS */
//   const [emailLogs, setEmailLogs] = useState(() => {
//     const saved = localStorage.getItem("crm_email_logs");
//     return saved ? JSON.parse(saved) : [];
//   });

//   /* EMAIL TEMPLATES */
//   const [templates, setTemplates] = useState(() => {
//     const saved = localStorage.getItem("crm_email_templates");
//     return saved
//       ? JSON.parse(saved)
//       : [
//           {
//             id: 1,
//             name: "Follow-up Template",
//             content: "<p>Hello, this is a follow-up email.</p>",
//           },
//         ];
//   });

//   const [selectedTemplate, setSelectedTemplate] = useState("");
//   const [subject, setSubject] = useState("");
//   const [toEmail, setToEmail] = useState("mpl1@gmail.com");

//   /* RESET EMAIL FORM */
//   const resetEmailForm = () => {
//     setSubject("");
//     setToEmail("mpl1@gmail.com");
//     setSelectedTemplate("");

//     if (quill) {
//       quill.root.innerHTML = "";
//     }
//   };

//   /* SAVE TEMPLATE */
//   const saveTemplate = () => {
//     if (!quill) return;

//     const html = quill.root.innerHTML.trim();
//     if (!html || html === "<p><br></p>") {
//       alert("Message is empty!");
//       return;
//     }

//     const name = prompt("Enter Template Name:");
//     if (!name) return;

//     const newTemplate = {
//       id: Date.now(),
//       name,
//       content: html,
//     };

//     const updated = [newTemplate, ...templates];
//     setTemplates(updated);
//     localStorage.setItem("crm_email_templates", JSON.stringify(updated));
//   };

//   /* APPLY TEMPLATE */
//   const applyTemplate = (id) => {
//     setSelectedTemplate(id);

//     const temp = templates.find((t) => t.id == id);
//     if (temp && quill) {
//       quill.root.innerHTML = temp.content;
//     }
//   };

//   /* SEND EMAIL */
//   const sendEmail = () => {
//     if (!quill) return;

//     const message = quill.root.innerHTML;

//     const newEmail = {
//       id: Date.now(),
//       to: toEmail,
//       subject: subject || "(no subject)",
//       message,
//       status: "Sent",
//       date: new Date().toLocaleString("en-GB"),
//     };

//     const updated = [newEmail, ...emailLogs];

//     setEmailLogs(updated);
//     localStorage.setItem("crm_email_logs", JSON.stringify(updated));

//     resetEmailForm();
//     alert("Email Sent Successfully!");
//   };

//   return (
//     <div className="space-y-6 text-sm">
//       {/* FROM */}
//       <div>
//         <label className="block mb-1 text-gray-700">From</label>
//         <div className="flex flex-col sm:flex-row gap-3">
//           <select className="border border-gray-300 w-full p-2 rounded-sm bg-white">
//             <option>Select Email</option>
//           </select>

//           <button className="px-4 py-2 w-full sm:w-28 bg-[#d7dee3] border border-gray-300 rounded-sm">
//             add more
//           </button>
//         </div>
//       </div>

//       {/* TO */}
//       <div>
//         <label className="block mb-1 text-gray-700">To</label>
//         <input
//           type="text"
//           className="border border-gray-300 w-full p-2 rounded-sm"
//           value={toEmail}
//           onChange={(e) => setToEmail(e.target.value)}
//         />
//       </div>

//       {/* SUBJECT */}
//       <div>
//         <label className="block mb-1 text-gray-700">Subject</label>
//         <input
//           type="text"
//           className="border border-gray-300 w-full p-2 rounded-sm"
//           placeholder="Subject"
//           value={subject}
//           onChange={(e) => setSubject(e.target.value)}
//         />
//       </div>

//       {/* TEMPLATES */}
//       <div>
//         <label className="block mb-1 text-gray-700">Reply with Template</label>

//         <select
//           className="border border-gray-300 w-full p-2 rounded-sm"
//           value={selectedTemplate}
//           onChange={(e) => applyTemplate(e.target.value)}
//         >
//           <option value="">Choose Template</option>

//           {templates.map((t) => (
//             <option key={t.id} value={t.id}>
//               {t.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* MESSAGE EDITOR */}
//       <div>
//         <label className="block mb-1 text-gray-700">Message</label>

//         <div className="border border-gray-300 rounded-sm">
//           <div ref={quillRef} className="h-[300px] md:h-[350px]" />
//         </div>

//         <button
//           onClick={saveTemplate}
//           className="mt-3 px-4 py-2 bg-[#d0ecff] border border-blue-400 text-blue-700 rounded-sm"
//         >
//           📄 Save as a Template
//         </button>
//       </div>

//       {/* BUTTONS */}
//       <div className="flex flex-col sm:flex-row gap-3 mt-4">
//         <button
//           onClick={sendEmail}
//           className="bg-[#2fa4e7] text-white px-6 py-2 rounded w-full sm:w-32"
//         >
//           Send Email
//         </button>

//         {/* Cancel Button — Final */}
//         <button
//           onClick={resetEmailForm}
//           className="border px-6 py-2 rounded text-gray-600 w-full sm:w-32"
//         >
//           Cancel
//         </button>
//       </div>

//       {/* LOGS TABLE */}
//       <div className="border-t border-dashed mt-6"></div>

//       <div className="overflow-x-auto mt-4">
//         <table className="w-full text-sm border border-gray-300 border-collapse">
//           <thead>
//             <tr className="bg-[#e8ecef]">
//               <th className="p-3 border-b text-left">TO</th>
//               <th className="p-3 border-b text-right">STATUS</th>
//               <th className="p-3 border-b text-right">DATE</th>
//               <th className="p-3 border-b text-right">ACTION</th>
//             </tr>
//           </thead>

//           <tbody>
//             {emailLogs.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan="4"
//                   className="py-4 text-center text-red-500 border-t text-[14px] font-medium"
//                 >
//                   No Records
//                 </td>
//               </tr>
//             ) : (
//               emailLogs.map((log) => (
//                 <tr key={log.id}>
//                   <td className="p-3 border-t text-left">{log.to}</td>
//                   <td className="p-3 border-t text-right">{log.status}</td>
//                   <td className="p-3 border-t text-right">{log.date}</td>
//                   <td className="p-3 border-t text-right text-red-500 cursor-pointer">
//                     Delete
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState, useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function EmailSection() {
  const editorRef = useRef(null);

  /* EMAIL LOGS */
  const [emailLogs, setEmailLogs] = useState([]);

  /* EMAIL TEMPLATES */
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
  const [toEmail, setToEmail] = useState("mpl1@gmail.com");

  /* LOAD FROM LOCALSTORAGE */
  useEffect(() => {
    const savedTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");

    if (Array.isArray(savedTemplates) && savedTemplates.length > 0) {
      // only merge if ids are unique
      const merged = [...templates];

      savedTemplates.forEach((t) => {
        if (!merged.some((x) => x.id === t.id)) {
          merged.push(t);
        }
      });

      setTemplates(merged);
    }

    const savedLogs = JSON.parse(localStorage.getItem("emailLogs") || "[]");
    if (savedLogs.length > 0) {
      setEmailLogs(savedLogs);
    }
  }, []);

  /* RESET FORM */
  const resetEmailForm = () => {
    setSubject("");
    setToEmail("mpl1@gmail.com");
    setSelectedTemplate("");

    if (editorRef.current) {
      editorRef.current.setContent("");
    }
  };

  /* SAVE TEMPLATE */
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
      id: crypto.randomUUID(), // UNIQUE ID
      name,
      content: html,
      isCustom: true,
    };

    const updated = [newTemplate, ...templates];
    setTemplates(updated);

    // Save ONLY custom templates to localStorage
    const customTemplates = updated.filter((t) => t.isCustom === true);
    localStorage.setItem("emailTemplates", JSON.stringify(customTemplates));

    alert("Template saved successfully!");
  };

  /* APPLY TEMPLATE */
  const applyTemplate = (id) => {
    setSelectedTemplate(id);

    const temp = templates.find((t) => t.id == id);
    if (temp && editorRef.current) {
      editorRef.current.setContent(temp.content);
    }
  };

  /* SEND EMAIL */
  const sendEmail = () => {
    if (!editorRef.current) return;

    const message = editorRef.current.getContent();

    if (!message || message === "<p></p>" || message.trim() === "") {
      alert("Please write a message!");
      return;
    }

    const newEmail = {
      id: crypto.randomUUID(), // FIX duplicate ID
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

  /* DELETE EMAIL LOG */
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

        {/* HEADER */}
        <div className="bg-white rounded-t-lg shadow-sm border-b border-gray-300 px-6 py-5">
          <h1 className="text-2xl font-semibold text-gray-700">
            Email Manager
          </h1>
        </div>

        {/* FORM */}
        <div className="bg-white shadow-sm px-6 py-6">
          <div className="space-y-6 text-sm">

            {/* TO */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">To</label>
              <input
                type="text"
                className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
                value={toEmail}
                onChange={(e) => setToEmail(e.target.value)}
              />
            </div>

            {/* SUBJECT */}
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

            {/* TEMPLATES */}
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
                    {t.name} {t.isCustom ? "⭐" : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* EDITOR */}
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
                    plugins: ["advlist","autolink","lists","link","image","charmap","preview","anchor","searchreplace",
                              "visualblocks","code","fullscreen","insertdatetime","media","table","help","wordcount",
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

            {/* BUTTONS */}
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

        {/* EMAIL LOGS SECTION */}
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
