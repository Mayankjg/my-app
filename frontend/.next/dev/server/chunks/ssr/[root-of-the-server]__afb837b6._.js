module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/managesalesperson/add/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// // Internal CSS for responsiveness
// const internalStyles = `
//   @media (max-width: 1280px) {
//     .form-wrapper-main {
//       width: 95% !important;
//       max-width: 950px !important;
//     }
//   }
//   @media (max-width: 1024px) {
//     .form-wrapper-main {
//       width: 100% !important;
//       height: auto !important;
//     }
//     .two-col-grid {
//       grid-template-columns: 1fr !important;
//     }
//     .input-field {
//       width: 60% !important;
//       margin-left: 10px !important;
//       margin-right: 10px !important;
//     }
//     .three-col-grid {
//       grid-template-columns: 1fr !important;
//     }
//     .contact-row {
//       flex-direction: column !important;
//       gap: 0 !important;
//     }
//     .contact-row > div {
//       width: 100% !important;
//     }
//     .contact-input {
//       width: 60% !important;
//       margin-left: 10px !important;
//     }
//   }
//   @media (max-width: 768px) {
//     .page-wrapper {
//       padding: 10px !important;
//     }
//     .form-wrapper-main {
//       width: 100% !important;
//       margin: 0 !important;
//     }
//     .form-title {
//       font-size: 18px !important;
//       margin-left: 5px !important;
//     }
//     .profile-upload-section {
//       flex-direction: column !important;
//       align-items: flex-start !important;
//     }
//     .profile-preview-box {
//       margin-right: 0 !important;
//       margin-top: 10px;
//     }
//     .button-wrapper {
//       flex-direction: column !important;
//       width: 100% !important;
//     }
//     .save-button, .cancel-button {
//       width: 60% !important;
//       margin-bottom: 10px;
//       margin-left: 0 !important;
//       margin-right: 0 !important;
//       text-indent: 0 !important;
//       display: flex !important;
//       justify-content: center !important;
//       align-items: center !important;
//     }
//     .footer-section {
//       margin-top: 30px !important;
//     }
//   }
//   @media (max-width: 480px) {
//     .input-field {
//       height: 35px !important;
//     }
//     label {
//       margin-left: 5px !important;
//       margin-right: 5px !important;
//     }
//   }
// `;
// const pageContainerStyle = {
//   backgroundColor: '#eef1f4',
//   padding: '20px',
//   minHeight: '80vh',
//   display: 'grid',
//   justifyContent: 'center',
//   alignItems: 'flex-start',
//   fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
// };
// export default function AddSalesperson() {
//   const router = useRouter();
//   const [profileImage, setProfileImage] = useState(null);
//   const [formData, setFormData] = useState({
//     username: "",
//     firstname: "",
//     lastname: "",
//     email: "",
//     designation: "",
//     country: "",
//     code: "",
//     contact: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let code = formData.code;
//     if (name === "country") {
//       if (value === "India") code = "+91";
//       else if (value === "USA") code = "+1";
//       else if (value === "UK") code = "+44";
//       else code = "";
//     }
//     setFormData({ ...formData, [name]: value, code });
//   };
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       ...formData,
//       profileImage,
//     };
//     const res = await fetch("/api/salespersons", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });
//     if (res.ok) {
//       alert("Salesperson saved successfully!");
//       router.push("/managesalesperson");
//     } else {
//       alert("Failed to save data");
//     }
//   };
//   return (
//     <>
//       <style>{internalStyles}</style>
//       <div className="page-wrapper" style={pageContainerStyle}>
//         <div className="bg-[#ffffff] h-auto w-[1000px] m-auto">
//           <div className="form-wrapper-main w-[1000px] h-auto max-w-10xl bg-white border border-[#e0e0e0] rounded-md shadow-md">
//             <div className="border-b border-[#bcbcbc] px-4 sm:px-8">
//               <h2 className="form-title text-[20px] font-normal text-[#333] mt-[10px] mb-[10px] ml-[10px]">
//                 Add <span className="font-semibold">Salesperson</span>
//               </h2>
//             </div>
//             <form onSubmit={handleSubmit} className="p-4 sm:p-[6px] lg:order-1">
//               <div className="two-col-grid grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 mt-[2px] mb-[2px]">
//                 <div className="flex flex-col space-x-5">
//                   <label className="block text-sm text-gray-600 mt-[20px] mb-[5px] ml-[10px]">
//                     User Name
//                   </label>
//                   <input
//                     type="text"
//                     name="username"
//                     value={formData.username}
//                     onChange={handleChange}
//                     placeholder="User Name"
//                     className="input-field w-[350px] h-[30px] mt-[10px] mb-[10px] ml-[10px] flex space-x-[10px] space-y-[4px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none"
//                     style={{ textIndent: "10px" }}
//                   />
//                 </div>
//                 <div className="flex flex-col mt-[4px] mb-[8px] lg:order-1">
//                   <label className="block text-sm text-gray-600 mt-[20px] mb-[10px] mr-[10px]">
//                     Profile Image
//                   </label>
//                   <div className="profile-upload-section flex flex-col-2 sm:flex-row sm:items-start gap-4 mt-1">
//                     <input
//                       type="file"
//                       onChange={handleImageChange}
//                       className="text-sm pt-1"
//                     />
//                     <div className="profile-preview-box w-[80px] h-[80px] mt-[2px] mb-[2px] mr-[10px] border border-[#ccc] flex items-center justify-center bg-white sm:mt-0">
//                       {profileImage ? (
//                         <img
//                           src={profileImage}
//                           alt="preview"
//                           className="w-full h-full object-cover"
//                         />
//                       ) : (
//                         <span className="text-xs text-gray-400 text-center px-2">
//                           {/* No file chosen */}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="two-col-grid grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-10 mt-[2px] mb-[2px]">
//                 <div className="flex flex-col space-y-2">
//                   <label className="block text-sm text-gray-600 mb-[10px] ml-[10px]">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     name="firstname"
//                     value={formData.firstname}
//                     onChange={handleChange}
//                     placeholder="First Name"
//                     className="input-field w-[350px] h-[30px] mb-[10px] ml-[10px] flex border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none"
//                     style={{ textIndent: "10px" }}
//                   />
//                 </div>
//                 <div className="flex flex-col space-y-2">
//                   <label className="block text-sm text-gray-600 mb-[10px] mr-[10px]">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     name="lastname"
//                     value={formData.lastname}
//                     onChange={handleChange}
//                     placeholder="Last Name"
//                     className="input-field w-[350px] h-[30px] mr-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none"
//                     style={{ textIndent: "10px" }}
//                   />
//                 </div>
//               </div>
//               <div className="two-col-grid grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-10 mb-8">
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-[10px] ml-[10px]">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Email"
//                     className="input-field w-[350px] h-[30px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none"
//                     style={{ textIndent: "10px" }}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-[10px] mr-[10px]">
//                     Designation
//                   </label>
//                   <input
//                     type="text"
//                     name="designation"
//                     value={formData.designation}
//                     onChange={handleChange}
//                     placeholder="Designation"
//                     className="input-field w-[350px] h-[30px] mr-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none"
//                     style={{ textIndent: "10px" }}
//                   />
//                 </div>
//               </div>
//               <div className="three-col-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-[20px]">
//                 <div>
//                   <label className="block text-sm text-gray-600 mt-[20px] mb-[10px] ml-[10px]">
//                     Country
//                   </label>
//                   <select
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     className="input-field w-[355px] h-[30px] ml-[10px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none bg-white"
//                     style={{ textIndent: "10px" }}
//                   >
//                     <option value="">Select Country</option>
//                     <option value="India">India</option>
//                     <option value="USA">USA</option>
//                     <option value="UK">UK</option>
//                   </select>
//                 </div>
//                 <div className="contact-row flex items-center gap-4 mt-[10px]">
//                   <div className="flex flex-col">
//                     <label className="block text-sm text-gray-600 mb-[8px]">
//                       Country Code
//                     </label>
//                     <input
//                       type="text"
//                       name="code"
//                       value={formData.code}
//                       readOnly
//                       placeholder="Code"
//                       className="contact-input w-[120px] h-[30px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs bg-[#f7f7f7] text-gray-500 focus:outline-none"
//                       style={{ textIndent: "10px" }}
//                     />
//                   </div>
//                   <div className="flex flex-col flex-1">
//                     <label className="block text-sm text-gray-600 ml-[20px] mb-[8px]">
//                       Contact No
//                     </label>
//                     <input
//                       type="text"
//                       name="contact"
//                       value={formData.contact}
//                       onChange={handleChange}
//                       placeholder="Contact No"
//                       className="contact-input w-[200px] h-[30px] ml-[20px] border border-[#ccc] rounded-[5px] px-3 py-2 text-xs focus:outline-none"
//                       style={{ textIndent: "10px" }}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="footer-section bg-[#f4f6f9] flex justify-end gap-[4] p-[19.5] sm:p-[5] mt-[50px]">
//                 <div className="button-wrapper bg-[#f4f6f9] w-full flex flex-col-1 px-4 py-4">
//                   <button
//                     type="submit"
//                     className="save-button h-[30px] w-[100px] ml-[600px] border border-[#ffffff] flex items-center bg-[#00a7cf] text-[white] px-6 py-1 rounded-[5px] text-xs font-medium"
//                     style={{ textIndent: "30px" }}
//                   >
//                     Save
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => router.push("/managesalesperson")}
//                     className="cancel-button bg-[#ffffff] text-[#757575] h-[30px] w-[100px] mr-[70px] ml-[10px] flex items-center border border-[#ccc] bg-white text-gray-700 px-6 py-1 rounded-[5px] text-xs"
//                     style={{ textIndent: "25px" }}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>AddSalespersonForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AddSalespersonForm() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        designation: '',
        country: '',
        countryCode: '',
        contactNo: '',
        profileImage: null
    });
    const [imagePreview, setImagePreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        if (file) {
            setFormData((prev)=>({
                    ...prev,
                    profileImage: file
                }));
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSave = ()=>{
        console.log('Form Data:', formData);
        alert('Salesperson saved successfully!');
    };
    const handleCancel = ()=>{
        setFormData({
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            designation: '',
            country: '',
            countryCode: '',
            contactNo: '',
            profileImage: null
        });
        setImagePreview(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 p-4 md:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto bg-white rounded-lg shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-gray-200 px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-normal text-gray-700",
                        children: [
                            "Add ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: "Salesperson"
                            }, void 0, false, {
                                fileName: "[project]/app/managesalesperson/add/page.js",
                                lineNumber: 432,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/managesalesperson/add/page.js",
                        lineNumber: 431,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/managesalesperson/add/page.js",
                    lineNumber: 430,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 md:p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm text-gray-600 mb-2",
                                                children: "User Name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 443,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "userName",
                                                value: formData.userName,
                                                onChange: handleInputChange,
                                                placeholder: "User Name",
                                                className: "w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 446,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                        lineNumber: 442,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm text-gray-600 mb-2",
                                                children: "First Name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 458,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "firstName",
                                                value: formData.firstName,
                                                onChange: handleInputChange,
                                                placeholder: "First Name",
                                                className: "w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 461,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                        lineNumber: 457,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm text-gray-600 mb-2",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 473,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                name: "email",
                                                value: formData.email,
                                                onChange: handleInputChange,
                                                placeholder: "Email",
                                                className: "w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 476,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                        lineNumber: 472,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm text-gray-600 mb-2",
                                                children: "Country"
                                            }, void 0, false, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 488,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "country",
                                                value: formData.country,
                                                onChange: handleInputChange,
                                                className: "w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-500 bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select Country"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                                        lineNumber: 497,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "usa",
                                                        children: "United States"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                                        lineNumber: 498,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "uk",
                                                        children: "United Kingdom"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                                        lineNumber: 499,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "canada",
                                                        children: "Canada"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                                        lineNumber: 500,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "india",
                                                        children: "India"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                                        lineNumber: 501,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "australia",
                                                        children: "Australia"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                                        lineNumber: 502,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 491,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                        lineNumber: 487,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/managesalesperson/add/page.js",
                                lineNumber: 440,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm text-gray-600 mb-2",
                                                children: "Profile Image"
                                            }, void 0, false, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 511,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: "image/*",
                                                        onChange: handleImageChange,
                                                        className: "text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:bg-white file:text-gray-700 hover:file:bg-gray-50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                                        lineNumber: 515,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-28 h-28 border border-gray-300 rounded bg-white flex items-center justify-center overflow-hidden flex-shrink-0",
                                                        children: imagePreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: imagePreview,
                                                            alt: "Preview",
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/managesalesperson/add/page.js",
                                                            lineNumber: 523,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-300 text-xs",
                                                            children: "No image"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/managesalesperson/add/page.js",
                                                            lineNumber: 525,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                                        lineNumber: 521,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm text-gray-600 mb-2",
                                                children: "Last Name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 533,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "lastName",
                                                value: formData.lastName,
                                                onChange: handleInputChange,
                                                placeholder: "Last Name",
                                                className: "w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 536,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                        lineNumber: 532,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm text-gray-600 mb-2",
                                                children: "Designation"
                                            }, void 0, false, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 548,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "designation",
                                                value: formData.designation,
                                                onChange: handleInputChange,
                                                placeholder: "Designation",
                                                className: "w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 551,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                        lineNumber: 547,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm text-gray-600 mb-2",
                                                        children: "Country Code"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                                        lineNumber: 564,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "countryCode",
                                                        value: formData.countryCode,
                                                        onChange: handleInputChange,
                                                        placeholder: "Code",
                                                        className: "w-full px-4 py-2.5 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                                        lineNumber: 567,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 563,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm text-gray-600 mb-2",
                                                        children: "Contact No"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                                        lineNumber: 577,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        name: "contactNo",
                                                        value: formData.contactNo,
                                                        onChange: handleInputChange,
                                                        placeholder: "Contact No",
                                                        className: "w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                                        lineNumber: 580,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/managesalesperson/add/page.js",
                                                lineNumber: 576,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/managesalesperson/add/page.js",
                                        lineNumber: 562,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/managesalesperson/add/page.js",
                                lineNumber: 508,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/managesalesperson/add/page.js",
                        lineNumber: 438,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/managesalesperson/add/page.js",
                    lineNumber: 437,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-200 px-6 py-4 flex justify-end gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCancel,
                            className: "px-6 py-2 text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/app/managesalesperson/add/page.js",
                            lineNumber: 596,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSave,
                            className: "px-8 py-2 text-white bg-cyan-500 rounded hover:bg-cyan-600 transition-colors",
                            children: "Save"
                        }, void 0, false, {
                            fileName: "[project]/app/managesalesperson/add/page.js",
                            lineNumber: 602,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/managesalesperson/add/page.js",
                    lineNumber: 595,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/managesalesperson/add/page.js",
            lineNumber: 428,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/managesalesperson/add/page.js",
        lineNumber: 427,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__afb837b6._.js.map