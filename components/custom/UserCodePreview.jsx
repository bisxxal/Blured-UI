 
'use client';
import React from "react";
import { SandpackProvider, SandpackPreview } from "@codesandbox/sandpack-react";
import { levelUp } from "@codesandbox/sandpack-themes";
function UserCodePreview({code}) {
    const codeString = `export default ${code}`; 
  return (
    <div className=" rounded-md overflow-hidden">
      <SandpackProvider
      template="react"
      theme={levelUp}
      options={{
        showLineNumbers: true,
        showTabs: false,
        showNavigator: false,
        externalResources: ["https://cdn.tailwindcss.com"],
      }}
      files={{
        "/App.js": {
          code: codeString,
        },
      }}
    >
      <div className="flex max-lg:h-[60vh] h-[80vh]"  >
        <SandpackPreview style={{ flex: 1 }} /> 
      </div>
    </SandpackProvider>
    </div>
  )
}

export default UserCodePreview
