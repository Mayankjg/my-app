module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/newsletter/ContactList/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// export default function ContactList() {
//   const router = useRouter();
//   const [contacts, setContacts] = useState([
//     { id: 1, name: "Pratik", email: "and.test.21990@gmail.com", product: "All" },
//     { id: 2, name: "raj mistry", email: "rajmistry123@gmail.com", product: "All" },
//     { id: 3, name: "Raj mistry", email: "tenacioustechiestest@gmail.com", product: "All" },
//     { id: 4, name: "Raj Mistry", email: "rajmistry0054@gmail.com", product: "All" },
//     { id: 5, name: "Krunal Mendapara", email: "krunalmendapara88@gmail.com", product: "All" },
//   ]);
//   const [selectedContacts, setSelectedContacts] = useState([]);
//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       setSelectedContacts(contacts.map(c => c.id));
//     } else {
//       setSelectedContacts([]);
//     }
//   };
//   const handleSelectContact = (id) => {
//     if (selectedContacts.includes(id)) {
//       setSelectedContacts(selectedContacts.filter(cId => cId !== id));
//     } else {
//       setSelectedContacts([...selectedContacts, id]);
//     }
//   };
//   const handleDelete = (id) => {
//     if (confirm('Are you sure you want to delete this contact?')) {
//       setContacts(contacts.filter(c => c.id !== id));
//     }
//   };
//   const handleAddContacts = () => {
//     router.push('/newsletter/ImportContacts');
//   };
//   return (
//     <div className="w-full min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//           {/* Header */}
//           <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
//             <h1 className="text-xl font-normal text-gray-700">
//               Contact <span className="font-semibold">List</span>
//             </h1>
//             <button
//               onClick={handleAddContacts}
//               className="bg-[#2c3e50] text-white px-6 py-2 rounded text-sm hover:bg-[#1a252f] transition-colors"
//             >
//               Add Contacts
//             </button>
//           </div>
//           {/* Note */}
//           <div className="px-6 py-4 bg-gray-50">
//             <p className="text-sm">
//               <span className="text-red-600 font-semibold">Note :</span>{" "}
//               <span className="text-red-600">Unsubscribe User(s) will not display in this List.</span>
//             </p>
//           </div>
//           {/* Table */}
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-100 border-b border-gray-200">
//                   <th className="py-3 px-4 text-left w-12">
//                     <input
//                       type="checkbox"
//                       onChange={handleSelectAll}
//                       checked={selectedContacts.length === contacts.length}
//                       className="w-4 h-4 cursor-pointer"
//                     />
//                   </th>
//                   <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase">
//                     SR NO.
//                   </th>
//                   <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase">
//                     NAME
//                   </th>
//                   <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase">
//                     EMAIL
//                   </th>
//                   <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase">
//                     PRODUCT
//                   </th>
//                   <th className="py-3 px-4 text-center text-sm font-semibold text-gray-600 uppercase">
//                     DELETE
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white">
//                 {contacts.map((contact, index) => (
//                   <tr key={contact.id} className="border-b border-gray-200 hover:bg-gray-50">
//                     <td className="py-3 px-4">
//                       <input
//                         type="checkbox"
//                         checked={selectedContacts.includes(contact.id)}
//                         onChange={() => handleSelectContact(contact.id)}
//                         className="w-4 h-4 cursor-pointer"
//                       />
//                     </td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{index + 1}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{contact.name}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{contact.email}</td>
//                     <td className="py-3 px-4 text-sm text-gray-600">{contact.product}</td>
//                     <td className="py-3 px-4 text-center">
//                       <button
//                         onClick={() => handleDelete(contact.id)}
//                         className="text-gray-600 hover:text-red-600 transition-colors"
//                       >
//                         <svg
//                           width="18"
//                           height="18"
//                           viewBox="0 0 24 24"
//                           fill="currentColor"
//                           className="inline-block"
//                         >
//                           <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
//                         </svg>
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>ContactListDesign
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ContactListDesign() {
    const [contacts, setContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            name: "Pratik",
            email: "and.test.21990@gmail.com",
            product: "All"
        },
        {
            id: 2,
            name: "raj mistry",
            email: "rajmistry123@gmail.com",
            product: "All"
        },
        {
            id: 3,
            name: "Raj mistry",
            email: "tenacioustechiestest@gmail.com",
            product: "All"
        },
        {
            id: 4,
            name: "Raj Mistry",
            email: "rajmistry0054@gmail.com",
            product: "All"
        },
        {
            id: 5,
            name: "Krunal Mendapara",
            email: "krunalmendapara88@gmail.com",
            product: "All"
        },
        {
            id: 6,
            name: "Tenacious Techies",
            email: "tenacioustechies@gmail.com",
            product: "All"
        },
        {
            id: 7,
            name: "Tenacious",
            email: "tenacioustechies@gmail.com",
            product: "All"
        },
        {
            id: 8,
            name: "Rock",
            email: "rocky@gmail.com",
            product: "All"
        },
        {
            id: 9,
            name: "John",
            email: "John@gmail.com",
            product: "All"
        },
        {
            id: 10,
            name: "fgfg",
            email: "123@gmail.com",
            product: "All"
        },
        {
            id: 11,
            name: "damana",
            email: "testing@tenacioustechies.com",
            product: "All"
        },
        {
            id: 12,
            name: "Test angel",
            email: "testangel00@gmail.com",
            product: "All"
        },
        {
            id: 13,
            name: "Tenacious sales",
            email: "noreply@tenacioussales.com",
            product: "All"
        },
        {
            id: 14,
            name: "MPL1",
            email: "mpl1@gmail.com",
            product: "Bandhan"
        },
        {
            id: 15,
            name: "MPL",
            email: "mpl@gmail.com",
            product: "Galaxy S1"
        },
        {
            id: 16,
            name: "Sujit",
            email: "sujit@gmail.com",
            product: "Galaxy S1"
        },
        {
            id: 17,
            name: "Mayank",
            email: "xyz@gmail.com",
            product: "Galaxy S1"
        },
        {
            id: 18,
            name: "Sujit",
            email: "sujit@gmail.com",
            product: "hi"
        }
    ]);
    const [selectedContacts, setSelectedContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleSelectAll = (e)=>{
        if (e.target.checked) {
            setSelectedContacts(contacts.map((c)=>c.id));
        } else {
            setSelectedContacts([]);
        }
    };
    const handleSelectContact = (id)=>{
        if (selectedContacts.includes(id)) {
            setSelectedContacts(selectedContacts.filter((cId)=>cId !== id));
        } else {
            setSelectedContacts([
                ...selectedContacts,
                id
            ]);
        }
    };
    const handleDelete = (id)=>{
        if (confirm('Are you sure you want to delete this contact?')) {
            setContacts(contacts.filter((c)=>c.id !== id));
        }
    };
    const handleBulkDelete = ()=>{
        if (selectedContacts.length === 0) {
            alert('Please select contacts to delete');
            return;
        }
        if (confirm(`Are you sure you want to delete ${selectedContacts.length} contact(s)?`)) {
            setContacts(contacts.filter((c)=>!selectedContacts.includes(c.id)));
            setSelectedContacts([]);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-gray-50 p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-sm border border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-6 py-4 border-b border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-normal text-gray-700",
                                children: [
                                    "Contact ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "List"
                                    }, void 0, false, {
                                        fileName: "[project]/app/newsletter/ContactList/page.js",
                                        lineNumber: 211,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/newsletter/ContactList/page.js",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-[#2c3e50] text-white px-6 py-2 rounded text-sm hover:bg-[#1a252f] transition-colors",
                                children: "Add Contacts"
                            }, void 0, false, {
                                fileName: "[project]/app/newsletter/ContactList/page.js",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/newsletter/ContactList/page.js",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 bg-gray-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-red-600 font-semibold",
                                    children: "Note :"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/ContactList/page.js",
                                    lineNumber: 221,
                                    columnNumber: 15
                                }, this),
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-red-600",
                                    children: "Unsubscribe User(s) will not display in this List."
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/ContactList/page.js",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/ContactList/page.js",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/newsletter/ContactList/page.js",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-gray-100 border-b border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-left w-12",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    onChange: handleSelectAll,
                                                    checked: selectedContacts.length === contacts.length && contacts.length > 0,
                                                    className: "w-4 h-4 cursor-pointer"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/ContactList/page.js",
                                                    lineNumber: 232,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/ContactList/page.js",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase",
                                                children: "SR NO."
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/ContactList/page.js",
                                                lineNumber: 239,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase",
                                                children: "NAME"
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/ContactList/page.js",
                                                lineNumber: 242,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase",
                                                children: "EMAIL"
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/ContactList/page.js",
                                                lineNumber: 245,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-left text-sm font-semibold text-gray-600 uppercase",
                                                children: "PRODUCT"
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/ContactList/page.js",
                                                lineNumber: 248,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-center text-sm font-semibold text-gray-600 uppercase",
                                                children: "DELETE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/ContactList/page.js",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/newsletter/ContactList/page.js",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/ContactList/page.js",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "bg-white",
                                    children: contacts.map((contact, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-b border-gray-200 hover:bg-gray-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selectedContacts.includes(contact.id),
                                                        onChange: ()=>handleSelectContact(contact.id),
                                                        className: "w-4 h-4 cursor-pointer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/newsletter/ContactList/page.js",
                                                        lineNumber: 260,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/ContactList/page.js",
                                                    lineNumber: 259,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-sm text-gray-600",
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/ContactList/page.js",
                                                    lineNumber: 267,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-sm text-gray-600",
                                                    children: contact.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/ContactList/page.js",
                                                    lineNumber: 268,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-sm text-gray-600",
                                                    children: contact.email
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/ContactList/page.js",
                                                    lineNumber: 269,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-sm text-gray-600",
                                                    children: contact.product
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/ContactList/page.js",
                                                    lineNumber: 270,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "py-3 px-4 text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDelete(contact.id),
                                                        className: "text-gray-600 hover:text-red-600 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "18",
                                                            height: "18",
                                                            viewBox: "0 0 24 24",
                                                            fill: "currentColor",
                                                            className: "inline-block",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/newsletter/ContactList/page.js",
                                                                lineNumber: 283,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/ContactList/page.js",
                                                            lineNumber: 276,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/newsletter/ContactList/page.js",
                                                        lineNumber: 272,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/ContactList/page.js",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, contact.id, true, {
                                            fileName: "[project]/app/newsletter/ContactList/page.js",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/ContactList/page.js",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/ContactList/page.js",
                            lineNumber: 228,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/newsletter/ContactList/page.js",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this),
                    selectedContacts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-t border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleBulkDelete,
                            className: "bg-red-500 text-white px-6 py-2 rounded text-sm hover:bg-red-600 transition-colors",
                            children: "Delete"
                        }, void 0, false, {
                            fileName: "[project]/app/newsletter/ContactList/page.js",
                            lineNumber: 296,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/newsletter/ContactList/page.js",
                        lineNumber: 295,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/newsletter/ContactList/page.js",
                lineNumber: 207,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/newsletter/ContactList/page.js",
            lineNumber: 206,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/newsletter/ContactList/page.js",
        lineNumber: 205,
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ae39e878._.js.map