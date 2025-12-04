"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTemplatePage() {
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

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
              onClick={() => router.push("/newsletter/TemplatesListPage")}
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