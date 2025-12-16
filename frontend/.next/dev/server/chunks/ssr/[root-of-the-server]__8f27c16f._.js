module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/newsletter/FromEmailList/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FromEmailList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function FromEmailList() {
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedRows, setSelectedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectAll, setSelectAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const emailData = [
        {
            id: 1,
            name: "Mayank",
            email: "mayank@gmail.com"
        },
        {
            id: 2,
            name: "Jay",
            emil: "Jay@gmail.com"
        },
        {
            id: 3,
            name: "PArth"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-[#e5e7eb] py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1480px] max-auto mt-4 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-ld shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-normal text-gray-500",
                            children: [
                                "From Email ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "List"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/FromEmailList/page.js",
                                    lineNumber: 24,
                                    columnNumber: 40
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/FromEmailList/page.js",
                            lineNumber: 23,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/newsletter/FromEmailList/page.js",
                        lineNumber: 22,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white px-6 pb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Display Name/Email",
                                    className: "border border-gray-300 rounded px-4 py-2 w-64 text-sm text-gray-500 focus:outline-none focus:border-gray-400",
                                    value: search,
                                    onChange: (e)=>setSearch(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/FromEmailList/page.js",
                                    lineNumber: 29,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#0ea5e9] text-white px-8 py-2 rounded text-sm hover:bg-[#0284c7]",
                                    children: "Search"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/FromEmailList/page.js",
                                    lineNumber: 36,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/FromEmailList/page.js",
                            lineNumber: 28,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/newsletter/FromEmailList/page.js",
                        lineNumber: 27,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white px-6 pb-6 rounded-b-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-gray-200 overflow-hidden rounded",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-[#dee2e6] border-b border-gray-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-left w-12",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    className: "w-6 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/FromEmailList/page.js",
                                                    lineNumber: 48,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/FromEmailList/page.js",
                                                lineNumber: 47,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-left text-xs font-semibold text-[#6c757d] uppercase tracking-wider",
                                                children: "SR NO"
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/FromEmailList/page.js",
                                                lineNumber: 50,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-left text-xs font-semibold text-[#6c757d] uppercase tracking-wider",
                                                children: "NAME"
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/FromEmailList/page.js",
                                                lineNumber: 53,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-4 text-left text-xs font-semibold text-[#6c757d] uppercase tracking-wider",
                                                children: "EMAIL"
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/FromEmailList/page.js",
                                                lineNumber: 56,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "py-3 px-10 text-right text-xs font-semibold text-[#6c757d] uppercase tracking-wider",
                                                children: "DELETE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/FromEmailList/page.js",
                                                lineNumber: 59,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/newsletter/FromEmailList/page.js",
                                        lineNumber: 46,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/FromEmailList/page.js",
                                    lineNumber: 45,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/newsletter/FromEmailList/page.js",
                                lineNumber: 44,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/newsletter/FromEmailList/page.js",
                            lineNumber: 43,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/newsletter/FromEmailList/page.js",
                        lineNumber: 42,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/newsletter/FromEmailList/page.js",
                lineNumber: 21,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/newsletter/FromEmailList/page.js",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/newsletter/FromEmailList/page.js",
        lineNumber: 19,
        columnNumber: 9
    }, this);
} // "use client";
 // import React, { useState } from "react";
 // import { Trash2 } from "lucide-react";
 // export default function FromEmailList() {
 //     const [search, setSearch] = useState("");
 //     const [selectedRows, setSelectedRows] = useState([]);
 //     const [selectAll, setSelectAll] = useState(false);
 //     const emailData = [
 //         { id: 1, name: "Pratik", email: "radhu.pratik2118@gmail.com" },
 //         { id: 2, name: "meghavi", email: "kshatriya0meghavi@gmail.com" },
 //         { id: 3, name: "Pratik", email: "and.test.21990@gmail.com" }
 //     ];
 //     const handleSelectAll = () => {
 //         if (selectAll) {
 //             setSelectedRows([]);
 //         } else {
 //             setSelectedRows(emailData.map(item => item.id));
 //         }
 //         setSelectAll(!selectAll);
 //     };
 //     const handleSelectRow = (id) => {
 //         if (selectedRows.includes(id)) {
 //             setSelectedRows(selectedRows.filter(rowId => rowId !== id));
 //         } else {
 //             setSelectedRows([...selectedRows, id]);
 //         }
 //     };
 //     return (
 //         <div className="w-full min-h-screen bg-[#e5e7eb] py-10">
 //             <div className="max-w-[1480px] mx-auto mt-4 px-4">
 //                 <div className="bg-white rounded-lg shadow-md">
 //                     <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-lg">
 //                         <h1 className="text-xl font-normal text-gray-600">
 //                             From Email <strong>List</strong>
 //                         </h1>
 //                     </div>
 //                     <div className="bg-white px-6 py-6">
 //                         <div className="flex justify-end gap-3 mb-6">
 //                             <input
 //                                 type="text"
 //                                 placeholder="Display Name/Email"
 //                                 className="border border-gray-300 rounded px-4 py-2 w-64 text-sm text-gray-500 focus:outline-none focus:border-gray-400"
 //                                 value={search}
 //                                 onChange={(e) => setSearch(e.target.value)}
 //                             />
 //                             <button className="bg-[#0ea5e9] text-white px-8 py-2 rounded text-sm hover:bg-[#0284c7]">
 //                                 Search
 //                             </button>
 //                         </div>
 //                         <div className="border border-gray-200 overflow-hidden rounded">
 //                             <table className="w-full border-collapse">
 //                                 <thead>
 //                                     <tr className="bg-[#dee2e6]">
 //                                         <th className="py-3 px-4 text-left w-12 border-r border-b border-gray-300">
 //                                             <input
 //                                                 type="checkbox"
 //                                                 className="w-4 h-4 cursor-pointer"
 //                                                 checked={selectAll}
 //                                                 onChange={handleSelectAll}
 //                                             />
 //                                         </th>
 //                                         <th className="py-3 px-4 text-left text-xs font-semibold text-[#6c757d] uppercase tracking-wider w-24 border-r border-b border-gray-300">
 //                                             SR. NO.
 //                                         </th>
 //                                         <th className="py-3 px-4 text-left text-xs font-semibold text-[#6c757d] uppercase tracking-wider border-r border-b border-gray-300">
 //                                             NAME
 //                                         </th>
 //                                         <th className="py-3 px-4 text-left text-xs font-semibold text-[#6c757d] uppercase tracking-wider border-r border-b border-gray-300">
 //                                             EMAIL
 //                                         </th>
 //                                         <th className="py-3 px-4 text-right text-xs font-semibold text-[#6c757d] uppercase tracking-wider border-b border-gray-300">
 //                                             DELETE
 //                                         </th>
 //                                     </tr>
 //                                 </thead>
 //                                 <tbody className="bg-white">
 //                                     {emailData.map((item, index) => (
 //                                         <tr key={item.id} className="hover:bg-gray-50">
 //                                             <td className="py-3 px-4 border-r border-b border-gray-300">
 //                                                 <input
 //                                                     type="checkbox"
 //                                                     className="w-4 h-4 cursor-pointer"
 //                                                     checked={selectedRows.includes(item.id)}
 //                                                     onChange={() => handleSelectRow(item.id)}
 //                                                 />
 //                                             </td>
 //                                             <td className="py-3 px-4 text-sm text-gray-700 border-r border-b border-gray-300">
 //                                                 {item.id}
 //                                             </td>
 //                                             <td className="py-3 px-4 text-sm text-gray-700 border-r border-b border-gray-300">
 //                                                 {item.name}
 //                                             </td>
 //                                             <td className="py-3 px-4 text-sm text-gray-700 border-r border-b border-gray-300">
 //                                                 {item.email}
 //                                             </td>
 //                                             <td className="py-3 px-4 text-right border-b border-gray-300">
 //                                                 <button className="text-gray-700 hover:text-red-600">
 //                                                     <Trash2 size={18} />
 //                                                 </button>
 //                                             </td>
 //                                         </tr>
 //                                     ))}
 //                                 </tbody>
 //                             </table>
 //                         </div>
 //                         <div className="mt-4">
 //                             <button className="bg-[#dc3545] text-white px-6 py-2 rounded text-sm hover:bg-[#c82333]">
 //                                 Delete
 //                             </button>
 //                         </div>
 //                     </div>
 //                 </div>
 //             </div>
 //         </div>
 //     );
 // }
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

//# sourceMappingURL=%5Broot-of-the-server%5D__8f27c16f._.js.map