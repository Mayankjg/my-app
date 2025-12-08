"use client";

import { useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export default function EmailSection() {
  const { quillRef, quill } = useQuill({
    theme: "snow",
    modules: {
      toolbar: [
        ["bold", "italic", "underline"],
        [{ size: [] }],
        [{ font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
    },
  });

  /* EMAIL LOGS */
  const [emailLogs, setEmailLogs] = useState(() => {
    const saved = localStorage.getItem("crm_email_logs");
    return saved ? JSON.parse(saved) : [];
  });

  /* EMAIL TEMPLATES */
  const [templates, setTemplates] = useState(() => {
    const saved = localStorage.getItem("crm_email_templates");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: "Follow-up Template",
            content: "<p>Hello, this is a follow-up email.</p>",
          },
        ];
  });

  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [subject, setSubject] = useState("");
  const [toEmail, setToEmail] = useState("mpl1@gmail.com");

  /* RESET EMAIL FORM */
  const resetEmailForm = () => {
    setSubject("");
    setToEmail("mpl1@gmail.com");
    setSelectedTemplate("");

    if (quill) {
      quill.root.innerHTML = "";
    }
  };

  /* SAVE TEMPLATE */
  const saveTemplate = () => {
    if (!quill) return;

    const html = quill.root.innerHTML.trim();
    if (!html || html === "<p><br></p>") {
      alert("Message is empty!");
      return;
    }

    const name = prompt("Enter Template Name:");
    if (!name) return;

    const newTemplate = {
      id: Date.now(),
      name,
      content: html,
    };

    const updated = [newTemplate, ...templates];
    setTemplates(updated);
    localStorage.setItem("crm_email_templates", JSON.stringify(updated));
  };

  /* APPLY TEMPLATE */
  const applyTemplate = (id) => {
    setSelectedTemplate(id);

    const temp = templates.find((t) => t.id == id);
    if (temp && quill) {
      quill.root.innerHTML = temp.content;
    }
  };

  /* SEND EMAIL */
  const sendEmail = () => {
    if (!quill) return;

    const message = quill.root.innerHTML;

    const newEmail = {
      id: Date.now(),
      to: toEmail,
      subject: subject || "(no subject)",
      message,
      status: "Sent",
      date: new Date().toLocaleString("en-GB"),
    };

    const updated = [newEmail, ...emailLogs];

    setEmailLogs(updated);
    localStorage.setItem("crm_email_logs", JSON.stringify(updated));

    resetEmailForm();
    alert("Email Sent Successfully!");
  };

  return (
    <div className="space-y-6 text-sm">
      {/* FROM */}
      <div>
        <label className="block mb-1 text-gray-700">From</label>
        <div className="flex flex-col sm:flex-row gap-3">
          <select className="border border-gray-300 w-full p-2 rounded-sm bg-white">
            <option>Select Email</option>
          </select>

          <button className="px-4 py-2 w-full sm:w-28 bg-[#d7dee3] border border-gray-300 rounded-sm">
            add more
          </button>
        </div>
      </div>

      {/* TO */}
      <div>
        <label className="block mb-1 text-gray-700">To</label>
        <input
          type="text"
          className="border border-gray-300 w-full p-2 rounded-sm"
          value={toEmail}
          onChange={(e) => setToEmail(e.target.value)}
        />
      </div>

      {/* SUBJECT */}
      <div>
        <label className="block mb-1 text-gray-700">Subject</label>
        <input
          type="text"
          className="border border-gray-300 w-full p-2 rounded-sm"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      {/* TEMPLATES */}
      <div>
        <label className="block mb-1 text-gray-700">Reply with Template</label>

        <select
          className="border border-gray-300 w-full p-2 rounded-sm"
          value={selectedTemplate}
          onChange={(e) => applyTemplate(e.target.value)}
        >
          <option value="">Choose Template</option>

          {templates.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>

      {/* MESSAGE EDITOR */}
      <div>
        <label className="block mb-1 text-gray-700">Message</label>

        <div className="border border-gray-300 rounded-sm">
          <div ref={quillRef} className="h-[300px] md:h-[350px]" />
        </div>

        <button
          onClick={saveTemplate}
          className="mt-3 px-4 py-2 bg-[#d0ecff] border border-blue-400 text-blue-700 rounded-sm"
        >
          📄 Save as a Template
        </button>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button
          onClick={sendEmail}
          className="bg-[#2fa4e7] text-white px-6 py-2 rounded w-full sm:w-32"
        >
          Send Email
        </button>

        {/* Cancel Button — Final */}
        <button
          onClick={resetEmailForm}
          className="border px-6 py-2 rounded text-gray-600 w-full sm:w-32"
        >
          Cancel
        </button>
      </div>

      {/* LOGS TABLE */}
      <div className="border-t border-dashed mt-6"></div>

      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm border border-gray-300 border-collapse">
          <thead>
            <tr className="bg-[#e8ecef]">
              <th className="p-3 border-b text-left">TO</th>
              <th className="p-3 border-b text-right">STATUS</th>
              <th className="p-3 border-b text-right">DATE</th>
              <th className="p-3 border-b text-right">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {emailLogs.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="py-4 text-center text-red-500 border-t text-[14px] font-medium"
                >
                  No Records
                </td>
              </tr>
            ) : (
              emailLogs.map((log) => (
                <tr key={log.id}>
                  <td className="p-3 border-t text-left">{log.to}</td>
                  <td className="p-3 border-t text-right">{log.status}</td>
                  <td className="p-3 border-t text-right">{log.date}</td>
                  <td className="p-3 border-t text-right text-red-500 cursor-pointer">
                    Delete
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
