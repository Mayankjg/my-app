"use client";

import React, { useState, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [errors, setErrors] = useState({});

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


  const validateCategory = (name) => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Category name is required";
    else if (name.length < 3)
      newErrors.name = "Category name must be at least 3 letters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleAddCategory = () => {
    if (!validateCategory(newCategory)) return;

    const newItem = {
      id: Date.now(),
      name: newCategory.trim(),
    };

    const updated = [...categories, newItem];
    saveCategories(updated);

    setNewCategory("");
    setShowAddModal(false);
  };


  const handleUpdateCategory = (id) => {
    if (!validateCategory(editedName)) return;

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


  const handleDeleteSelected = () => {
    if (selected.length === 0) return;

    if (confirm("Delete selected categories?")) {
      const updated = categories.filter((cat) => !selected.includes(cat.id));
      saveCategories(updated);
      setSelected([]);
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
            onClick={() => setShowAddModal(true)}
            className="bg-[#1b2b41] hover:bg-[#142336] text-white text-sm font-medium px-4 py-2 rounded"
          >
            Add Category
          </button>
        </div>

        <div className="-mx-6 border-b border-[#d9d9d9] mt-3 mb-7"></div>

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
                        onChange={(e) => {
                          setEditedName(e.target.value);
                          if (errors.name) setErrors({});
                        }}
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
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.name}
                          </p>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingId(cat.id);
                          setEditedName(cat.name);
                        }}
                        className="text-gray-700 hover:text-blue-600"
                      >
                        <Pencil size={16} />
                      </button>
                    )}
                  </td>

                  <td className="border p-2 text-center">
                    <button
                      onClick={() => handleDeleteSingle(cat.id)}
                      className="text-gray-700 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-4">
            <button
              onClick={handleDeleteSelected}
              className="bg-[#dc3545] hover:bg-[#bb2d3b] text-white text-sm px-8 py-2 rounded-sm"
            >
              Delete ({selected.length})
            </button>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white w-[500px] rounded-md shadow-lg">
            <div className="flex justify-between px-6 py-4 bg-gray-100 border-b">
              <h3 className="text-xl text-black font-semibold">Add Category</h3>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setErrors({});
                }}
                className="text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-6">
              <label className="block text-black mb-2">Category Name</label>

              <input
                type="text"
                value={newCategory}
                onChange={(e) => {
                  setNewCategory(e.target.value);
                  if (errors.name) setErrors({});
                }}
                className="w-full text-black border px-3 py-2 rounded"
              />

              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="flex justify-end gap-3 px-6 py-4 bg-gray-100 border-t">
              <button
                onClick={handleAddCategory}
                className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setErrors({});
                }}
                className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded"
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
