(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/managesalesperson/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { Mail, Phone, Briefcase, Trash2, Key } from "lucide-react";
// const NewPasswordModal = ({ salespersonId, onClose, onPasswordChange }) => {
//     const [newPassword, setNewPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [error, setError] = useState("");
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError("");
//         if (newPassword.length < 6) {
//             setError("Password must be at least 6 characters long.");
//             return;
//         }
//         if (newPassword !== confirmPassword) {
//             setError("New password and confirm password do not match.");
//             return;
//         }
//         onPasswordChange(salespersonId, newPassword);
//         onClose();
//     };
//     return (
//         <div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-5"
//             onClick={onClose}
//         >
//             <div
//                 className="bg-[white] mt-[120px] border border-gray-300 p-[30px] rounded-[10px] w-[400px] max-w-[400px] shadow-lg"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Password</h3>
//                 <form onSubmit={handleSubmit}>
//                     {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}
//                     <label className="block mb-[10px] text-sm font-medium text-gray-700">New Password</label>
//                     <input
//                         type="password"
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         className="w-full p-[10px] mb-[15px] border border-gray-300 rounded-[5px] pl-[10px]"
//                         placeholder="Enter new password"
//                         required
//                         minLength="6"
//                     />
//                     <label className="block mb-[10px] text-sm font-medium text-gray-700">Confirm Password</label>
//                     <input
//                         type="password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         className="w-full p-[10px] mb-[15px] border border-gray-300 rounded-[5px] pl-[10px]"
//                         placeholder="Confirm password"
//                         required
//                     />
//                     <div className="flex justify-end gap-3 mt-4">
//                         <button
//                             type="submit"
//                             className="bg-[#00a7cf] hover:bg-[#0094b8] text-white px-[15px] py-[10px] rounded-[5px] font-bold ml-[20px] transition-colors"
//                         >
//                             Update Password
//                         </button>
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             className="bg-[#f0f0f0] hover:bg-gray-200 text-[#333] px-[15px] py-[10px] rounded-[5px] font-bold ml-[10px] transition-colors"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
// const ChangeEmailModal = ({ salespersonId, onClose, onEmailChange }) => {
//     const [newEmail, setNewEmail] = useState("");
//     const [error, setError] = useState("");
//     const validateEmail = (email) => {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError("");
//         if (!validateEmail(newEmail)) {
//             setError("Please enter a valid email address.");
//             return;
//         }
//         onEmailChange(salespersonId, newEmail);
//         onClose();
//     };
//     return (
//         <div
//             className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-5"
//             onClick={onClose}
//         >
//             <div
//                 className="bg-[white] mt-[120px] p-[70px] border border-gray-200 rounded-[10px] w-[300px] max-w-[400px] shadow-lg"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Email ID</h3>
//                 <form onSubmit={handleSubmit}>
//                     {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}
//                     <label className="block mb-[10px] text-sm font-medium text-gray-700">New Email ID</label>
//                     <input
//                         type="email"
//                         value={newEmail}
//                         onChange={(e) => setNewEmail(e.target.value)}
//                         className="w-full p-[10px] mb-[15px] border border-gray-300 rounded-[5px] pl-[10px]"
//                         placeholder="Enter new email address"
//                         required
//                     />
//                     <div className="flex justify-end gap-3 mt-4">
//                         <button
//                             type="submit"
//                             className="bg-[#133b74] hover:bg-[#0f2f5a] text-white px-[15px] py-[10px] rounded-[5px] font-bold ml-[20px] transition-colors"
//                         >
//                             Update Email
//                         </button>
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             className="bg-[#f0f0f0] hover:bg-gray-200 text-[#333] px-[15px] py-[10px] rounded-[5px] font-bold ml-[10px] transition-colors"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
// export default function SalespersonList() {
//     const router = useRouter();
//     const [salespersons, setSalespersons] = useState([]);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [salespersonToChange, setSalespersonToChange] = useState(null);
//     const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
//     const [salespersonToChangeEmail, setSalespersonToChangeEmail] = useState(null);
//     useEffect(() => {
//         const storedData = localStorage.getItem("salespersons");
//         if (storedData) {
//             setSalespersons(JSON.parse(storedData));
//         }
//         fetchData();
//     }, []);
//     useEffect(() => {
//         localStorage.setItem("salespersons", JSON.stringify(salespersons));
//     }, [salespersons]);
//     const fetchData = async () => {
//         try {
//             const res = await fetch("/api/salespersons");
//             const data = await res.json();
//             setSalespersons(data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };
//     const handleDelete = (id) => {
//         if (!confirm("Are you sure you want to delete this salesperson ?")) return;
//         try {
//             setSalespersons((prev) => prev.filter((sp) => sp.id !== id));
//             alert("Salesperson deleted successfully!");
//         } catch (error) {
//             console.error("Error during local delete:", error);
//             alert("Local deletion failed.");
//         }
//     };
//     const handleOpenChangePassword = (id) => {
//         setSalespersonToChange(id);
//         setIsModalOpen(true);
//     };
//     const handleCloseChangePassword = () => {
//         setIsModalOpen(false);
//         setSalespersonToChange(null);
//     };
//     const handleChangePassword = async (id, newPassword) => {
//         await new Promise(resolve => setTimeout(resolve, 500));
//         try {
//             alert("Password updated successfully!");
//         } catch (error) {
//             console.error("Error during password simulation:", error);
//             alert("Something went wrong");
//         }
//     };
//     const handleOpenChangeEmail = (id) => {
//         setSalespersonToChangeEmail(id);
//         setIsEmailModalOpen(true);
//     };
//     const handleCloseChangeEmail = () => {
//         setIsEmailModalOpen(false);
//         setSalespersonToChangeEmail(null);
//     };
//     const handleChangeEmail = async (id, newEmail) => {
//         await new Promise(resolve => setTimeout(resolve, 500));
//         try {
//             setSalespersons(prev => prev.map(sp =>
//                 sp.id === id ? { ...sp, email: newEmail } : sp
//             ));
//             alert("Email ID updated successfully!");
//         } catch (error) {
//             console.error("Error during local email change:", error);
//             alert("Local Email ID update failed.");
//         }
//     };
//     const filteredSalespersons = salespersons.filter(
//         (sp) =>
//             sp.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             sp.email.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     const displayList = searchQuery ? filteredSalespersons : salespersons;
//     return (
//         <div className="bg-[#eef1f4] p-5 min-h-[80vh] flex justify-center items-start font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
//             {isModalOpen && (
//                 <NewPasswordModal
//                     salespersonId={salespersonToChange}
//                     onClose={handleCloseChangePassword}
//                     onPasswordChange={handleChangePassword}
//                 />
//             )}
//             {isEmailModalOpen && (
//                 <ChangeEmailModal
//                     salespersonId={salespersonToChangeEmail}
//                     onClose={handleCloseChangeEmail}
//                     onEmailChange={handleChangeEmail}
//                 />
//             )}
//             <div className="p-[6px] bg-[white] mt-[20px] h-[900px] rounded-[5px] w-full max-w-[1200px] xl:w-[95%] xl:max-w-[1100px]">
//                 {/* Header Section */}
//                 <div className="bg-white w-full px-4 py-4">
//                     <div className="flex justify-between items-center flex-wrap gap-4">
//                         <h2 className="text-2xl ml-5 font-semibold text-gray-900 max-[768px]:ml-0 max-[768px]:text-xl">
//                             Salesperson <strong>List</strong>
//                         </h2>
//                         <button
//                             onClick={() => router.push("/managesalesperson/add")}
//                             className="bg-[#1f3853] hover:bg-[#111132] text-[white] mr-[20px] text-[20px] px-4 py-2 rounded-[6px] transition-colors max-[768px]:mr-0 max-[768px]:w-[430px] max-[768px]:text-base"
//                         >
//                             Add Sales Person
//                         </button>
//                     </div>
//                     <hr className="border-t border-black mt-2 mb-6" />
//                 </div>
//                 {/* Search Section */}
//                 <div className="flex items-center ml-[10px] gap-2 mb-6 max-[768px]:flex-col max-[768px]:ml-0 max-[768px]:px-4">
//                     <input
//                         type="text"
//                         placeholder="Search"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         className="w-[200px] ml-auto mr-[30px] h-[35px] mt-[10px] border border-gray-300 rounded-[5px] mb-10 px-3 py-2 text-[18px] focus:outline-none focus:ring-2 focus:ring-[#00a7cf] max-[768px]:w-full max-[768px]:ml-0 max-[768px]:mr-0 max-[768px]:mt-0 max-[768px]:mb-0 max-[768px]:text-base"
//                     />
//                     <button className="bg-[#0baad1] w-[100px] h-[40px] text-[white] mr-1 mb-10 mt-[10px] px-5 py-2 text-[18px] font-medium rounded-[5px] hover:bg-[#0094b8] transition-colors max-[768px]:w-full max-[768px]:mr-0 max-[768px]:mb-0 max-[768px]:mt-0 max-[768px]:text-base">
//                         Search
//                     </button>
//                 </div>
//                 {/* Cards List */}
//                 {displayList.length > 0 ? (
//                     <div className="w-[1150px] mr-[25px] grid grid-cols-1 gap-[10px] max-[1280px]:w-full max-[1280px]:ml-0 max-[1280px]:px-4">
//                         {displayList.map((sp, index) => (
//                             <div
//                                 key={sp.id || index}
//                                 className="flex items-center mt-[20px] bg-[white] ml-[20px] hover:bg-[#f6f6f6] mb-[10px] justify-between border border-gray-200 rounded-[10px] p-4 shadow-sm hover:shadow-md transition-all duration-200 max-[768px]:flex-col max-[768px]:items-start max-[768px]:mt-3"
//                             >
//                                 <div className="flex items-start gap-4 flex-1 w-full max-[768px]:flex-col">
//                                     <img
//                                         src={sp.profileImage || "/default-avatar.png"}
//                                         alt="Profile"
//                                         className="w-[70px] h-[100px] ml-[10px] mt-[10px] rounded-[10px] mt-5 border border-gray-300 object-cover max-[768px]:ml-0 max-[768px]:mt-0 max-[768px]:w-[60px] max-[768px]:h-[80px]"
//                                     />
//                                     <div className="flex-1 w-full">
//                                         <h3 className="text-xl ml-[30px] mt-5 font-bold text-gray-800 leading-tight max-[768px]:ml-0 max-[768px]:mt-2 max-[768px]:text-lg">
//                                             {sp.username}
//                                         </h3>
//                                         {/* First Row */}
//                                         <div className="flex items-center justify-between ml-[30px] mt-[10px] max-[768px]:flex-col max-[768px]:items-start max-[768px]:ml-0 max-[768px]:gap-3">
//                                             <div className="flex items-center gap-10 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-2">
//                                                 <p className="text-gray-600 text-base capitalize max-w-[200px] truncate max-[768px]:text-sm max-[768px]:max-w-full">
//                                                     {sp.firstname} {sp.lastname}
//                                                 </p>
//                                                 <div className="flex items-center gap-[10px] ml-[110px] max-[768px]:ml-0">
//                                                     <Briefcase className="w-[18px] h-[18px] text-gray-500 flex-shrink-0" />
//                                                     <span className="text-base text-gray-700 ml-[5px] max-[768px]:text-sm max-[768px]:mr-0">
//                                                         Designation: <span className="font-semibold max-w-[150px] inline-block truncate align-bottom">{sp.designation}</span>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                             <div className="flex items-center gap-3 max-[768px]:flex-col max-[768px]:w-full max-[768px]:mt-2">
//                                                 <div
//                                                     className="relative group flex items-center cursor-pointer"
//                                                     onClick={() => handleDelete(sp.id)}
//                                                 >
//                                                     <Trash2
//                                                         className="w-5 h-5 mr-[100px] text-gray-600 hover:text-red-600 transition max-[768px]:mr-0"
//                                                         title="Delete"
//                                                     />
//                                                     <span className="absolute -top-[20px] -left-[10px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none max-[768px]:left-1/2 max-[768px]:-translate-x-1/2">
//                                                         Delete
//                                                     </span>
//                                                 </div>
//                                                 <button className="bg-[#dc3545] h-[35px] w-[120px] mt-[10px] mr-[50px] rounded-[5px] text-[white] hover:bg-[#c82333] text-[15px] font-medium transition-colors max-[768px]:w-full max-[768px]:mt-0 max-[768px]:mr-0 max-[768px]:text-sm">
//                                                     View Leads
//                                                 </button>
//                                             </div>
//                                         </div>
//                                         {/* Second Row */}
//                                         <div className="flex items-center justify-between ml-[30px] mt-[15px] mb-5 max-[768px]:flex-col max-[768px]:items-start max-[768px]:ml-0 max-[768px]:gap-3 max-[768px]:mb-3">
//                                             <div className="flex items-center gap-10 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-2 max-[768px]:w-full">
//                                                 <div className="flex items-center gap-[10px]">
//                                                     <Mail className="w-[18px] h-[18px] mb-[10px] text-gray-500 flex-shrink-0 max-[768px]:mb-0" />
//                                                     <a
//                                                         href={`mailto:${sp.email}`}
//                                                         className="text-[#007bff] mb-[10px] text-base hover:underline break-all max-w-[250px] max-[768px]:mb-0 max-[768px]:text-sm max-[768px]:max-w-full"
//                                                     >
//                                                         {sp.email}
//                                                     </a>
//                                                 </div>
//                                                 <div className="flex items-center mb-[10px] ml-[60px] gap-[10px] max-[768px]:mb-0 max-[768px]:ml-0 max-[768px]:w-full">
//                                                     <Phone className="w-[18px] h-[18px] text-gray-500 flex-shrink-0" />
//                                                     <span className="text-base text-gray-700 max-[768px]:text-sm">
//                                                         Contact Number:{" "}
//                                                         <span className="font-semibold max-w-[150px] inline-block truncate align-bottom">
//                                                             {sp.contact}
//                                                         </span>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                             <div className="flex items-center gap-3 max-[768px]:flex-col max-[768px]:w-full max-[768px]:mt-2">
//                                                 <div
//                                                     className="relative group flex items-center cursor-pointer"
//                                                     onClick={() => handleOpenChangePassword(sp.id)}
//                                                 >
//                                                     <Key
//                                                         className="w-5 h-5 mr-[100px] mb-[10px] text-gray-600 hover:text-[#133b74] transition max-[768px]:mr-0 max-[768px]:mb-0"
//                                                         title="Change Password"
//                                                     />
//                                                     <span className="absolute -top-[20px] right-[40px] bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none max-[768px]:top-[-30px] max-[768px]:bottom-auto max-[768px]:left-1/2 max-[768px]:-translate-x-1/2 max-[768px]:right-auto">
//                                                         Change Password
//                                                     </span>
//                                                 </div>
//                                                 <button
//                                                     className="bg-[#2b3342] h-[35px] w-[140px] mb-[10px] mr-[30px] rounded-[5px] text-[white] hover:bg-[#0f2f5a] text-[15px] font-medium transition-colors max-[768px]:w-full max-[768px]:mb-0 max-[768px]:mr-0 max-[768px]:text-sm"
//                                                     onClick={() => handleOpenChangeEmail(sp.id)}
//                                                 >
//                                                     Change Email ID
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 ) : (
//                     <div className="text-center text-gray-500 text-lg font-medium mt-10 max-[768px]:text-base max-[768px]:mt-5 max-[768px]:px-4">
//                         No Salespersons Found
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
// "use client";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { Mail, Phone, Briefcase, Trash2, Key } from "lucide-react";
// const NewPasswordModal = ({ salespersonId, onClose, onPasswordChange }) => {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     if (newPassword.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       setError("New password and confirm password do not match.");
//       return;
//     }
//     onPasswordChange(salespersonId, newPassword);
//     onClose();
//   };
//   return (
//     <div 
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-5"
//       onClick={onClose}
//     >
//       <div 
//         className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Password</h3>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}
//           <label className="block mb-2 text-sm font-medium text-gray-700">New Password</label>
//           <input
//             type="password"
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             className="w-full p-2.5 mb-4 border border-gray-300 rounded-md pl-5"
//             placeholder="Enter new password"
//             required
//             minLength="6"
//           />
//           <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             className="w-full p-2.5 mb-4 border border-gray-300 rounded-md pl-5"
//             placeholder="Confirm password"
//             required
//           />
//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               type="submit"
//               className="bg-[#00a7cf] hover:bg-[#0094b8] text-white px-4 py-2.5 rounded-md font-bold ml-5 transition-colors"
//             >
//               Update Password
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-md font-bold ml-2.5 transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// const ChangeEmailModal = ({ salespersonId, onClose, onEmailChange }) => {
//   const [newEmail, setNewEmail] = useState("");
//   const [error, setError] = useState("");
//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     if (!validateEmail(newEmail)) {
//       setError("Please enter a valid email address.");
//       return;
//     }
//     onEmailChange(salespersonId, newEmail);
//     onClose();
//   };
//   return (
//     <div 
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000] p-5"
//       onClick={onClose}
//     >
//       <div 
//         className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <h3 className="text-xl font-semibold mb-4 text-gray-900">Change Email ID</h3>
//         <form onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 mb-3 text-sm">{error}</p>}
//           <label className="block mb-2 text-sm font-medium text-gray-700">New Email ID</label>
//           <input
//             type="email"
//             value={newEmail}
//             onChange={(e) => setNewEmail(e.target.value)}
//             className="w-full p-2.5 mb-4 border border-gray-300 rounded-md pl-5"
//             placeholder="Enter new email address"
//             required
//           />
//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               type="submit"
//               className="bg-[#133b74] hover:bg-[#0f2f5a] text-white px-4 py-2.5 rounded-md font-bold ml-5 transition-colors"
//             >
//               Update Email
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2.5 rounded-md font-bold ml-2.5 transition-colors"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default function SalespersonList() {
//   const router = useRouter();
//   const [salespersons, setSalespersons] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [salespersonToChange, setSalespersonToChange] = useState(null);
//   const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
//   const [salespersonToChangeEmail, setSalespersonToChangeEmail] = useState(null);
//   useEffect(() => {
//     const storedData = localStorage.getItem("salespersons");
//     if (storedData) {
//       setSalespersons(JSON.parse(storedData));
//     }
//     fetchData();
//   }, []);
//   useEffect(() => {
//     localStorage.setItem("salespersons", JSON.stringify(salespersons));
//   }, [salespersons]);
//   const fetchData = async () => {
//     try {
//       const res = await fetch("/api/salespersons");
//       const data = await res.json();
//       setSalespersons(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
//   const handleDelete = (id) => {
//     if (!confirm("Are you sure you want to delete this salesperson ?")) return;
//     try {
//       setSalespersons((prev) => prev.filter((sp) => sp.id !== id));
//       alert("Salesperson deleted successfully!");
//     } catch (error) {
//       console.error("Error during local delete:", error);
//       alert("Local deletion failed.");
//     }
//   };
//   const handleOpenChangePassword = (id) => {
//     setSalespersonToChange(id);
//     setIsModalOpen(true);
//   };
//   const handleCloseChangePassword = () => {
//     setIsModalOpen(false);
//     setSalespersonToChange(null);
//   };
//   const handleChangePassword = async (id, newPassword) => {
//     await new Promise(resolve => setTimeout(resolve, 500));
//     try {
//       alert("Password updated successfully!");
//     } catch (error) {
//       console.error("Error during password simulation:", error);
//       alert("Something went wrong");
//     }
//   };
//   const handleOpenChangeEmail = (id) => {
//     setSalespersonToChangeEmail(id);
//     setIsEmailModalOpen(true);
//   };
//   const handleCloseChangeEmail = () => {
//     setIsEmailModalOpen(false);
//     setSalespersonToChangeEmail(null);
//   };
//   const handleChangeEmail = async (id, newEmail) => {
//     await new Promise(resolve => setTimeout(resolve, 500));
//     try {
//       setSalespersons(prev => prev.map(sp =>
//         sp.id === id ? { ...sp, email: newEmail } : sp
//       ));
//       alert("Email ID updated successfully!");
//     } catch (error) {
//       console.error("Error during local email change:", error);
//       alert("Local Email ID update failed.");
//     }
//   };
//   const filteredSalespersons = salespersons.filter(
//     (sp) =>
//       sp.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       sp.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const displayList = searchQuery ? filteredSalespersons : salespersons;
//   return (
//     <div className="bg-[#eef1f4] p-3 sm:p-5 min-h-[80vh] flex justify-center items-start font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
//       {isModalOpen && (
//         <NewPasswordModal
//           salespersonId={salespersonToChange}
//           onClose={handleCloseChangePassword}
//           onPasswordChange={handleChangePassword}
//         />
//       )}
//       {isEmailModalOpen && (
//         <ChangeEmailModal
//           salespersonId={salespersonToChangeEmail}
//           onClose={handleCloseChangeEmail}
//           onEmailChange={handleChangeEmail}
//         />
//       )}
//       <div className="p-1.5 bg-white rounded-md w-full max-w-[1200px]">
//         <div className="bg-white w-full px-4 py-4">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//             <h2 className="text-xl sm:text-2xl ml-2 sm:ml-5 font-semibold text-gray-900">
//               Salesperson <strong>List</strong>
//             </h2>
//             <button
//               onClick={() => router.push("/managesalesperson/add")}
//               className="w-full sm:w-auto bg-[#1f3853] hover:bg-[#111132] text-white text-base sm:text-[18px] px-4 py-2 rounded-[5px] transition-colors"
//             >
//               Add Sales Person
//             </button>
//           </div>
//           <hr className="border-t border-black mt-2 mb-6" />
//         </div>
//         <div className="flex flex-col sm:flex-row items-stretch sm:items-center px-4 gap-2 mb-6 sm:justify-end">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full sm:w-[200px] h-9 border border-gray-300 rounded-[5px] px-3 py-2 text-base sm:text-[18px] focus:outline-none focus:ring-2 focus:ring-[#00a7cf] pl-5"
//           />
//           <button className="bg-[#0baad1] w-full sm:w-[70px] h-10 sm:h-9 text-white px-5 py-2 text-base sm:text-[18px] font-medium rounded-[5px] hover:bg-[#0094b8] transition-colors">
//             Search
//           </button>
//         </div>
//         {displayList.length > 0 ? (
//           <div className="w-full px-2 sm:px-6 mt-[20px] grid grid-cols-1 gap-2.5">
//             {displayList.map((sp, index) => (
//               <div
//                 key={sp.id || index}
//                 className="flex flex-col sm:flex-row items-start min-h-[200px] bg-[#ffffff] hover:bg-[#f6f6f6] mb-2.5 border border-gray-200 rounded-[10px] p-4 shadow-sm hover:shadow-md transition-all duration-200"
//               >
//                 <div className="flex flex-col sm:flex-row items-start gap-4 flex-1 w-full">
//                   <img
//                     src={sp.profileImage || "/default-avatar.png"}
//                     alt="Profile"
//                     className="w-[70px] h-[100px] rounded-[10px] border border-gray-300 object-cover self-center sm:self-start sm:mt-5"
//                   />
//                   <div className="flex-1 w-full">
//                     <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight mt-2 sm:mt-5">
//                       {sp.username}
//                     </h3>
//                     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-2.5 gap-3">
//                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-10 w-full sm:w-auto">
//                         <p className="text-gray-600 text-sm sm:text-base capitalize">
//                           {sp.firstname} {sp.lastname}
//                         </p>
//                         <div className="flex items-center gap-2.5">
//                           <Briefcase className="w-[18px] h-[18px] text-gray-500" />
//                           <span className="text-sm sm:text-base text-gray-700">
//                             Designation: <span className="font-semibold">{sp.designation}</span>
//                           </span>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-3 w-full sm:w-auto">
//                         <div
//                           className="relative group flex items-center cursor-pointer"
//                           onClick={() => handleDelete(sp.id)}
//                         >
//                           <Trash2
//                             className="w-5 h-5 text-gray-600 hover:text-red-600 transition"
//                             title="Delete"
//                           />
//                           <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
//                             Delete
//                           </span>
//                         </div>
//                         <button className="bg-[#dc3545] flex-1 sm:flex-none h-9 sm:w-[120px] rounded-[5px] text-white hover:bg-[#c82333] text-sm sm:text-[15px] font-medium transition-colors">
//                           View Leads
//                         </button>
//                       </div>
//                     </div>
//                     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-4 mb-5 gap-3">
//                       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-10 w-full sm:w-auto">
//                         <div className="flex items-center gap-2.5">
//                           <Mail className="w-[18px] h-[18px] text-gray-500" />
//                           <a
//                             href={`mailto:${sp.email}`}
//                             className="text-[#007bff] text-sm sm:text-base hover:underline break-all"
//                           >
//                             {sp.email}
//                           </a>
//                         </div>
//                         <div className="flex items-center gap-2.5">
//                           <Phone className="w-[18px] h-[18px] text-gray-500" />
//                           <span className="text-sm sm:text-base text-gray-700">
//                             Contact Number:{" "}
//                             <span className="font-semibold">
//                               {sp.contact}
//                             </span>
//                           </span>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-3 w-full sm:w-auto">
//                         <div
//                           className="relative group flex items-center cursor-pointer"
//                           onClick={() => handleOpenChangePassword(sp.id)}
//                         >
//                           <Key
//                             className="w-5 h-5 text-gray-600 hover:text-[#133b74] transition"
//                             title="Change Password"
//                           />
//                           <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
//                             Change Password
//                           </span>
//                         </div>
//                         <button
//                           className="bg-[#2b3342] flex-1 sm:flex-none h-9 sm:w-[140px] rounded-md text-white hover:bg-[#0f2f5a] text-sm font-medium transition-colors"
//                           onClick={() => handleOpenChangeEmail(sp.id)}
//                         >
//                           Change Email ID
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center text-gray-500 text-base sm:text-lg font-medium mt-10 pb-6">
//             No Salespersons Found
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>SalespersonList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SalespersonList() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [salespersons, setSalespersons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalespersonList.useEffect": ()=>{
            const stored = localStorage.getItem("salespersons");
            if (stored) {
                setSalespersons(JSON.parse(stored));
            }
        }
    }["SalespersonList.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalespersonList.useEffect": ()=>{
            localStorage.setItem("salespersons", JSON.stringify(salespersons));
        }
    }["SalespersonList.useEffect"], [
        salespersons
    ]);
    const handleDelete = (id)=>{
        if (!confirm("Are you sure you want to delete?")) return;
        const updated = salespersons.filter((sp)=>sp.id !== id);
        setSalespersons(updated);
    };
    const filtered = salespersons.filter((sp)=>sp.username.toLowerCase().includes(search.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-6 bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto bg-white p-6 rounded-lg shadow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold",
                            children: "Salesperson List"
                        }, void 0, false, {
                            fileName: "[project]/app/managesalesperson/page.js",
                            lineNumber: 850,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push("/managesalesperson/add"),
                            className: "bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700",
                            children: "Add Salesperson"
                        }, void 0, false, {
                            fileName: "[project]/app/managesalesperson/page.js",
                            lineNumber: 852,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/managesalesperson/page.js",
                    lineNumber: 849,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search by username...",
                        value: search,
                        onChange: (e)=>setSearch(e.target.value),
                        className: "border p-3 rounded w-full"
                    }, void 0, false, {
                        fileName: "[project]/app/managesalesperson/page.js",
                        lineNumber: 861,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/managesalesperson/page.js",
                    lineNumber: 860,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: filtered.length > 0 ? filtered.map((sp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border p-4 rounded bg-gray-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: sp.profileImage,
                                            className: "w-16 h-16 rounded object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/managesalesperson/page.js",
                                            lineNumber: 878,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-bold",
                                                    children: sp.username
                                                }, void 0, false, {
                                                    fileName: "[project]/app/managesalesperson/page.js",
                                                    lineNumber: 883,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        sp.firstname,
                                                        " ",
                                                        sp.lastname
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/managesalesperson/page.js",
                                                    lineNumber: 884,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-blue-600",
                                                    children: sp.email
                                                }, void 0, false, {
                                                    fileName: "[project]/app/managesalesperson/page.js",
                                                    lineNumber: 885,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: sp.contact
                                                }, void 0, false, {
                                                    fileName: "[project]/app/managesalesperson/page.js",
                                                    lineNumber: 886,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/managesalesperson/page.js",
                                            lineNumber: 882,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/managesalesperson/page.js",
                                    lineNumber: 877,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDelete(sp.id),
                                    className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/app/managesalesperson/page.js",
                                    lineNumber: 890,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, sp.id, true, {
                            fileName: "[project]/app/managesalesperson/page.js",
                            lineNumber: 873,
                            columnNumber: 15
                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-500",
                        children: "No Salespersons Found"
                    }, void 0, false, {
                        fileName: "[project]/app/managesalesperson/page.js",
                        lineNumber: 899,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/managesalesperson/page.js",
                    lineNumber: 870,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/managesalesperson/page.js",
            lineNumber: 847,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/managesalesperson/page.js",
        lineNumber: 846,
        columnNumber: 5
    }, this);
}
_s(SalespersonList, "YvDJD4I+wxM4fnC7iKBZIIvmscg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SalespersonList;
var _c;
__turbopack_context__.k.register(_c, "SalespersonList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_e9fc299f._.js.map