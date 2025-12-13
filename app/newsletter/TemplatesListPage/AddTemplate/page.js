"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTemplatePage() {
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <div className="bg-[#e5e7eb] p-0 sm:p-5 h-screen overflow-y-auto flex justify-center items-start font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
      <div className="bg-white w-full border border-[black] max-w-[1400px]">
        <div className="bg-white w-full px-4 sm:px-6 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-normal text-gray-700">
              Add <strong>Template</strong>
            </h1>
          </div>
          <hr className="-mx-4 sm:-mx-6 border-t border-gray-300 mt-4 mb-0" />
        </div>

        <div className="w-full px-4 sm:px-6 py-2 pb-8">
          <div className="max-w-3xl">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Template Name
              </label>
              <input
                type="text"
                placeholder="Template Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 hover:bg-gray-100 focus:border-transparent"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product
              </label>
              <select
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 hover:bg-gray-100 focus:border-transparent"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                <option value="">Select Products</option>
                <option value="product1">Product 1</option>
                <option value="product2">Product 2</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Template File
              </label>
              <input 
                type="file" 
                className="w-full text-sm text-gray-700 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-gray-400 file:text-white hover:file:bg-gray-500 file:cursor-pointer cursor-pointer"
                accept=".html"
              />
              <p className="text-red-500 text-sm mt-2">
                Only .HTML Format Allow
              </p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Preview Images
              </label>
              <input 
                type="file" 
                className="w-full text-sm text-gray-700 file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-gray-400 file:text-white hover:file:bg-gray-500 file:cursor-pointer cursor-pointer"
                accept="image/*"
              />
            </div>

            <div className="bg-red-50 border border-red-200 rounded-md px-4 py-2 mb-4">
              <p className="text-sm text-red-600">
                <span className="font-semibold">Note:</span> Please Do not Include{" "}
                <span className="font-semibold">Background-image</span> Tag in Template.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="w-full sm:w-auto bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-1.5 rounded-md text-base font-medium transition-colors">
                Next
              </button>
              <button
                onClick={() => router.push("/newsletter/TemplatesListPage")}
                className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-700 px-8 py-1.5 rounded-md text-base font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}