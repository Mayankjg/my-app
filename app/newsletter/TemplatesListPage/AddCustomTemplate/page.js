// "use client";

// import React, { useState, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { Editor } from '@tinymce/tinymce-react';

// export default function AddCustomTemplatePage() {
//   const router = useRouter();
//   const [templateName, setTemplateName] = useState("");
//   const [visibility, setVisibility] = useState("admin");
//   const [showPreview, setShowPreview] = useState(false);
//   const editorRef = useRef(null);

//   const handleBackToTemplates = () => {
//     router.push("/newsletter/TemplatesListPage");
//   };

//   const handleSaveCustomTemplate = () => {
//     if (!templateName.trim()) {
//       alert('Please enter template name');
//       return;
//     }

//     const editorContent = editorRef.current ? editorRef.current.getContent() : '';
    
//     if (!editorContent.trim()) {
//       alert('Please create template content');
//       return;
//     }

//     const template = {
//       id: Date.now(),
//       name: templateName.trim(),
//       content: editorContent,
//       visibility: visibility,
//       createdAt: new Date().toISOString(),
//       isCustom: true
//     };

//     const existingTemplates = JSON.parse(localStorage.getItem('customTemplates') || '[]');
//     const updatedTemplates = [...existingTemplates, template];
//     localStorage.setItem('customTemplates', JSON.stringify(updatedTemplates));

//     alert('Template saved successfully!');
//     router.push("/newsletter/TemplatesListPage");
//   };

//   return (
//     <div className="w-full h-screen bg-gray-50 p-4 md:p-6 overflow-hidden flex">
//       <div className="max-w-7xl mx-auto w-full h-full overflow-y-auto">
//         <div className="bg-white rounded-lg shadow-md">
//           <div className="border-b border-gray-300 px-6 md:px-8 py-5">
//             <div className="flex items-center justify-between">
//               <h1 className="text-xl md:text-2xl font-normal text-gray-700">
//                 Add Custom <span className="font-semibold">Template</span>
//               </h1>
//               <button
//                 onClick={handleBackToTemplates}
//                 className="bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700"
//               >
//                 ← Back to Templates
//               </button>
//             </div>
//           </div>

//           <div className="p-6 md:p-8">
//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Template Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={templateName}
//                 onChange={(e) => setTemplateName(e.target.value)}
//                 placeholder="Enter template name"
//                 className="w-full border border-gray-300 text-black rounded px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
//               />
//             </div>

//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Message <strong className="text-red-500">(Note : Please Enter Plain Text Only For Better Result)</strong>
//               </label>
//               <div className="border-2 border-gray-300 rounded overflow-hidden">
//                 <Editor

//                   apiKey="y1s9k2719cryc4c4lhyef3rypkcz2oy6t9fno5q4ngbqts9o"
//                   onInit={(evt, editor) => editorRef.current = editor}
//                   initialValue="<p>Hello...</p>"
//                   init={{
//                     height: 300,
//                     menubar: true,
//                     plugins: [
//                       'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
//                       'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
//                       'insertdatetime', 'media', 'table', 'help', 'wordcount'
//                     ],
//                     toolbar: 'undo redo | blocks fontsize | ' +
//                       'bold italic forecolor backcolor | alignleft aligncenter ' +
//                       'alignright alignjustify | bullist numlist outdent indent | ' +
//                       'table image media link | removeformat code | preview fullscreen | help',
//                     content_style: `
//                       body { 
//                         font-family: Arial, Helvetica, sans-serif; 
//                         font-size: 14px;
//                         max-width: 800px;
//                         margin: 0 auto;
//                         padding: 20px;
//                       }
//                     `,
//                     branding: false,
//                     promotion: false
//                   }}
//                 />
//               </div>
//             </div>

//             <div className="flex items-center gap-6 mb-6">
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="visibility"
//                   value="admin"
//                   checked={visibility === "admin"}
//                   onChange={(e) => setVisibility(e.target.value)}
//                   className="w-4 h-4"
//                 />
//                 <span className="text-sm text-gray-700">Visible To Admin</span>
//               </label>
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="visibility"
//                   value="all"
//                   checked={visibility === "all"}
//                   onChange={(e) => setVisibility(e.target.value)}
//                   className="w-4 h-4"
//                 />
//                 <span className="text-sm text-gray-700">Visible To All</span>
//               </label>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <button
//                 onClick={handleSaveCustomTemplate}
//                 className="bg-cyan-500 text-white px-8 py-2.5 rounded text-sm hover:bg-cyan-600 font-medium"
//               >
//                 Save Template
//               </button>
//               <button
//                 onClick={() => setShowPreview(!showPreview)}
//                 className="bg-green-500 text-white px-8 py-2.5 rounded text-sm hover:bg-green-600 font-medium"
//               >
//                 {showPreview ? 'Hide Preview' : 'Show Preview'}
//               </button>
//               <button
//                 onClick={handleBackToTemplates}
//                 className="bg-gray-500 text-white px-8 py-2.5 rounded text-sm hover:bg-gray-600 font-medium"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>

//         {showPreview && (
//           <div className="bg-white rounded-lg shadow-md mt-6 mb-6">
//             <div className="border-b border-gray-300 px-6 py-4">
//               <h2 className="text-lg font-semibold text-gray-700">Template Preview</h2>
//             </div>
//             <div className="p-6">
//               <div className="border-2 border-gray-300 rounded-lg bg-white max-w-4xl mx-auto overflow-hidden">
//                 <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
//                   <h3 className="text-xl font-bold text-gray-800">
//                     {templateName || 'Untitled Template'}
//                   </h3>
//                 </div>
//                 <div 
//                   className="p-6"
//                   dangerouslySetInnerHTML={{ 
//                     __html: editorRef.current?.getContent() || '<p class="text-gray-400">No content yet...</p>' 
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }














"use client";

import React, { useState, useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from "next/navigation";

export default function AddCustomTemplatePage() {
  const [templateName, setTemplateName] = useState("");
  const [visibility, setVisibility] = useState("admin");
  const [showPreview, setShowPreview] = useState(false);
  const [savedTemplates, setSavedTemplates] = useState([]);
  const editorRef = useRef(null);
  const router = useRouter(); // ✅ Router define કર્યું છે

  const handleBackToTemplates = () => {
    router.push("/newsletter/TemplatesListPage");
  };

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
      id: Date.now(),
      name: templateName.trim(),
      content: editorContent,
      visibility: visibility,
      createdAt: new Date().toISOString(),
      isCustom: true
    };

    // Store in React state instead of localStorage
    setSavedTemplates(prev => [...prev, template]);

    alert('Template saved successfully!');
    
    // Reset form
    setTemplateName('');
    setVisibility('admin');
    setShowPreview(false);
    if (editorRef.current) {
      editorRef.current.setContent('<p>Hello...</p>');
    }
  };

  const handleCancel = () => {
    const hasContent = templateName.trim() || 
                      (editorRef.current && editorRef.current.getContent() !== '<p>Hello...</p>');
    
    if (hasContent) {
      const confirmCancel = window.confirm('Are you sure you want to cancel? Any unsaved changes will be lost.');
      if (!confirmCancel) return;
    }
    
    router.push("/newsletter/TemplatesListPage");
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="w-full p-2 sm:p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-lg shadow-md">
            {/* Header */}
            <div className="border-b border-gray-300 px-4 sm:px-6 md:px-8 py-4 sm:py-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h1 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-700">
                  Add Custom <span className="font-semibold">Template</span>
                </h1>
                <button
                  onClick={() => router.push("/newsletter/TemplatesListPage")}
                  className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-gray-700 px-6 sm:px-8 py-2.5 rounded-md text-sm sm:text-base font-medium transition-colors whitespace-nowrap"
                >
                  ← Back to Templates
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-4 sm:p-6 md:p-8">
              {/* Template Name Input */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                  Template Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  placeholder="Enter template name"
                  className="w-full border border-gray-300 text-black rounded-md px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Editor Section */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
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

              {/* Visibility Radio Buttons */}
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
                  <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-900">
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
                  <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-900">
                    Visible To All
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                <button
                  onClick={handleSaveCustomTemplate}
                  className="w-full sm:w-auto bg-cyan-500 text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm hover:bg-cyan-600 active:bg-cyan-700 font-medium transition-colors shadow-sm"
                >
                  Save Template
                </button>
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="w-full sm:w-auto bg-green-500 text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm hover:bg-green-600 active:bg-green-700 font-medium transition-colors shadow-sm"
                >
                  {showPreview ? 'Hide Preview' : 'Show Preview'}
                </button>
                <button
                  onClick={() => router.push("/newsletter/TemplatesListPage")}
                  className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-gray-700 px-6 sm:px-8 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium transition-colors shadow-sm"
                >
                  Cancel
                </button>
              </div>

              {/* Saved Templates Info */}
              {savedTemplates.length > 0 && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-xs sm:text-sm text-green-800">
                    ✓ <span className="font-semibold">{savedTemplates.length}</span> template{savedTemplates.length !== 1 ? 's' : ''} saved successfully in this session
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Preview Section */}
          {showPreview && (
            <div className="bg-white rounded-lg shadow-md mt-4 sm:mt-6 mb-4 sm:mb-6">
              <div className="border-b border-gray-300 px-4 sm:px-6 py-3 sm:py-4">
                <h2 className="text-base sm:text-lg font-semibold text-gray-700">
                  Template Preview
                </h2>
              </div>
              <div className="p-4 sm:p-6">
                <div className="border-2 border-gray-300 rounded-lg bg-white max-w-4xl mx-auto overflow-hidden shadow-sm">
                  <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 break-words">
                      {templateName || 'Untitled Template'}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Visibility: <span className="font-medium">{visibility === 'admin' ? 'Admin Only' : 'All Users'}</span>
                    </p>
                  </div>
                  <div 
                    className="p-4 sm:p-6 text-xs sm:text-sm overflow-auto"
                    style={{ maxHeight: '400px' }}
                    dangerouslySetInnerHTML={{ 
                      __html: editorRef.current?.getContent() || '<p class="text-gray-400 italic">No content yet...</p>' 
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}