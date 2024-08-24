// "use client";
// import { cn } from "@/lib/utils";  
// import Link from "next/link";
// import GridPattern from "./grid-pattern"; 
// import { BlurInDemo } from "../custom/BlurInDemo"; 
// import { Sandpack } from "@codesandbox/sandpack-react";
// import { levelUp } from "@codesandbox/sandpack-themes";

// export function GridPatternDemo() {
//    const codeString = `
//   export default function Example() {
    
//   return (
//     <div className='bg-[#000000db] w-full  h-screen flex items-center justify-center '> 
// <div
//   class="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4"
// >
//   <div class="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
//   <div class="flex flex-col gap-2">
//     <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
//     <div class="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
//     <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
//     <div class="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
//   </div>
// </div>

//     </div>
 
//   )
// }
//   `;
//   return (
//     <>
//     <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      
//       <BlurInDemo />
//       <p className=" max-lg:text-base mt-10 text-center text-[#ffffff7e] font-normal tracking-wide">Build your component library
//       Beautifully designed components <br /> that you can copy and paste into your apps.</p>

//      <Link href={'/docs'} >
//       <button className=" backdrop-blur-md inshadow border-[2px] mt-7 border-[#ffffff20] bg-[#ffffff0b]  rounded-2xl text-white px-7 py-2"> Go to Docs &gt; </button>
//      </Link>
//       <GridPattern
//         squares={[
//           [4, 4],
//           [5, 1],
//           [8, 2],
//           [5, 3],
//           [5, 5],
//           [10, 10],
//           [12, 15],
//           [15, 10],
//           [10, 15],
//           [15, 10],
//           [10, 15],
//           [15, 10],
//         ]}
//         className={cn(
//           "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] ",
//           "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
//         )}
//       />

     
//     </div>

//     <div className="px-20 py-10  w-full h-screen bg-[#000000db] ">

//       <h1 className=" text-4xl font-semibold">Live Code &gt; </h1>

//       <p>copy code </p>
//       <p>Create Code</p>
//       <p>Paste Code</p>
//   </div>
  
//   <Sandpack
     
//      template="react"
//       theme={levelUp} 
//      options={{
//        externalResources: ["https://cdn.tailwindcss.com"],
//        showNavigator: false,
//        showTabs: false,
//        showLineNumbers: true,
//        dependencies: {
//          "react-icons": "^4.3.1",
//        },
//        editorHeight: 580, 
//        initMode: "user-visible",
//      }}
//      files={{
//        "/App.js": codeString,
//      }}
//      style={{
//        height: "100vh", 
//      }}
     
//    />
//     </>
//   );
// }
 
'use client'; // Ensure this is present if you are using client-side features

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import GridPattern from './grid-pattern';
import { BlurInDemo } from '../custom/BlurInDemo';
import { Sandpack } from '@codesandbox/sandpack-react';
import { levelUp } from '@codesandbox/sandpack-themes';
import { cn } from "@/lib/utils";  
import { IoCodeSlashOutline } from 'react-icons/io5';
export function GridPatternDemo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set client-side flag after the component mounts
    setIsClient(true);
  }, []);

  const codeString = `
    export default function Example() {
      return (
        <div className='bg-[#000012] w-full h-screen flex items-center justify-center'> 
          <div className="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4">
            <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
            <div className="flex flex-col gap-2">
              <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
            </div>
          </div>
        </div>
      );
    }
  `;

  return (
    <>
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
        <BlurInDemo />
        <p className="max-lg:text-sm mt-10 max-lg:w-[90%] text-center text-[#ffffff7e] font-normal tracking-wide">
          Build your component library
          Beautifully designed components <br className=' max-lg:hidden' /> that you can copy and paste into your apps.
        </p>
        <Link href="/docs">
          <button className="backdrop-blur-md inshadow border-[2px] mt-7 border-[#ffffff20] bg-[#ffffff0b] rounded-2xl text-white px-7 py-2">
            Go to Docs &gt;
          </button>
        </Link>
        <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] ",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
      </div>

      <div className="px-20 max-lg:px-4 overflow-hidden py-10 flex max-lg:gap-10 flex-col justify-between relative w-full min-h-screen bg-[#000000e9">
      
       <div>
       <h1 className="text-4xl flex items-center gap-3 mt-10 font-bold">Live Code  <IoCodeSlashOutline /></h1>
        <p className=' text-sm text-zinc-400 mt-6'>Copy code &gt;</p>
        <p className=' text-sm text-zinc-400'>Create Code &gt;</p>
        <p className=' text-sm text-zinc-400'>Paste Code &gt;</p>
       </div>

       <div className=' h-60 w-60 bg-[#9233eae6] rounded-full blur-[120px] top-32 absolute max-lg:-right-20 right-0 '>   </div>
       <div className=' h-60 w-60 bg-[#ff00c88d] rounded-full blur-[120px] -bottom-10 absolute left-0 '>   </div>
 
     

      {isClient && (
        <Sandpack
          template="react"
          theme={levelUp}
          options={{
            externalResources: ["https://cdn.tailwindcss.com"],
            showNavigator: false,
            showTabs: false,
            showLineNumbers: true,
            dependencies: {
              "react-icons": "^4.3.1",
            },
            editorHeight: 430,
            initMode: "user-visible",
          }}
          files={{
            "/App.js": codeString,
          }}
         
          />
        )}
        </div>
    </>
  );
}

