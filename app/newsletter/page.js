"use client";

import React, { useState } from "react";

export default function TemplatePage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState("list"); 
  const [templateName, setTemplateName] = useState("");
  const [message, setMessage] = useState("Hello");
  const [visibility, setVisibility] = useState("admin");
  const [productName, setProductName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

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

        <div className="bg-[#d1d5db] w-full h-screen"></div>
      </div>
    );
  }

  if (currentPage === "addCustom") {
    return (
      <div className="w-full min-h-screen bg-[#d9dce0] p-6">
        <h1 className="text-2xl font-normal text-gray-700 mb-6">Add Custom Template</h1>

        <div className="bg-white rounded shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-6">Template</h2>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">
              Template Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Template Name"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 focus:outline-none focus:border-gray-400"
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-2">
              Message <span className="text-red-600 font-normal">(Note : Please Enter Plain Text Only For Better Result)</span>
            </label>

            <div className="border border-gray-300 rounded-t">
              <div className="flex items-center gap-4 px-3 py-2 border-b border-gray-300 bg-gray-50">
                <button className="text-sm text-gray-700 hover:text-gray-900">File ▼</button>
                <button className="text-sm text-gray-700 hover:text-gray-900">Edit ▼</button>
                <button className="text-sm text-gray-700 hover:text-gray-900">Insert ▼</button>
                <button className="text-sm text-gray-700 hover:text-gray-900">View ▼</button>
                <button className="text-sm text-gray-700 hover:text-gray-900">Format ▼</button>
                <button className="text-sm text-gray-700 hover:text-gray-900">Table ▼</button>
                <button className="text-sm text-gray-700 hover:text-gray-900">Tools ▼</button>
              </div>

              <div className="flex items-center gap-1 px-2 py-2 border-b border-gray-300 bg-gray-100">
                <button className="p-2 hover:bg-gray-200 rounded font-bold text-gray-700">B</button>
                <button className="p-2 hover:bg-gray-200 rounded italic text-gray-700">I</button>
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                <button className="p-2 hover:bg-gray-200 rounded">≡</button>
                <button className="p-2 hover:bg-gray-200 rounded">≡</button>
                <button className="p-2 hover:bg-gray-200 rounded">≡</button>
                <button className="p-2 hover:bg-gray-200 rounded">≡</button>
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                <button className="p-2 hover:bg-gray-200 rounded">•</button>
                <button className="p-2 hover:bg-gray-200 rounded">1.</button>
                <button className="p-2 hover:bg-gray-200 rounded">→</button>
                <button className="p-2 hover:bg-gray-200 rounded">←</button>
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                <button className="p-2 hover:bg-gray-200 rounded">🔗</button>
                <button className="p-2 hover:bg-gray-200 rounded">🖼️</button>
                <button className="p-2 hover:bg-gray-200 rounded">📹</button>
                <div className="w-px h-6 bg-gray-300 mx-1"></div>
                <button className="p-2 hover:bg-gray-200 rounded border border-gray-300 bg-white text-sm">A ▼</button>
                <button className="p-2 hover:bg-gray-200 rounded border border-gray-300 bg-white text-sm">A ▼</button>
                <button className="p-2 hover:bg-gray-200 rounded">👁️</button>
              </div>

              <textarea
                className="w-full min-h-[300px] p-4 text-gray-800 focus:outline-none resize-none border-0"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <div className="px-3 py-1 border-t border-gray-300 bg-gray-50 text-xs text-gray-600">
                p
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="visibility"
                value="admin"
                checked={visibility === "admin"}
                onChange={(e) => setVisibility(e.target.value)}
                className="w-4 h-4 text-cyan-500 accent-cyan-500"
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
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">Visible To All</span>
            </label>
          </div>

          <div className="flex gap-3">
            <button className="bg-[#0ea5e9] text-white px-8 py-2 rounded hover:bg-[#0284c7]">
              Save
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
    );
  }

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
              <input
                type="file"
                className="text-sm text-gray-500"
              />
              <p className="text-red-500 text-sm mt-2">Only .HTML Format Allow</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-3">Preview Images</label>
              <input
                type="file"
                className="text-sm text-gray-500"
              />
            </div>

            <div className="bg-red-50 border border-red-200 rounded px-4 py-3 mb-8">
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