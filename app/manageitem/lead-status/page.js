"use client";

import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function LeadStatus() {
  const [statuses, setStatuses] = useState([
    { id: 1, name: "Closed" },
    { id: 2, name: "Open" },
    { id: 3, name: "Pending" },
    { id: 4, name: "Special" },
  ]);

  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const filtered = statuses.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setStatuses(statuses.filter((status) => status.id !== id));
    setSelected(selected.filter((sid) => sid !== id));
  };

  const handleSelectAll = () => {
    const selectable = filtered
      .filter((status) => status.name === "Special")
      .map((status) => status.id);
    const allSelected = selectable.every((id) => selected.includes(id));

    if (allSelected) {
      setSelected(selected.filter((id) => !selectable.includes(id)));
    } else {
      setSelected([...new Set([...selected, ...selectable])]);
    }
  };

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((sid) => sid !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
      <div className="bg-gray-100 min-h-screen flex justify-center items-center p-2">
      <div className="bg-white w-full max-w-7xl rounded-md shadow-md border border-gray-400">
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-3 sm:px-6 py-3 gap-2"
        style={{ borderBottom: "1px solid #e6e6e6" }}
      >
        <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">
          Lead <span className="font-normal">Status</span>
        </h2>
        <button className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm sm:text-base w-full sm:w-auto">
          Add Lead Status
        </button>
      </div>

      <div
        className="flex flex-col sm:flex-row justify-end items-center px-3 sm:px-6 py-3 gap-3"
        style={{
          borderTop: "1px solid #e6e6e6",
          borderBottom: "1px solid #e6e6e6",
        }}
      >
        <input
          type="text"
          placeholder="Search Lead Status..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-md px-3 py-2 w-full sm:w-64 text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          style={{ borderColor: "#e6e6e6" }}
        />
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-md text-xs sm:text-base w-full sm:w-auto">
          Search
        </button>
      </div>

      <div className="overflow-x-auto w-full">
        <div className="min-w-[500px] sm:min-w-full">
          <table
            className="w-full text-xs sm:text-sm text-gray-700 border-collapse"
            style={{ border: "1px solid #e6e6e6" }}
          >
            <thead
              className="bg-gray-100"
              style={{ borderBottom: "1px solid #e6e6e6" }}
            >
              <tr>
                <th className="py-2 px-3 text-left">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                    checked={
                      filtered
                        .filter((s) => s.name === "Special")
                        .every((s) => selected.includes(s.id)) &&
                      filtered.some((s) => s.name === "Special")
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="py-2 px-3 text-left font-semibold">SR. NO.</th>
                <th className="py-2 px-3 text-left font-semibold">
                  LEAD STATUS
                </th>
                <th className="py-2 text-center font-semibold">EDIT</th>
                <th className="py-2 text-center font-semibold">DELETE</th>
                <th className="py-2 text-center font-semibold w-[10%]">
                  VIEW LEAD
                </th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((status, index) => (
                <tr
                  key={status.id}
                  className="hover:bg-gray-50 transition"
                  style={{ borderTop: "1px solid #e6e6e6" }}
                >
                  <td
                    className="py-2 px-3 text-left"
                    style={{ borderRight: "1px solid #e6e6e6" }}
                  >
                    {status.name === "Special" ? (
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-blue-600"
                        checked={selected.includes(status.id)}
                        onChange={() => handleSelect(status.id)}
                      />
                    ) : (
                      <span className="text-gray-400">--</span>
                    )}
                  </td>

                  <td
                    className="py-2 px-3"
                    style={{ borderRight: "1px solid #e6e6e6" }}
                  >
                    {index + 1}
                  </td>

                  <td
                    className="py-2 px-3"
                    style={{ borderRight: "1px solid #e6e6e6" }}
                  >
                    {status.name}
                  </td>

                  <td
                    className="py-2 text-center"
                    style={{ borderRight: "1px solid #e6e6e6" }}
                  >
                    {status.name === "Special" ? (
                      <button className="text-gray-600 hover:text-blue-600">
                        <Pencil size={14} />
                      </button>
                    ) : (
                      <span className="text-gray-400">--</span>
                    )}
                  </td>

                  <td
                    className="py-2 text-center"
                    style={{ borderRight: "1px solid #e6e6e6" }}
                  >
                    {status.name === "Special" ? (
                      <button
                        onClick={() => handleDelete(status.id)}
                        className="text-gray-600 hover:text-red-600"
                      >
                        <Trash2 size={14} />
                      </button>
                    ) : (
                      <span className="text-gray-400">--</span>
                    )}
                  </td>

                  <td className="py-2 text-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-2 sm:px-5 py-1 rounded text-[10px] sm:text-sm w-full sm:w-auto">
                      View Lead
                    </button>
                  </td>
                </tr>
              ))}
              
              <tr style={{ borderTop: "1px solid #e6e6e6" }}>
                <td colSpan="6" className="py-4 px-3 text-left">
                  <button className="bg-red-500 hover:bg-red-700 text-white px-6 sm:px-12 py-2 rounded-md text-xs sm:text-base">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}
