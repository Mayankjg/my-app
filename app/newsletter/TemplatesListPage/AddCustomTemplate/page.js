"use client";

import React, { useState, useRef, useEffect } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from "next/navigation";

export default function AddCustomTemplatePage() {
  const [templateName, setTemplateName] = useState("");
  const [visibility, setVisibility] = useState("admin");
  const [showPreview, setShowPreview] = useState(false);
  const editorRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const existingTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");
    setSavedTemplates(existingTemplates);
  }, []);

  const handleSaveCustomTemplate = () => {
    if (!templateName.trim()) {
      alert('Please enter template name');
      return;
    }

    const editorContent = editorRef.current ? editorRef.current.getContent() : '';

    if (!editorContent.trim()) {
      alert('Please create template content');
      return;
    }

    const template = {
      id: crypto.randomUUID(),
      name: templateName.trim(),
      content: editorContent,
      visibility: visibility,
      createdAt: new Date().toISOString(),
      isCustom: true
    };

    const existingTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");

    const updatedTemplates = [template, ...existingTemplates];

    localStorage.setItem("emailTemplates", JSON.stringify(updatedTemplates));

    setSavedTemplates(updatedTemplates);

    alert('Template saved successfully !');

    setTemplateName('');
    setVisibility('admin');
    setShowPreview(false);
    if (editorRef.current) {
      editorRef.current.setContent('<p>Hello...</p>');
    }
  };

  return (
    <div className="bg-[#e5e7eb] p-0 sm:p-5 h-screen overflow-hidden flex justify-center items-start font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
      <div className="bg-white w-full border border-[black] max-w-[1400px] h-full overflow-y-auto">
        <div className="bg-white w-full px-4 sm:px-6 py-4 border-b border-gray-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-normal text-gray-700">
              Add Custom <strong>Template</strong>
            </h1>
            <button
              onClick={() => router.push("/newsletter/TemplatesListPage")}
              className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-gray-700 px-6 sm:px-8 py-2.5 rounded-md text-sm sm:text-base font-medium transition-colors whitespace-nowrap"
            >
              ← Back to Templates
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6 md:p-8">
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              Template Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              placeholder="Enter template name"
              className="w-full border border-gray-300 text-black rounded-md px-3 sm:px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              Message <strong className="text-red-500">(Note: Please Enter Plain Text Only For Better Result)</strong>
            </label>
            <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
              <Editor
                apiKey="y1s9k2719cryc4c4lhyef3rypkcz2oy6t9fno5q4ngbqts9o"
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>Hello...</p>"
                init={{
                  height: window.innerWidth < 640 ? 250 : 300,
                  menubar: window.innerWidth >= 640,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'help', 'wordcount'
                  ],
                  toolbar: window.innerWidth < 640
                    ? 'undo redo | bold italic | alignleft aligncenter | bullist numlist | link'
                    : 'undo redo | blocks fontsize | ' +
                    'bold italic forecolor backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'table image media link | removeformat code | preview fullscreen | help',
                  content_style: `
                    body { 
                      font-family: Arial, Helvetica, sans-serif; 
                      font-size: 14px;
                      max-width: 100%;
                      margin: 0;
                      padding: 12px;
                    }
                    @media (min-width: 640px) {
                      body {
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                      }
                    }
                  `,
                  branding: false,
                  promotion: false,
                  mobile: {
                    menubar: false,
                    toolbar_mode: 'scrolling'
                  },
                  resize: false
                }}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="visibility"
                value="admin"
                checked={visibility === "admin"}
                onChange={(e) => setVisibility(e.target.value)}
                className="w-4 h-4 cursor-pointer accent-blue-600"
              />
              <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900">
                Visible To Admin
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="visibility"
                value="all"
                checked={visibility === "all"}
                onChange={(e) => setVisibility(e.target.value)}
                className="w-4 h-4 cursor-pointer accent-blue-600"
              />
              <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900">
                Visible To All
              </span>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
            <button
              onClick={handleSaveCustomTemplate}
              className="w-full sm:w-auto bg-cyan-500 text-white px-6 sm:px-8 py-2.5 rounded-md text-sm sm:text-base hover:bg-cyan-600 active:bg-cyan-700 font-medium transition-colors shadow-sm"
            >
              Save Template
            </button>
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="w-full sm:w-auto bg-green-500 text-white px-6 sm:px-8 py-2.5 rounded-md text-sm sm:text-base hover:bg-green-600 active:bg-green-700 font-medium transition-colors shadow-sm"
            >
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>
            <button
              onClick={() => router.push("/newsletter/TemplatesListPage")}
              className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-gray-700 px-6 sm:px-8 py-2.5 rounded-md text-sm sm:text-base font-medium transition-colors shadow-sm"
            >
              Cancel
            </button>
          </div>

          {/* {savedTemplates.length > 0 && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm sm:text-base text-green-800">
                ✓ <span className="font-semibold">{savedTemplates.length}</span> template{savedTemplates.length !== 1 ? 's' : ''} saved in total
              </p>
            </div>
          )}
        </div> */}

          {showPreview && (
            <div className="px-4 sm:px-6 md:px-8 pb-6">
              <div className="border-2 border-gray-300 rounded-lg bg-white overflow-hidden shadow-sm">
                <div className="bg-gray-100 border-b border-gray-300 px-4 sm:px-6 py-3 sm:py-4">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-700">
                    Template Preview
                  </h2>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="border border-gray-300 rounded-lg bg-white overflow-hidden">
                    <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 break-words">
                        {templateName || 'Untitled Template'}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Visibility: <span className="font-medium">{visibility === 'admin' ? 'Admin Only' : 'All Users'}</span>
                      </p>
                    </div>
                    <div
                      className="p-4 sm:p-6 text-sm sm:text-base overflow-auto"
                      style={{ maxHeight: '400px' }}
                      dangerouslySetInnerHTML={{
                        __html: editorRef.current?.getContent() || '<p class="text-gray-400 italic">No content yet...</p>'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}