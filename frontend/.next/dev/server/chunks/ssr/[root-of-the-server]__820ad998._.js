module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/ActivityHistoryPage/comments/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommentsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function CommentsSection() {
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            text: "Need to have a followup call. - By Test",
            date: "28-Oct-25 10:29"
        }
    ]);
    const [inputComment, setInputComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const addComment = ()=>{
        if (!inputComment.trim()) return;
        const newComment = {
            id: Date.now(),
            text: inputComment,
            date: new Date().toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
            })
        };
        setComments([
            newComment,
            ...comments
        ]);
        setInputComment("");
    };
    const deleteComment = (id)=>{
        setComments(comments.filter((c)=>c.id !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-gray-50 overflow-y-auto pb-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 pb-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: "w-full border rounded p-3 h-40 outline-none text-sm md:text-base",
                            placeholder: "Comment",
                            value: inputComment,
                            onChange: (e)=>setInputComment(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3 mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: addComment,
                                    className: "bg-blue-500 text-white px-6 py-2 rounded w-full sm:w-28",
                                    children: "Add"
                                }, void 0, false, {
                                    fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setInputComment(""),
                                    className: "px-6 py-2 border rounded text-gray-600 w-full sm:w-28",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-dashed mt-6 mb-6"
                        }, void 0, false, {
                            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto hidden md:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full border text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-2 border",
                                                    children: "Comment"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                                    lineNumber: 74,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-2 border",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                                    lineNumber: 75,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-2 border",
                                                    children: "Action"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                                    lineNumber: 76,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: comments.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2 border text-center",
                                                        children: c.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                                        lineNumber: 83,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2 border text-center",
                                                        children: c.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                                        lineNumber: 84,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2 border text-red-500 cursor-pointer text-center",
                                                        onClick: ()=>deleteComment(c.id),
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                                        lineNumber: 85,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, c.id, true, {
                                                fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                                lineNumber: 82,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden space-y-4 pb-10",
                            children: comments.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-300 bg-white rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b p-3 text-sm text-gray-700",
                                            children: c.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b p-3 text-sm font-semibold text-teal-700",
                                            children: c.date
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 text-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-red-600 text-[18px]",
                                                onClick: ()=>deleteComment(c.id),
                                                children: "🗑️"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, c.id, true, {
                                    fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/ActivityHistoryPage/email/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useState, useRef, useEffect } from "react";
// import { Editor } from "@tinymce/tinymce-react";
// const defaultTemplate = { 
//   id: "default-1", 
//   name: "Follow-up Template", 
//   content: "<p>Hello, this is a follow-up email.</p>", 
//   isCustom: false 
// };
// export default function EmailSection() {
//   const editorRef = useRef(null);
//   const [emailLogs, setEmailLogs] = useState([]);
//   const [templates, setTemplates] = useState([defaultTemplate]);
//   const [selectedTemplate, setSelectedTemplate] = useState("");
//   const [subject, setSubject] = useState("");
//   const [from, setFrom] = useState("");
//   const [toEmail, setToEmail] = useState("mpl1@gmail.com");
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [newEmailField, setNewEmailField] = useState("");
//   useEffect(() => {
//     try {
//       const savedTemplatesRaw = localStorage.getItem("emailTemplates");
//       let validTemplates = [];
//       if (savedTemplatesRaw) {
//         const parsed = JSON.parse(savedTemplatesRaw);
//         if (Array.isArray(parsed)) {
//           const seenIds = new Set();
//           validTemplates = parsed.filter(t => {
//             if (!t || typeof t !== 'object' || !t.id || !t.name) return false;
//             if (seenIds.has(t.id)) return false;
//             seenIds.add(t.id);
//             return true;
//           });
//         }
//       }
//       localStorage.setItem("emailTemplates", JSON.stringify(validTemplates));
//       setTemplates([defaultTemplate, ...validTemplates]);
//       const savedLogsRaw = localStorage.getItem("emailLogs");
//       let validLogs = [];
//       if (savedLogsRaw) {
//         const parsed = JSON.parse(savedLogsRaw);
//         if (Array.isArray(parsed)) {
//           const seenIds = new Set();
//           validLogs = parsed.filter(log => {
//             if (!log || typeof log !== 'object' || !log.id) return false;
//             if (seenIds.has(log.id)) return false;
//             seenIds.add(log.id);
//             return true;
//           });
//         }
//       }
//       localStorage.setItem("emailLogs", JSON.stringify(validLogs));
//       setEmailLogs(validLogs);
//     } catch (error) {
//       console.error("Error loading data from localStorage:", error);
//       localStorage.removeItem("emailTemplates");
//       localStorage.removeItem("emailLogs");
//       setTemplates([defaultTemplate]);
//       setEmailLogs([]);
//     }
//   }, []);
//   const resetEmailForm = () => {
//     setFrom("");
//     setSubject("");
//     setToEmail("mpl1@gmail.com");
//     setSelectedTemplate("");
//     if (editorRef.current) {
//       editorRef.current.setContent("");
//     }
//   };
//   const saveTemplate = () => {
//     if (!editorRef.current) return;
//     const html = editorRef.current.getContent().trim();
//     if (!html || html === "<p></p>") {
//       alert("Message is empty!");
//       return;
//     }
//     const name = prompt("Enter Template Name:");
//     if (!name || !name.trim()) return;
//     const newTemplate = { 
//       id: crypto.randomUUID(), 
//       name: name.trim(), 
//       content: html, 
//       isCustom: true,
//       createdAt: new Date().toISOString()
//     };
//     try {
//       const existingTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");
//       const seenIds = new Set();
//       const validTemplates = existingTemplates.filter(t => {
//         if (!t || !t.id) return false;
//         if (seenIds.has(t.id)) return false;
//         seenIds.add(t.id);
//         return true;
//       });
//       const updatedTemplates = [newTemplate, ...validTemplates];
//       localStorage.setItem("emailTemplates", JSON.stringify(updatedTemplates));
//       setTemplates([defaultTemplate, ...updatedTemplates]);
//       alert("Template saved successfully!");
//     } catch (error) {
//       console.error("Error saving template:", error);
//       alert("Error saving template. Please try again.");
//     }
//   };
//   const applyTemplate = (id) => {
//     if (!id) {
//       setSelectedTemplate("");
//       return;
//     }
//     setSelectedTemplate(id);
//     const temp = templates.find((t) => t.id === id);
//     if (temp && editorRef.current) {
//       editorRef.current.setContent(temp.content);
//     }
//   };
//   const sendEmail = () => {
//     if (!editorRef.current) return;
//     const message = editorRef.current.getContent();
//     if (!message || message === "<p></p>" || message.trim() === "") {
//       alert("Please write a message!");
//       return;
//     }
//     const newEmail = {
//       id: crypto.randomUUID(),
//       from: from || "(no sender)",
//       to: toEmail,
//       subject: subject || "(no subject)",
//       message,
//       status: "Sent",
//       date: new Date().toLocaleString("en-GB"),
//     };
//     try {
//       const updated = [newEmail, ...emailLogs];
//       setEmailLogs(updated);
//       localStorage.setItem("emailLogs", JSON.stringify(updated));
//       resetEmailForm();
//       alert("Email Sent Successfully!");
//     } catch (error) {
//       console.error("Error sending email:", error);
//       alert("Error sending email. Please try again.");
//     }
//   };
//   const deleteEmailLog = (id) => {
//     if (window.confirm("Are you sure you want to delete this email?")) {
//       try {
//         const updated = emailLogs.filter((log) => log.id !== id);
//         setEmailLogs(updated);
//         localStorage.setItem("emailLogs", JSON.stringify(updated));
//       } catch (error) {
//         console.error("Error deleting email:", error);
//         alert("Error deleting email. Please try again.");
//       }
//     }
//   };
//   return (
//     <div className="w-full min-h-screen bg-gray-50 overflow-y-auto pb-20">
//       <style>{`
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-slideDown {
//           animation: slideDown 0.3s ease-out;
//         }
//       `}</style>
//       <div className="w-full max-w-7xl mx-auto p-2 sm:p-4 md:p-6 lg:p-8 pb-20">
//         <div className="bg-white rounded-t-lg shadow-sm border-b border-gray-400 px-6 py-3">
//           <h1 className="text-xl font-semibold text-gray-600">Activity <strong>history</strong></h1>
//         </div>
//         {showAddForm && (
//           <div className="fixed inset-0 bg-black/30 flex items-start justify-center z-50 pt-20 overflow-y-auto">
//             <div className="bg-white w-[90%] md:w-[500px] rounded-lg shadow-xl p-6 relative animate-slideDown">
//               <button onClick={() => setShowAddForm(false)} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700">×</button>
//               <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-3">
//                 Add and verify email address to send mail.
//               </h3>
//               <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded mb-4">
//                 Please check your mail After Click on verify button.
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-2 text-sm text-gray-700 font-medium">Display Name</label>
//                 <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded text-black focus:ring-2 focus:ring-blue-500" 
//                   placeholder="Enter display name" />
//               </div>
//               <div className="mb-6">
//                 <label className="block mb-2 text-sm text-gray-700 font-medium">Email</label>
//                 <input type="email" value={newEmailField} onChange={(e) => setNewEmailField(e.target.value)}
//                   className="w-full border border-gray-300 px-3 py-2 rounded text-black focus:ring-2 focus:ring-blue-500" 
//                   placeholder="Enter email address" />
//               </div>
//               <div className="flex gap-3">
//                 <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium" 
//                   onClick={() => { 
//                     if (newEmailField.trim()) {
//                       alert("Verification email sent to: " + newEmailField); 
//                       setShowAddForm(false); 
//                       setNewEmailField(""); 
//                     } else {
//                       alert("Please enter an email address");
//                     }
//                   }}>
//                   verify
//                 </button>
//                 <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded font-medium" 
//                   onClick={() => { setShowAddForm(false); setNewEmailField(""); }}>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className="bg-white shadow-sm px-4 sm:px-6 py-4 rounded-b-lg mb-20">
//           <div className="space-y-4 text-sm">
//             <div className="flex justify-between items-end gap-4">
//               <div className="flex-1">
//                 <label className="block mb-2 text-gray-700 font-medium">From</label>
//                 <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
//                   value={from} placeholder="Enter From" onChange={(e) => setFrom(e.target.value)} />
//               </div>
//               <button onClick={() => setShowAddForm(true)}
//                 className="bg-gray-500 text-white px-5 py-2.5 rounded hover:bg-gray-700 font-medium flex items-center gap-2">
//                 Add More
//               </button>
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700 font-medium">To</label>
//               <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
//                 value={toEmail} onChange={(e) => setToEmail(e.target.value)} />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700 font-medium">Subject</label>
//               <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500"
//                 value={subject} placeholder="Enter subject" onChange={(e) => setSubject(e.target.value)} />
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700 font-medium">Reply with Template</label>
//               <select className="border border-gray-300 w-full p-2.5 rounded-sm bg-white focus:ring-2 focus:ring-blue-500"
//                 value={selectedTemplate} onChange={(e) => applyTemplate(e.target.value)}>
//                 <option value="">Choose Template</option>
//                 {templates && templates.length > 0 && templates.map((t) => {
//                   if (!t || !t.id) return null;
//                   return (
//                     <option key={t.id} value={t.id}>
//                       {t.name || 'Untitled Template'}
//                     </option>
//                   );
//                 })}
//               </select>
//             </div>
//             <div>
//               <label className="block mb-2 text-gray-700 font-medium">Message</label>
//               <div className="border-2 border-gray-300 rounded overflow-hidden">
//                 <Editor apiKey="y1s9k2719cryc4c4lhyef3rypkcz2oy6t9fno5q4ngbqts9o"
//                   onInit={(evt, editor) => (editorRef.current = editor)} initialValue="<p>Hello...</p>"
//                   init={{
//                     height: 250, menubar: true,
//                     plugins: ["advlist", "autolink", "lists", "link", "image", "charmap", "preview", "anchor", "searchreplace",
//                       "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table", "help", "wordcount"],
//                     toolbar: "undo redo | blocks fontsize | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table image media link | removeformat code preview fullscreen | help",
//                     branding: false,
//                   }}
//                 />
//               </div>
//               <button onClick={saveTemplate} className="mt-3 px-4 py-2 bg-blue-100 border border-blue-400 text-blue-700 rounded hover:bg-blue-200">
//                 📄 Save as Template
//               </button>
//             </div>
//             <div className="flex gap-4 mt-4">
//               <button onClick={sendEmail} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Email</button>
//               <button onClick={resetEmailForm} className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100">Cancel</button>
//             </div>
//           </div>
//           <div className="border-t-2 border-gray-300 px-0 py-4 mt-6 pb-4">
//             <h2 className="text-lg font-semibold text-gray-700 mb-4">Email Logs</h2>
//             <div className="hidden md:block overflow-x-auto">
//               <table className="w-full text-sm border border-gray-300">
//                 <thead>
//                   <tr className="bg-gray-200">
//                     <th className="p-3 border-b text-left">TO</th>
//                     <th className="p-3 border-b text-right">STATUS</th>
//                     <th className="p-3 border-b text-right">DATE</th>
//                     <th className="p-3 border-b text-right">ACTION</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {emailLogs.length === 0 ? (
//                     <tr><td colSpan="4" className="py-8 text-center text-red-500 font-medium">No Records</td></tr>
//                   ) : (
//                     emailLogs.map((log) => (
//                       <tr key={log.id} className="hover:bg-gray-50">
//                         <td className="p-3 border-t">{log.to}</td>
//                         <td className="p-3 border-t text-right">
//                           <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">{log.status}</span>
//                         </td>
//                         <td className="p-3 border-t text-right">{log.date}</td>
//                         <td className="p-3 border-t text-right">
//                           <button onClick={() => deleteEmailLog(log.id)} className="text-red-500 hover:text-red-700 font-medium">Delete</button>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//             <div className="md:hidden space-y-3 pb-4">
//               {emailLogs.length === 0 ? (
//                 <div className="py-8 text-center text-red-500 font-medium border border-gray-300 rounded">No Records</div>
//               ) : (
//                 emailLogs.map((log) => (
//                   <div key={log.id} className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
//                     <div className="space-y-3">
//                       <div className="flex justify-between items-start gap-3">
//                         <div className="flex-1 min-w-0">
//                           <div className="text-xs font-medium text-gray-500 mb-1">To:</div>
//                           <div className="font-medium text-gray-800 break-all text-sm">{log.to}</div>
//                         </div>
//                         <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium whitespace-nowrap">{log.status}</span>
//                       </div>
//                       <div>
//                         <div className="text-xs font-medium text-gray-500 mb-1">Date:</div>
//                         <div className="text-sm text-gray-700">{log.date}</div>
//                       </div>
//                       <button onClick={() => deleteEmailLog(log.id)}
//                         className="w-full bg-red-50 text-red-600 hover:bg-red-100 py-2.5 rounded-md font-medium text-sm border border-red-200">
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>EmailSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-quill/dist/quill.snow.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
// React-Quill ને dynamic import કરો SSR issues ટાળવા માટે
const ReactQuill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    ssr: false
});
;
const defaultTemplate = {
    id: "default-1",
    name: "Follow-up Template",
    content: "<p>Hello, this is a follow-up email.</p>",
    isCustom: false
};
function EmailSection() {
    const [editorContent, setEditorContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("<p>Hello...</p>");
    const [emailLogs, setEmailLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        defaultTemplate
    ]);
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [from, setFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [toEmail, setToEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("mpl1@gmail.com");
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newEmailField, setNewEmailField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const quillModules = {
        toolbar: [
            [
                {
                    'header': [
                        1,
                        2,
                        3,
                        false
                    ]
                }
            ],
            [
                'bold',
                'italic',
                'underline',
                'strike'
            ],
            [
                {
                    'color': []
                },
                {
                    'background': []
                }
            ],
            [
                {
                    'list': 'ordered'
                },
                {
                    'list': 'bullet'
                }
            ],
            [
                {
                    'align': []
                }
            ],
            [
                'link',
                'image'
            ],
            [
                'clean'
            ]
        ]
    };
    const quillFormats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'color',
        'background',
        'list',
        'bullet',
        'align',
        'link',
        'image'
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const savedTemplatesRaw = localStorage.getItem("emailTemplates");
            let validTemplates = [];
            if (savedTemplatesRaw) {
                const parsed = JSON.parse(savedTemplatesRaw);
                if (Array.isArray(parsed)) {
                    const seenIds = new Set();
                    validTemplates = parsed.filter((t)=>{
                        if (!t || typeof t !== 'object' || !t.id || !t.name) return false;
                        if (seenIds.has(t.id)) return false;
                        seenIds.add(t.id);
                        return true;
                    });
                }
            }
            localStorage.setItem("emailTemplates", JSON.stringify(validTemplates));
            setTemplates([
                defaultTemplate,
                ...validTemplates
            ]);
            const savedLogsRaw = localStorage.getItem("emailLogs");
            let validLogs = [];
            if (savedLogsRaw) {
                const parsed = JSON.parse(savedLogsRaw);
                if (Array.isArray(parsed)) {
                    const seenIds = new Set();
                    validLogs = parsed.filter((log)=>{
                        if (!log || typeof log !== 'object' || !log.id) return false;
                        if (seenIds.has(log.id)) return false;
                        seenIds.add(log.id);
                        return true;
                    });
                }
            }
            localStorage.setItem("emailLogs", JSON.stringify(validLogs));
            setEmailLogs(validLogs);
        } catch (error) {
            console.error("Error loading data from localStorage:", error);
            localStorage.removeItem("emailTemplates");
            localStorage.removeItem("emailLogs");
            setTemplates([
                defaultTemplate
            ]);
            setEmailLogs([]);
        }
    }, []);
    const resetEmailForm = ()=>{
        setFrom("");
        setSubject("");
        setToEmail("mpl1@gmail.com");
        setSelectedTemplate("");
        setEditorContent("<p>Hello...</p>");
    };
    const saveTemplate = ()=>{
        const html = editorContent.trim();
        if (!html || html === "<p><br></p>" || html === "<p></p>") {
            alert("Message is empty!");
            return;
        }
        const name = prompt("Enter Template Name:");
        if (!name || !name.trim()) return;
        const newTemplate = {
            id: crypto.randomUUID(),
            name: name.trim(),
            content: html,
            isCustom: true,
            createdAt: new Date().toISOString()
        };
        try {
            const existingTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");
            const seenIds = new Set();
            const validTemplates = existingTemplates.filter((t)=>{
                if (!t || !t.id) return false;
                if (seenIds.has(t.id)) return false;
                seenIds.add(t.id);
                return true;
            });
            const updatedTemplates = [
                newTemplate,
                ...validTemplates
            ];
            localStorage.setItem("emailTemplates", JSON.stringify(updatedTemplates));
            setTemplates([
                defaultTemplate,
                ...updatedTemplates
            ]);
            alert("Template saved successfully!");
        } catch (error) {
            console.error("Error saving template:", error);
            alert("Error saving template. Please try again.");
        }
    };
    const applyTemplate = (id)=>{
        if (!id) {
            setSelectedTemplate("");
            return;
        }
        setSelectedTemplate(id);
        const temp = templates.find((t)=>t.id === id);
        if (temp) {
            setEditorContent(temp.content);
        }
    };
    const sendEmail = ()=>{
        const message = editorContent;
        if (!message || message === "<p><br></p>" || message === "<p></p>" || message.trim() === "") {
            alert("Please write a message!");
            return;
        }
        const newEmail = {
            id: crypto.randomUUID(),
            from: from || "(no sender)",
            to: toEmail,
            subject: subject || "(no subject)",
            message,
            status: "Sent",
            date: new Date().toLocaleString("en-GB")
        };
        try {
            const updated = [
                newEmail,
                ...emailLogs
            ];
            setEmailLogs(updated);
            localStorage.setItem("emailLogs", JSON.stringify(updated));
            resetEmailForm();
            alert("Email Sent Successfully!");
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Error sending email. Please try again.");
        }
    };
    const deleteEmailLog = (id)=>{
        if (window.confirm("Are you sure you want to delete this email?")) {
            try {
                const updated = emailLogs.filter((log)=>log.id !== id);
                setEmailLogs(updated);
                localStorage.setItem("emailLogs", JSON.stringify(updated));
            } catch (error) {
                console.error("Error deleting email:", error);
                alert("Error deleting email. Please try again.");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-gray-50 overflow-y-auto pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .quill-editor {
          background: white;
        }
        .ql-container {
          min-height: 250px;
          font-size: 14px;
        }
        .ql-editor {
          min-height: 250px;
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                lineNumber: 586,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-7xl mx-auto p-2 sm:p-4 md:p-6 lg:p-8 pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-t-lg shadow-sm border-b border-gray-400 px-6 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-semibold text-gray-600",
                            children: [
                                "Activity ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "history"
                                }, void 0, false, {
                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 614,
                                    columnNumber: 72
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 614,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 613,
                        columnNumber: 9
                    }, this),
                    showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/30 flex items-start justify-center z-50 pt-20 overflow-y-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white w-[90%] md:w-[500px] rounded-lg shadow-xl p-6 relative animate-slideDown",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowAddForm(false),
                                    className: "absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700",
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 620,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-4 text-gray-800 border-b pb-3",
                                    children: "Add and verify email address to send mail."
                                }, void 0, false, {
                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 622,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded mb-4",
                                    children: "Please check your mail After Click on verify button."
                                }, void 0, false, {
                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 626,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-2 text-sm text-gray-700 font-medium",
                                            children: "Display Name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 631,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "w-full border border-gray-300 px-3 py-2 rounded text-black focus:ring-2 focus:ring-blue-500",
                                            placeholder: "Enter display name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 632,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 630,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block mb-2 text-sm text-gray-700 font-medium",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 637,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: newEmailField,
                                            onChange: (e)=>setNewEmailField(e.target.value),
                                            className: "w-full border border-gray-300 px-3 py-2 rounded text-black focus:ring-2 focus:ring-blue-500",
                                            placeholder: "Enter email address"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 638,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 636,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium",
                                            onClick: ()=>{
                                                if (newEmailField.trim()) {
                                                    alert("Verification email sent to: " + newEmailField);
                                                    setShowAddForm(false);
                                                    setNewEmailField("");
                                                } else {
                                                    alert("Please enter an email address");
                                                }
                                            },
                                            children: "verify"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 644,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded font-medium",
                                            onClick: ()=>{
                                                setShowAddForm(false);
                                                setNewEmailField("");
                                            },
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 656,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 643,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 619,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 618,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow-sm px-4 sm:px-6 py-4 rounded-b-lg mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-end gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block mb-2 text-gray-700 font-medium",
                                                        children: "From"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                        lineNumber: 670,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        className: "border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500",
                                                        value: from,
                                                        placeholder: "Enter From",
                                                        onChange: (e)=>setFrom(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                        lineNumber: 671,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 669,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowAddForm(true),
                                                className: "bg-gray-500 text-white px-5 py-2.5 rounded hover:bg-gray-700 font-medium flex items-center gap-2",
                                                children: "Add More"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 674,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 668,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block mb-2 text-gray-700 font-medium",
                                                children: "To"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 681,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: "border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500",
                                                value: toEmail,
                                                onChange: (e)=>setToEmail(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 682,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 680,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block mb-2 text-gray-700 font-medium",
                                                children: "Subject"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 687,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: "border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500",
                                                value: subject,
                                                placeholder: "Enter subject",
                                                onChange: (e)=>setSubject(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 688,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 686,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block mb-2 text-gray-700 font-medium",
                                                children: "Reply with Template"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 693,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "border border-gray-300 w-full p-2.5 rounded-sm bg-white focus:ring-2 focus:ring-blue-500",
                                                value: selectedTemplate,
                                                onChange: (e)=>applyTemplate(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Choose Template"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                        lineNumber: 696,
                                                        columnNumber: 17
                                                    }, this),
                                                    templates && templates.length > 0 && templates.map((t)=>{
                                                        if (!t || !t.id) return null;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: t.id,
                                                            children: t.name || 'Untitled Template'
                                                        }, t.id, false, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 700,
                                                            columnNumber: 21
                                                        }, this);
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 694,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 692,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block mb-2 text-gray-700 font-medium",
                                                children: "Message"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 709,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-2 border-gray-300 rounded overflow-hidden quill-editor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactQuill, {
                                                    theme: "snow",
                                                    value: editorContent,
                                                    onChange: setEditorContent,
                                                    modules: quillModules,
                                                    formats: quillFormats
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                    lineNumber: 711,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 710,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: saveTemplate,
                                                className: "mt-3 px-4 py-2 bg-blue-100 border border-blue-400 text-blue-700 rounded hover:bg-blue-200",
                                                children: "📄 Save as Template"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 719,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 708,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: sendEmail,
                                                className: "bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700",
                                                children: "Send Email"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 725,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: resetEmailForm,
                                                className: "border border-gray-400 px-6 py-2 rounded hover:bg-gray-100",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 726,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 724,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 666,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t-2 border-gray-300 px-0 py-4 mt-6 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-gray-700 mb-4",
                                        children: "Email Logs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 731,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:block overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-sm border border-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "bg-gray-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 border-b text-left",
                                                                children: "TO"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                lineNumber: 737,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 border-b text-right",
                                                                children: "STATUS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                lineNumber: 738,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 border-b text-right",
                                                                children: "DATE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                lineNumber: 739,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 border-b text-right",
                                                                children: "ACTION"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                lineNumber: 740,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                        lineNumber: 736,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                    lineNumber: 735,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: emailLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: "4",
                                                            className: "py-8 text-center text-red-500 font-medium",
                                                            children: "No Records"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 745,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                        lineNumber: 745,
                                                        columnNumber: 21
                                                    }, this) : emailLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-gray-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-3 border-t",
                                                                    children: log.to
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 749,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-3 border-t text-right",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-1 bg-green-100 text-green-700 rounded text-xs",
                                                                        children: log.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                        lineNumber: 751,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 750,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-3 border-t text-right",
                                                                    children: log.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 753,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-3 border-t text-right",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>deleteEmailLog(log.id),
                                                                        className: "text-red-500 hover:text-red-700 font-medium",
                                                                        children: "Delete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                        lineNumber: 755,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 754,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, log.id, true, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 748,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                    lineNumber: 743,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 734,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 733,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:hidden space-y-3 pb-4",
                                        children: emailLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8 text-center text-red-500 font-medium border border-gray-300 rounded",
                                            children: "No Records"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 766,
                                            columnNumber: 17
                                        }, this) : emailLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-gray-300 rounded-lg p-4 bg-white shadow-sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-start gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs font-medium text-gray-500 mb-1",
                                                                            children: "To:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                            lineNumber: 773,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-gray-800 break-all text-sm",
                                                                            children: log.to
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                            lineNumber: 774,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 772,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium whitespace-nowrap",
                                                                    children: log.status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 776,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 771,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs font-medium text-gray-500 mb-1",
                                                                    children: "Date:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 779,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-700",
                                                                    children: log.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 780,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 778,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>deleteEmailLog(log.id),
                                                            className: "w-full bg-red-50 text-red-600 hover:bg-red-100 py-2.5 rounded-md font-medium text-sm border border-red-200",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 782,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                    lineNumber: 770,
                                                    columnNumber: 21
                                                }, this)
                                            }, log.id, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 769,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 764,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 730,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 665,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                lineNumber: 612,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
        lineNumber: 585,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/ActivityHistoryPage/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActivityHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ActivityHistoryPage$2f$comments$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ActivityHistoryPage/comments/page.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ActivityHistoryPage$2f$email$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ActivityHistoryPage/email/page.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ActivityHistory() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("comments");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white w-full text-black p-4 sm:p-6 md:p-8 lg:p-10 xl:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[18px] md:text-[20px] font-semibold mb-3",
                children: [
                    "Activity ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-500",
                        children: "history"
                    }, void 0, false, {
                        fileName: "[project]/app/ActivityHistoryPage/page.js",
                        lineNumber: 13,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ActivityHistoryPage/page.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-[1px] border-gray-600 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-[#d7dee3] border-b border-t border-gray-300 flex-wrap h-11",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("comments"),
                                className: `px-4 py-2 text-sm border-r border-gray-300 
              w-1/2 sm:w-auto text-center
              ${activeTab === "comments" ? "bg-white font-medium" : "bg-[#d7dee3] text-gray-600"}
            `,
                                children: "Comments"
                            }, void 0, false, {
                                fileName: "[project]/app/ActivityHistoryPage/page.js",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("email"),
                                className: `px-4 py-2 text-sm border-r border-gray-300 
              w-1/2 sm:w-auto text-center
              ${activeTab === "email" ? "bg-white font-medium" : "bg-[#d7dee3] text-gray-600"}
            `,
                                children: "Send email"
                            }, void 0, false, {
                                fileName: "[project]/app/ActivityHistoryPage/page.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/ActivityHistoryPage/page.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-5 max-h-[600px] overflow-y-auto",
                        children: activeTab === "comments" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ActivityHistoryPage$2f$comments$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/ActivityHistoryPage/page.js",
                            lineNumber: 48,
                            columnNumber: 39
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ActivityHistoryPage$2f$email$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/ActivityHistoryPage/page.js",
                            lineNumber: 48,
                            columnNumber: 61
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/ActivityHistoryPage/page.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ActivityHistoryPage/page.js",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ActivityHistoryPage/page.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
} // "use client";
 // import { useState } from "react";
 // import CommentsSection from "./comments/page";
 // import EmailSection from "./email/page";
 // export default function ActivityHistory() {
 //   const [activeTab, setActiveTab] = useState("comments");
 //   return (
 //     <div className="bg-white w-full text-black p-4 sm:p-6 md:p-8 lg:p-10 xl:p-6">
 //       <h2 className="text-[18px] md:text-[20px] font-semibold mb-3">
 //         Activity <span className="text-gray-500">history</span>
 //       </h2>
 //       <div className="border-[1px] border-gray-600 bg-white">
 //         <div className="flex bg-[#d7dee3] border-b border-t border-gray-300 flex-wrap h-11">
 //           <button
 //             onClick={() => setActiveTab("comments")}
 //             className={`px-4 py-2 text-sm border-r border-gray-300 
 //               w-1/2 sm:w-auto text-center
 //               ${
 //                 activeTab === "comments"
 //                   ? "bg-white font-medium"
 //                   : "bg-[#d7dee3] text-gray-600"
 //               }
 //             `}
 //           >
 //             Comments
 //           </button>
 //           <button
 //             onClick={() => setActiveTab("email")}
 //             className={`px-4 py-2 text-sm border-r border-gray-300 
 //               w-1/2 sm:w-auto text-center
 //               ${
 //                 activeTab === "email"
 //                   ? "bg-white font-medium"
 //                   : "bg-[#d7dee3] text-gray-600"
 //               }
 //             `}
 //           >
 //             Send email
 //           </button>
 //         </div>
 //         <div className="p-4 sm:p-5 max-h-[600px] overflow-y-auto">
 //           {activeTab === "comments" ? <CommentsSection /> : <EmailSection />}
 //         </div>
 //       </div>
 //     </div>
 //   );
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
"[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super(`Bail out to client-side rendering: ${reason}`), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-ssr] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
} //# sourceMappingURL=dynamic-bailout-to-csr.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
} //# sourceMappingURL=encode-uri-path.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _encodeuripath = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/encode-uri-path.js [app-ssr] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const dplId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${dplId}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
} //# sourceMappingURL=preload-chunks.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-ssr] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-ssr] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                ("TURBOPACK compile-time truthy", 1) ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : "TURBOPACK unreachable",
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable; //# sourceMappingURL=loadable.js.map
}),
"[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-ssr] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dynamic.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__820ad998._.js.map