"use client";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast"; 
import CodeEditor from "./CodeEditor";
import UserCodePreview from "./UserCodePreview";
export default function Preview({ code }) { 
  const [showCode, setShowCode] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        toast.success("Code copied !!");
      })
      .catch((err) => {
        console.error("Failed to copy code:", err);
      });
  };

  return (
    <div className=" w-full mt-9 min-h-screen pb-20 ">

      
   <div className=" w-full flex items-center justify-between">
      

      <button
        onClick={() => setShowCode((prevShowCode) => !prevShowCode)}
        className="mb-4 px-4 py-2 bg-[#0060fb17] loginshadow mt-5 border-[2px] border-[#4790ff4f] text-white rounded-lg"
      >
        {showCode ? "Preview" : "Get Code"}
      </button> 
      
       <button className="border-[2px] bg-[#ffffff18] border-[#ffffff17] inshadow py-2 px-3 rounded-xl text-sm  max-lg:px-2   "
        onClick={handleCopy}
        
        >
        Copy Code
      </button>
    </div>

     {showCode && (<div className=" rounded-lg overflow-hidden "> <CodeEditor codeString={code} /></div> )}
 
      {
        showCode ? null : (
          <UserCodePreview code={code} />
        )
      }

        <div className=" mt-10">
              <Link className=" bg-[#4438ca42] px-6 rounded-lg py-2" href={"/sign-in"}> Run &gt; </Link>
              <p className=" text-sm text-zinc-500 mt-5"> sign in to run code</p>
        </div>
    </div>
  );
}