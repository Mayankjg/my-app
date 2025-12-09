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

export default function AddCustomTemplatePage() {
  const [templateName, setTemplateName] = useState("");
  const [visibility, setVisibility] = useState("admin");
  const [showPreview, setShowPreview] = useState(false);
  const editorRef = useRef(null);

  const handleBackToTemplates = () => {
    alert('Redirecting back to templates...');
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

    // Get existing templates
    const existingTemplates = JSON.parse(localStorage.getItem('emailTemplates') || '[]');
    const updatedTemplates = [...existingTemplates, template];
    localStorage.setItem('emailTemplates', JSON.stringify(updatedTemplates));

    alert('Template saved successfully!');
    
    // Reset form
    setTemplateName('');
    setVisibility('admin');
    setShowPreview(false);
    if (editorRef.current) {
      editorRef.current.setContent('<p>Hello...</p>');
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-2 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b border-gray-300 px-4 sm:px-6 md:px-8 py-4 sm:py-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <h1 className="text-lg sm:text-xl md:text-2xl font-normal text-gray-700">
                Add Custom <span className="font-semibold">Template</span>
              </h1>
              <button
                onClick={handleBackToTemplates}
                className="bg-gray-600 text-white px-3 sm:px-4 py-2 rounded text-xs sm:text-sm hover:bg-gray-700 transition-colors"
              >
                ← Back to Templates
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Template Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                placeholder="Enter template name"
                className="w-full border border-gray-300 text-black rounded px-3 sm:px-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                Message <strong className="text-red-500">(Note: Please Enter Plain Text Only For Better Result)</strong>
              </label>
              <div className="border-2 border-gray-300 rounded overflow-hidden">
                <Editor
                  apiKey="y1s9k2719cryc4c4lhyef3rypkcz2oy6t9fno5q4ngbqts9o"
                  onInit={(evt, editor) => editorRef.current = editor}
                  initialValue="<p>Hello...</p>"
                  init={{
                    height: 300,
                    menubar: true,
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks fontsize | ' +
                      'bold italic forecolor backcolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'table image media link | removeformat code | preview fullscreen | help',
                    content_style: `
                      body { 
                        font-family: Arial, Helvetica, sans-serif; 
                        font-size: 14px;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                      }
                    `,
                    branding: false,
                    promotion: false,
                    mobile: {
                      menubar: false,
                      toolbar_mode: 'sliding'
                    }
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="visibility"
                  value="admin"
                  checked={visibility === "admin"}
                  onChange={(e) => setVisibility(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="text-xs sm:text-sm text-gray-700">Visible To Admin</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="visibility"
                  value="all"
                  checked={visibility === "all"}
                  onChange={(e) => setVisibility(e.target.value)}
                  className="w-4 h-4"
                />
                <span className="text-xs sm:text-sm text-gray-700">Visible To All</span>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
              <button
                onClick={handleSaveCustomTemplate}
                className="bg-cyan-500 text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded text-xs sm:text-sm hover:bg-cyan-600 font-medium transition-colors"
              >
                Save Template
              </button>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="bg-green-500 text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded text-xs sm:text-sm hover:bg-green-600 font-medium transition-colors"
              >
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </button>
              <button
                onClick={handleBackToTemplates}
                className="bg-gray-500 text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded text-xs sm:text-sm hover:bg-gray-600 font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {showPreview && (
          <div className="bg-white rounded-lg shadow-md mt-4 sm:mt-6 mb-4 sm:mb-6">
            <div className="border-b border-gray-300 px-4 sm:px-6 py-3 sm:py-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-700">Template Preview</h2>
            </div>
            <div className="p-4 sm:p-6">
              <div className="border-2 border-gray-300 rounded-lg bg-white max-w-4xl mx-auto overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    {templateName || 'Untitled Template'}
                  </h3>
                </div>
                <div 
                  className="p-4 sm:p-6 text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ 
                    __html: editorRef.current?.getContent() || '<p class="text-gray-400">No content yet...</p>' 
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}