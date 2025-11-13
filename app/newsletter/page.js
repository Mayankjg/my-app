"use client";
import React, { useState } from "react";

export default function TemplatePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full bg-[#e9edf1] min-h-screen p-4 md:p-6">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-4 md:mb-6">Templates</h2>

      {/* Buttons + Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        
        {/* Buttons */}
        <div className="flex gap-3">
          <button className="bg-[#113f67] text-white px-5 md:px-6 py-2 rounded hover:bg-[#0d304f] text-sm md:text-base">
            Add Custom Template
          </button>

          <button className="bg-[#113f67] text-white px-5 md:px-6 py-2 rounded hover:bg-[#0d304f] text-sm md:text-base">
            Add Template
          </button>
        </div>

        {/* Search Field */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Template Name"
            className="border rounded px-3 py-2 w-full md:w-64 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="bg-[#25a0e2] text-white px-5 py-2 rounded hover:bg-[#187fb4] text-sm md:text-base">
            Search
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow border overflow-x-auto">
        <table className="w-full text-sm min-w-[900px]">
          <thead className="bg-[#eef1f4] text-gray-600">
            <tr>
              <th className="py-3 px-4 text-left w-12">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-4">SR NO</th>
              <th className="py-3 px-4">TEMPLATE NAME</th>
              <th className="py-3 px-4">PRODUCT NAME</th>
              <th className="py-3 px-4">PREVIEW IMAGE</th>
              <th className="py-3 px-4">TYPE</th>
              <th className="py-3 px-4">VIEW</th>
              <th className="py-3 px-4">DELETE</th>
              <th className="py-3 px-4">EDIT</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="9" className="text-center py-6 text-red-500 text-sm md:text-base">
                No Record Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
