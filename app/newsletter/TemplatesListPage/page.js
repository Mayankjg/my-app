"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function TemplatesListPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#e5e7eb] p-0 sm:p-5 h-screen overflow-hidden flex justify-center items-start font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
      <div className="bg-white w-full border border-[black] max-w-[1400px] h-100 overflow-y-auto">
        <div className="bg-white w-full px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-normal text-gray-700">
              Templates <strong>List</strong>
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto"> 
              <button
                onClick={() => router.push("/newsletter/TemplatesListPage/AddCustomTemplate")}
                className="w-full sm:w-auto bg-[#2d4456] hover:bg-[#1f2f3d] text-white text-base px-5 py-2.5 rounded transition-colors"
              >
                Add Custom Template
              </button>
              <button
                onClick={() => router.push("/newsletter/TemplatesListPage/AddTemplate")}
                className="w-full sm:w-auto bg-[#2d4456] hover:bg-[#1f2f3d] text-white text-base px-5 py-2.5 rounded transition-colors"
              >
                Add Template
              </button>
            </div>
          </div>
          <hr className="-mx-4 sm:-mx-6 border-t border-gray-300 mt-4 mb-0" />
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center px-4 sm:px-6 gap-2 mb-6 sm:justify-end">
          <input
            type="text"
            placeholder="Template Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-[200px] text-[black] h-10 sm:h-9 border border-gray-300 rounded-[5px] px-3 py-2 text-base sm:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#00a7cf] pl-5"
          />
          <button className="bg-[#0baad1] w-full sm:w-[70px] h-10 text-white px-2 py-1 text-base sm:text-[18px] font-medium rounded-[5px] hover:bg-[#0094b8] transition-colors">
            Search
          </button>
        </div>

        <div className="w-full px-2 sm:px-6 pb-6">
          <div className="border border-gray-200 overflow-x-auto rounded">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-[#dee2e6] border-b border-gray-200">
                  <th className="py-3 px-4 text-left w-12 sticky left-0 bg-[#dee2e6] z-10">
                    <input type="checkbox" className="w-4 h-4" />
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider whitespace-nowrap">
                    SR NO
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider whitespace-nowrap">
                    TEMPLATE NAME
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider whitespace-nowrap">
                    PRODUCT NAME
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider whitespace-nowrap">
                    PREVIEW IMAGE
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider whitespace-nowrap">
                    TYPE
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider whitespace-nowrap">
                    VIEW
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider whitespace-nowrap">
                    DELETE
                  </th>
                  <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider whitespace-nowrap">
                    EDIT
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td colSpan="9" className="text-center py-8 text-red-500 text-base font-medium">
                    No Record Found
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center sm:hidden">← Swipe to see more →</p>
        </div>
      </div>
    </div>
  );
}