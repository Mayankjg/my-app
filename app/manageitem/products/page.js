"use client";

import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function ProductsTable() {
  const [products, setProducts] = useState([
    { id: 1, name: "Bandhani" },
    { id: 2, name: "Galaxy S1" },
    { id: 3, name: "Galaxy S2" },
    { id: 4, name: "Lenovo Ideapad" },
  ]);

  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectRow = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((sid) => sid !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleSelectAll = () => {
    if (selected.length === filtered.length) {
      setSelected([]);
    } else {
      setSelected(filtered.map((p) => p.id));
    }
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    setSelected(selected.filter((sid) => sid !== id));
  };

  const handleBulkDelete = () => {
    setProducts(products.filter((p) => !selected.includes(p.id)));
    setSelected([]);
  };

  const handleAdd = () => {
    if (!newProduct.trim()) {
      alert("Please enter product name");
      return;
    }

    const newItem = {
      id: Math.max(...products.map((p) => p.id), 0) + 1,
      name: newProduct.trim(),
    };

    setProducts([...products, newItem]);
    setNewProduct("");
    setShowAddModal(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-2">
      <div className="bg-white w-full max-w-7xl rounded-md shadow-md border border-gray-400">
        
        <div className="flex justify-between items-center p-4 border-b border-gray-400">
          <h2 className="text-lg font-semibold text-gray-800">Products</h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Add Product
          </button>
        </div>

        <div className="flex justify-end items-center p-4">
          <input
            type="text"
            placeholder="Product Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-400 text-black rounded-md px-3 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="ml-2 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600">
            Search
          </button>
        </div>

        <div className="overflow-x-auto px-4 py-4">
          <table className="w-full text-sm border border-gray-200 border-collapse">
            <thead
              style={{
                backgroundColor: "#e9edf1",
                borderColor: "#f2f2f2",
              }}
            >
              <tr className="text-gray-700">
                <th className="py-3 px-4 border text-left">
                  <input
                    type="checkbox"
                    checked={
                      selected.length === filtered.length && filtered.length > 0
                    }
                    onChange={handleSelectAll}
                    className="accent-blue-600"
                  />
                </th>

                <th className="py-3 px-8 border text-left font-semibold">
                  SR. NO.
                </th>

                <th className="py-3 px-4 border text-left font-semibold">
                  PRODUCT NAME
                </th>

                <th className="py-3 px-3 border text-center font-semibold">
                  EDIT
                </th>

                <th className="py-3 px-6 border text-center font-semibold">
                  DELETE
                </th>

                <th className="py-3 px-1 border text-center font-semibold">
                  VIEW LEAD
                </th>
              </tr>
            </thead>

            <tbody className="font-medium">
              {filtered.map((p, index) => (
                <tr key={p.id} className="hover:bg-gray-50 transition">
                  
                  <td className="py-3 px-4 border">
                    <input
                      type="checkbox"
                      checked={selected.includes(p.id)}
                      onChange={() => handleSelectRow(p.id)}
                      className="accent-blue-600"
                    />
                  </td>

                  <td className="py-3 px-5 border text-black">
                    {index + 1}
                  </td>

                  <td className="py-3 px-4 border text-black">
                    {editingId === p.id ? (
                      <input
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        className="border px-2 py-1 w-full rounded text-gray-700"
                      />
                    ) : (
                      p.name
                    )}
                  </td>

                  <td className="py-3 px-3 border text-center">
                    {editingId === p.id ? (
                      <>
                        <button
                          className="text-blue-600 font-semibold mr-2"
                          onClick={() => {
                            setProducts((prev) =>
                              prev.map((item) =>
                                item.id === p.id
                                  ? { ...item, name: editedName }
                                  : item
                              )
                            );
                            setEditingId(null);
                          }}
                        >
                          Update
                        </button>
                        <button
                          className="text-red-600 font-semibold"
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingId(p.id);
                          setEditedName(p.name);
                        }}
                        className="text-black hover:text-blue-600"
                      >
                        <Pencil size={20} />
                      </button>
                    )}
                  </td>

                  <td className="py-3 px-6 border text-center">
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="text-black hover:text-red-600"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>

                  <td className="border py-3 text-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm">
                      View Leads
                    </button>
                  </td>
                </tr>
              ))}

              <tr>
                <td colSpan="6" className="py-3 px-6 border">
                  <button
                    onClick={handleBulkDelete}
                    className="bg-red-600 text-white px-10 py-2 rounded-md hover:bg-red-700 shadow-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-[450px] rounded-md shadow-lg">

            <div className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b">
              <h3 className="text-lg font-semibold text-gray-700">
                Add Product
              </h3>

              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-6">
              <label className="block text-gray-700 mb-2">Product Name</label>
              <input
                type="text"
                value={newProduct}
                onChange={(e) => setNewProduct(e.target.value)}
                placeholder="Enter Product Name"
                className="w-full border border-gray-300 px-3 py-2 rounded text-gray-700"
              />
            </div>

            <div className="flex justify-end gap-3 px-6 py-4 bg-gray-100 border-t">
              <button
                onClick={handleAdd}
                className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
