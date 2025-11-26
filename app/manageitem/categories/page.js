"use client";

import React, { useState, useEffect } from "react";
import { FaPen, FaTrash } from "react-icons/fa";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("categories") || "[]");
    setCategories(saved);
  }, []);

  const saveCategories = (list) => {
    setCategories(list);
    localStorage.setItem("categories", JSON.stringify(list));
  };

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCategory = () => {
    if (!newCategory.trim()) {
      alert("Please enter category name");
      return;
    }

    const newItem = {
      id: Date.now(),
      name: newCategory.trim(),
    };

    const updated = [...categories, newItem];
    saveCategories(updated);

    setNewCategory("");
    setShowAddForm(false);
  };

  const handleUpdateCategory = (id) => {
    const updated = categories.map((cat) =>
      cat.id === id ? { ...cat, name: editedName.trim() } : cat
    );

    saveCategories(updated);
    setEditingId(null);
    setEditedName("");
  };

  const handleDeleteSingle = (id) => {
    if (confirm("Are you sure?")) {
      const updated = categories.filter((cat) => cat.id !== id);
      saveCategories(updated);
      setSelected((prev) => prev.filter((x) => x !== id));
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(filteredCategories.map((cat) => cat.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelectRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen flex justify-center py-8">
      <div className="bg-white border border-[#d9d9d9] w-[95%] md:w-[90%] p-6 rounded-lg shadow-sm">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Categories</h2>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded"
          >
            {showAddForm ? "Close" : "Add Category"}
          </button>
        </div>

        {showAddForm && (
          <div className="border border-gray-300 p-5 rounded mb-6 bg-[#f7f9fb]">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Add New Category</h3>

            <label className="block mb-2 text-sm text-gray-700">Category Name</label>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded text-black mb-2"
              placeholder="Enter category name"
            />

            <div className="flex justify-end gap-3">
              <button
                className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded"
                onClick={() => setShowAddForm(false)}
              >
                Cancel
              </button>

              <button
                className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded"
                onClick={handleAddCategory}
              >
                Save
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-2 mb-4">
          <input
            type="text"
            placeholder="Category Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border text-black border-[#d9d9d9] rounded-sm px-3 py-2 text-sm"
          />
        </div>


        <div className="overflow-x-auto border border-[#d9d9d9] rounded-md">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-[#f1f1f1] text-gray-800 font-semibold">
              <tr>
                <th className="border p-2 w-12">
                  <input
                    type="checkbox"
                    checked={
                      selected.length === filteredCategories.length &&
                      filteredCategories.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="border p-2">SR. NO.</th>
                <th className="border p-2">CATEGORY NAME</th>
                <th className="border p-2 text-center">EDIT</th>
                <th className="border p-2 text-center">DELETE</th>
                <th className="border p-2 text-center">VIEW LEADS</th>
              </tr>
            </thead>

            <tbody>
              {filteredCategories.map((cat, index) => (
                <tr key={cat.id} className="hover:bg-gray-50 text-gray-700">

                  <td className="border p-2">
                    <input
                      type="checkbox"
                      checked={selected.includes(cat.id)}
                      onChange={() => handleSelectRow(cat.id)}
                    />
                  </td>

                  <td className="border p-2">{index + 1}</td>

                  <td className="border p-2">
                    {editingId === cat.id ? (
                      <input
                        className="border px-2 py-1 w-full rounded"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                      />
                    ) : (
                      cat.name
                    )}
                  </td>

                  <td className="border p-2 text-center">
                    {editingId === cat.id ? (
                      <>
                        <button
                          className="text-blue-600 font-semibold mr-2"
                          onClick={() => handleUpdateCategory(cat.id)}
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
                          setEditingId(cat.id);
                          setEditedName(cat.name);
                        }}
                      >
                        <FaPen />
                      </button>
                    )}
                  </td>

                  <td className="border p-2 text-center">
                    <button
                      onClick={() => handleDeleteSingle(cat.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>

                  <td className="border p-2 text-center">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm">
                      View Leads
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-4">
            <button
              onClick={() => handleDeleteSelected()}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-sm"
            >
              Delete ({selected.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
