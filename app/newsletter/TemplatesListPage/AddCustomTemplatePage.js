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