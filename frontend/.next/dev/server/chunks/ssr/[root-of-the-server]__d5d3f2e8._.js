module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/newsletter/AddCustomTemplatePage/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import React, { useState, useRef } from "react";
// export default function AddCustomTemplatePage() {
//   const [templateName, setTemplateName] = useState("");
//   const [visibility, setVisibility] = useState("admin");
//   const [showPreview, setShowPreview] = useState(false);
//   const [showTextColorPicker, setShowTextColorPicker] = useState(false);
//   const [showBgColorPicker, setShowBgColorPicker] = useState(false);
//   const editorRef = useRef(null);
//   const handleNavigate = (page) => {
//     // Navigation logic - Replace with your router
//     console.log(`Navigate to: ${page}`);
//     // For Next.js: router.push(`/${page}`)
//     // For React Router: navigate(`/${page}`)
//   };
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
//       execCommand("insertImage", url);
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
//     } else {
//       execCommand("foreColor", color);
//       setShowTextColorPicker(false);
//     }
//   };
//   const colors = [
//     ["#000000", "#8B4500", "#556B2F", "#006400", "#003366", "#000080", "#4B0082", "#2F4F4F"],
//     ["#800000", "#FF6600", "#808000", "#00AA00", "#008080", "#0000FF", "#9370DB", "#808080"],
//     ["#FF0000", "#FFA500", "#9ACD32", "#00CC66", "#00CCCC", "#4169E1", "#9932CC", "#A9A9A9"],
//     ["#FF00FF", "#FFFF00", "#FFFF00", "#00FF00", "#00FFFF", "#00BFFF", "#C591C5", "#C0C0C0"],
//     ["#FFB6C1", "#FFDAB9", "#FFFFE0", "#98FB98", "#AFEEEE", "#87CEFA", "#DDA0DD", "#FFFFFF"]
//   ];
//   return (
//     <div className="w-full min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-xl md:text-2xl font-normal text-gray-700 mb-6">Add Custom Template</h1>
//         <div className="bg-white rounded shadow-sm border border-gray-200 p-4 md:p-6">
//           <div className="mb-6">
//             <label className="block text-sm text-gray-700 mb-2">
//               Template Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Template Name"
//               className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
//               value={templateName}
//               onChange={(e) => setTemplateName(e.target.value)}
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm text-gray-700 mb-2">
//               Message <span className="text-red-600 font-normal text-sm">(Note : Please Enter Plain Text Only For Better Result)</span>
//             </label>
//             <div className="border border-gray-300 rounded overflow-hidden bg-white">
//               <div className="flex items-center gap-2 md:gap-4 px-3 py-2 border-b border-gray-300 bg-gray-50 flex-wrap">
//                 <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
//                   File <span className="text-xs">▼</span>
//                 </button>
//                 <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
//                   Edit <span className="text-xs">▼</span>
//                 </button>
//                 <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
//                   Insert <span className="text-xs">▼</span>
//                 </button>
//                 <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
//                   View <span className="text-xs">▼</span>
//                 </button>
//                 <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
//                   Format <span className="text-xs">▼</span>
//                 </button>
//                 <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
//                   Table <span className="text-xs">▼</span>
//                 </button>
//                 <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center gap-1">
//                   Tools <span className="text-xs">▼</span>
//                 </button>
//               </div>
//               <div className="flex items-center px-2 py-2 border-b border-gray-300 bg-white flex-wrap gap-1">
//                 <div className="flex items-center border-r border-gray-300 pr-2 mr-2">
//                   <button
//                     onClick={() => execCommand("bold")}
//                     className="p-2 hover:bg-gray-100 rounded font-bold text-base text-gray-700"
//                     title="Bold"
//                   >
//                     B
//                   </button>
//                   <button
//                     onClick={() => execCommand("italic")}
//                     className="p-2 hover:bg-gray-100 rounded italic text-base text-gray-700"
//                     title="Italic"
//                   >
//                     I
//                   </button>
//                 </div>
//                 <div className="flex items-center border-r border-gray-300 pr-2 mr-2">
//                   <button
//                     onClick={() => execCommand("justifyLeft")}
//                     className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                     title="Align Left"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M3 3h18v2H3V3zm0 4h12v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2zm0 4h18v2H3v-2z" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={() => execCommand("justifyCenter")}
//                     className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                     title="Align Center"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M3 3h18v2H3V3zm3 4h12v2H6V7zm-3 4h18v2H3v-2zm3 4h12v2H6v-2zm-3 4h18v2H3v-2z" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={() => execCommand("justifyRight")}
//                     className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                     title="Align Right"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M3 3h18v2H3V3zm6 4h12v2H9V7zm-6 4h18v2H3v-2zm6 4h12v2H9v-2zm-6 4h18v2H3v-2z" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={() => execCommand("justifyFull")}
//                     className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                     title="Justify"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
//                     </svg>
//                   </button>
//                 </div>
//                 <div className="flex items-center border-r border-gray-300 pr-2 mr-2">
//                   <button
//                     onClick={() => execCommand("insertUnorderedList")}
//                     className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                     title="Bullet List"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                       <circle cx="4" cy="6" r="2" />
//                       <circle cx="4" cy="12" r="2" />
//                       <circle cx="4" cy="18" r="2" />
//                       <path d="M9 5h12v2H9V5zm0 6h12v2H9v-2zm0 6h12v2H9v-2z" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={() => execCommand("insertOrderedList")}
//                     className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                     title="Numbered List"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M3 4h2v2H3V4zm0 6h2v2H3v-2zm0 6h2v2H3v-2zM9 5h12v2H9V5zm0 6h12v2H9v-2zm0 6h12v2H9v-2z" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={() => execCommand("indent")}
//                     className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                     title="Increase Indent"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M3 3h18v2H3V3zm8 4h10v2H11V7zm-8 4h18v2H3v-2zm8 4h10v2H11v-2zm-8 4h18v2H3v-2zM3 7v10l4-5-4-5z" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={() => execCommand("outdent")}
//                     className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                     title="Decrease Indent"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M3 3h18v2H3V3zm8 4h10v2H11V7zm-8 4h18v2H3v-2zm8 4h10v2H11v-2zm-8 4h18v2H3v-2zM7 7v10l-4-5 4-5z" />
//                     </svg>
//                   </button>
//                 </div>
//                 <div className="flex items-center border-r border-gray-300 pr-2 mr-2">
//                   <button
//                     onClick={insertLink}
//                     className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                     title="Insert Link"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={insertImage}
//                     className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                     title="Insert Image"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={insertVideo}
//                     className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                     title="Insert Video"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
//                     </svg>
//                   </button>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <div className="relative">
//                     <button
//                       onClick={() => {
//                         setShowTextColorPicker(!showTextColorPicker);
//                         setShowBgColorPicker(false);
//                       }}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700 flex items-center gap-1"
//                       title="Text Color"
//                     >
//                       <span className="font-bold text-base">A</span>
//                       <span className="text-xs">▼</span>
//                     </button>
//                     {showTextColorPicker && (
//                       <div className="absolute top-full mt-1 w-60 left-0 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-3 z-50">
//                         <div className="grid grid-cols-8 gap-1">
//                           {colors.map((row, i) => (
//                             row.map((color, j) => (
//                               <button
//                                 key={`${i}-${j}`}
//                                 onClick={() => changeColor(color, false)}
//                                 className="w-7 h-7 rounded border border-gray-200 hover:scale-110 transition-transform shadow-sm"
//                                 style={{ backgroundColor: color }}
//                                 title={color}
//                               />
//                             ))
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                   <div className="relative">
//                     <button
//                       onClick={() => {
//                         setShowBgColorPicker(!showBgColorPicker);
//                         setShowTextColorPicker(false);
//                       }}
//                       className="p-2 hover:bg-gray-100 rounded text-gray-700 flex items-center gap-1"
//                       title="Background Color"
//                     >
//                       <span className="font-bold text-base">A</span>
//                       <span className="text-xs">▼</span>
//                     </button>
//                     {showBgColorPicker && (
//                       <div className="absolute top-full mt-1 w-60 left-0 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-3 z-50">
//                         <div className="grid grid-cols-8 gap-1">
//                           {colors.map((row, i) => (
//                             row.map((color, j) => (
//                               <button
//                                 key={`${i}-${j}`}
//                                 onClick={() => changeColor(color, true)}
//                                 className="w-7 h-7 rounded border border-gray-200 hover:scale-110 transition-transform shadow-sm"
//                                 style={{ backgroundColor: color }}
//                                 title={color}
//                               />
//                             ))
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                   <button
//                     onClick={() => setShowPreview(!showPreview)}
//                     className="p-2 hover:bg-gray-100 rounded text-gray-700"
//                     title="Preview"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//               {!showPreview ? (
//                 <div
//                   ref={editorRef}
//                   contentEditable
//                   className="w-full h-[250px] p-4 text-base text-gray-800 focus:outline-none overflow-y-auto"
//                   style={{ whiteSpace: "pre-wrap" }}
//                   suppressContentEditableWarning
//                 />
//               ) : (
//                 <div className="w-full h-[250px] p-4 text-base text-gray-800 bg-gray-50 overflow-y-auto">
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: editorRef.current?.innerHTML || "",
//                     }}
//                   />
//                 </div>
//               )}
//               <div className="px-3 py-1 border-t border-gray-300 bg-gray-50 text-xs text-gray-600 flex items-center justify-between">
//                 <span>p</span>
//                 <button className="text-gray-400 hover:text-gray-600">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center gap-6 mb-6">
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="radio"
//                 name="visibility"
//                 value="admin"
//                 checked={visibility === "admin"}
//                 onChange={(e) => setVisibility(e.target.value)}
//                 className="w-4 h-4 accent-cyan-500"
//               />
//               <span className="text-sm text-gray-700">Visible To Admin</span>
//             </label>
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="radio"
//                 name="visibility"
//                 value="all"
//                 checked={visibility === "all"}
//                 onChange={(e) => setVisibility(e.target.value)}
//                 className="w-4 h-4 accent-gray-400"
//               />
//               <span className="text-sm text-gray-700">Visible To All</span>
//             </label>
//           </div>
//           <div className="flex gap-3">
//             <button className="bg-cyan-500 text-white px-8 py-2 rounded hover:bg-cyan-600 text-sm">
//               Save
//             </button>
//             <button
//               onClick={() => handleNavigate("list")}
//               className="bg-gray-300 text-gray-700 px-8 py-2 rounded hover:bg-gray-400 text-sm"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>AddCustomTemplatePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$components$2f$Editor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AddCustomTemplatePage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const editorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [templateName, setTemplateName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPreview, setShowPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const categories = [
        'Marketing',
        'Newsletter',
        'Promotional',
        'Event',
        'Announcement',
        'Welcome Email',
        'Thank You',
        'Other'
    ];
    const handleSaveTemplate = ()=>{
        if (!templateName.trim()) {
            alert('Please enter template name');
            return;
        }
        if (!category) {
            alert('Please select a category');
            return;
        }
        const editorContent = editorRef.current ? editorRef.current.getContent() : content;
        if (!editorContent.trim()) {
            alert('Please create template content');
            return;
        }
        const template = {
            id: Date.now(),
            name: templateName.trim(),
            category: category,
            description: description.trim(),
            content: editorContent,
            thumbnail: generateThumbnail(editorContent),
            createdAt: new Date().toISOString(),
            isCustom: true
        };
        // Save to localStorage
        const existingTemplates = JSON.parse(localStorage.getItem('customTemplates') || '[]');
        const updatedTemplates = [
            ...existingTemplates,
            template
        ];
        localStorage.setItem('customTemplates', JSON.stringify(updatedTemplates));
        alert('Template saved successfully!');
        router.push('/newsletter/TemplatesListPage');
    };
    const generateThumbnail = (html)=>{
        // Generate a simple text preview for thumbnail
        const div = document.createElement('div');
        div.innerHTML = html;
        const text = div.textContent || div.innerText || '';
        return text.substring(0, 150) + (text.length > 150 ? '...' : '');
    };
    const handleCancel = ()=>{
        if (confirm('Are you sure you want to discard this template?')) {
            router.push('/newsletter/TemplatesListPage');
        }
    };
    const insertPrebuiltSection = (type)=>{
        if (!editorRef.current) return;
        const sections = {
            header: `
        <div style="background-color: #4F46E5; color: white; padding: 40px 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 32px;">Your Company Name</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">Your tagline here</p>
        </div>
      `,
            hero: `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 20px; text-align: center;">
          <h2 style="font-size: 36px; margin: 0 0 20px 0;">Welcome to Our Newsletter</h2>
          <p style="font-size: 18px; margin: 0 0 30px 0;">Stay updated with our latest news and offers</p>
          <a href="#" style="background-color: white; color: #667eea; padding: 15px 40px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Get Started</a>
        </div>
      `,
            twoColumn: `
        <div style="max-width: 800px; margin: 40px auto; padding: 0 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="width: 48%; vertical-align: top; padding: 20px;">
                <h3 style="color: #4F46E5; margin-top: 0;">Feature One</h3>
                <p>Add your content here. Describe your first feature or offering.</p>
              </td>
              <td style="width: 4%;"></td>
              <td style="width: 48%; vertical-align: top; padding: 20px;">
                <h3 style="color: #4F46E5; margin-top: 0;">Feature Two</h3>
                <p>Add your content here. Describe your second feature or offering.</p>
              </td>
            </tr>
          </table>
        </div>
      `,
            threeColumn: `
        <div style="max-width: 800px; margin: 40px auto; padding: 0 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="width: 30%; vertical-align: top; padding: 15px; text-align: center;">
                <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px;">
                  <h4 style="color: #4F46E5; margin: 0 0 10px 0;">Column 1</h4>
                  <p style="margin: 0; font-size: 14px;">Your content here</p>
                </div>
              </td>
              <td style="width: 5%;"></td>
              <td style="width: 30%; vertical-align: top; padding: 15px; text-align: center;">
                <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px;">
                  <h4 style="color: #4F46E5; margin: 0 0 10px 0;">Column 2</h4>
                  <p style="margin: 0; font-size: 14px;">Your content here</p>
                </div>
              </td>
              <td style="width: 5%;"></td>
              <td style="width: 30%; vertical-align: top; padding: 15px; text-align: center;">
                <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px;">
                  <h4 style="color: #4F46E5; margin: 0 0 10px 0;">Column 3</h4>
                  <p style="margin: 0; font-size: 14px;">Your content here</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      `,
            button: `
        <div style="text-align: center; margin: 30px 0;">
          <a href="#" style="background-color: #4F46E5; color: white; padding: 15px 40px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Click Here</a>
        </div>
      `,
            footer: `
        <div style="background-color: #1F2937; color: #9CA3AF; padding: 40px 20px; text-align: center; margin-top: 40px;">
          <p style="margin: 0 0 10px 0; font-size: 14px;">© 2024 Your Company. All rights reserved.</p>
          <p style="margin: 0; font-size: 12px;">
            <a href="#" style="color: #9CA3AF; text-decoration: none; margin: 0 10px;">Unsubscribe</a> | 
            <a href="#" style="color: #9CA3AF; text-decoration: none; margin: 0 10px;">Privacy Policy</a> | 
            <a href="#" style="color: #9CA3AF; text-decoration: none; margin: 0 10px;">Contact Us</a>
          </p>
        </div>
      `,
            socialMedia: `
        <div style="text-align: center; margin: 30px 0;">
          <p style="margin: 0 0 15px 0; color: #6B7280;">Follow us on social media</p>
          <a href="#" style="display: inline-block; margin: 0 10px; text-decoration: none;">
            <div style="background-color: #4267B2; width: 40px; height: 40px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: white; font-weight: bold;">f</div>
          </a>
          <a href="#" style="display: inline-block; margin: 0 10px; text-decoration: none;">
            <div style="background-color: #1DA1F2; width: 40px; height: 40px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: white; font-weight: bold;">t</div>
          </a>
          <a href="#" style="display: inline-block; margin: 0 10px; text-decoration: none;">
            <div style="background-color: #0077B5; width: 40px; height: 40px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: white; font-weight: bold;">in</div>
          </a>
        </div>
      `
        };
        editorRef.current.insertContent(sections[type]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-200 p-3 sm:p-4 md:p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-md mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-gray-300 px-4 sm:px-6 md:px-8 py-4 md:py-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl sm:text-2xl font-normal text-gray-600",
                                        children: [
                                            "Create Custom ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-gray-700",
                                                children: "Template"
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                lineNumber: 573,
                                                columnNumber: 31
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                        lineNumber: 572,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push('/newsletter/TemplatesListPage'),
                                        className: "bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700 transition-colors",
                                        children: "← Back to Templates"
                                    }, void 0, false, {
                                        fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                        lineNumber: 575,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                lineNumber: 571,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                            lineNumber: 570,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-6 md:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: [
                                                        "Template Name ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                            lineNumber: 590,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                    lineNumber: 589,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: templateName,
                                                    onChange: (e)=>setTemplateName(e.target.value),
                                                    placeholder: "e.g., Monthly Newsletter",
                                                    className: "w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                    lineNumber: 592,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                            lineNumber: 588,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: [
                                                        "Category ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                            lineNumber: 604,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                    lineNumber: 603,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: category,
                                                    onChange: (e)=>setCategory(e.target.value),
                                                    className: "w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-blue-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                            lineNumber: 611,
                                                            columnNumber: 19
                                                        }, this),
                                                        categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: cat,
                                                                children: cat
                                                            }, cat, false, {
                                                                fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                                lineNumber: 613,
                                                                columnNumber: 21
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                    lineNumber: 606,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                            lineNumber: 602,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                    lineNumber: 586,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Description (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                            lineNumber: 621,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: description,
                                            onChange: (e)=>setDescription(e.target.value),
                                            placeholder: "Brief description of this template...",
                                            rows: "2",
                                            className: "w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                            lineNumber: 624,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                    lineNumber: 620,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-3",
                                            children: "Quick Insert Sections"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                            lineNumber: 635,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>insertPrebuiltSection('header'),
                                                    className: "bg-purple-100 text-purple-700 px-4 py-2 rounded text-xs hover:bg-purple-200 transition-colors",
                                                    children: "+ Header"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                    lineNumber: 639,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>insertPrebuiltSection('hero'),
                                                    className: "bg-indigo-100 text-indigo-700 px-4 py-2 rounded text-xs hover:bg-indigo-200 transition-colors",
                                                    children: "+ Hero Section"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                    lineNumber: 645,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>insertPrebuiltSection('twoColumn'),
                                                    className: "bg-blue-100 text-blue-700 px-4 py-2 rounded text-xs hover:bg-blue-200 transition-colors",
                                                    children: "+ Two Columns"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                    lineNumber: 651,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>insertPrebuiltSection('threeColumn'),
                                                    className: "bg-cyan-100 text-cyan-700 px-4 py-2 rounded text-xs hover:bg-cyan-200 transition-colors",
                                                    children: "+ Three Columns"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                    lineNumber: 657,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>insertPrebuiltSection('button'),
                                                    className: "bg-green-100 text-green-700 px-4 py-2 rounded text-xs hover:bg-green-200 transition-colors",
                                                    children: "+ Button"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                    lineNumber: 663,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>insertPrebuiltSection('socialMedia'),
                                                    className: "bg-pink-100 text-pink-700 px-4 py-2 rounded text-xs hover:bg-pink-200 transition-colors",
                                                    children: "+ Social Media"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                    lineNumber: 669,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>insertPrebuiltSection('footer'),
                                                    className: "bg-gray-100 text-gray-700 px-4 py-2 rounded text-xs hover:bg-gray-200 transition-colors",
                                                    children: "+ Footer"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                    lineNumber: 675,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                            lineNumber: 638,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                    lineNumber: 634,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: [
                                                "Template Content ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                    lineNumber: 687,
                                                    columnNumber: 34
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                            lineNumber: 686,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-2 border-gray-300 rounded overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tinymce$2f$tinymce$2d$react$2f$lib$2f$es2015$2f$main$2f$ts$2f$components$2f$Editor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Editor"], {
                                                apiKey: "y1s9k2719cryc4c4lhyef3rypkcz2oy6t9fno5q4ngbqts9o",
                                                onInit: (evt, editor)=>editorRef.current = editor,
                                                initialValue: "<p>Start creating your template here...</p>",
                                                init: {
                                                    height: 600,
                                                    menubar: true,
                                                    plugins: [
                                                        'advlist',
                                                        'autolink',
                                                        'lists',
                                                        'link',
                                                        'image',
                                                        'charmap',
                                                        'preview',
                                                        'anchor',
                                                        'searchreplace',
                                                        'visualblocks',
                                                        'code',
                                                        'fullscreen',
                                                        'insertdatetime',
                                                        'media',
                                                        'table',
                                                        'help',
                                                        'wordcount'
                                                    ],
                                                    toolbar: 'undo redo | blocks fontsize | ' + 'bold italic forecolor backcolor | alignleft aligncenter ' + 'alignright alignjustify | bullist numlist outdent indent | ' + 'table image media link | removeformat code | preview fullscreen | help',
                                                    content_style: `
                      body { 
                        font-family: Arial, Helvetica, sans-serif; 
                        font-size: 14px;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                      }
                    `,
                                                    branding: false,
                                                    promotion: false,
                                                    image_advtab: true,
                                                    font_size_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                lineNumber: 690,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                            lineNumber: 689,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                    lineNumber: 685,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSaveTemplate,
                                            className: "bg-blue-500 text-white px-8 py-2.5 rounded text-sm hover:bg-blue-600 transition-colors font-medium",
                                            children: "💾 Save Template"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                            lineNumber: 726,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowPreview(!showPreview),
                                            className: "bg-green-500 text-white px-8 py-2.5 rounded text-sm hover:bg-green-600 transition-colors font-medium",
                                            children: [
                                                showPreview ? '👁️ Hide' : '👁️ Show',
                                                " Preview"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                            lineNumber: 732,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCancel,
                                            className: "bg-gray-500 text-white px-8 py-2.5 rounded text-sm hover:bg-gray-600 transition-colors font-medium",
                                            children: "✖️ Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                            lineNumber: 738,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                    lineNumber: 725,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                            lineNumber: 585,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                    lineNumber: 569,
                    columnNumber: 9
                }, this),
                showPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-gray-300 px-4 sm:px-6 md:px-8 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-gray-700",
                                children: "📧 Template Preview"
                            }, void 0, false, {
                                fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                lineNumber: 752,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                            lineNumber: 751,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-6 md:p-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-2 border-gray-300 rounded-lg bg-white max-w-4xl mx-auto overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 border-b border-gray-200 px-6 py-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 mb-1",
                                                children: "Template Name:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                lineNumber: 757,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-bold text-gray-800",
                                                children: templateName || 'Untitled Template'
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                lineNumber: 758,
                                                columnNumber: 19
                                            }, this),
                                            category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs mt-2",
                                                children: category
                                            }, void 0, false, {
                                                fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                                lineNumber: 762,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                        lineNumber: 756,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        dangerouslySetInnerHTML: {
                                            __html: editorRef.current?.getContent() || '<p class="text-gray-400">No content yet...</p>'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                        lineNumber: 767,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                                lineNumber: 755,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                            lineNumber: 754,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
                    lineNumber: 750,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
            lineNumber: 567,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/newsletter/AddCustomTemplatePage/page.js",
        lineNumber: 566,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d5d3f2e8._.js.map