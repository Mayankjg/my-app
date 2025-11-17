// "use client";

// import React, { useState } from "react";
// import { Pencil, Trash2 } from "lucide-react";

// export default function CategoriesPage() {
//   const [categories, setCategories] = useState([
//     { id: 1, name: "Electronics" },
//     { id: 2, name: "Food" },
//     { id: 3, name: "Gadgets" },
//     { id: 4, name: "Laptops" },
//     { id: 5, name: "Mobile Phones" },
//     { id: 6, name: "Sarees" },
//     { id: 7, name: "Home Appliances" },
//   ]);

//   const [selected, setSelected] = useState([]);

//   // ✅ Handle select all
//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       setSelected(categories.map((cat) => cat.id));
//     } else {
//       setSelected([]);
//     }
//   };

//   // ✅ Handle single row selection
//   const handleSelectRow = (id) => {
//     setSelected((prev) =>
//       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
//     );
//   };

//   // ✅ Handle delete
//   const handleDeleteSelected = () => {
//     if (selected.length === 0) return;
//     setCategories((prev) => prev.filter((cat) => !selected.includes(cat.id)));
//     setSelected([]);
//   };

//   return (
//     <div className="bg-[#f9f9f9] min-h-screen flex justify-center py-8">
//       <div className="bg-white border border-[#d9d9d9] w-[95%] md:w-[90%] p-6 rounded-lg shadow-sm">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold text-gray-700">Categories</h2>
//           <button className="bg-[#1b2b41] hover:bg-[#142336] text-white text-sm font-medium px-4 py-2 rounded">
//             Add Category
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="-mx-6 border-b border-[#d9d9d9] mt-3 mb-7"></div>

//         {/* Search */}
//         <div className="flex justify-end items-center gap-2 mb-4">
//           <input
//             type="text"
//             placeholder="Category Name"
//             className="border border-[#d9d9d9] rounded-sm px-3 py-2 text-sm focus:outline-none text-gray-700"
//           />
//           <button className="bg-[#00b4d8] hover:bg-[#0096c7] text-white text-sm font-medium px-4 py-2 rounded-sm">
//             Search
//           </button>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto border border-[#d9d9d9] rounded-md">
//           <table className="w-full border-collapse text-sm">
//             <thead className="bg-[#f1f1f1] text-gray-800 font-semibold">
//               <tr>
//                 <th className="border border-[#d9d9d9] p-2 text-left w-12">
//                   <input
//                     type="checkbox"
//                     checked={
//                       selected.length === categories.length &&
//                       categories.length > 0
//                     }
//                     onChange={handleSelectAll}
//                   />
//                 </th>
//                 <th className="border border-[#d9d9d9] p-2 text-left">
//                   SR. NO.
//                 </th>
//                 <th className="border border-[#d9d9d9] p-2 text-left">
//                   CATEGORY NAME
//                 </th>
//                 <th className="border border-[#d9d9d9] p-2 text-center">
//                   EDIT
//                 </th>
//                 <th className="border border-[#d9d9d9] p-2 text-center">
//                   DELETE
//                 </th>
//                 <th className="border border-[#d9d9d9] p-2 text-center">
//                   VIEW LEADS
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {categories.map((cat, index) => (
//                 <tr
//                   key={cat.id}
//                   className="text-gray-700 hover:bg-gray-50 transition"
//                 >
//                   <td className="border border-[#d9d9d9] p-2 text-left">
//                     <input
//                       type="checkbox"
//                       checked={selected.includes(cat.id)}
//                       onChange={() => handleSelectRow(cat.id)}
//                     />
//                   </td>
//                   <td className="border border-[#d9d9d9] p-2">{index + 1}</td>
//                   <td className="border border-[#d9d9d9] p-2">{cat.name}</td>
//                   <td className="border border-[#d9d9d9] p-2 text-center">
//                     <button className="text-gray-700 hover:text-blue-600">
//                       <Pencil size={16} />
//                     </button>
//                   </td>
//                   <td className="border border-[#d9d9d9] p-2 text-center">
//                     <button className="text-gray-700 hover:text-red-600">
//                       <Trash2 size={16} />
//                     </button>
//                   </td>
//                   <td className="border border-[#d9d9d9] p-2 text-center">
//                     <button className="bg-[#dc3545] hover:bg-[#bb2d3b] text-white text-sm px-4 py-1 rounded-sm">
//                       View Leads
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Bottom Delete Button */}
//           <div className="p-4">
//             <button
//               onClick={handleDeleteSelected}
//               className="bg-[#dc3545] hover:bg-[#bb2d3b] text-white text-sm font-medium px-8 py-2 rounded-sm"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import { Pencil, Trash2, X } from "lucide-react";

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
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);

  // Filter categories based on search
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle select all
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(filteredCategories.map((cat) => cat.id));
    } else {
      setSelected([]);
    }
  };

  // Handle single row selection
  const handleSelectRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Add new category
  const handleAddCategory = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (newCategoryName.trim() === "") {
      alert("Please enter a category name");
      return;
    }
    const newCategory = {
      id: Math.max(...categories.map((c) => c.id), 0) + 1,
      name: newCategoryName.trim(),
    };
    setCategories([...categories, newCategory]);
    setNewCategoryName("");
    setShowAddModal(false);
  };

  // Edit category
  const handleEditClick = (category) => {
    setEditingCategory(category);
    setShowEditModal(true);
  };

  const handleUpdateCategory = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (editingCategory.name.trim() === "") {
      alert("Please enter a category name");
      return;
    }
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === editingCategory.id
          ? { ...cat, name: editingCategory.name.trim() }
          : cat
      )
    );
    setShowEditModal(false);
    setEditingCategory(null);
  };

  // Delete single category
  const handleDeleteSingle = (id) => {
    if (confirm("Are you sure you want to delete this category?")) {
      setCategories((prev) => prev.filter((cat) => cat.id !== id));
      setSelected((prev) => prev.filter((item) => item !== id));
    }
  };

  // Delete selected categories
  const handleDeleteSelected = () => {
    if (selected.length === 0) {
      alert("Please select categories to delete");
      return;
    }
    if (confirm(`Are you sure you want to delete ${selected.length} category(ies)?`)) {
      setCategories((prev) => prev.filter((cat) => !selected.includes(cat.id)));
      setSelected([]);
    }
  };

  // Handle search
  const handleSearch = () => {
    // Search is already filtered in real-time
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen flex justify-center py-8">
      <div className="bg-white border border-[#d9d9d9] w-[95%] md:w-[90%] p-6 rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Categories</h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#1b2b41] hover:bg-[#142336] text-white text-sm font-medium px-4 py-2 rounded"
          >
            Add Category
          </button>
        </div>

        {/* Divider */}
        <div className="-mx-6 border-b border-[#d9d9d9] mt-3 mb-7"></div>

        {/* Search */}
        <div className="flex justify-end items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Category Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-[#d9d9d9] rounded-sm px-3 py-2 text-sm focus:outline-none text-gray-700"
          />
          <button
            onClick={handleSearch}
            className="bg-[#00b4d8] hover:bg-[#0096c7] text-white text-sm font-medium px-4 py-2 rounded-sm"
          >
            Search
          </button>
        </div>

        {/* Table */}
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
                <th className="border border-[#d9d9d9] p-2 text-left">
                  SR. NO.
                </th>
                <th className="border border-[#d9d9d9] p-2 text-left">
                  CATEGORY NAME
                </th>
                <th className="border border-[#d9d9d9] p-2 text-center">
                  EDIT
                </th>
                <th className="border border-[#d9d9d9] p-2 text-center">
                  DELETE
                </th>
                <th className="border border-[#d9d9d9] p-2 text-center">
                  VIEW LEADS
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((cat, index) => (
                  <tr
                    key={cat.id}
                    className="text-gray-700 hover:bg-gray-50 transition"
                  >
                    <td className="border border-[#d9d9d9] p-2 text-left">
                      <input
                        type="checkbox"
                        checked={selected.includes(cat.id)}
                        onChange={() => handleSelectRow(cat.id)}
                      />
                    </td>
                    <td className="border border-[#d9d9d9] p-2">{index + 1}</td>
                    <td className="border border-[#d9d9d9] p-2">{cat.name}</td>
                    <td className="border border-[#d9d9d9] p-2 text-center">
                      <button
                        onClick={() => handleEditClick(cat)}
                        className="text-gray-700 hover:text-blue-600"
                      >
                        <Pencil size={16} />
                      </button>
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
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="border border-[#d9d9d9] p-4 text-center text-gray-500"
                  >
                    No categories found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Bottom Delete Button */}
          <div className="p-4">
            <button
              onClick={handleDeleteSelected}
              disabled={selected.length === 0}
              className={`text-sm font-medium px-8 py-2 rounded-sm ${
                selected.length === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#dc3545] hover:bg-[#bb2d3b] text-white"
              }`}
            >
              Delete ({selected.length})
            </button>
          </div>
        </div>
      </div>

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Add New Category
              </h3>
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setNewCategoryName("");
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter category name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddCategory(e);
                }
              }}
              className="w-full border border-[#d9d9d9] rounded px-3 py-2 text-sm focus:outline-none text-gray-700 mb-4"
              autoFocus
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowAddModal(false);
                  setNewCategoryName("");
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-sm font-medium px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleAddCategory(e);
                }}
                className="bg-[#1b2b41] hover:bg-[#142336] text-white text-sm font-medium px-4 py-2 rounded"
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Category Modal */}
      {showEditModal && editingCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Edit Category
              </h3>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setEditingCategory(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter category name"
              value={editingCategory.name}
              onChange={(e) =>
                setEditingCategory({ ...editingCategory, name: e.target.value })
              }
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleUpdateCategory(e);
                }
              }}
              className="w-full border border-[#d9d9d9] rounded px-3 py-2 text-sm focus:outline-none text-gray-700 mb-4"
              autoFocus
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setEditingCategory(null);
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-sm font-medium px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleUpdateCategory(e);
                }}
                className="bg-[#00b4d8] hover:bg-[#0096c7] text-white text-sm font-medium px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}