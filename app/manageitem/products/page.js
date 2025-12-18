"use client";

import React, { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";

export default function ProductsPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Bandhani" },
    { id: 2, name: "Galaxy S1" },
    { id: 3, name: "Galaxy S2" },
    { id: 4, name: "Lenovo Ideapad" },
  ]);

  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddProduct = () => {
    if (!newProduct.trim()) {
      alert("Please enter product name");
      return;
    }

    const newItem = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      name: newProduct.trim(),
    };

    setProducts([...products, newItem]);
    setNewProduct("");
    setShowAddForm(false);
  };

  const handleSelectRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
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

  return (
    <div className="bg-[#f9f9f9] min-h-screen flex justify-center py-8">
      <div className="bg-white border border-[#d9d9d9] w-[95%] md:w-[90%] p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Products</h2>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded"
          >
            {showAddForm ? "Close" : "Add Product"}
          </button>
        </div>

        {showAddForm && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

            <div className="bg-white w-[90%] max-w-md rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.3)] p-6">

              <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2">
                Add New Product
              </h3>

              <label className="block mb-2 text-sm text-gray-700">
                Product Name
              </label>

              <input
                type="text"
                value={newProduct}
                onChange={(e) => setNewProduct(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded text-black mb-4"
                placeholder="Enter product name"
              />

              <div className="flex justify-end gap-3 mt-3">
                <button
                  className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </button>

                <button
                  className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded"
                  onClick={handleAddProduct}
                >
                  Save
                </button>
              </div>

            </div>

          </div>
        )}
        <div className="flex justify-end gap-2 mb-4">
          <input
            type="text"
            placeholder="Product Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border text-black border-[#d9d9d9] rounded-sm px-3 py-2 text-sm"
          />
        </div>

        <table className="w-full border-collapse text-gray-700">
          <thead>
            <tr className="bg-gray-200 text-gray-800 font-medium">
              <th className="border px-3 py-2">
                <input
                  type="checkbox"
                  checked={
                    selected.length === filtered.length && filtered.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </th>

              <th className="border px-3 py-2">SR. NO.</th>
              <th className="border px-3 py-2">PRODUCT NAME</th>
              <th className="border px-3 py-2 text-center">EDIT</th>
              <th className="border px-3 py-2 text-center">DELETE</th>
              <th className="border px-3 py-2 text-center">VIEW LEADS</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((p, index) => (
              <tr key={p.id} className="text-center hover:bg-gray-50 transition">
                <td className="border px-3 py-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(p.id)}
                    onChange={() => handleSelectRow(p.id)}
                  />
                </td>

                <td className="border px-3 py-2">{index + 1}</td>

                <td className="border px-3 py-2 text-left">
                  {editingId === p.id ? (
                    <input
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    p.name
                  )}
                </td>

                <td className="border px-3 py-2">
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
                      className="text-gray-600 hover:text-blue-600"
                      onClick={() => {
                        setEditingId(p.id);
                        setEditedName(p.name);
                      }}
                    >
                      <FaPen />
                    </button>
                  )}
                </td>

                <td className="border px-3 py-2">
                  <button
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleDelete(p.id)}
                  >
                    <FaTrash />
                  </button>
                </td>

                <td className="border px-3 py-2">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded">
                    View Leads
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4">
          <button
            onClick={handleBulkDelete}
            className="bg-red-600 text-white px-8 py-2 rounded hover:bg-red-700"
          >
            Delete ({selected.length})
          </button>
        </div>
      </div>
    </div>
  );
}
