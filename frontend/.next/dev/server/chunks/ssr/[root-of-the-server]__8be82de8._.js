module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/manageitem/categories/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import React, { useState, useEffect } from "react";
// import { Pencil, Trash2 } from "lucide-react";
// export default function CategoriesPage() {
//   const [categories, setCategories] = useState([]);
//   const [selected, setSelected] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editingId, setEditingId] = useState(null);
//   const [editedName, setEditedName] = useState("");
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [newCategory, setNewCategory] = useState("");
//   const [errors, setErrors] = useState({});
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("categories") || "[]");
//     setCategories(saved);
//   }, []);
//   // Save data back to LocalStorage
//   const saveCategories = (list) => {
//     setCategories(list);
//     localStorage.setItem("categories", JSON.stringify(list));
//   };
//   const filteredCategories = categories.filter((cat) =>
//     cat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   const validateCategory = (name) => {
//     const newErrors = {};
//     if (!name.trim()) newErrors.name = "Category name is required";
//     else if (name.length < 3)
//       newErrors.name = "Category name must be at least 3 characters long";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
//   const handleAddCategory = () => {
//     if (!validateCategory(newCategory)) return;
//     const newItem = {
//       id: Date.now(),
//       name: newCategory.trim(),
//     };
//     const updated = [...categories, newItem];
//     saveCategories(updated);
//     setNewCategory("");
//     setShowAddModal(false);
//   };
//   const handleUpdateCategory = (id) => {
//     if (!validateCategory(editedName)) return;
//     const updated = categories.map((cat) =>
//       cat.id === id ? { ...cat, name: editedName.trim() } : cat
//     );
//     saveCategories(updated);
//     setEditingId(null);
//     setEditedName("");
//   };
//   const handleDeleteSingle = (id) => {
//     if (confirm("Are you sure?")) {
//       const updated = categories.filter((cat) => cat.id !== id);
//       saveCategories(updated);
//       setSelected((prev) => prev.filter((x) => x !== id));
//     }
//   };
//   const handleDeleteSelected = () => {
//     if (selected.length === 0) return;
//     if (confirm("Delete selected categories?")) {
//       const updated = categories.filter((cat) => !selected.includes(cat.id));
//       saveCategories(updated);
//       setSelected([]);
//     }
//   };
//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       setSelected(filteredCategories.map((cat) => cat.id));
//     } else {
//       setSelected([]);
//     }
//   };
//   const handleSelectRow = (id) => {
//     setSelected((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   };
//   return (
//     <div className="bg-[#f9f9f9] min-h-screen flex justify-center py-8">
//       <div className="bg-white border border-[#d9d9d9] w-[95%] md:w-[90%] p-6 rounded-lg shadow-sm">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold text-gray-700">Categories</h2>
//           <button
//             onClick={() => setShowAddModal(true)}
//             className="bg-[#1b2b41] hover:bg-[#142336] text-white text-sm font-medium px-4 py-2 rounded"
//           >
//             Add Category
//           </button>
//         </div>
//         <div className="-mx-6 border-b border-[#d9d9d9] mt-3 mb-7"></div>
//         <div className="flex justify-end gap-2 mb-4">
//           <input
//             type="text"
//             placeholder="Category Name"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border text-black border-[#d9d9d9] rounded-sm px-3 py-2 text-sm"
//           />
//         </div>
//         <div className="overflow-x-auto border border-[#d9d9d9] rounded-md">
//           <table className="w-full border-collapse text-sm">
//             <thead className="bg-[#f1f1f1] text-gray-800 font-semibold">
//               <tr>
//                 <th className="border p-2 w-12">
//                   <input
//                     type="checkbox"
//                     checked={
//                       selected.length === filteredCategories.length &&
//                       filteredCategories.length > 0
//                     }
//                     onChange={handleSelectAll}
//                   />
//                 </th>
//                 <th className="border p-2">SR. NO.</th>
//                 <th className="border p-2">CATEGORY NAME</th>
//                 <th className="border p-2 text-center">EDIT</th>
//                 <th className="border p-2 text-center">DELETE</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredCategories.map((cat, index) => (
//                 <tr key={cat.id} className="hover:bg-gray-50 text-gray-700">
//                   <td className="border p-2">
//                     <input
//                       type="checkbox"
//                       checked={selected.includes(cat.id)}
//                       onChange={() => handleSelectRow(cat.id)}
//                     />
//                   </td>
//                   <td className="border p-2">{index + 1}</td>
//                   <td className="border p-2">
//                     {editingId === cat.id ? (
//                       <input
//                         className="border px-2 py-1 w-full rounded"
//                         value={editedName}
//                         onChange={(e) => {
//                           setEditedName(e.target.value);
//                           if (errors.name) setErrors({});
//                         }}
//                       />
//                     ) : (
//                       cat.name
//                     )}
//                   </td>
//                   <td className="border p-2 text-center">
//                     {editingId === cat.id ? (
//                       <>
//                         <button
//                           className="text-blue-600 font-semibold mr-2"
//                           onClick={() => handleUpdateCategory(cat.id)}
//                         >
//                           Update
//                         </button>
//                         <button
//                           className="text-red-600 font-semibold"
//                           onClick={() => setEditingId(null)}
//                         >
//                           Cancel
//                         </button>
//                         {errors.name && (
//                           <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//                         )}
//                       </>
//                     ) : (
//                       <button
//                         onClick={() => {
//                           setEditingId(cat.id);
//                           setEditedName(cat.name);
//                         }}
//                         className="text-gray-700 hover:text-blue-600"
//                       >
//                         <Pencil size={16} />
//                       </button>
//                     )}
//                   </td>
//                   <td className="border p-2 text-center">
//                     <button
//                       onClick={() => handleDeleteSingle(cat.id)}
//                       className="text-gray-700 hover:text-red-600"
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="p-4">
//             <button
//               onClick={handleDeleteSelected}
//               className="bg-[#dc3545] hover:bg-[#bb2d3b] text-white text-sm px-8 py-2 rounded-sm"
//             >
//               Delete ({selected.length})
//             </button>
//           </div>
//         </div>
//       </div>
//       {showAddModal && (
//         <div
//           className="fixed inset-0 flex justify-center items-center z-[1000] bg-black bg-opacity-40 p-5"
//           onClick={() => {
//             setShowAddModal(false);
//             setErrors({});
//           }}
//         >
//           <div
//             className="bg-white p-8 border border-black rounded-lg w-full max-w-md shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h3 className="text-xl font-semibold bg-[#e5e9ec] mb-4 text-gray-900">
//               Add Category
//             </h3>
//             {errors.name && (
//               <p className="text-red-500 mb-3 text-sm">{errors.name}</p>
//             )}
//             <hr className="-mx-8 border-t border-gray-300 mt-4 mb-5" />
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Category Name
//             </label>
//             <input
//               type="text"
//               value={newCategory}
//               onChange={(e) => {
//                 setNewCategory(e.target.value);
//                 if (errors.name) setErrors({});
//               }}
//               className="w-full p-2.5 mb-4 text-black border border-gray-300 rounded-md pl-5"
//               placeholder="Enter category name"
//             />
//             <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-4">
//               <button
//                 onClick={() => {
//                   setShowAddModal(false);
//                   setErrors({});
//                 }}
//                 className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-md font-bold transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddCategory}
//                 className="w-full sm:w-auto bg-[#00a7cf] hover:bg-[#0094b8] text-white px-4 py-2.5 rounded-md font-bold transition-colors"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// "use client";
// import React, { useState, useEffect } from "react";
// import { Pencil, Trash2 } from "lucide-react";
// export default function CategoriesPage() {
//   const [categories, setCategories] = useState([]);
//   const [selected, setSelected] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editingId, setEditingId] = useState(null);
//   const [editedName, setEditedName] = useState("");
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [newCategory, setNewCategory] = useState("");
//   const [errors, setErrors] = useState({});
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("categories") || "[]");
//     setCategories(saved);
//   }, []);
//   const saveCategories = (list) => {
//     setCategories(list);
//     localStorage.setItem("categories", JSON.stringify(list));
//   };
//   const filteredCategories = categories.filter((cat) =>
//     cat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   const validateCategory = (name) => {
//     const newErrors = {};
//     if (!name.trim()) newErrors.name = "Category name is required";
//     else if (name.length < 3)
//       newErrors.name = "Category must be at least 3 characters";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
//   const handleAddCategory = () => {
//     if (!validateCategory(newCategory)) return;
//     const newItem = {
//       id: Date.now(),
//       name: newCategory.trim(),
//     };
//     const updated = [...categories, newItem];
//     saveCategories(updated);
//     setNewCategory("");
//     setShowAddForm(false);
//   };
//   const handleUpdateCategory = (id) => {
//     if (!validateCategory(editedName)) return;
//     const updated = categories.map((cat) =>
//       cat.id === id ? { ...cat, name: editedName.trim() } : cat
//     );
//     saveCategories(updated);
//     setEditingId(null);
//     setEditedName("");
//   };
//   const handleDeleteSingle = (id) => {
//     if (confirm("Are you sure?")) {
//       const updated = categories.filter((cat) => cat.id !== id);
//       saveCategories(updated);
//       setSelected((prev) => prev.filter((x) => x !== id));
//     }
//   };
//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       setSelected(filteredCategories.map((cat) => cat.id));
//     } else {
//       setSelected([]);
//     }
//   };
//   const handleDeleteSelected = () => {
//     if (selected.length === 0) return;
//     if (confirm("Delete selected categories?")) {
//       const updated = categories.filter((cat) => !selected.includes(cat.id));
//       saveCategories(updated);
//       setSelected([]);
//     }
//   };
//   return (
//     <div className="bg-[#f9f9f9] min-h-screen flex justify-center py-8">
//       <div className="bg-white border border-[#d9d9d9] w-[95%] md:w-[90%] p-6 rounded-lg shadow-sm">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-semibold text-gray-700">Categories</h2>
//           <button
//             onClick={() => setShowAddForm(!showAddForm)}
//             className="bg-[#1b2b41] hover:bg-[#142336] text-white text-sm font-medium px-4 py-2 rounded"
//           >
//             {showAddForm ? "Close" : "Add Category"}
//           </button>
//         </div>
//         {showAddForm && (
//           <div className="border border-gray-300 p-5 rounded mb-6 bg-[#f7f9fb]">
//             <h3 className="text-lg font-semibold mb-3 text-gray-800">Add New Category</h3>
//             <label className="block mb-2 text-sm text-gray-700">Category Name</label>
//             <input
//               type="text"
//               value={newCategory}
//               onChange={(e) => {
//                 setNewCategory(e.target.value);
//                 if (errors.name) setErrors({});
//               }}
//               className="w-full border border-gray-300 px-3 py-2 rounded text-black mb-2"
//               placeholder="Enter category name"
//             />
//             {errors.name && (
//               <p className="text-red-500 text-xs mb-2">{errors.name}</p>
//             )}
//             <div className="flex justify-end gap-3">
//               <button
//                 className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded"
//                 onClick={() => {
//                   setShowAddForm(false);
//                   setErrors({});
//                 }}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-[#00a7cf] hover:bg-[#0094b8] text-white px-5 py-2 rounded"
//                 onClick={handleAddCategory}
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         )}
//         <div className="flex justify-end gap-2 mb-4">
//           <input
//             type="text"
//             placeholder="Category Name"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border text-black border-[#d9d9d9] rounded-sm px-3 py-2 text-sm"
//           />
//         </div>
//         <div className="overflow-x-auto border border-[#d9d9d9] rounded-md">
//           <table className="w-full border-collapse text-sm">
//             <thead className="bg-[#f1f1f1] text-gray-800 font-semibold">
//               <tr>
//                 <th className="border p-2 w-12">
//                   <input
//                     type="checkbox"
//                     checked={
//                       selected.length === filteredCategories.length &&
//                       filteredCategories.length > 0
//                     }
//                     onChange={handleSelectAll}
//                   />
//                 </th>
//                 <th className="border p-2">SR. NO.</th>
//                 <th className="border p-2">CATEGORY NAME</th>
//                 <th className="border p-2 text-center">EDIT</th>
//                 <th className="border p-2 text-center">DELETE</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredCategories.map((cat, index) => (
//                 <tr key={cat.id} className="hover:bg-gray-50 text-gray-700">
//                   <td className="border p-2">
//                     <input
//                       type="checkbox"
//                       checked={selected.includes(cat.id)}
//                       onChange={() => handleSelectRow(cat.id)}
//                     />
//                   </td>
//                   <td className="border p-2">{index + 1}</td>
//                   <td className="border p-2">
//                     {editingId === cat.id ? (
//                       <input
//                         className="border px-2 py-1 w-full rounded"
//                         value={editedName}
//                         onChange={(e) => {
//                           setEditedName(e.target.value);
//                           if (errors.name) setErrors({});
//                         }}
//                       />
//                     ) : (
//                       cat.name
//                     )}
//                   </td>
//                   <td className="border p-2 text-center">
//                     {editingId === cat.id ? (
//                       <>
//                         <button
//                           className="text-blue-600 font-semibold mr-2"
//                           onClick={() => handleUpdateCategory(cat.id)}
//                         >
//                           Update
//                         </button>
//                         <button
//                           className="text-red-600 font-semibold"
//                           onClick={() => setEditingId(null)}
//                         >
//                           Cancel
//                         </button>
//                       </>
//                     ) : (
//                       <button
//                         onClick={() => {
//                           setEditingId(cat.id);
//                           setEditedName(cat.name);
//                         }}
//                         className="text-gray-700 hover:text-blue-600"
//                       >
//                         <Pencil size={16} />
//                       </button>
//                     )}
//                   </td>
//                   <td className="border p-2 text-center">
//                     <button
//                       onClick={() => handleDeleteSingle(cat.id)}
//                       className="text-gray-700 hover:text-red-600"
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="p-4">
//             <button
//               onClick={handleDeleteSelected}
//               className="bg-[#dc3545] hover:bg-[#bb2d3b] text-white text-sm px-8 py-2 rounded-sm"
//             >
//               Delete ({selected.length})
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>CategoriesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
"use client";
;
;
;
function CategoriesPage() {
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editedName, setEditedName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newCategory, setNewCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Load existing categories from localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = JSON.parse(localStorage.getItem("categories") || "[]");
        setCategories(saved);
    }, []);
    const saveCategories = (list)=>{
        setCategories(list);
        localStorage.setItem("categories", JSON.stringify(list));
    };
    const filteredCategories = categories.filter((cat)=>cat.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const validateCategory = (name)=>{
        const newErrors = {};
        if (!name.trim()) newErrors.name = "Category name is required";
        else if (name.length < 3) newErrors.name = "Category must be at least 3 characters";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleAddCategory = ()=>{
        if (!validateCategory(newCategory)) return;
        const newItem = {
            id: Date.now(),
            name: newCategory.trim()
        };
        const updated = [
            ...categories,
            newItem
        ];
        saveCategories(updated);
        setNewCategory("");
        setShowAddForm(false);
    };
    const handleUpdateCategory = (id)=>{
        if (!validateCategory(editedName)) return;
        const updated = categories.map((cat)=>cat.id === id ? {
                ...cat,
                name: editedName.trim()
            } : cat);
        saveCategories(updated);
        setEditingId(null);
        setEditedName("");
    };
    const handleDeleteSingle = (id)=>{
        if (confirm("Are you sure?")) {
            const updated = categories.filter((cat)=>cat.id !== id);
            saveCategories(updated);
            setSelected((prev)=>prev.filter((x)=>x !== id));
        }
    };
    const handleSelectAll = (e)=>{
        if (e.target.checked) {
            setSelected(filteredCategories.map((cat)=>cat.id));
        } else {
            setSelected([]);
        }
    };
    const handleSelectRow = (id)=>{
        setSelected((prev)=>prev.includes(id) ? prev.filter((x)=>x !== id) : [
                ...prev,
                id
            ]);
    };
    const handleDeleteSelected = ()=>{
        if (selected.length === 0) return;
        if (confirm("Delete selected categories?")) {
            const updated = categories.filter((cat)=>!selected.includes(cat.id));
            saveCategories(updated);
            setSelected([]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#f9f9f9] min-h-screen flex justify-center py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border border-[#d9d9d9] w-[95%] md:w-[90%] p-6 rounded-lg shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold text-gray-700",
                            children: "Categories"
                        }, void 0, false, {
                            fileName: "[project]/app/manageitem/categories/page.js",
                            lineNumber: 671,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAddForm(!showAddForm),
                            className: "bg-[#1b2b41] hover:bg-[#142336] text-white text-sm font-medium px-4 py-2 rounded",
                            children: showAddForm ? "Close" : "Add Category"
                        }, void 0, false, {
                            fileName: "[project]/app/manageitem/categories/page.js",
                            lineNumber: 673,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/manageitem/categories/page.js",
                    lineNumber: 670,
                    columnNumber: 9
                }, this),
                showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-gray-300 p-5 rounded mb-6 bg-[#f7f9fb]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-3 text-gray-800",
                            children: "Add New Category"
                        }, void 0, false, {
                            fileName: "[project]/app/manageitem/categories/page.js",
                            lineNumber: 684,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block mb-2 text-sm text-gray-700",
                            children: "Category Name"
                        }, void 0, false, {
                            fileName: "[project]/app/manageitem/categories/page.js",
                            lineNumber: 686,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: newCategory,
                            onChange: (e)=>{
                                setNewCategory(e.target.value);
                                if (errors.name) setErrors({});
                            },
                            className: "w-full border border-gray-300 px-3 py-2 rounded text-black mb-2",
                            placeholder: "Enter category name"
                        }, void 0, false, {
                            fileName: "[project]/app/manageitem/categories/page.js",
                            lineNumber: 687,
                            columnNumber: 13
                        }, this),
                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-500 text-xs mb-2",
                            children: errors.name
                        }, void 0, false, {
                            fileName: "[project]/app/manageitem/categories/page.js",
                            lineNumber: 699,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded",
                                    onClick: ()=>{
                                        setShowAddForm(false);
                                        setErrors({});
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/manageitem/categories/page.js",
                                    lineNumber: 703,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#00a7cf] hover:bg-[#0094b8] text-white px-5 py-2 rounded",
                                    onClick: handleAddCategory,
                                    children: "Save"
                                }, void 0, false, {
                                    fileName: "[project]/app/manageitem/categories/page.js",
                                    lineNumber: 713,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/manageitem/categories/page.js",
                            lineNumber: 702,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/manageitem/categories/page.js",
                    lineNumber: 683,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2 mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Category Name",
                        value: searchTerm,
                        onChange: (e)=>setSearchTerm(e.target.value),
                        className: "border text-black border-[#d9d9d9] rounded-sm px-3 py-2 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/app/manageitem/categories/page.js",
                        lineNumber: 725,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/manageitem/categories/page.js",
                    lineNumber: 724,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto border border-[#d9d9d9] rounded-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full border-collapse text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-[#f1f1f1] text-gray-800 font-semibold",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border p-2 w-12",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: selected.length === filteredCategories.length && filteredCategories.length > 0,
                                                    onChange: handleSelectAll
                                                }, void 0, false, {
                                                    fileName: "[project]/app/manageitem/categories/page.js",
                                                    lineNumber: 740,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/manageitem/categories/page.js",
                                                lineNumber: 739,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border p-2",
                                                children: "SR. NO."
                                            }, void 0, false, {
                                                fileName: "[project]/app/manageitem/categories/page.js",
                                                lineNumber: 749,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border p-2",
                                                children: "CATEGORY NAME"
                                            }, void 0, false, {
                                                fileName: "[project]/app/manageitem/categories/page.js",
                                                lineNumber: 750,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border p-2 text-center",
                                                children: "EDIT"
                                            }, void 0, false, {
                                                fileName: "[project]/app/manageitem/categories/page.js",
                                                lineNumber: 751,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border p-2 text-center",
                                                children: "DELETE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/manageitem/categories/page.js",
                                                lineNumber: 752,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border p-2 text-center",
                                                children: "VIEW LEADS"
                                            }, void 0, false, {
                                                fileName: "[project]/app/manageitem/categories/page.js",
                                                lineNumber: 755,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/manageitem/categories/page.js",
                                        lineNumber: 738,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/manageitem/categories/page.js",
                                    lineNumber: 737,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: filteredCategories.map((cat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-gray-50 text-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border p-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selected.includes(cat.id),
                                                        onChange: ()=>handleSelectRow(cat.id)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/manageitem/categories/page.js",
                                                        lineNumber: 763,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/manageitem/categories/page.js",
                                                    lineNumber: 762,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border p-2",
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/app/manageitem/categories/page.js",
                                                    lineNumber: 770,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border p-2",
                                                    children: editingId === cat.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "border px-2 py-1 w-full rounded",
                                                        value: editedName,
                                                        onChange: (e)=>{
                                                            setEditedName(e.target.value);
                                                            if (errors.name) setErrors({});
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/manageitem/categories/page.js",
                                                        lineNumber: 774,
                                                        columnNumber: 23
                                                    }, this) : cat.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/manageitem/categories/page.js",
                                                    lineNumber: 772,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border p-2 text-center",
                                                    children: editingId === cat.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-blue-600 font-semibold mr-2",
                                                                onClick: ()=>handleUpdateCategory(cat.id),
                                                                children: "Update"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/manageitem/categories/page.js",
                                                                lineNumber: 790,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-red-600 font-semibold",
                                                                onClick: ()=>setEditingId(null),
                                                                children: "Cancel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/manageitem/categories/page.js",
                                                                lineNumber: 796,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setEditingId(cat.id);
                                                            setEditedName(cat.name);
                                                        },
                                                        className: "text-gray-700 hover:text-blue-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/manageitem/categories/page.js",
                                                            lineNumber: 811,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/manageitem/categories/page.js",
                                                        lineNumber: 804,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/manageitem/categories/page.js",
                                                    lineNumber: 787,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border p-2 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteSingle(cat.id),
                                                        className: "text-gray-700 hover:text-red-600",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/manageitem/categories/page.js",
                                                            lineNumber: 821,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/manageitem/categories/page.js",
                                                        lineNumber: 817,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/manageitem/categories/page.js",
                                                    lineNumber: 816,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border p-2 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm",
                                                        children: "View Leads"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/manageitem/categories/page.js",
                                                        lineNumber: 827,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/manageitem/categories/page.js",
                                                    lineNumber: 826,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, cat.id, true, {
                                            fileName: "[project]/app/manageitem/categories/page.js",
                                            lineNumber: 761,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/manageitem/categories/page.js",
                                    lineNumber: 759,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/manageitem/categories/page.js",
                            lineNumber: 736,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDeleteSelected,
                                className: "bg-[#dc3545] hover:bg-[#bb2d3b] text-white text-sm px-8 py-2 rounded-sm",
                                children: [
                                    "Delete (",
                                    selected.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/manageitem/categories/page.js",
                                lineNumber: 838,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/manageitem/categories/page.js",
                            lineNumber: 837,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/manageitem/categories/page.js",
                    lineNumber: 735,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/manageitem/categories/page.js",
            lineNumber: 667,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/manageitem/categories/page.js",
        lineNumber: 666,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "hasA11yProp",
    ()=>hasA11yProp,
    "mergeClasses",
    ()=>mergeClasses,
    "toCamelCase",
    ()=>toCamelCase,
    "toKebabCase",
    ()=>toKebabCase,
    "toPascalCase",
    ()=>toPascalCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Pencil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
            key: "1a8usu"
        }
    ],
    [
        "path",
        {
            d: "m15 5 4 4",
            key: "1mk7zo"
        }
    ]
];
const Pencil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("pencil", __iconNode);
;
 //# sourceMappingURL=pencil.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pencil",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Trash2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 11v6",
            key: "nco0om"
        }
    ],
    [
        "path",
        {
            d: "M14 11v6",
            key: "outv1u"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }
    ],
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8be82de8._.js.map