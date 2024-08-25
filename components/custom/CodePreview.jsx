'use client'

import { Sandpack } from "@codesandbox/sandpack-react";
import toast from "react-hot-toast";
import { levelUp } from "@codesandbox/sandpack-themes";
import { useState } from "react";
import CodeEditor from "./CodeEditor";
     
export default  function CodePreview({code}) {
  const [showCode, setShowCode] = useState(false);
  const codeString = 'export default '+code
   
  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      toast.success("Code copied !!");
    }).catch(err => {
      console.error("Failed to copy code:", err);
    });
  };
  
  return (
    <>

    <div className=" w-full flex items-center justify-between max-lg:pb-10">
      

      <button
        onClick={() => setShowCode((prevShowCode) => !prevShowCode)}
        className="mb-4 px-4 py-2 bg-[#0060fb17] loginshadow mt-5 border-[2px] border-[#4790ff4f] text-white rounded-lg"
      >
        {showCode ? "Preview" : "Code"}
      </button> 
      
       <button className="border-[2px] bg-[#ffffff18] border-[#ffffff17] inshadow py-2 px-3 rounded-xl text-sm  max-lg:px-2   "
        onClick={handleCopy}
        
        >
        Copy Code
      </button>
    </div>
      {showCode && (<div className=" rounded-lg overflow-hidden max-lg:mt-10"> <CodeEditor codeString={codeString} /></div> )}

   { showCode ? null : <div className=" w-full   rounded-lg overflow-hidden  max-lg:mt-10 relative ">
      
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
          editorHeight: 580, 
          initMode: "user-visible",
        }}
        files={{
          "/App.js": codeString,
        }}
        style={{
          height: "100vh", 
        }}
        
      />
        </div>
  }
      </>
  );
}

 