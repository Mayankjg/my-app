module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/newsletter/ContactList/page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
}),
"[project]/app/newsletter/ContactList/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/newsletter/ContactList/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b3c33e07._.js.map