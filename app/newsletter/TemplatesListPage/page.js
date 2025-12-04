"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function TemplatesListPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-normal text-gray-800">Templates</h1>
        <div className="flex gap-3">
          <button
            onClick={() => router.push("/newsletter/TemplatesListPage/AddCustomTemplate")}
            className="bg-[#2d4456] text-white px-6 py-2 rounded text-sm hover:bg-[#1f2f3d]"
          >
            Add Custom Template
          </button>
          <button
            onClick={() => router.push("/newsletter/TemplatesListPage/AddTemplate")}
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