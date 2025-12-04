"use client";

import React, { useState, useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';

export default function TemplateApp() {
  const [currentPage, setCurrentPage] = useState("list");
  const [search, setSearch] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [visibility, setVisibility] = useState("admin");
  const [productName, setProductName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const editorRef = useRef(null);

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

    const existingTemplates = JSON.parse(localStorage.getItem('customTemplates') || '[]');
    const updatedTemplates = [...existingTemplates, template];
    localStorage.setItem('customTemplates', JSON.stringify(updatedTemplates));

    alert('Template saved successfully!');
    setCurrentPage("list");
  };



  if (currentPage === "list") {
    return (
      <div className="w-full min-h-screen bg-white">
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-normal text-gray-800">Templates</h1>
          <div className="flex gap-3">
            <button
              onClick={() => setCurrentPage("addCustom")}
              className="bg-[#2d4456] text-white px-6 py-2 rounded text-sm hover:bg-[#1f2f3d]"
            >
              Add Custom Template
            </button>
            <button
              onClick={() => setCurrentPage("addTemplate")}
              className="bg-[#2d4456] text-white px-6 py-2 rounded text-sm hover:bg-[#1f2f3d]"
            >
              Add Template
            </button>
          </div>
        </div>

        <div className="bg-white px-6 py-6">
          <div className="flex justify-end gap-3">
            <input
              type="text"
              placeholder="Template Name"
              className="border border-gray-300 rounded px-4 py-2 w-64 text-sm text-gray-500 focus:outline-none focus:border-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-[#0ea5e9] text-white px-8 py-2 rounded text-sm hover:bg-[#0284c7]">
              Search
            </button>
          </div>
        </div>

        <div className="bg-white px-6 pb-6">
          <div className="border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#dee2e6] border-b border-gray-200">
                  <th className="py-3 px-4 text-left w-12">
                    <input type="checkbox" className="w-4 h-4" />
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
                    SR NO
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
                    TEMPLATE NAME
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
                    PRODUCT NAME
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
                    PREVIEW IMAGE
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
                    TYPE
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
                    VIEW
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
                    DELETE
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
                    EDIT
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td colSpan="9" className="text-center py-8 text-red-500 text-base">
                    No Record Found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }


  if (currentPage === "addCustom") {
    return (
      <div className="w-full min-h-screen bg-gray-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-md">
            <div className="border-b border-gray-300 px-6 md:px-8 py-5">
              <div className="flex items-center justify-between">
                <h1 className="text-xl md:text-2xl font-normal text-gray-700">
                  Add Custom <span className="font-semibold">Template</span>
                </h1>
                <button
                  onClick={() => setCurrentPage("list")}
                  className="bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700"
                >
                  ← Back to Templates
                </button>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Template Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  placeholder="Enter template name"
                  className="w-full border border-gray-300 text-[black] rounded px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* TinyMCE Editor */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <strong className="text-red-500">(Note : Please Enter Plain Text Only For Better Result)</strong>
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
                      promotion: false
                    }}
                  />
                </div>
              </div>

              {/* Visibility */}
              <div className="flex items-center gap-6 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="visibility"
                    value="admin"
                    checked={visibility === "admin"}
                    onChange={(e) => setVisibility(e.target.value)}
                    className="w-4 h-4 accent-cyan-500"
                  />
                  <span className="text-sm text-gray-700">Visible To Admin</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="visibility"
                    value="all"
                    checked={visibility === "all"}
                    onChange={(e) => setVisibility(e.target.value)}
                    className="w-4 h-4 accent-gray-400"
                  />
                  <span className="text-sm text-gray-700">Visible To All</span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleSaveCustomTemplate}
                  className="bg-cyan-500 text-white px-8 py-2.5 rounded text-sm hover:bg-cyan-600 font-medium"
                >
                  Save Template
                </button>
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="bg-green-500 text-white px-8 py-2.5 rounded text-sm hover:bg-green-600 font-medium"
                >
                  {showPreview ? 'Hide Preview' : 'Show Preview'}
                </button>
                <button
                  onClick={() => setCurrentPage("list")}
                  className="bg-gray-500 text-white px-8 py-2.5 rounded text-sm hover:bg-gray-600 font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          {showPreview && (
            <div className="bg-white rounded-lg shadow-md mt-6">
              <div className="border-b border-gray-300 px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-700">Template Preview</h2>
              </div>
              <div className="p-6">
                <div className="border-2 border-gray-300 rounded-lg bg-white max-w-4xl mx-auto overflow-hidden">
                  <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      {templateName || 'Untitled Template'}
                    </h3>
                  </div>
                  <div 
                    className="p-6"
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

  // ADD TEMPLATE PAGE (Original)
  if (currentPage === "addTemplate") {
    return (
      <div className="w-full min-h-screen bg-[#e5e7eb]">
        <div className="bg-white max-w-4xl mx-auto">
          <div className="border-b border-gray-200 px-8 py-5">
            <h1 className="text-xl font-normal text-gray-800">Templates</h1>
          </div>

          <div className="px-8 py-8">
            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">Template Name</label>
              <input
                type="text"
                placeholder="Template Name"
                className="w-full max-w-2xl border border-gray-300 rounded px-4 py-2 text-sm text-gray-500 focus:outline-none focus:border-gray-400"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">Product</label>
              <select
                className="w-full max-w-2xl border border-gray-300 rounded px-4 py-2 text-sm text-gray-500 focus:outline-none focus:border-gray-400"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                <option value="">Select Products</option>
                <option value="product1">Product 1</option>
                <option value="product2">Product 2</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-3">Template File</label>
              <input type="file" className="text-sm text-gray-500" />
              <p className="text-red-500 text-sm mt-2">Only .HTML Format Allow</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-3">Preview Images</label>
              <input type="file" className="text-sm text-gray-500" />
            </div>

            <div className="bg-red-50 w-168 border border-red-200 rounded px-4 py-3 mb-8">
              <p className="text-sm text-red-500">
                Note: Please Do not Include <span className="font-semibold">Background-image</span> Tag in Template.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="bg-[#0ea5e9] text-white px-8 py-2 rounded hover:bg-[#0284c7]">
                Next
              </button>
              <button
                onClick={() => setCurrentPage("list")}
                className="bg-gray-300 text-gray-700 px-8 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}