module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddCustomTemplatePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AddCustomTemplatePage() {
    const [templateName, setTemplateName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [visibility, setVisibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("admin");
    const [showPreview, setShowPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTextColorPicker, setShowTextColorPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showBgColorPicker, setShowBgColorPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleNavigate = (page)=>{
        // Navigation logic - Replace with your router
        console.log(`Navigate to: ${page}`);
    // For Next.js: router.push(`/${page}`)
    // For React Router: navigate(`/${page}`)
    };
    const execCommand = (command, value = null)=>{
        document.execCommand(command, false, value);
        editorRef.current?.focus();
    };
    const insertLink = ()=>{
        const url = prompt("Enter URL:");
        if (url) {
            execCommand("createLink", url);
        }
    };
    const insertImage = ()=>{
        const url = prompt("Enter Image URL:");
        if (url) {
            execCommand("insertImage", url);
        }
    };
    const insertVideo = ()=>{
        const url = prompt("Enter Video URL (YouTube/Vimeo):");
        if (url) {
            const embedUrl = url.includes("youtube.com") || url.includes("youtu.be") ? `<iframe width="560" height="315" src="${url.replace("watch?v=", "embed/")}" frameborder="0" allowfullscreen></iframe>` : `<video controls width="560"><source src="${url}"></video>`;
            execCommand("insertHTML", embedUrl);
        }
    };
    const changeColor = (color, isBackground = false)=>{
        if (isBackground) {
            execCommand("backColor", color);
            setShowBgColorPicker(false);
        } else {
            execCommand("foreColor", color);
            setShowTextColorPicker(false);
        }
    };
    const colors = [
        [
            "#000000",
            "#8B4500",
            "#556B2F",
            "#006400",
            "#003366",
            "#000080",
            "#4B0082",
            "#2F4F4F"
        ],
        [
            "#800000",
            "#FF6600",
            "#808000",
            "#00AA00",
            "#008080",
            "#0000FF",
            "#9370DB",
            "#808080"
        ],
        [
            "#FF0000",
            "#FFA500",
            "#9ACD32",
            "#00CC66",
            "#00CCCC",
            "#4169E1",
            "#9932CC",
            "#A9A9A9"
        ],
        [
            "#FF00FF",
            "#FFFF00",
            "#FFFF00",
            "#00FF00",
            "#00FFFF",
            "#00BFFF",
            "#C591C5",
            "#C0C0C0"
        ],
        [
            "#FFB6C1",
            "#FFDAB9",
            "#FFFFE0",
            "#98FB98",
            "#AFEEEE",
            "#87CEFA",
            "#DDA0DD",
            "#FFFFFF"
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl md:text-2xl font-normal text-gray-700 mb-6",
                    children: "Add Custom Template"
                }, void 0, false, {
                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded shadow-sm border border-gray-200 p-4 md:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-gray-700 mb-2",
                                    children: [
                                        "Template Name ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                            lineNumber: 74,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Template Name",
                                    className: "w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400",
                                    value: templateName,
                                    onChange: (e)=>setTemplateName(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-gray-700 mb-2",
                                    children: [
                                        "Message ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-600 font-normal text-sm",
                                            children: "(Note : Please Enter Plain Text Only For Better Result)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                            lineNumber: 87,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-gray-300 rounded overflow-hidden bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 md:gap-4 px-3 py-2 border-b border-gray-300 bg-gray-50 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1",
                                                    children: [
                                                        "File ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "▼"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 93,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1",
                                                    children: [
                                                        "Edit ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "▼"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 96,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1",
                                                    children: [
                                                        "Insert ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "▼"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 99,
                                                            columnNumber: 26
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 98,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1",
                                                    children: [
                                                        "View ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "▼"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 102,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 101,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1",
                                                    children: [
                                                        "Format ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "▼"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 105,
                                                            columnNumber: 26
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1",
                                                    children: [
                                                        "Table ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "▼"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 108,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1",
                                                    children: [
                                                        "Tools ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            children: "▼"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 111,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center px-2 py-2 border-b border-gray-300 bg-white flex-wrap gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center border-r border-gray-300 pr-2 mr-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>execCommand("bold"),
                                                            className: "p-2 hover:bg-gray-100 rounded font-bold text-base text-gray-700",
                                                            title: "Bold",
                                                            children: "B"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 117,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>execCommand("italic"),
                                                            className: "p-2 hover:bg-gray-100 rounded italic text-base text-gray-700",
                                                            title: "Italic",
                                                            children: "I"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 124,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center border-r border-gray-300 pr-2 mr-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>execCommand("justifyLeft"),
                                                            className: "p-2 hover:bg-gray-100 rounded text-gray-700",
                                                            title: "Align Left",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M3 3h18v2H3V3zm0 4h12v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2zm0 4h18v2H3v-2z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 140,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                lineNumber: 139,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 134,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>execCommand("justifyCenter"),
                                                            className: "p-2 hover:bg-gray-100 rounded text-gray-700",
                                                            title: "Align Center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M3 3h18v2H3V3zm3 4h12v2H6V7zm-3 4h18v2H3v-2zm3 4h12v2H6v-2zm-3 4h18v2H3v-2z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 149,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                lineNumber: 148,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 143,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>execCommand("justifyRight"),
                                                            className: "p-2 hover:bg-gray-100 rounded text-gray-700",
                                                            title: "Align Right",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M3 3h18v2H3V3zm6 4h12v2H9V7zm-6 4h18v2H3v-2zm6 4h12v2H9v-2zm-6 4h18v2H3v-2z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 158,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                lineNumber: 157,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 152,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>execCommand("justifyFull"),
                                                            className: "p-2 hover:bg-gray-100 rounded text-gray-700",
                                                            title: "Justify",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 167,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                lineNumber: 166,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 161,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center border-r border-gray-300 pr-2 mr-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>execCommand("insertUnorderedList"),
                                                            className: "p-2 hover:bg-gray-100 rounded text-gray-700",
                                                            title: "Bullet List",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "currentColor",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "4",
                                                                        cy: "6",
                                                                        r: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                        lineNumber: 179,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "4",
                                                                        cy: "12",
                                                                        r: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                        lineNumber: 180,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "4",
                                                                        cy: "18",
                                                                        r: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                        lineNumber: 181,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M9 5h12v2H9V5zm0 6h12v2H9v-2zm0 6h12v2H9v-2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                        lineNumber: 182,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                lineNumber: 178,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 173,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>execCommand("insertOrderedList"),
                                                            className: "p-2 hover:bg-gray-100 rounded text-gray-700",
                                                            title: "Numbered List",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M3 4h2v2H3V4zm0 6h2v2H3v-2zm0 6h2v2H3v-2zM9 5h12v2H9V5zm0 6h12v2H9v-2zm0 6h12v2H9v-2z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 191,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                lineNumber: 190,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 185,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>execCommand("indent"),
                                                            className: "p-2 hover:bg-gray-100 rounded text-gray-700",
                                                            title: "Increase Indent",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M3 3h18v2H3V3zm8 4h10v2H11V7zm-8 4h18v2H3v-2zm8 4h10v2H11v-2zm-8 4h18v2H3v-2zM3 7v10l4-5-4-5z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 200,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                lineNumber: 199,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 194,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>execCommand("outdent"),
                                                            className: "p-2 hover:bg-gray-100 rounded text-gray-700",
                                                            title: "Decrease Indent",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M3 3h18v2H3V3zm8 4h10v2H11V7zm-8 4h18v2H3v-2zm8 4h10v2H11v-2zm-8 4h18v2H3v-2zM7 7v10l-4-5 4-5z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 209,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                lineNumber: 208,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 203,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center border-r border-gray-300 pr-2 mr-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: insertLink,
                                                            className: "p-2 hover:bg-gray-100 rounded text-gray-700",
                                                            title: "Insert Link",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 221,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                lineNumber: 220,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 215,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: insertImage,
                                                            className: "p-2 hover:bg-gray-100 rounded text-gray-700",
                                                            title: "Insert Image",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 230,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                lineNumber: 229,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 224,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: insertVideo,
                                                            className: "p-2 hover:bg-gray-100 rounded text-gray-700",
                                                            title: "Insert Video",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 239,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                lineNumber: 238,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 214,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setShowTextColorPicker(!showTextColorPicker);
                                                                        setShowBgColorPicker(false);
                                                                    },
                                                                    className: "p-2 hover:bg-gray-100 rounded text-gray-700 flex items-center gap-1",
                                                                    title: "Text Color",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-base",
                                                                            children: "A"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                            lineNumber: 254,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            children: "▼"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                            lineNumber: 255,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 246,
                                                                    columnNumber: 21
                                                                }, this),
                                                                showTextColorPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute top-full mt-1 w-60 left-0 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-3 z-50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-8 gap-1",
                                                                        children: colors.map((row, i)=>row.map((color, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>changeColor(color, false),
                                                                                    className: "w-7 h-7 rounded border border-gray-200 hover:scale-110 transition-transform shadow-sm",
                                                                                    style: {
                                                                                        backgroundColor: color
                                                                                    },
                                                                                    title: color
                                                                                }, `${i}-${j}`, false, {
                                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                                    lineNumber: 262,
                                                                                    columnNumber: 31
                                                                                }, this)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                        lineNumber: 259,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 258,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 245,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>{
                                                                        setShowBgColorPicker(!showBgColorPicker);
                                                                        setShowTextColorPicker(false);
                                                                    },
                                                                    className: "p-2 hover:bg-gray-100 rounded text-gray-700 flex items-center gap-1",
                                                                    title: "Background Color",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-base",
                                                                            children: "A"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                            lineNumber: 285,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            children: "▼"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                            lineNumber: 286,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 277,
                                                                    columnNumber: 21
                                                                }, this),
                                                                showBgColorPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute top-full mt-1 w-60 left-0 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-3 z-50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid grid-cols-8 gap-1",
                                                                        children: colors.map((row, i)=>row.map((color, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>changeColor(color, true),
                                                                                    className: "w-7 h-7 rounded border border-gray-200 hover:scale-110 transition-transform shadow-sm",
                                                                                    style: {
                                                                                        backgroundColor: color
                                                                                    },
                                                                                    title: color
                                                                                }, `${i}-${j}`, false, {
                                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                                    lineNumber: 293,
                                                                                    columnNumber: 31
                                                                                }, this)))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                        lineNumber: 290,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 289,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 276,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setShowPreview(!showPreview),
                                                            className: "p-2 hover:bg-gray-100 rounded text-gray-700",
                                                            title: "Preview",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                    lineNumber: 313,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                                lineNumber: 312,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 307,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        !showPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: editorRef,
                                            contentEditable: true,
                                            className: "w-full h-[250px] p-4 text-base text-gray-800 focus:outline-none overflow-y-auto",
                                            style: {
                                                whiteSpace: "pre-wrap"
                                            },
                                            suppressContentEditableWarning: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-[250px] p-4 text-base text-gray-800 bg-gray-50 overflow-y-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: editorRef.current?.innerHTML || ""
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                lineNumber: 329,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-1 border-t border-gray-300 bg-gray-50 text-xs text-gray-600 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "p"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 338,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-gray-400 hover:text-gray-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 24 24",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                            lineNumber: 341,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                        lineNumber: 340,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                                    lineNumber: 339,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                            lineNumber: 337,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "visibility",
                                            value: "admin",
                                            checked: visibility === "admin",
                                            onChange: (e)=>setVisibility(e.target.value),
                                            className: "w-4 h-4 accent-cyan-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700",
                                            children: "Visible To Admin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "visibility",
                                            value: "all",
                                            checked: visibility === "all",
                                            onChange: (e)=>setVisibility(e.target.value),
                                            className: "w-4 h-4 accent-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700",
                                            children: "Visible To All"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                            lineNumber: 369,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                            lineNumber: 348,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-cyan-500 text-white px-8 py-2 rounded hover:bg-cyan-600 text-sm",
                                    children: "Save"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigate("list"),
                                    className: "bg-gray-300 text-gray-700 px-8 py-2 rounded hover:bg-gray-400 text-sm",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                            lineNumber: 373,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddTemplatePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AddTemplatePage() {
    const [productName, setProductName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedProduct, setSelectedProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleNavigate = (page)=>{
        // Navigation logic - Replace with your router
        console.log(`Navigate to: ${page}`);
    // For Next.js: router.push(`/${page}`)
    // For React Router: navigate(`/${page}`)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-[#e5e7eb]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-gray-200 px-8 py-5",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-normal text-gray-800",
                        children: "Templates"
                    }, void 0, false, {
                        fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-8 py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-gray-700 mb-2",
                                    children: "Template Name"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Template Name",
                                    className: "w-full max-w-2xl border border-gray-300 rounded px-4 py-2 text-sm text-gray-500 focus:outline-none focus:border-gray-400",
                                    value: productName,
                                    onChange: (e)=>setProductName(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-gray-700 mb-2",
                                    children: "Product"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full max-w-2xl border border-gray-300 rounded px-4 py-2 text-sm text-gray-500 focus:outline-none focus:border-gray-400",
                                    value: selectedProduct,
                                    onChange: (e)=>setSelectedProduct(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select Products"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "product1",
                                            children: "Product 1"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "product2",
                                            children: "Product 2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-gray-700 mb-3",
                                    children: "Template File"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    className: "text-sm text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm mt-2",
                                    children: "Only .HTML Format Allow"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-gray-700 mb-3",
                                    children: "Preview Images"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    className: "text-sm text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-red-50 border border-red-200 rounded px-4 py-3 mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-red-500",
                                children: [
                                    "Note: Please Do not Include ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Background-image"
                                    }, void 0, false, {
                                        fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                        lineNumber: 67,
                                        columnNumber: 43
                                    }, this),
                                    " Tag in Template."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#0ea5e9] text-white px-8 py-2 rounded hover:bg-[#0284c7]",
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleNavigate("list"),
                                    className: "bg-gray-300 text-gray-700 px-8 py-2 rounded hover:bg-gray-400",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/newsletter/TemplatesListPage/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import React, { useState, useRef } from "react";
// export default function TemplateApp() {
//   const [currentPage, setCurrentPage] = useState("list");
//   const [search, setSearch] = useState("");
//   const [templateName, setTemplateName] = useState("");
//   const [visibility, setVisibility] = useState("admin");
//   const [productName, setProductName] = useState("");
//   const [selectedProduct, setSelectedProduct] = useState("");
//   const [showPreview, setShowPreview] = useState(false);
//   const [showTextColorPicker, setShowTextColorPicker] = useState(false);
//   const [showBgColorPicker, setShowBgColorPicker] = useState(false);
//   const [fileMenuOpen, setfileMenuopen] = useState(false);
//   const [Showprint, setShowprint] = useState(false);
//   const editorRef = useRef(null);
//   const execCommand = (command, value = null) => {
//     document.execCommand(command, false, value);
//     editorRef.current?.focus();
//   };
//   const insertLink = () => {
//     const url = prompt("Enter URL:");
//     if (url) {
//       execCommand("createLink", url);
//     }
//   };
//   const insertImage = () => {
//     const url = prompt("Enter Image URL:");
//     if (url) {
//       execCommand("InsertImage", url);
//     }
//   };
//   const insertVideo = () => {
//     const url = prompt("Enter Video URL (YouTube/Vimeo):");
//     if (url) {
//       const embedUrl = url.includes("youtube.com") || url.includes("youtu.be")
//         ? `<iframe width="560" height="315" src="${url.replace("watch?v=", "embed/")}" frameborder="0" allowfullscreen></iframe>`
//         : `<video controls width="560"><source src="${url}"></video>`;
//       execCommand("insertHTML", embedUrl);
//     }
//   };
//   const changeColor = (color, isBackground = false) => {
//     if (isBackground) {
//       execCommand("backColor", color);
//       setShowBgColorPicker(false);
//     }
//     else {
//       execCommand("foreColor", color);
//       setShowTextColorPicker(false);
//     }
//   };
//   const handleNewDocument = () => {
//     window.open(window.location.href, '_blank');
//     setfileMenuopen(false);
//   };
//   const handlePrint = () => {
//     setfileMenuopen(false);
//     setShowprint(true);
//   };
//   const executePrint = () => {
//     window.print();
//     setShowprint(false);
//   };
//   const colors = [
//     ["#000000", "#8B4500", "#556B2F", "#006400", "#003366", "#000080", "#4B0082", "#2F4F4F"],
//     ["#800000", "#FF6600", "#808000", "#00AA00", "#008080", "#0000FF", "#9370DB", "#808080"],
//     ["#FF0000", "#FFA500", "#9ACD32", "#00CC66", "#00CCCC", "#4169E1", "#9932CC", "#A9A9A9"],
//     ["#FF00FF", "#FFFF00", "#FFFF00", "#00FF00", "#00FFFF", "#00BFFF", "#C591C5", "#C0C0C0"],
//     ["#FFB6C1", "#FFDAB9", "#FFFFE0", "#98FB98", "#AFEEEE", "#87CEFA", "#DDA0DD", "#FFFFFF"]
//   ];
//   if (currentPage === "list") {
//     return (
//       <div className="w-full min-h-screen bg-white">
//         <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
//           <h1 className="text-xl font-normal text-gray-800">Templates</h1>
//           <div className="flex gap-3">
//             <button
//               onClick={() => setCurrentPage("addCustom")}
//               className="bg-[#2d4456] text-white px-6 py-2 rounded text-sm hover:bg-[#1f2f3d]"
//             >
//               Add Custom Template
//             </button>
//             <button
//               onClick={() => setCurrentPage("addTemplate")}
//               className="bg-[#2d4456] text-white px-6 py-2 rounded text-sm hover:bg-[#1f2f3d]"
//             >
//               Add Template
//             </button>
//           </div>
//         </div>
//         <div className="bg-white px-6 py-6">
//           <div className="flex justify-end gap-3">
//             <input
//               type="text"
//               placeholder="Template Name"
//               className="border border-gray-300 rounded px-4 py-2 w-64 text-sm text-gray-500 focus:outline-none focus:border-gray-400"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <button className="bg-[#0ea5e9] text-white px-8 py-2 rounded text-sm hover:bg-[#0284c7]">
//               Search
//             </button>
//           </div>
//         </div>
//         <div className="bg-white px-6 pb-6">
//           <div className="border border-gray-200 overflow-hidden">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-[#dee2e6] border-b border-gray-200">
//                   <th className="py-3 px-4 text-left w-12">
//                     <input type="checkbox" className="w-4 h-4" />
//                   </th>
//                   <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
//                     SR NO
//                   </th>
//                   <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
//                     TEMPLATE NAME
//                   </th>
//                   <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
//                     PRODUCT NAME
//                   </th>
//                   <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
//                     PREVIEW IMAGE
//                   </th>
//                   <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
//                     TYPE
//                   </th>
//                   <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
//                     VIEW
//                   </th>
//                   <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
//                     DELETE
//                   </th>
//                   <th className="py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider">
//                     EDIT
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white">
//                 <tr>
//                   <td colSpan="9" className="text-center py-8 text-red-500 text-base">
//                     No Record Found
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="bg-[#d1d5db] w-full h-screen"></div>
//       </div>
//     );
//   }
//   //  ADD CUSTOM TEMPLATE PAGE 
//   if (currentPage === "addCustom") {
//     return (
//       <div className="w-full min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
//         <div className="max-h-5xl mx-auto">
//           <h1 className="text-xl md:text-2xl font-normal text-gray-700 mb-6">Add Custom Template</h1>
//           <div className="bg-white rounded shadow-sm border border-gray-200 p-4 md:p-6">
//             <div className="mb-6">
//               <label className="block text-sm text-gray-700 mb-2">
//                 Template Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Template Name"
//                 className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
//                 value={templateName}
//                 onChange={(e) => setTemplateName(e.target.value)}
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-sm text-gray-700 mb-2">
//                 Message <span className="text-red-600 font-semibold text-sm">(Note : Please Enter Plain Text Only For Better Result)</span>
//               </label>
//               <div className="border border-gray-300 rounded overflow-hidden bg-white">
//                 <div className="flex items-center gap-2 md:gap-4 px-3 py-2 border-b border-gray-300 bg-gray-50 flex-wrap">
//                   <button
//                     onClick={() => setFileMenuOpen(!fileMenuOpen)}
//                     className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1 px-3 py-1"
//                   >
//                     File <span className="text-xs">▼</span>
//                   </button>
//                   {fileMenuOpen && (
//                     <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 shadow-lg rounded-md w-64 z-50">
//                       <button
//                         onClick={handleNewDocument}
//                         className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-left"
//                       >
//                         <FileText size={20} className="text-gray-700" />
//                         <span className="text-gray-800">New document</span>
//                         <span className="ml-auto text-gray-400 text-sm">Ctrl+N</span>
//                       </button>
//                       <button
//                         onClick={handlePrint}
//                         className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-left"
//                       >
//                         <Printer size={20} className="text-gray-700" />
//                         <span className="text-gray-800">Print</span>
//                         <span className="ml-auto text-gray-400 text-sm">Ctrl+P</span>
//                       </button>
//                     </div>
//                   )}
//                   <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
//                     Edit <span className="text-xs">▼</span>
//                   </button>
//                   <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
//                     Insert <span className="text-xs">▼</span>
//                   </button>
//                   <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
//                     View <span className="text-xs">▼</span>
//                   </button>
//                   <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
//                     Format <span className="text-xs">▼</span>
//                   </button>
//                   <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
//                     Table <span className="text-xs">▼</span>
//                   </button>
//                   <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
//                     Tools <span className="text-xs">▼</span>
//                   </button>
//                 </div>
//                 <div className="flex items-center px-2 py-2 border-b border-gray-300 bg-white flex-wrap gap-1">
//                   <div className="flex items-center border-r border-gray-300 pr-2 mr-2">
//                     <button
//                       onClick={() => execCommand("bold")}
//                       className="p-2 hover:bg-gray-100 rounded font-bold text-base text-gray-700"
//                       title="Bold"
//                     >
//                       B
//                     </button>
//                     <button
//                       onClick={() => execCommand("italic")}
//                       className="p-2 hover:bg-gray-100 rounded italic text-base text-gray-700"
//                       title="Italic"
//                     >
//                       I
//                     </button>
//                   </div>
//                   <div className="flex items-center border-r border-gray-300 pr-2 mr-2">
//                     <button
//                       onClick={() => execCommand("justifyLeft")}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                       title="Align Left"
//                     >
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                         <path d="M3 3h18v2H3V3zm0 4h12v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2zm0 4h18v2H3v-2z" />
//                       </svg>
//                     </button>
//                     <button
//                       onClick={() => execCommand("justifyCenter")}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                       title="Align Center"
//                     >
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                         <path d="M3 3h18v2H3V3zm3 4h12v2H6V7zm-3 4h18v2H3v-2zm3 4h12v2H6v-2zm-3 4h18v2H3v-2z" />
//                       </svg>
//                     </button>
//                     <button
//                       onClick={() => execCommand("justifyRight")}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                       title="Align Right"
//                     >
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                         <path d="M3 3h18v2H3V3zm6 4h12v2H9V7zm-6 4h18v2H3v-2zm6 4h12v2H9v-2zm-6 4h18v2H3v-2z" />
//                       </svg>
//                     </button>
//                     <button
//                       onClick={() => execCommand("justifyFull")}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                       title="Justify"
//                     >
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                         <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="flex items-center border-r border-gray-300 pr-2 mr-2">
//                     <button
//                       onClick={() => execCommand("insertBulleteList")}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                       title="Bullete List"
//                     >
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                         <rect x="2" y="5" width="3" height="3" rx="0.5" />
//                         <rect x="2" y="10.5" width="3" height="3" rx="0.5" />
//                         <rect x="2" y="16" width="3" height="3" rx="0.5" />
//                         <rect x="7" y="5.5" width="15" height="2" />
//                         <rect x="7" y="11" width="15" height="2" />
//                         <rect x="7" y="16.5" width="15" height="2" />
//                       </svg>
//                     </button>
//                     <button
//                       onClick={() => execCommand("insertNumberedList")}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                       title="Numbered List"
//                     >
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                         <text x="2" y="8" fontSize="7" fontWeight="bold">1.</text>
//                         <text x="2" y="13.5" fontSize="7" fontWeight="bold">2.</text>
//                         <text x="2" y="19" fontSize="7" fontWeight="bold">3.</text>
//                         <rect x="7" y="5.5" width="15" height="2" />
//                         <rect x="7" y="11" width="15" height="2" />
//                         <rect x="7" y="16.5" width="15" height="2" />
//                       </svg>
//                     </button>
//                     <button
//                       onClick={() => execCommand("indent")}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                       title="Increase Indent"
//                     >
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                         <rect x="2" y="5" width="3" height="3" rx="0.5" />
//                         <rect x="2" y="10.5" width="3" height="3" rx="0.5" />
//                         <rect x="2" y="16" width="3" height="3" rx="0.5" />
//                         <rect x="10" y="5.5" width="12" height="2" />
//                         <rect x="10" y="11" width="12" height="2" />
//                         <rect x="10" y="16.5" width="12" height="2" />
//                       </svg>
//                     </button>
//                     <button
//                       onClick={() => execCommand("outdent")}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                       title="Decrease Indent"
//                     >
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                         <rect x="2" y="5" width="3" height="3" rx="0.5" />
//                         <rect x="2" y="10.5" width="3" height="3" rx="0.5" />
//                         <rect x="2" y="16" width="3" height="3" rx="0.5" />
//                         <rect x="7" y="5.5" width="15" height="2" />
//                         <rect x="7" y="11" width="15" height="2" />
//                         <rect x="7" y="16.5" width="15" height="2" />
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="flex items-center border-r border-gray-300 pr-2 mr-2">
//                     <button
//                       onClick={insertLink}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                       title="Insert Link"
//                     >
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                         <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
//                       </svg>
//                     </button>
//                     <button
//                       onClick={insertImage}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                       title="Insert Image"
//                     >
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                         <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
//                       </svg>
//                     </button>
//                     <button
//                       onClick={insertVideo}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                       title="Insert Video"
//                     >
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                         <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
//                       </svg>
//                     </button>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <div className="relative">
//                       <button
//                         onClick={() => {
//                           setShowTextColorPicker(!showTextColorPicker);
//                           setShowBgColorPicker(false);
//                         }}
//                         className="p-2 hover:bg-gray-100 rounded text-gray-700 flex items-center gap-1"
//                         title="Text Color"
//                       >
//                         <span className="font-bold text-base">A</span>
//                         <span className="text-xs">▼</span>
//                       </button>
//                       {showTextColorPicker && (
//                         <div className="absolute top-full mt-1 w-60 left-0 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-3 z-50">
//                           <div className="grid grid-cols-8 gap-1">
//                             {colors.map((row, i) => (
//                               row.map((color, j) => (
//                                 <button
//                                   key={`${i}-${j}`}
//                                   onClick={() => changeColor(color, false)}
//                                   className="w-7 h-7 rounded border border-gray-200 hover:scale-110 transition-transform shadow-sm"
//                                   style={{ backgroundColor: color }}
//                                   title={color}
//                                 />
//                               ))
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                     <div className="relative">
//                       <button
//                         onClick={() => {
//                           setShowBgColorPicker(!showBgColorPicker);
//                           setShowTextColorPicker(false);
//                         }}
//                         className="p-2 hover:bg-gray-100 rounded text-gray-700 flex items-center gap-1"
//                         title="Background Color"
//                       >
//                         <span className="font-bold text-base">A</span>
//                         <span className="text-xs">▼</span>
//                       </button>
//                       {showBgColorPicker && (
//                         <div className="absolute top-full mt-1 w-60 left-0 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-3 z-50">
//                           <div className="grid grid-cols-8 gap-1">
//                             {colors.map((row, i) => (
//                               row.map((color, j) => (
//                                 <button
//                                   key={`${i}-${j}`}
//                                   onClick={() => changeColor(color, true)}
//                                   className="w-7 h-7 rounded border border-gray-200 hover:scale-110 transition-transform shadow-sm"
//                                   style={{ backgroundColor: color }}
//                                   title={color}
//                                 />
//                               ))
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                     <button
//                       onClick={() => setShowPreview(!showPreview)}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                       title="Preview"
//                     >
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                         <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//                 {!showPreview ? (
//                   <div
//                     ref={editorRef}
//                     contentEditable
//                     onClick={() => editorRef.current?.focus()}
//                     onKeyUp={() => editorRef.current?.focus()}
//                     className="w-full h-[250px] p-4 text-base text-gray-800 focus:outline-none overflow-y-auto"
//                     style={{ whiteSpace: "pre-wrap" }}
//                     suppressContentEditableWarning
//                   >
//                   </div>
//                 ) : (
//                   <div className="w-full h-[250px] p-4 text-base text-gray-800 bg-gray-50 overflow-y-auto">
//                     <div
//                       dangerouslySetInnerHTML={{
//                         __html: editorRef.current?.innerHTML || "Hello",
//                       }}
//                     />
//                   </div>
//                 )}
//                 <div className="px-3 py-1 border-t border-gray-300 bg-gray-50 text-xs text-gray-600 flex items-center justify-between">
//                   <span>p</span>
//                   <button className="text-gray-400 hover:text-gray-600">
//                     <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center gap-6 mb-6">
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="visibility"
//                   value="admin"
//                   checked={visibility === "admin"}
//                   onChange={(e) => setVisibility(e.target.value)}
//                   className="w-4 h-4 accent-cyan-500"
//                 />
//                 <span className="text-sm text-gray-700">Visible To Admin</span>
//               </label>
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="radio"
//                   name="visibility"
//                   value="all"
//                   checked={visibility === "all"}
//                   onChange={(e) => setVisibility(e.target.value)}
//                   className="w-4 h-4 accent-gray-400"
//                 />
//                 <span className="text-sm text-gray-700">Visible To All</span>
//               </label>
//             </div>
//             <div className="flex gap-3">
//               <button className="bg-cyan-500 text-white px-8 py-2 rounded hover:bg-cyan-600 text-sm">
//                 Save
//               </button>
//               <button
//                 onClick={() => setCurrentPage("list")}
//                 className="bg-gray-300 text-gray-700 px-8 py-2 rounded hover:bg-gray-400 text-sm"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
//   //  ADD TEMPLATE PAGE 
//   if (currentPage === "addTemplate") {
//     return (
//       <div className="w-full min-h-screen bg-[#e5e7eb]">
//         <div className="bg-white max-w-4xl mx-auto">
//           <div className="border-b border-gray-200 px-8 py-5">
//             <h1 className="text-xl font-normal text-gray-800">Templates</h1>
//           </div>
//           <div className="px-8 py-8">
//             <div className="mb-6">
//               <label className="block text-sm text-gray-700 mb-2">Template Name</label>
//               <input
//                 type="text"
//                 placeholder="Template Name"
//                 className="w-full max-w-2xl border border-gray-300 rounded px-4 py-2 text-sm text-gray-500 focus:outline-none focus:border-gray-400"
//                 value={productName}
//                 onChange={(e) => setProductName(e.target.value)}
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-sm text-gray-700 mb-2">Product</label>
//               <select
//                 className="w-full max-w-2xl border border-gray-300 rounded px-4 py-2 text-sm text-gray-500 focus:outline-none focus:border-gray-400"
//                 value={selectedProduct}
//                 onChange={(e) => setSelectedProduct(e.target.value)}
//               >
//                 <option value="">Select Products</option>
//                 <option value="product1">Product 1</option>
//                 <option value="product2">Product 2</option>
//               </select>
//             </div>
//             <div className="mb-6">
//               <label className="block text-sm text-gray-700 mb-3">Template File</label>
//               <input
//                 type="file"
//                 className="text-sm text-gray-500"
//               />
//               <p className="text-red-500 text-sm mt-2">Only .HTML Format Allow</p>
//             </div>
//             <div className="mb-6">
//               <label className="block text-sm text-gray-700 mb-3">Preview Images</label>
//               <input
//                 type="file"
//                 className="text-sm text-gray-500"
//               />
//             </div>
//             <div className="bg-red-50 w-168 border border-red-200 rounded px-4 py-3 mb-8">
//               <p className="text-sm text-red-500">
//                 Note: Please Do not Include <span className="font-semibold">Background-image</span> Tag in Template.
//               </p>
//             </div>
//             <div className="flex gap-3">
//               <button className="bg-[#0ea5e9] text-white px-8 py-2 rounded hover:bg-[#0284c7]">
//                 Next
//               </button>
//               <button
//                 onClick={() => setCurrentPage("list")}
//                 className="bg-gray-300 text-gray-700 px-8 py-2 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
__turbopack_context__.s([
    "default",
    ()=>TemplatesListPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$newsletter$2f$TemplatesListPage$2f$AddCustomTemplatePage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/newsletter/TemplatesListPage/AddCustomTemplatePage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$newsletter$2f$TemplatesListPage$2f$AddTemplatePage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/newsletter/TemplatesListPage/AddTemplatePage.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function TemplatesListPage() {
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleNavigate = (page)=>{
        // Navigation logic - Replace with your router
        console.log(`Navigate to: ${page}`);
        router.push(`/${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$newsletter$2f$TemplatesListPage$2f$AddCustomTemplatePage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]}`);
        router.push(`/${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$newsletter$2f$TemplatesListPage$2f$AddTemplatePage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]}`);
    // For React Router: navigate(`/${page}`)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-normal text-gray-800",
                        children: "Templates"
                    }, void 0, false, {
                        fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                        lineNumber: 663,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleNavigate("addCustom"),
                                className: "bg-[#2d4456] text-white px-6 py-2 rounded text-sm hover:bg-[#1f2f3d]",
                                children: "Add Custom Template"
                            }, void 0, false, {
                                fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                lineNumber: 665,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleNavigate("addTemplate"),
                                className: "bg-[#2d4456] text-white px-6 py-2 rounded text-sm hover:bg-[#1f2f3d]",
                                children: "Add Template"
                            }, void 0, false, {
                                fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                lineNumber: 671,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                        lineNumber: 664,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                lineNumber: 662,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white px-6 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Template Name",
                            className: "border border-gray-300 rounded px-4 py-2 w-64 text-sm text-gray-500 focus:outline-none focus:border-gray-400",
                            value: search,
                            onChange: (e)=>setSearch(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                            lineNumber: 682,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-[#0ea5e9] text-white px-8 py-2 rounded text-sm hover:bg-[#0284c7]",
                            children: "Search"
                        }, void 0, false, {
                            fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                            lineNumber: 689,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                    lineNumber: 681,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                lineNumber: 680,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white px-6 pb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-gray-200 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "bg-[#dee2e6] border-b border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 text-left w-12",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                                lineNumber: 701,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                            lineNumber: 700,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider",
                                            children: "SR NO"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                            lineNumber: 703,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider",
                                            children: "TEMPLATE NAME"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                            lineNumber: 706,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider",
                                            children: "PRODUCT NAME"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                            lineNumber: 709,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider",
                                            children: "PREVIEW IMAGE"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                            lineNumber: 712,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider",
                                            children: "TYPE"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                            lineNumber: 715,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider",
                                            children: "VIEW"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                            lineNumber: 718,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider",
                                            children: "DELETE"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                            lineNumber: 721,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-3 px-4 text-center text-xs font-semibold text-[#6c757d] uppercase tracking-wider",
                                            children: "EDIT"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                            lineNumber: 724,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                    lineNumber: 699,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                lineNumber: 698,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        colSpan: "9",
                                        className: "text-center py-8 text-red-500 text-base",
                                        children: "No Record Found"
                                    }, void 0, false, {
                                        fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                        lineNumber: 731,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                    lineNumber: 730,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                                lineNumber: 729,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                        lineNumber: 697,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                    lineNumber: 696,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
                lineNumber: 695,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/newsletter/TemplatesListPage/page.js",
        lineNumber: 661,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bdc00c87._.js.map