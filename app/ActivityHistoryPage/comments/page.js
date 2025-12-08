// "use client";

// import { useState, useEffect } from "react";

// export default function CommentsSection() {
//   const [comments, setComments] = useState(() => {
//     const saved = localStorage.getItem("crm_comments");
//     return saved
//       ? JSON.parse(saved)
//       : [
//           {
//             id: 1,
//             text: "Need to have a followup call. - By Test",
//             date: "28-Oct-25 10:29",
//           },
//         ];
//   });

//   const [inputComment, setInputComment] = useState("");

//   useEffect(() => {
//     localStorage.setItem("crm_comments", JSON.stringify(comments));
//   }, [comments]);

//   const addComment = () => {
//     if (!inputComment.trim()) return;

//     const newComment = {
//       id: Date.now(),
//       text: inputComment,
//       date: new Date().toLocaleString("en-GB", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//     };

//     setComments([newComment, ...comments]);
//     setInputComment("");
//   };

//   const deleteComment = (id) => {
//     setComments(comments.filter((c) => c.id !== id));
//   };

//   return (
//     <div className="text-sm">
//       <textarea
//         className="w-full border rounded p-3 h-28 outline-none text-sm md:text-base"
//         placeholder="Comment"
//         value={inputComment}
//         onChange={(e) => setInputComment(e.target.value)}
//       ></textarea>

//       <div className="flex flex-col sm:flex-row gap-3 mt-3">
//         <button
//           onClick={addComment}
//           className="bg-blue-500 text-white px-6 py-2 rounded w-full sm:w-28"
//         >
//           Add
//         </button>

//         {/* Cancel Button — Final */}
//         <button
//           onClick={() => setInputComment("")}
//           className="px-6 py-2 border rounded text-gray-600 w-full sm:w-28"
//         >
//           Cancel
//         </button>
//       </div>

//       <div className="border-t border-dashed mt-6"></div>
//       <br />
//       <br />

//       {/* DESKTOP TABLE */}
//       <div className="overflow-x-auto hidden md:block">
//         <table className="w-full border text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-2 border">Comment</th>
//               <th className="p-2 border">Date</th>
//               <th className="p-2 border">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {comments.map((c) => (
//               <tr key={c.id}>
//                 <td className="p-2 border text-center">{c.text}</td>
//                 <td className="p-2 border text-center">{c.date}</td>
//                 <td
//                   className="p-2 border text-red-500 cursor-pointer text-center"
//                   onClick={() => deleteComment(c.id)}
//                 >
//                   Delete
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* MOBILE CARDS */}
//       <div className="md:hidden space-y-4 mt-4">
//         {comments.map((c) => (
//           <div key={c.id} className="border-[1px] border-gray bg-white">
//             <div className="border-b p-3 text-sm text-gray-700">{c.text}</div>
//             <div className="border-b p-3 text-sm font-semibold text-teal-700">
//               {c.date}
//             </div>
//             <div className="p-3 text-sm">
//               <button
//                 className="text-red-600 text-[18px]"
//                 onClick={() => deleteComment(c.id)}
//               >
//                 🗑️
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";

export default function CommentsSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "Need to have a followup call. - By Test",
      date: "28-Oct-25 10:29",
    },
  ]);

  const [inputComment, setInputComment] = useState("");

  const addComment = () => {
    if (!inputComment.trim()) return;

    const newComment = {
      id: Date.now(),
      text: inputComment,
      date: new Date().toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setComments([newComment, ...comments]);
    setInputComment("");
  };

  const deleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div className="text-sm">
      <textarea
        className="w-full border rounded p-3 h-28 outline-none text-sm md:text-base"
        placeholder="Comment"
        value={inputComment}
        onChange={(e) => setInputComment(e.target.value)}
      ></textarea>

      <div className="flex flex-col sm:flex-row gap-3 mt-3">
        <button
          onClick={addComment}
          className="bg-blue-500 text-white px-6 py-2 rounded w-full sm:w-28"
        >
          Add
        </button>

        <button
          onClick={() => setInputComment("")}
          className="px-6 py-2 border rounded text-gray-600 w-full sm:w-28"
        >
          Cancel
        </button>
      </div>

      <div className="border-t border-dashed mt-6"></div>
      <br />
      <br />

      {/* DESKTOP TABLE */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Comment</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {comments.map((c) => (
              <tr key={c.id}>
                <td className="p-2 border text-center">{c.text}</td>
                <td className="p-2 border text-center">{c.date}</td>
                <td
                  className="p-2 border text-red-500 cursor-pointer text-center"
                  onClick={() => deleteComment(c.id)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4 mt-4">
        {comments.map((c) => (
          <div key={c.id} className="border-[1px] border-gray bg-white">
            <div className="border-b p-3 text-sm text-gray-700">{c.text}</div>
            <div className="border-b p-3 text-sm font-semibold text-teal-700">
              {c.date}
            </div>
            <div className="p-3 text-sm">
              <button
                className="text-red-600 text-[18px]"
                onClick={() => deleteComment(c.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}