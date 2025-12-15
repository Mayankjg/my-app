"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/newsletter/ImportContacts'); 
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}












// "use client";

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
            
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
            
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
          
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }




















// "use client";

// import { useState } from "react";
// import CommentsSection from "./ActivityHistoryPage/comments/page";
// import EmailSection from "./ActivityHistoryPage/email/page";

// export default function Home() {
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