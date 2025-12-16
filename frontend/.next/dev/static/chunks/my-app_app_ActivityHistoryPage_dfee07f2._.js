(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-app/app/ActivityHistoryPage/comments/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommentsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/my-app/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CommentsSection() {
    _s();
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            text: "Need to have a followup call. - By Test",
            date: "28-Oct-25 10:29"
        }
    ]);
    const [inputComment, setInputComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "w-full border border-gray-300 rounded p-3 h-32 outline-none text-sm",
                        placeholder: "Comment",
                        value: inputComment,
                        onChange: (e)=>setInputComment(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3 mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: addComment,
                                className: "bg-[#00bcd4] hover:bg-[#00acc1] text-white px-8 py-2.5 rounded font-medium text-sm",
                                children: "Add"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setInputComment(""),
                                className: "bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 px-8 py-2.5 rounded font-medium text-sm",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-dashed border-gray-300 my-6"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-sm border-collapse border border-gray-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "bg-[#e8eef2]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300",
                                                children: "COMMENT"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300",
                                                children: "DATE"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300",
                                                children: "ACTION"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: comments.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-4 text-gray-600 border border-gray-300",
                                                    children: c.text
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-4 text-[#00bcd4] font-medium border border-gray-300",
                                                    children: c.date
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                                    lineNumber: 92,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-4 border border-gray-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>deleteComment(c.id),
                                                        className: "text-gray-500 hover:text-gray-700 transition",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                                            lineNumber: 100,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                                        lineNumber: 96,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                                    lineNumber: 95,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, c.id, true, {
                                            fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden space-y-3",
                        children: comments.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-gray-300 bg-white rounded-lg overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-gray-200 p-4 text-sm text-gray-600",
                                        children: c.text
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-gray-200 p-4 text-sm font-semibold text-[#00bcd4]",
                                        children: c.date
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 flex justify-start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-gray-500 hover:text-gray-700",
                                            onClick: ()=>deleteComment(c.id),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                                lineNumber: 124,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                            lineNumber: 120,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-app/app/ActivityHistoryPage/comments/page.js",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(CommentsSection, "N+VVb9XaKXMEYaEp6dCb5LYpgkA=");
_c = CommentsSection;
var _c;
__turbopack_context__.k.register(_c, "CommentsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/app/ActivityHistoryPage/email/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmailSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/my-app/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const defaultTemplate = {
    id: "default-1",
    name: "Follow-up Template",
    content: "<p>Hello, this is a follow-up email.</p>",
    isCustom: false
};
function EmailSection() {
    _s();
    const quillRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [emailLogs, setEmailLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        defaultTemplate
    ]);
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [from, setFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [toEmail, setToEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("mpl1@gmail.com");
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newEmailField, setNewEmailField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailSection.useEffect": ()=>{
            const link = document.createElement('link');
            link.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
            const script = document.createElement('script');
            script.src = 'https://cdn.quilljs.com/1.3.6/quill.js';
            script.onload = ({
                "EmailSection.useEffect": ()=>{
                    if (window.Quill && !quillRef.current) {
                        quillRef.current = new window.Quill('#editor', {
                            theme: 'snow',
                            placeholder: 'Write your message here...',
                            modules: {
                                toolbar: [
                                    [
                                        {
                                            'font': []
                                        },
                                        {
                                            'size': [
                                                'small',
                                                false,
                                                'large',
                                                'huge'
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            'header': [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5,
                                                6,
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
                                            'script': 'sub'
                                        },
                                        {
                                            'script': 'super'
                                        }
                                    ],
                                    [
                                        {
                                            'list': 'ordered'
                                        },
                                        {
                                            'list': 'bullet'
                                        },
                                        {
                                            'indent': '-1'
                                        },
                                        {
                                            'indent': '+1'
                                        }
                                    ],
                                    [
                                        {
                                            'direction': 'rtl'
                                        },
                                        {
                                            'align': []
                                        }
                                    ],
                                    [
                                        'blockquote',
                                        'code-block'
                                    ],
                                    [
                                        'link',
                                        'image',
                                        'video',
                                        'formula'
                                    ],
                                    [
                                        'clean'
                                    ]
                                ]
                            }
                        });
                    }
                }
            })["EmailSection.useEffect"];
            document.body.appendChild(script);
            return ({
                "EmailSection.useEffect": ()=>{
                    if (document.head.contains(link)) document.head.removeChild(link);
                    if (document.body.contains(script)) document.body.removeChild(script);
                }
            })["EmailSection.useEffect"];
        }
    }["EmailSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailSection.useEffect": ()=>{
            const loadData = {
                "EmailSection.useEffect.loadData": ()=>{
                    try {
                        const savedTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");
                        const validTemplates = savedTemplates.filter({
                            "EmailSection.useEffect.loadData.validTemplates": (t)=>t?.id && t?.name
                        }["EmailSection.useEffect.loadData.validTemplates"]);
                        setTemplates([
                            defaultTemplate,
                            ...validTemplates
                        ]);
                        const savedLogs = JSON.parse(localStorage.getItem("emailLogs") || "[]");
                        const validLogs = savedLogs.filter({
                            "EmailSection.useEffect.loadData.validLogs": (log)=>log?.id
                        }["EmailSection.useEffect.loadData.validLogs"]);
                        setEmailLogs(validLogs);
                    } catch (error) {
                        console.error("Error loading data:", error);
                    }
                }
            }["EmailSection.useEffect.loadData"];
            loadData();
            const interval = setInterval(loadData, 1000);
            return ({
                "EmailSection.useEffect": ()=>clearInterval(interval)
            })["EmailSection.useEffect"];
        }
    }["EmailSection.useEffect"], []);
    const resetForm = ()=>{
        setFrom("");
        setSubject("");
        setToEmail("mpl1@gmail.com");
        setSelectedTemplate("");
        if (quillRef.current) quillRef.current.setContents([]);
    };
    const saveTemplate = ()=>{
        if (!quillRef.current) return;
        const html = quillRef.current.root.innerHTML.trim();
        if (!html || html === "<p><br></p>") return alert("Message is empty!");
        const name = prompt("Enter Template Name:");
        if (!name?.trim()) return;
        const newTemplate = {
            id: crypto.randomUUID(),
            name: name.trim(),
            content: html,
            isCustom: true,
            createdAt: new Date().toISOString()
        };
        try {
            const existing = JSON.parse(localStorage.getItem("emailTemplates") || "[]");
            const updated = [
                newTemplate,
                ...existing.filter((t)=>t?.id)
            ];
            localStorage.setItem("emailTemplates", JSON.stringify(updated));
            setTemplates([
                defaultTemplate,
                ...updated
            ]);
            alert("Template saved successfully!");
        } catch (error) {
            alert("Error saving template.");
        }
    };
    const applyTemplate = (id)=>{
        if (!id) return setSelectedTemplate("");
        setSelectedTemplate(id);
        const temp = templates.find((t)=>t.id === id);
        if (temp && quillRef.current) quillRef.current.root.innerHTML = temp.content;
    };
    const sendEmail = ()=>{
        if (!quillRef.current) return;
        const text = quillRef.current.getText().trim();
        if (!text) return alert("Please write a message!");
        const newEmail = {
            id: crypto.randomUUID(),
            from: from || "(no sender)",
            to: toEmail,
            subject: subject || "(no subject)",
            message: quillRef.current.root.innerHTML,
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
            resetForm();
            alert("Email Sent Successfully!");
        } catch (error) {
            alert("Error sending email.");
        }
    };
    const deleteLog = (id)=>{
        if (window.confirm("Delete this email?")) {
            const updated = emailLogs.filter((log)=>log.id !== id);
            setEmailLogs(updated);
            localStorage.setItem("emailLogs", JSON.stringify(updated));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes slideDown { from { opacity: 0; transform: translateY(-50px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        .ql-container { font-family: inherit; }
        .ql-tooltip { left: auto !important; right: 0 !important; transform: none !important; }
      `
            }, void 0, false, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 flex items-start justify-center z-50 pt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white w-[90%] md:w-[700px] rounded-lg shadow-xl p-6 relative animate-slideDown",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAddForm(false),
                            className: "absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-2 text-gray-800",
                            children: "Add and verify email address to send mail."
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded mb-3",
                            children: "Please check your mail After Click on verify button."
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block mb-2 text-sm text-gray-700 font-medium",
                                    children: "Display Name"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "w-full border border-gray-300 px-3 py-2 rounded",
                                    placeholder: "Enter display name"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block mb-2 text-sm text-gray-700 font-medium",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    value: newEmailField,
                                    onChange: (e)=>setNewEmailField(e.target.value),
                                    className: "w-full border border-gray-300 px-3 py-2 rounded",
                                    placeholder: "Enter email address"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium",
                                    onClick: ()=>{
                                        if (newEmailField.trim()) {
                                            alert("Verification sent to: " + newEmailField);
                                            setShowAddForm(false);
                                            setNewEmailField("");
                                        } else alert("Enter email");
                                    },
                                    children: "Verify"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded font-medium",
                                    onClick: ()=>{
                                        setShowAddForm(false);
                                        setNewEmailField("");
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                    lineNumber: 168,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 167,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-end gap-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-2 text-gray-700 font-medium",
                                        children: "From"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100",
                                        value: from,
                                        placeholder: "Enter From",
                                        onChange: (e)=>setFrom(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAddForm(true),
                                className: "bg-gray-500 text-white px-5 py-2.5 rounded hover:bg-gray-700 font-medium",
                                children: "Add More"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block mb-2 text-gray-700 font-medium",
                                children: "To"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100 resize",
                                value: toEmail,
                                onChange: (e)=>setToEmail(e.target.value),
                                rows: 2
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block mb-2 text-gray-700 font-medium",
                                children: "Subject"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100",
                                value: subject,
                                placeholder: "Enter subject",
                                onChange: (e)=>setSubject(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block mb-2 text-gray-700 font-medium",
                                children: [
                                    "Reply with Template ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500 ml-2",
                                        children: [
                                            "(",
                                            templates.length - 1,
                                            " custom template",
                                            templates.length - 1 !== 1 ? 's' : '',
                                            " available)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 222,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "border border-gray-300 w-full p-2.5 rounded-sm bg-white hover:bg-gray-100",
                                value: selectedTemplate,
                                onChange: (e)=>applyTemplate(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Choose Template"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    templates.map((t)=>t?.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: t.id,
                                            children: [
                                                t.isCustom ? '📝 ' : '📄 ',
                                                t.name
                                            ]
                                        }, t.id, true, {
                                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 227,
                                            columnNumber: 42
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block mb-2 text-gray-700 font-medium",
                                children: "Message"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-gray-300 rounded overflow-auto resize",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "editor",
                                    style: {
                                        minHeight: '150px',
                                        backgroundColor: 'white'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: saveTemplate,
                        className: "mt-3 px-4 py-2 bg-blue-100 border border-blue-400 text-blue-700 rounded hover:bg-blue-200",
                        children: "📄 Save as Template"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: sendEmail,
                        className: "bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700",
                        children: "Send Email"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: resetForm,
                        className: "border border-gray-400 px-6 py-2 rounded hover:bg-gray-100",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-dashed border-gray-300 my-6"
            }, void 0, false, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm border-collapse border border-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-[#e8eef2]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300",
                                        children: "TO"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300",
                                        children: "STATUS"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300",
                                        children: "DATE"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300",
                                        children: "ACTION"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: emailLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: "4",
                                    className: "py-8 text-center text-red-500 font-medium border border-gray-300",
                                    children: "No Records"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 260,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 260,
                                columnNumber: 15
                            }, this) : emailLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-gray-600 border border-gray-300",
                                            children: log.to
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 264,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 border border-gray-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 bg-green-100 text-green-700 rounded text-xs",
                                                children: log.status
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 266,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 265,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-[#00bcd4] font-medium border border-gray-300",
                                            children: log.date
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 border border-gray-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>deleteLog(log.id),
                                                className: "text-gray-500 hover:text-gray-700 transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                                    lineNumber: 271,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 270,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 269,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, log.id, true, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 263,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                    lineNumber: 249,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden space-y-3",
                children: emailLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-8 text-center text-red-500 font-medium border border-gray-300 rounded",
                    children: "No Records"
                }, void 0, false, {
                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                    lineNumber: 283,
                    columnNumber: 11
                }, this) : emailLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-gray-300 bg-white rounded-lg overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-gray-200 p-4 text-sm text-gray-600",
                                children: log.to
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 287,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-gray-200 p-4 text-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 bg-green-100 text-green-700 rounded text-xs inline-block",
                                    children: log.status
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 289,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 288,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-gray-200 p-4 text-sm font-semibold text-[#00bcd4]",
                                children: log.date
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 291,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 flex justify-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-gray-500 hover:text-gray-700",
                                    onClick: ()=>deleteLog(log.id),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 294,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 293,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 292,
                                columnNumber: 15
                            }, this)
                        ]
                    }, log.id, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 286,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 281,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
_s(EmailSection, "y4gVqWJiDCjNzfBONRZNJz43QKQ=");
_c = EmailSection;
// "use client";
// import { useState, useRef, useEffect } from "react";
// import { Trash2 } from "lucide-react";
// const defaultTemplate = {
//   id: "default-1",
//   name: "Follow-up Template",
//   content: "<p>Hello, this is a follow-up email.</p>",
//   isCustom: false
// };
// export default function EmailSection() {
//   const editorRef = useRef(null);
//   const quillRef = useRef(null);
//   const [emailLogs, setEmailLogs] = useState([]);
//   const [templates, setTemplates] = useState([defaultTemplate]);
//   const [selectedTemplate, setSelectedTemplate] = useState("");
//   const [subject, setSubject] = useState("");
//   const [from, setFrom] = useState("");
//   const [toEmail, setToEmail] = useState("mpl1@gmail.com");
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [newEmailField, setNewEmailField] = useState("");
//   useEffect(() => {
//     const link = document.createElement('link');
//     link.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
//     link.rel = 'stylesheet';
//     document.head.appendChild(link);
//     const script = document.createElement('script');
//     script.src = 'https://cdn.quilljs.com/1.3.6/quill.js';
//     script.onload = () => {
//       if (window.Quill && !quillRef.current) {
//         quillRef.current = new window.Quill('#editor', {
//           theme: 'snow',
//           placeholder: 'Write your message here...',
//           modules: {
//             toolbar: [
//               [{ 'font': [] }, { 'size': ['small', false, 'large', 'huge'] }],
//               [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
//               ['bold', 'italic', 'underline', 'strike'],
//               [{ 'color': [] }, { 'background': [] }],
//               [{ 'script': 'sub' }, { 'script': 'super' }],
//               [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
//               [{ 'direction': 'rtl' }, { 'align': [] }],
//               ['blockquote', 'code-block'],
//               ['link', 'image', 'video', 'formula'],
//               ['clean']
//             ]
//           }
//         });
//       }
//     };
//     document.body.appendChild(script);
//     return () => {
//       if (document.head.contains(link)) document.head.removeChild(link);
//       if (document.body.contains(script)) document.body.removeChild(script);
//     };
//   }, []);
//   useEffect(() => {
//     loadTemplatesAndLogs();
//     const handleStorageChange = (e) => {
//       if (e.key === 'emailTemplates') {
//         loadTemplatesAndLogs();
//       }
//     };
//     window.addEventListener('storage', handleStorageChange);
//     const interval = setInterval(loadTemplatesAndLogs, 1000);
//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//       clearInterval(interval);
//     };
//   }, []);
//   const loadTemplatesAndLogs = () => {
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
//       setEmailLogs(validLogs);
//     } catch (error) {
//       console.error("Error loading data from localStorage:", error);
//       setTemplates([defaultTemplate]);
//       setEmailLogs([]);
//     }
//   };
//   const resetEmailForm = () => {
//     setFrom("");
//     setSubject("");
//     setToEmail("mpl1@gmail.com");
//     setSelectedTemplate("");
//     if (quillRef.current) {
//       quillRef.current.setContents([]);
//     }
//   };
//   const saveTemplate = () => {
//     if (!quillRef.current) return;
//     const html = quillRef.current.root.innerHTML.trim();
//     if (!html || html === "<p><br></p>") {
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
//     if (temp && quillRef.current) {
//       quillRef.current.root.innerHTML = temp.content;
//     }
//   };
//   const sendEmail = () => {
//     if (!quillRef.current) return;
//     const message = quillRef.current.root.innerHTML;
//     const text = quillRef.current.getText().trim();
//     if (!text || text === "") {
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
//     <div className="w-full bg-white">
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
//         .ql-container {
//           font-family: inherit;
//         }
//         .ql-tooltip {
//           left: auto !important;
//           right: 0 !important;
//           transform: none !important;
//   }
//    `}</style>
//       <div className="w-full">
//         {showAddForm && (
//           <div className="fixed inset-0 bg-black/60 flex items-start justify-center z-50 pt-10">
//             <div className="bg-white w-[90%] md:w-[700px] rounded-lg shadow-xl p-6 relative animate-slideDown">
//               <button onClick={() => setShowAddForm(false)} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700">×</button>
//               <h3 className="text-lg font-semibold mb-2 text-gray-800 pb-1">
//                 Add and verify email address to send mail.
//               </h3>
//               <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded mb-3">
//                 Please check your mail After Click on verify button.
//               </div>
//               <div className="mb-3">
//                 <label className="block mb-2 text-sm text-gray-700 font-medium">Display Name</label>
//                 <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded text-black focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter display name" />
//               </div>
//               <div className="mb-3">
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
//         <div className="text-sm">
//           <div className="flex justify-between items-end gap-4 mb-4">
//             <div className="flex-1">
//               <label className="block mb-2 text-gray-700 font-medium">From</label>
//               <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100"
//                 value={from} placeholder="Enter From" onChange={(e) => setFrom(e.target.value)} />
//             </div>
//             <button onClick={() => setShowAddForm(true)}
//               className="bg-gray-500 text-white px-5 py-2.5 rounded hover:bg-gray-700 font-medium flex items-center gap-2">
//               Add More
//             </button>
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-gray-700 font-medium">To</label>
//             <textarea
//               className="border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100 resize"
//               value={toEmail}
//               onChange={(e) => setToEmail(e.target.value)}
//               rows={2}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-gray-700 font-medium">Subject</label>
//             <input type="text" className="border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100"
//               value={subject} placeholder="Enter subject" onChange={(e) => setSubject(e.target.value)} />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-gray-700 font-medium">
//               Reply with Template
//               <span className="text-xs text-gray-500 ml-2">
//                 ({templates.length - 1} custom template{templates.length - 1 !== 1 ? 's' : ''} available)
//               </span>
//             </label>
//             <select className="border border-gray-300 w-full p-2.5 rounded-sm bg-white hover:bg-gray-100"
//               value={selectedTemplate} onChange={(e) => applyTemplate(e.target.value)}>
//               <option value="">Choose Template</option>
//               {templates && templates.length > 0 && templates.map((t) => {
//                 if (!t || !t.id) return null;
//                 return (
//                   <option key={t.id} value={t.id}>
//                     {t.isCustom ? '📝 ' : '📄 '}{t.name || 'Untitled Template'}
//                   </option>
//                 );
//               })}
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-gray-700 font-medium">Message</label>
//             <div className="border-2 border-gray-300 rounded overflow-auto resize">
//               <div id="editor" style={{ minHeight: '150px', backgroundColor: 'white' }}></div>
//             </div>
//           </div>
//           <button onClick={saveTemplate} className="mt-3 px-4 py-2 bg-blue-100 border border-blue-400 text-blue-700 rounded hover:bg-blue-200">
//             📄 Save as Template
//           </button>
//         </div>
//         <div className="flex gap-4 mt-4">
//           <button onClick={sendEmail} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Email</button>
//           <button onClick={resetEmailForm} className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100">Cancel</button>
//         </div>
//         <div className="border-t border-dashed border-gray-300 my-4"></div>
//         <div className="overflow-x-auto hidden md:block">
//           <table className="w-full text-sm border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-[#e8eef2]">
//                 <th className="px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300">
//                   TO
//                 </th>
//                 <th className="px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300">
//                   STATUS
//                 </th>
//                 <th className="px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300">
//                   DATE
//                 </th>
//                 <th className="px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300">
//                   ACTION
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {emailLogs.length === 0 ? (
//                 <tr>
//                   <td colSpan="4" className="py-3 text-center text-red-500 font-medium border border-gray-300">
//                     No Records
//                   </td>
//                 </tr>
//               ) : (
//                 emailLogs.map((log) => (
//                   <tr key={log.id} className="bg-white">
//                     <td className="px-4 py-2 text-gray-600 border border-gray-300">
//                       {log.to}
//                     </td>
//                     <td className="px-4 py-2 border border-gray-300">
//                       <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
//                         {log.status}
//                       </span>
//                     </td>
//                     <td className="px-4 py-2 text-[#00bcd4] font-medium border border-gray-300">
//                       {log.date}
//                     </td>
//                     <td className="px-4 py-2 border border-gray-300">
//                       <button
//                         onClick={() => deleteEmailLog(log.id)}
//                         className="text-gray-500 hover:text-gray-700 transition"
//                       >
//                         <Trash2 className="w-5 h-5" />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//         <div className="md:hidden space-y-3">
//           {emailLogs.length === 0 ? (
//             <div className="py-8 text-center text-red-500 font-medium border border-gray-300 rounded">
//               No Records
//             </div>
//           ) : (
//             emailLogs.map((log) => (
//               <div key={log.id} className="border border-gray-300 bg-white rounded-lg overflow-hidden">
//                 <div className="border-b border-gray-200 p-4 text-sm text-gray-600">
//                   <div className="font-medium text-gray-500 text-xs uppercase mb-1">To:</div>
//                   {log.to}
//                 </div>
//                 <div className="border-b border-gray-200 p-4 text-sm">
//                   <div className="font-medium text-gray-500 text-xs uppercase mb-1">Status:</div>
//                   <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs inline-block">
//                     {log.status}
//                   </span>
//                 </div>
//                 <div className="border-b border-gray-200 p-4 text-sm font-semibold text-[#00bcd4]">
//                   <div className="font-medium text-gray-500 text-xs uppercase mb-1">Date:</div>
//                   {log.date}
//                 </div>
//                 <div className="p-4 flex justify-start">
//                   <button
//                     className="text-gray-500 hover:text-gray-700"
//                     onClick={() => deleteEmailLog(log.id)}
//                   >
//                     <Trash2 className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
;
;
const defaultTemplate = {
    id: "default-1",
    name: "Follow-up Template",
    content: "<p>Hello, this is a follow-up email.</p>",
    isCustom: false
};
function EmailSection() {
    _s1();
    const quillRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [emailLogs, setEmailLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        defaultTemplate
    ]);
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [from, setFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [toEmail, setToEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("mpl1@gmail.com");
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newEmailField, setNewEmailField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailSection.useEffect": ()=>{
            const link = document.createElement('link');
            link.href = 'https://cdn.quilljs.com/1.3.6/quill.snow.css';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
            const script = document.createElement('script');
            script.src = 'https://cdn.quilljs.com/1.3.6/quill.js';
            script.onload = ({
                "EmailSection.useEffect": ()=>{
                    if (window.Quill && !quillRef.current) {
                        quillRef.current = new window.Quill('#editor', {
                            theme: 'snow',
                            placeholder: 'Write your message here...',
                            modules: {
                                toolbar: [
                                    [
                                        {
                                            'font': []
                                        },
                                        {
                                            'size': [
                                                'small',
                                                false,
                                                'large',
                                                'huge'
                                            ]
                                        }
                                    ],
                                    [
                                        {
                                            'header': [
                                                1,
                                                2,
                                                3,
                                                4,
                                                5,
                                                6,
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
                                            'script': 'sub'
                                        },
                                        {
                                            'script': 'super'
                                        }
                                    ],
                                    [
                                        {
                                            'list': 'ordered'
                                        },
                                        {
                                            'list': 'bullet'
                                        },
                                        {
                                            'indent': '-1'
                                        },
                                        {
                                            'indent': '+1'
                                        }
                                    ],
                                    [
                                        {
                                            'direction': 'rtl'
                                        },
                                        {
                                            'align': []
                                        }
                                    ],
                                    [
                                        'blockquote',
                                        'code-block'
                                    ],
                                    [
                                        'link',
                                        'image',
                                        'video',
                                        'formula'
                                    ],
                                    [
                                        'clean'
                                    ]
                                ]
                            }
                        });
                    }
                }
            })["EmailSection.useEffect"];
            document.body.appendChild(script);
            return ({
                "EmailSection.useEffect": ()=>{
                    if (document.head.contains(link)) document.head.removeChild(link);
                    if (document.body.contains(script)) document.body.removeChild(script);
                }
            })["EmailSection.useEffect"];
        }
    }["EmailSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmailSection.useEffect": ()=>{
            const loadData = {
                "EmailSection.useEffect.loadData": ()=>{
                    try {
                        const savedTemplates = JSON.parse(localStorage.getItem("emailTemplates") || "[]");
                        const validTemplates = savedTemplates.filter({
                            "EmailSection.useEffect.loadData.validTemplates": (t)=>t?.id && t?.name
                        }["EmailSection.useEffect.loadData.validTemplates"]);
                        setTemplates([
                            defaultTemplate,
                            ...validTemplates
                        ]);
                        const savedLogs = JSON.parse(localStorage.getItem("emailLogs") || "[]");
                        const validLogs = savedLogs.filter({
                            "EmailSection.useEffect.loadData.validLogs": (log)=>log?.id
                        }["EmailSection.useEffect.loadData.validLogs"]);
                        setEmailLogs(validLogs);
                    } catch (error) {
                        console.error("Error loading data:", error);
                    }
                }
            }["EmailSection.useEffect.loadData"];
            loadData();
            const interval = setInterval(loadData, 1000);
            return ({
                "EmailSection.useEffect": ()=>clearInterval(interval)
            })["EmailSection.useEffect"];
        }
    }["EmailSection.useEffect"], []);
    const resetForm = ()=>{
        setFrom("");
        setSubject("");
        setToEmail("mpl1@gmail.com");
        setSelectedTemplate("");
        if (quillRef.current) quillRef.current.setContents([]);
    };
    const saveTemplate = ()=>{
        if (!quillRef.current) return;
        const html = quillRef.current.root.innerHTML.trim();
        if (!html || html === "<p><br></p>") return alert("Message is empty!");
        const name = prompt("Enter Template Name:");
        if (!name?.trim()) return;
        const newTemplate = {
            id: crypto.randomUUID(),
            name: name.trim(),
            content: html,
            isCustom: true,
            createdAt: new Date().toISOString()
        };
        try {
            const existing = JSON.parse(localStorage.getItem("emailTemplates") || "[]");
            const updated = [
                newTemplate,
                ...existing.filter((t)=>t?.id)
            ];
            localStorage.setItem("emailTemplates", JSON.stringify(updated));
            setTemplates([
                defaultTemplate,
                ...updated
            ]);
            alert("Template saved successfully!");
        } catch (error) {
            alert("Error saving template.");
        }
    };
    const applyTemplate = (id)=>{
        if (!id) return setSelectedTemplate("");
        setSelectedTemplate(id);
        const temp = templates.find((t)=>t.id === id);
        if (temp && quillRef.current) quillRef.current.root.innerHTML = temp.content;
    };
    const sendEmail = ()=>{
        if (!quillRef.current) return;
        const text = quillRef.current.getText().trim();
        if (!text) return alert("Please write a message!");
        const newEmail = {
            id: crypto.randomUUID(),
            from: from || "(no sender)",
            to: toEmail,
            subject: subject || "(no subject)",
            message: quillRef.current.root.innerHTML,
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
            resetForm();
            alert("Email Sent Successfully!");
        } catch (error) {
            alert("Error sending email.");
        }
    };
    const deleteLog = (id)=>{
        if (window.confirm("Delete this email?")) {
            const updated = emailLogs.filter((log)=>log.id !== id);
            setEmailLogs(updated);
            localStorage.setItem("emailLogs", JSON.stringify(updated));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes slideDown { from { opacity: 0; transform: translateY(-50px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slideDown { animation: slideDown 0.3s ease-out; }
        .ql-container { font-family: inherit; }
        .ql-tooltip { left: auto !important; right: 0 !important; transform: none !important; }
      `
            }, void 0, false, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 939,
                columnNumber: 7
            }, this),
            showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 flex items-start justify-center z-50 pt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white w-[90%] md:w-[700px] rounded-lg shadow-xl p-6 relative animate-slideDown",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowAddForm(false),
                            className: "absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 950,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-2 text-gray-800",
                            children: "Add and verify email address to send mail."
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 951,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded mb-3",
                            children: "Please check your mail After Click on verify button."
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 952,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block mb-2 text-sm text-gray-700 font-medium",
                                    children: "Display Name"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 956,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "w-full border border-gray-300 px-3 py-2 rounded",
                                    placeholder: "Enter display name"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 957,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 955,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block mb-2 text-sm text-gray-700 font-medium",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 960,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    value: newEmailField,
                                    onChange: (e)=>setNewEmailField(e.target.value),
                                    className: "w-full border border-gray-300 px-3 py-2 rounded",
                                    placeholder: "Enter email address"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 961,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 959,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium",
                                    onClick: ()=>{
                                        if (newEmailField.trim()) {
                                            alert("Verification sent to: " + newEmailField);
                                            setShowAddForm(false);
                                            setNewEmailField("");
                                        } else alert("Enter email");
                                    },
                                    children: "Verify"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 965,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded font-medium",
                                    onClick: ()=>{
                                        setShowAddForm(false);
                                        setNewEmailField("");
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 969,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 964,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                    lineNumber: 949,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 948,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-end gap-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block mb-2 text-gray-700 font-medium",
                                        children: "From"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 980,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100",
                                        value: from,
                                        placeholder: "Enter From",
                                        onChange: (e)=>setFrom(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 981,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 979,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowAddForm(true),
                                className: "bg-gray-500 text-white px-5 py-2.5 rounded hover:bg-gray-700 font-medium",
                                children: "Add More"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 984,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 978,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block mb-2 text-gray-700 font-medium",
                                children: "To"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 990,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100 resize",
                                value: toEmail,
                                onChange: (e)=>setToEmail(e.target.value),
                                rows: 2
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 991,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 989,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block mb-2 text-gray-700 font-medium",
                                children: "Subject"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 996,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "border border-gray-300 w-full p-2.5 rounded-sm hover:bg-gray-100",
                                value: subject,
                                placeholder: "Enter subject",
                                onChange: (e)=>setSubject(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 997,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 995,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block mb-2 text-gray-700 font-medium",
                                children: [
                                    "Reply with Template ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500 ml-2",
                                        children: [
                                            "(",
                                            templates.length - 1,
                                            " custom template",
                                            templates.length - 1 !== 1 ? 's' : '',
                                            " available)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 1003,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 1002,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "border border-gray-300 w-full p-2.5 rounded-sm bg-white hover:bg-gray-100",
                                value: selectedTemplate,
                                onChange: (e)=>applyTemplate(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Choose Template"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 1007,
                                        columnNumber: 13
                                    }, this),
                                    templates.map((t)=>t?.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: t.id,
                                            children: [
                                                t.isCustom ? '📝 ' : '📄 ',
                                                t.name
                                            ]
                                        }, t.id, true, {
                                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 1008,
                                            columnNumber: 42
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 1005,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 1001,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block mb-2 text-gray-700 font-medium",
                                children: "Message"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 1013,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-gray-300 rounded overflow-auto resize",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "editor",
                                    style: {
                                        minHeight: '150px',
                                        backgroundColor: 'white'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 1015,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 1014,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 1012,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: saveTemplate,
                        className: "mt-3 px-4 py-2 bg-blue-100 border border-blue-400 text-blue-700 rounded hover:bg-blue-200",
                        children: "📄 Save as Template"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 1018,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 977,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: sendEmail,
                        className: "bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700",
                        children: "Send Email"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 1024,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: resetForm,
                        className: "border border-gray-400 px-6 py-2 rounded hover:bg-gray-100",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 1025,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 1023,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-dashed border-gray-300 my-6"
            }, void 0, false, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 1028,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm border-collapse border border-gray-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-[#e8eef2]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300",
                                        children: "TO"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 1033,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300",
                                        children: "STATUS"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 1034,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300",
                                        children: "DATE"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 1035,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-4 py-3 text-left font-semibold text-gray-700 uppercase text-xs tracking-wider border border-gray-300",
                                        children: "ACTION"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 1036,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 1032,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 1031,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: emailLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: "4",
                                    className: "py-8 text-center text-red-500 font-medium border border-gray-300",
                                    children: "No Records"
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 1041,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 1041,
                                columnNumber: 15
                            }, this) : emailLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-gray-600 border border-gray-300",
                                            children: log.to
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 1045,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 border border-gray-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 bg-green-100 text-green-700 rounded text-xs",
                                                children: log.status
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 1047,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 1046,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-[#00bcd4] font-medium border border-gray-300",
                                            children: log.date
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 1049,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 border border-gray-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>deleteLog(log.id),
                                                className: "text-gray-500 hover:text-gray-700 transition",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                                    lineNumber: 1052,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                                lineNumber: 1051,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                            lineNumber: 1050,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, log.id, true, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 1044,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                            lineNumber: 1039,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                    lineNumber: 1030,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 1029,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden space-y-3",
                children: emailLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-8 text-center text-red-500 font-medium border border-gray-300 rounded",
                    children: "No Records"
                }, void 0, false, {
                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                    lineNumber: 1064,
                    columnNumber: 11
                }, this) : emailLogs.map((log)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-gray-300 bg-white rounded-lg overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-gray-200 p-4 text-sm text-gray-600",
                                children: log.to
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 1068,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-gray-200 p-4 text-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 bg-green-100 text-green-700 rounded text-xs inline-block",
                                    children: log.status
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 1070,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 1069,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-gray-200 p-4 text-sm font-semibold text-[#00bcd4]",
                                children: log.date
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 1072,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 flex justify-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-gray-500 hover:text-gray-700",
                                    onClick: ()=>deleteLog(log.id),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                        lineNumber: 1075,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                    lineNumber: 1074,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                                lineNumber: 1073,
                                columnNumber: 15
                            }, this)
                        ]
                    }, log.id, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                        lineNumber: 1067,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
                lineNumber: 1062,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-app/app/ActivityHistoryPage/email/page.js",
        lineNumber: 938,
        columnNumber: 5
    }, this);
}
_s1(EmailSection, "y4gVqWJiDCjNzfBONRZNJz43QKQ=");
_c1 = EmailSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "EmailSection");
__turbopack_context__.k.register(_c1, "EmailSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/app/ActivityHistoryPage/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActivityHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$app$2f$ActivityHistoryPage$2f$comments$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/app/ActivityHistoryPage/comments/page.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$app$2f$ActivityHistoryPage$2f$email$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/app/ActivityHistoryPage/email/page.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ActivityHistory() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("comments");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white w-full text-black p-4 sm:p-6 md:p-8 lg:p-10 xl:p-6 h-screen overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[18px] md:text-[20px] font-semibold mb-3",
                children: [
                    "Activity ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-500",
                        children: "history"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/page.js",
                        lineNumber: 13,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/page.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-[1px] border-gray-600 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-[#d7dee3] border-b border-t border-gray-300 flex-wrap h-11",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("comments"),
                                className: `px-4 py-2 text-sm border-r border-gray-300 
              w-1/2 sm:w-auto text-center
              ${activeTab === "comments" ? "bg-white font-medium" : "bg-[#d7dee3] text-gray-600"}
            `,
                                children: "Comments"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/page.js",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("email"),
                                className: `px-4 py-2 text-sm border-r border-gray-300 
              w-1/2 sm:w-auto text-center
              ${activeTab === "email" ? "bg-white font-medium" : "bg-[#d7dee3] text-gray-600"}
            `,
                                children: "Send email"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/ActivityHistoryPage/page.js",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/page.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-5",
                        children: activeTab === "comments" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$app$2f$ActivityHistoryPage$2f$comments$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/page.js",
                            lineNumber: 48,
                            columnNumber: 39
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$app$2f$ActivityHistoryPage$2f$email$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/my-app/app/ActivityHistoryPage/page.js",
                            lineNumber: 48,
                            columnNumber: 61
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/ActivityHistoryPage/page.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/ActivityHistoryPage/page.js",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-app/app/ActivityHistoryPage/page.js",
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

//# sourceMappingURL=my-app_app_ActivityHistoryPage_dfee07f2._.js.map