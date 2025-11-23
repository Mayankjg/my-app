"use client";

import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics" },
    { id: 2, name: "Food" },
    { id: 3, name: "Gadgets" },
    { id: 4, name: "Laptops" },
    { id: 5, name: "Mobile Phones" },
    { id: 6, name: "Sarees" },
    { id: 7, name: "Home Appliances" },
  ]);

  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");


  const [showAddModal, setShowAddModal] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const handleDeleteSingle = (id) => {
    if (confirm("Are you sure?")) {
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
      setSelected((prev) => prev.filter((x) => x !== id));
    }
  };

  const handleAddCategory = () => {
    if (newCategory.trim() === "") {
      alert("Please enter category name");
      return;
    }
    const newItem = {
      id: Math.max(...categories.map((c) => c.id), 0) + 1,
      name: newCategory.trim(),
    };
    setCategories([...categories, newItem]);
    setNewCategory("");
    setShowAddModal(false);
  };

  const handleDeleteSelected = () => {
    if (selected.length === 0) return;
    if (confirm("Delete selected categories?")) {
      setCategories((prev) => prev.filter((cat) => !selected.includes(cat.id)));
      setSelected([]);
    }
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

 
        <div className="flex justify-end items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Category Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-[#d9d9d9] rounded-sm px-3 py-2 text-sm focus:outline-none text-gray-700"
          />
          <button className="bg-[#00b4d8] hover:bg-[#0096c7] text-white text-sm font-medium px-4 py-2 rounded-sm">
            Search
          </button>
        </div>

 
        <div className="overflow-x-auto border border-[#d9d9d9] rounded-md">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-[#f1f1f1] text-gray-800 font-semibold">
              <tr>
                <th className="border border-[#d9d9d9] p-2 text-left w-12">
                  <input
                    type="checkbox"
                    checked={
                      selected.length === filteredCategories.length &&
                      filteredCategories.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="border border-[#d9d9d9] p-2">SR. NO.</th>
                <th className="border border-[#d9d9d9] p-2">CATEGORY NAME</th>
                <th className="border border-[#d9d9d9] p-2 text-center">EDIT</th>
                <th className="border border-[#d9d9d9] p-2 text-center">DELETE</th>
                <th className="border border-[#d9d9d9] p-2 text-center">VIEW LEADS</th>
              </tr>
            </thead>

            <tbody>
              {filteredCategories.map((cat, index) => (
                <tr key={cat.id} className="hover:bg-gray-50 text-gray-700">
                  <td className="border border-[#d9d9d9] p-2">
                    <input
                      type="checkbox"
                      checked={selected.includes(cat.id)}
                      onChange={() => handleSelectRow(cat.id)}
                    />
                  </td>

                  <td className="border border-[#d9d9d9] p-2">{index + 1}</td>

                  <td className="border border-[#d9d9d9] p-2">
                    {editingId === cat.id ? (
                      <input
                        className="border px-2 py-1 w-full rounded text-gray-700"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                      />
                    ) : (
                      cat.name
                    )}
                  </td>


                  <td className="border border-[#d9d9d9] p-2 text-center">
                    {editingId === cat.id ? (
                      <>
                        <button
                          className="text-blue-600 font-semibold mr-2"
                          onClick={() => {
                            setCategories((prev) =>
                              prev.map((c) =>
                                c.id === cat.id
                                  ? { ...c, name: editedName }
                                  : c
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
                          setEditingId(cat.id);
                          setEditedName(cat.name);
                        }}
                        className="text-gray-700 hover:text-blue-600"
                      >
                        <Pencil size={16} />
                      </button>
                    )}
                  </td>

              
                  <td className="border border-[#d9d9d9] p-2 text-center">
                    <button
                      onClick={() => handleDeleteSingle(cat.id)}
                      className="text-gray-700 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>

            
                  <td className="border border-[#d9d9d9] p-2 text-center">
                    <button className="bg-[#dc3545] hover:bg-[#bb2d3b] text-white text-sm px-4 py-1 rounded-sm">
                      View Leads
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

            <div className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b">
              <h3 className="text-xl font-semibold text-gray-700">Add Category</h3>

              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-6">
              <label className="block text-gray-700 mb-2">Category Name</label>

              <input
                type="text"
                placeholder="Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded text-gray-700"
              />
            </div>

            <div className="flex justify-end gap-3 px-6 py-4 bg-gray-100 border-t">
              <button
                onClick={handleAddCategory}
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
