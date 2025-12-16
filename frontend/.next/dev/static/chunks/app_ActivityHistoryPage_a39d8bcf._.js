(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/ActivityHistoryPage/comments/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommentsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CommentsSection() {
    _s();
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            text: "Need to have a followup call. - By Test",
            date: "28-Oct-25 10:29"
        }
    ]);
    const [inputComment, setInputComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-gray-50 overflow-y-auto pb-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 pb-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            className: "w-full border rounded p-3 h-40 outline-none text-sm md:text-base",
                            placeholder: "Comment",
                            value: inputComment,
                            onChange: (e)=>setInputComment(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3 mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: addComment,
                                    className: "bg-blue-500 text-white px-6 py-2 rounded w-full sm:w-28",
                                    children: "Add"
                                }, void 0, false, {
                                    fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-dashed mt-6 mb-6"
                        }, void 0, false, {
                            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto hidden md:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full border text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-2 border",
                                                    children: "Comment"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                                    lineNumber: 74,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "p-2 border",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                                    lineNumber: 75,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: comments.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2 border text-center",
                                                        children: c.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                                        lineNumber: 83,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2 border text-center",
                                                        children: c.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                                        lineNumber: 84,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden space-y-4 pb-10",
                            children: comments.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-300 bg-white rounded",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b p-3 text-sm text-gray-700",
                                            children: c.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-b p-3 text-sm font-semibold text-teal-700",
                                            children: c.date
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/comments/page.js",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 text-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(CommentsSection, "WCfO/xODGwHOaOxDoSTObZwgaM4=");
_c = CommentsSection;
var _c;
__turbopack_context__.k.register(_c, "CommentsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/ActivityHistoryPage/email/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
//           // Remove duplicates based on ID
//           const seenIds = new Set();
//           validTemplates = parsed.filter(t => {
//             if (!t || typeof t !== 'object' || !t.id || !t.name) return false;
//             if (seenIds.has(t.id)) return false;
//             seenIds.add(t.id);
//             return true;
//           });
//         }
//       }
//       // Save cleaned data back
//       localStorage.setItem("emailTemplates", JSON.stringify(validTemplates));
//       setTemplates([defaultTemplate, ...validTemplates]);
//       const savedLogsRaw = localStorage.getItem("emailLogs");
//       let validLogs = [];
//       if (savedLogsRaw) {
//         const parsed = JSON.parse(savedLogsRaw);
//         if (Array.isArray(parsed)) {
//           // Remove duplicates based on ID
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
//       // Clear corrupted data
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
//       // Remove duplicates
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
//         <div className="bg-white rounded-t-lg shadow-sm border-b border-gray-300 px-6 py-3">
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$components$2f$Editor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const WEB3FORMS_ACCESS_KEY = "237007c8-0a72-4c38-98bf-2500eb92b9b9";
const defaultTemplate = {
    id: "default-1",
    name: "Follow-up Template",
    content: "<p>Hello, this is a follow-up email.</p>",
    isCustom: false
};
function EmailSection() {
    _s();
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [emailLogs, setEmailLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        defaultTemplate
    ]);
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [from, setFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [toEmail, setToEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailSection.useEffect": ()=>{
            try {
                const savedTemplatesRaw = localStorage.getItem("emailTemplates");
                let validTemplates = [];
                if (savedTemplatesRaw) {
                    const parsed = JSON.parse(savedTemplatesRaw);
                    if (Array.isArray(parsed)) {
                        const seenIds = new Set();
                        validTemplates = parsed.filter({
                            "EmailSection.useEffect": (t)=>{
                                if (!t || typeof t !== 'object' || !t.id || !t.name) return false;
                                if (seenIds.has(t.id)) return false;
                                seenIds.add(t.id);
                                return true;
                            }
                        }["EmailSection.useEffect"]);
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
                        validLogs = parsed.filter({
                            "EmailSection.useEffect": (log)=>{
                                if (!log || typeof log !== 'object' || !log.id) return false;
                                if (seenIds.has(log.id)) return false;
                                seenIds.add(log.id);
                                return true;
                            }
                        }["EmailSection.useEffect"]);
                    }
                }
                localStorage.setItem("emailLogs", JSON.stringify(validLogs));
                setEmailLogs(validLogs);
            } catch (error) {
                console.error("Error loading data:", error);
                localStorage.removeItem("emailTemplates");
                localStorage.removeItem("emailLogs");
                setTemplates([
                    defaultTemplate
                ]);
                setEmailLogs([]);
            }
        }
    }["EmailSection.useEffect"], []);
    const resetEmailForm = ()=>{
        setFrom("");
        setSubject("");
        setToEmail("");
        setSelectedTemplate("");
        if (editorRef.current) {
            editorRef.current.setContent("");
        }
    };
    const saveTemplate = ()=>{
        if (!editorRef.current) return;
        const html = editorRef.current.getContent().trim();
        if (!html || html === "<p></p>") {
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
        if (temp && editorRef.current) {
            editorRef.current.setContent(temp.content);
        }
    };
    const sendEmail = async ()=>{
        if (!editorRef.current) return;
        const message = editorRef.current.getContent();
        // Validation
        if (!message || message === "<p></p>" || message.trim() === "") {
            alert("⚠️ Please write a message!");
            return;
        }
        if (!from || from.trim() === "") {
            alert("⚠️ Please enter sender email (From field)!");
            return;
        }
        if (!toEmail || toEmail.trim() === "") {
            alert("⚠️ Please enter recipient email (To field)!");
            return;
        }
        if (!subject || subject.trim() === "") {
            alert("⚠️ Please enter email subject!");
            return;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(from)) {
            alert("⚠️ Please enter a valid sender email address!");
            return;
        }
        if (!emailRegex.test(toEmail)) {
            alert("⚠️ Please enter a valid recipient email address!");
            return;
        }
        // Check API key
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setIsSending(true);
        try {
            // Strip HTML tags for plain text version
            const plainText = message.replace(/<[^>]*>/g, '');
            // Send email using Web3Forms API
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: from,
                    email: from,
                    subject: subject,
                    message: `To: ${toEmail}\n\nSubject: ${subject}\n\n${plainText}`
                })
            });
            const result = await response.json();
            if (result.success) {
                console.log("Email sent successfully:", result);
                // Save to logs
                const newEmail = {
                    id: crypto.randomUUID(),
                    from: from,
                    to: toEmail,
                    subject: subject,
                    message,
                    status: "Sent",
                    date: new Date().toLocaleString("en-GB")
                };
                const updated = [
                    newEmail,
                    ...emailLogs
                ];
                setEmailLogs(updated);
                localStorage.setItem("emailLogs", JSON.stringify(updated));
                resetEmailForm();
                alert("✅ Email sent successfully!");
            } else {
                throw new Error(result.message || "Failed to send email");
            }
        } catch (error) {
            console.error("Failed to send email:", error);
            alert(`❌ Failed to send email: ${error.message}\n\nPlease check:\n1. Your API key is correct\n2. Internet connection is working\n3. Email addresses are valid`);
        } finally{
            setIsSending(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-gray-50 overflow-y-auto pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
      `
            }, void 0, false, {
                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                lineNumber: 640,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-7xl mx-auto p-2 sm:p-4 md:p-6 lg:p-8 pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-t-lg shadow-sm border-b border-gray-300 px-6 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-semibold text-gray-600",
                            children: [
                                "Real Email Sender ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "(Frontend Only)"
                                }, void 0, false, {
                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 659,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 658,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 657,
                        columnNumber: 9
                    }, this),
                    WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-5 w-5 text-yellow-400",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 669,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 668,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 667,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-yellow-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Setup Required (માત્ર 2 મિનિટ):"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 674,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 675,
                                                columnNumber: 19
                                            }, this),
                                            "1. https://web3forms.com પર જાઓ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 676,
                                                columnNumber: 19
                                            }, this),
                                            "2. તમારો email address enter કરો",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 677,
                                                columnNumber: 19
                                            }, this),
                                            "3. Free API key instantly મળશે (કોઈ signup નથી!)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 678,
                                                columnNumber: 19
                                            }, this),
                                            "4. Code માં WEB3FORMS_ACCESS_KEY update કરો",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 679,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 679,
                                                columnNumber: 24
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "🆓 Free Forever:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 680,
                                                columnNumber: 19
                                            }, this),
                                            " મહિને 250 emails મોકલી શકો!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 673,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 672,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 666,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 665,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow-sm px-4 sm:px-6 py-4 rounded-b-lg mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block mb-2 text-gray-700 font-medium",
                                                children: [
                                                    "From (Your Email) ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                        lineNumber: 692,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 691,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                className: "border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500",
                                                value: from,
                                                placeholder: "your-email@gmail.com",
                                                onChange: (e)=>setFrom(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 694,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 690,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block mb-2 text-gray-700 font-medium",
                                                children: [
                                                    "To (Recipient Email) ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                        lineNumber: 705,
                                                        columnNumber: 38
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 704,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                className: "border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500",
                                                value: toEmail,
                                                placeholder: "recipient@gmail.com",
                                                onChange: (e)=>setToEmail(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 707,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 703,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block mb-2 text-gray-700 font-medium",
                                                children: [
                                                    "Subject ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                        lineNumber: 718,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 717,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: "border border-gray-300 w-full p-2.5 rounded-sm focus:ring-2 focus:ring-blue-500",
                                                value: subject,
                                                placeholder: "Enter subject",
                                                onChange: (e)=>setSubject(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 720,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 716,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block mb-2 text-gray-700 font-medium",
                                                children: "Reply with Template"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 730,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "border border-gray-300 w-full p-2.5 rounded-sm bg-white focus:ring-2 focus:ring-blue-500",
                                                value: selectedTemplate,
                                                onChange: (e)=>applyTemplate(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Choose Template"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                        lineNumber: 736,
                                                        columnNumber: 17
                                                    }, this),
                                                    templates && templates.length > 0 && templates.map((t)=>{
                                                        if (!t || !t.id) return null;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: t.id,
                                                            children: t.name || 'Untitled Template'
                                                        }, t.id, false, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 740,
                                                            columnNumber: 21
                                                        }, this);
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 731,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 729,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block mb-2 text-gray-700 font-medium",
                                                children: [
                                                    "Message ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                        lineNumber: 750,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 749,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-2 border-gray-300 rounded overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$components$2f$Editor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"], {
                                                    apiKey: "y1s9k2719cryc4c4lhyef3rypkcz2oy6t9fno5q4ngbqts9o",
                                                    onInit: (evt, editor)=>editorRef.current = editor,
                                                    initialValue: "<p>Hello...</p>",
                                                    init: {
                                                        height: 250,
                                                        menubar: true,
                                                        plugins: [
                                                            "advlist",
                                                            "autolink",
                                                            "lists",
                                                            "link",
                                                            "image",
                                                            "charmap",
                                                            "preview",
                                                            "anchor",
                                                            "searchreplace",
                                                            "visualblocks",
                                                            "code",
                                                            "fullscreen",
                                                            "insertdatetime",
                                                            "media",
                                                            "table",
                                                            "help",
                                                            "wordcount"
                                                        ],
                                                        toolbar: "undo redo | blocks fontsize | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table image media link | removeformat code preview fullscreen | help",
                                                        branding: false
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                    lineNumber: 753,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 752,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: saveTemplate,
                                                className: "mt-3 px-4 py-2 bg-blue-100 border border-blue-400 text-blue-700 rounded hover:bg-blue-200",
                                                children: "📄 Save as Template"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 767,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 748,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: sendEmail,
                                                disabled: isSending,
                                                className: `px-6 py-2 rounded font-medium ${isSending ? 'bg-gray-400 text-gray-200 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`,
                                                children: isSending ? "Sending..." : "📧 Send Real Email"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 776,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: resetEmailForm,
                                                className: "border border-gray-400 px-6 py-2 rounded hover:bg-gray-100",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 787,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 775,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 688,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t-2 border-gray-300 px-0 py-4 mt-6 pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-gray-700 mb-4",
                                        children: "Email Logs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 797,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:block overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-sm border border-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "bg-gray-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 border-b text-left",
                                                                children: "FROM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                lineNumber: 803,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 border-b text-left",
                                                                children: "TO"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                lineNumber: 804,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 border-b text-left",
                                                                children: "SUBJECT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                lineNumber: 805,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 border-b text-right",
                                                                children: "STATUS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                lineNumber: 806,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 border-b text-right",
                                                                children: "DATE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                lineNumber: 807,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 border-b text-right",
                                                                children: "ACTION"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                lineNumber: 808,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                        lineNumber: 802,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                    lineNumber: 801,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: emailLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: "6",
                                                            className: "py-8 text-center text-red-500 font-medium",
                                                            children: "No Records"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 813,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                        lineNumber: 813,
                                                        columnNumber: 21
                                                    }, this) : emailLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-gray-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-3 border-t",
                                                                    children: log.from
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 817,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-3 border-t",
                                                                    children: log.to
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 818,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-3 border-t",
                                                                    children: log.subject
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 819,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-3 border-t text-right",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-2 py-1 bg-green-100 text-green-700 rounded text-xs",
                                                                        children: log.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                        lineNumber: 821,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 820,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-3 border-t text-right",
                                                                    children: log.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 823,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "p-3 border-t text-right",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>deleteEmailLog(log.id),
                                                                        className: "text-red-500 hover:text-red-700 font-medium",
                                                                        children: "Delete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                        lineNumber: 825,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 824,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, log.id, true, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 816,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                    lineNumber: 811,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 800,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 799,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:hidden space-y-3 pb-4",
                                        children: emailLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8 text-center text-red-500 font-medium border border-gray-300 rounded",
                                            children: "No Records"
                                        }, void 0, false, {
                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 841,
                                            columnNumber: 17
                                        }, this) : emailLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-gray-300 rounded-lg p-4 bg-white shadow-sm",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs font-medium text-gray-500 mb-1",
                                                                    children: "From:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 847,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-gray-800 break-all text-sm",
                                                                    children: log.from
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 848,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 846,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs font-medium text-gray-500 mb-1",
                                                                    children: "To:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 851,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-gray-800 break-all text-sm",
                                                                    children: log.to
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 852,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 850,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs font-medium text-gray-500 mb-1",
                                                                    children: "Subject:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 855,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-700",
                                                                    children: log.subject
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 856,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 854,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium",
                                                                    children: log.status
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 859,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: log.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                                    lineNumber: 860,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 858,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>deleteEmailLog(log.id),
                                                            className: "w-full bg-red-50 text-red-600 hover:bg-red-100 py-2.5 rounded-md font-medium text-sm border border-red-200",
                                                            children: "Delete"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                            lineNumber: 862,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                    lineNumber: 845,
                                                    columnNumber: 21
                                                }, this)
                                            }, log.id, false, {
                                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 844,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 839,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 796,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 687,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ActivityHistoryPage/email/page.js",
                lineNumber: 655,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/ActivityHistoryPage/email/page.js",
        lineNumber: 639,
        columnNumber: 5
    }, this);
}
_s(EmailSection, "W7aQF1TLd5yA2zx5gFY6TYtgQJA=");
_c = EmailSection;
var _c;
__turbopack_context__.k.register(_c, "EmailSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/ActivityHistoryPage/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActivityHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ActivityHistoryPage$2f$comments$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ActivityHistoryPage/comments/page.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ActivityHistoryPage$2f$email$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ActivityHistoryPage/email/page.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ActivityHistory() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("comments");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white w-full text-black p-4 sm:p-6 md:p-8 lg:p-10 xl:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[18px] md:text-[20px] font-semibold mb-3",
                children: [
                    "Activity ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-[1px] border-gray-600 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-[#d7dee3] border-b border-t border-gray-300 flex-wrap h-11",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-5 max-h-[600px] overflow-y-auto",
                        children: activeTab === "comments" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ActivityHistoryPage$2f$comments$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/ActivityHistoryPage/page.js",
                            lineNumber: 48,
                            columnNumber: 39
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ActivityHistoryPage$2f$email$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
}
_s(ActivityHistory, "fIx+3yxLBCilZks4x7uleuANW1o=");
_c = ActivityHistory;
var _c;
__turbopack_context__.k.register(_c, "ActivityHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_ActivityHistoryPage_a39d8bcf._.js.map