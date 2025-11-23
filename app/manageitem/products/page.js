"use client";

import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const ProductsTable = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const products = [
    { id: 1, name: "Bandhani" },
    { id: 2, name: "Galaxy S1" },
    { id: 3, name: "Galaxy S2" },
    { id: 4, name: "Lenovo Ideapad" },
  ];

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows(products.map((p) => p.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-2">
      <div className="bg-white w-full max-w-7xl rounded-md shadow-md border border-gray-400">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-400">
          <h2 className="text-lg font-semibold text-gray-800">Products</h2>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Add Product
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex justify-end items-center p-4">
          <input
            type="text"
            placeholder="Product Name"
            className="border border-gray-400 text-black rounded-md px-3 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="ml-2 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600">
            Search
          </button>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto px-4 py-4">
          <table className="w-full text-sm border border-gray-200 border-collapse">
            <thead
              style={{
                backgroundColor: "#e9edf1",
                borderColor: "#f2f2f2",
              }}
            >
              <tr className="text-gray-700">
                <th
                  className="py-3 px-4 border text-left"
                  style={{ borderColor: "#f2f2f2" }}
                >
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="accent-blue-600"
                  />
                </th>
                <th
                  className="py-3 px-8 border text-left font-semibold"
                  style={{ borderColor: "#f2f2f2" }}
                >
                  SR. NO.
                </th>
                <th
                  className="py-3 px-4 border text-left font-semibold"
                  style={{ borderColor: "#f2f2f2" }}
                >
                  PRODUCT NAME
                </th>
                <th
                  className="py-3 px-3 border text-center font-semibold"
                  style={{ borderColor: "#f2f2f2" }}
                >
                  EDIT
                </th>
                <th
                  className="py-3 px-6 border text-center font-semibold"
                  style={{ borderColor: "#f2f2f2" }}
                >
                  DELETE
                </th>
                <th
                  className="py-3 px-1 border text-center font-semibold"
                  style={{ borderColor: "#f2f2f2" }}
                >
                  VIEW LEAD
                </th>
              </tr>
            </thead>
            <tbody className="font-medium" style={{ borderColor: "#e0e0e0" }}>
              {products.map((p, index) => (
                <tr key={p.id} className="hover:bg-gray-50 transition">
                  <td
                    className="py-3 px-4 border text-left "
                    style={{ borderColor: "#e0e0e0" }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(p.id)}
                      onChange={() => handleSelectRow(p.id)}
                      className="accent-blue-600"
                    />
                  </td>
                  <td
                    className="py-3 px-5 border text-left text-black"
                    style={{ borderColor: "#e0e0e0" }}
                  >
                    {index + 1}
                  </td>
                  <td
                    className="py-3 px-4 border text-black"
                    style={{ borderColor: "#e0e0e0" }}
                  >
                    {p.name}
                  </td>
                  <td
                    className="py-3 px-3 border text-center"
                    style={{ borderColor: "#e0e0e0" }}
                  >
                    <button className="text-black hover:text-blue-600">
                      <Pencil size={20} />
                    </button>
                  </td>
                  <td
                    className="py-3 px-6 border text-center"
                    style={{ borderColor: "#e0e0e0" }}
                  >
                    <button className="text-black hover:text-red-600">
                      <Trash2 size={20} />
                    </button>
                  </td>
                  <td className="border py-3 w-[12%] border border-gray-300 text-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm">
                      View Leads
                    </button>
                  </td>
                </tr>
              ))}

              {/* Delete Button Row */}
              <tr>
                <td
                  colSpan="6"
                  className="py-3 px-6 border text-left"
                  style={{ borderColor: "#e0e0e0" }}
                >
                  <button className="bg-red-600 text-white px-10 py-2 rounded-md hover:bg-red-700 shadow-sm">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
