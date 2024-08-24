'use client';
import React from "react";
import { SandpackProvider, SandpackCodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";

import { levelUp } from "@codesandbox/sandpack-themes";
const CodeEditor = ({ codeString }) => { 
  return (
    <SandpackProvider
      template="react"
      theme={levelUp} 
      options={{
        externalResources: ["https://cdn.tailwindcss.com"],
        showLineNumbers: true,
        showTabs: false,
        showNavigator: false,
        dependencies: {
          "react-icons": "^4.3.1",
        },
      }}
      files={{
        "/App.js": codeString,
      }}
    >
      <div style={{ height: "80vh", display: "flex" }}>
        <SandpackCodeEditor
        
          style={{ flex: 1 }} // Ensure it takes up the full container height
        />
      </div>
    </SandpackProvider> 
  );
};

export default CodeEditor;

