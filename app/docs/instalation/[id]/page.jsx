"use client";

import { useRouter } from "next/navigation";

function IntilationPag({ params }) {
  const router = useRouter();

  if (params.id === "react") {
    return (
      <div className=" pb-10">
        <h1 className=" text-3xl font-bold ">
          Installation Guide for react js
        </h1>
        <h1 className="text-xl font-semibold capitalize my-5 mb-2 ">
          1. Create a New Next.js Project
        </h1>
        <p className=" text-sm my-1 text-gray-400 ">
          
          If you don’t have a Next.js project set up yet, you can create one
          using the following commands:
        </p>

        <div className=" max-lg:px-2 max-lg:text-sm px-10 py-2 bg-[#ffffff18] overflow-hidden border-[2px] border-[#ffffff35] rounded-2xl ">
          npm create vite@latest my-vite-app --template react <br />
          cd my-vite-app
        </div>

        <h1 className="text-xl font-semibold capitalize my-5 mb-2 ">
          
          2. Install Tailwind CSS
        </h1>
        <p className=" text-sm my-1 text-gray-400 ">
          
          Tailwind CSS is required to style our components. To install Tailwind
          CSS, follow these steps:
        </p>

        <p className=" text-sm my-1 text-gray-400 ">
          
          a. Install Tailwind CSS and its dependencies:
        </p>

        <div className=" max-lg:px-2 max-lg:text-sm px-10 py-2 bg-[#ffffff18] overflow-hidden border-[2px] border-[#ffffff35] rounded-2xl ">
          
          npm install -D tailwindcss postcss autoprefixer
        </div>

        <h1 className="text-xl font-semibold capitalize my-5 mb-2 ">
          
          b. Initialize Tailwind CSS:
        </h1>
        <p className=" text-sm my-1 text-gray-400 ">
          
          Generate the tailwind.config.js and postcss.config.js files using:
        </p>

        <div className=" max-lg:px-2 max-lg:text-sm px-10 py-2 bg-[#ffffff18] overflow-hidden border-[2px] border-[#ffffff35] rounded-2xl ">
          
          npx tailwindcss init -p
        </div>

        <h1 className="text-xl font-semibold capitalize my-5 mb-2 ">
          
          c. Configure Tailwind CSS
        </h1>
        <p className=" text-sm my-1 text-gray-400 ">
          
          In your tailwind.config.js file, update the content array to include
          paths to all your template files:
        </p>

        <pre className="  max-lg:px-2 max-lg:text-sm px-10 py-2 bg-[#ffffff18] overflow-hidden border-[2px] border-[#ffffff35] rounded-2xl mb-6 ">
          <code>
            {`/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
 './pages/**/*.{js,ts,jsx,tsx}',
 './components/**/*.{js,ts,jsx,tsx}',
 './node_modules/@your-namespace/your-ui-library/**/*.{js,ts,jsx,tsx}',
 ],
 theme: {
     extend: {},
 },
 plugins: [],
}
         `}
          </code>
        </pre>

        <h1 className="text-xl font-semibold capitalize my-5 mb-2 ">
          
          d. Add Tailwind Directives to Your CSS:
        </h1>
        <p className=" text-sm my-1 text-gray-400 ">
          In your styles/globals.css file, add the following Tailwind directives
          to import Tailwind’s base styles:
        </p>

        <div className=" max-lg:px-2 max-lg:text-sm px-10 py-2 bg-[#ffffff18] overflow-hidden border-[2px] border-[#ffffff35] my-3 rounded-2xl ">
          @tailwind base; <br />
          @tailwind components; <br />
          @tailwind utilities;
        </div>

 
        <h1 className=" text-xl font-semibold capitalize my-7 mb-2 "> 3. Start Using Component </h1>
          <p className=" text-sm my-1 text-gray-400 ">Now you’re all set to start using our UI components! Here’s a basic example of how to use one of our components in a Next.js page: </p>  
            <pre className=" max-lg:px-2 max-lg:text-sm px-10 py-2 bg-[#ffffff18] overflow-hidden border-[2px] border-[#ffffff35] rounded-2xl mb-6 ">
                <code>
            {`export default function Home() {
  return (
 <div className="flex items-center justify-center h-screen bg-gray-100">
 <Button>Click Me</Button>
 </div>
 );
}`}
                </code>
            </pre>
        
        <h1 className=" text-xl font-semibold capitalize my-7 mb-2 ">
          
          4. Additional Resources
        </h1>

        <p className=" text-sm my-1 text-gray-400 ">
          For more information on using our components and customizing them,
          refer to the Your UI Component Library Documentation. If you encounter
          any issues or have questions, don’t hesitate to reach out to our
          support team or open an issue on our GitHub repository.
        </p>
      </div>
    );
  }

  if (params.id === "nextjs") {
    return (
      <div className=" pb-10">
        <h1 className=" text-3xl font-bold ">Installation Guide for Next js</h1>
        <h1 className="text-xl font-semibold capitalize my-5 mb-2 ">
          1. Create a New Next.js Project
        </h1>
        <p className=" text-sm my-1 text-gray-400 ">
          
          If you don’t have a Next.js project set up yet, you can create one
          using the following commands:
        </p>

        <div className=" max-lg:px-2 max-lg:text-sm px-10 py-2 bg-[#ffffff18] overflow-hidden border-[2px] border-[#ffffff35] rounded-2xl ">
          npx create-next-app@latest my-nextjs-app <br />
          cd my-nextjs-app
        </div>

        <h1 className="text-xl font-semibold capitalize my-5 mb-2 ">
          
          2. Install Tailwind CSS
        </h1>
        <p className=" text-sm my-1 text-gray-400 ">
          
          Tailwind CSS is required to style our components. To install Tailwind
          CSS, follow these steps:
        </p>

        <p className=" text-sm my-1 text-gray-400 ">
          
          a. Install Tailwind CSS and its dependencies:
        </p>

        <div className=" max-lg:px-2 max-lg:text-sm px-10 py-2 bg-[#ffffff18] overflow-hidden border-[2px] border-[#ffffff35] rounded-2xl ">
          
          npm install -D tailwindcss postcss autoprefixer
        </div>

        <h1 className="text-xl font-semibold capitalize my-5 mb-2 ">
          
          b. Initialize Tailwind CSS:
        </h1>
        <p className=" text-sm my-1 text-gray-400 ">
          
          Generate the tailwind.config.js and postcss.config.js files using:
        </p>

        <div className=" max-lg:px-2 max-lg:text-sm px-10 py-2 bg-[#ffffff18] overflow-hidden border-[2px] border-[#ffffff35] rounded-2xl ">
          
          npx tailwindcss init -p
        </div>

        <h1 className="text-xl font-semibold capitalize my-5 mb-2 ">
          
          c. Configure Tailwind CSS
        </h1>
        <p className=" text-sm my-1 text-gray-400 ">
          
          In your tailwind.config.js file, update the content array to include
          paths to all your template files:
        </p>

        <pre className="  max-lg:px-2 max-lg:text-sm px-10 py-2 bg-[#ffffff18] overflow-hidden border-[2px] border-[#ffffff35] rounded-2xl mb-6 ">
        <code>
            {`/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
 './pages/**/*.{js,ts,jsx,tsx}',
 './components/**/*.{js,ts,jsx,tsx}',
 './node_modules/@your-namespace/your-ui-library/**/*.{js,ts,jsx,tsx}',
 ],
 theme: {
     extend: {},
 },
 plugins: [],
}
         `}
          </code>
        </pre>

        <h1 className="text-xl font-semibold capitalize my-5 mb-2 ">
          
          d. Add Tailwind Directives to Your CSS:
        </h1>
        <p className=" text-sm my-1 text-gray-400 ">
          In your styles/globals.css file, add the following Tailwind directives
          to import Tailwind’s base styles:
        </p>

        <div className=" max-lg:px-2 max-lg:text-sm px-10 py-2 bg-[#ffffff18] overflow-hidden border-[2px] border-[#ffffff35] my-3 rounded-2xl ">
          @tailwind base; <br />
          @tailwind components; <br />
          @tailwind utilities;
        </div>

        <h1 className=" text-xl font-semibold capitalize my-7 mb-2 "> 3. Start Using Component </h1>
          <p className=" text-sm my-1 text-gray-400 ">Now you’re all set to start using our UI components! Here’s a basic example of how to use one of our components in a Next.js page: </p>  
            <pre className=" max-lg:px-2 max-lg:text-sm px-10 py-2 bg-[#ffffff18] overflow-hidden border-[2px] border-[#ffffff35] rounded-2xl mb-6 ">
            <code>
            {`export default function Home() {
  return (
<div className="flex items-center justify-center h-screen bg-gray-100">
<Button>Click Me</Button>
</div>
);
}`}
                </code>
            </pre>


        <h1 className=" text-xl font-semibold capitalize my-7 mb-2 ">
          
          4. Additional Resources
        </h1>

        <p className=" text-sm my-1 text-gray-400 ">
          For more information on using our components and customizing them,
          refer to the Your UI Component Library Documentation. If you encounter
          any issues or have questions, don’t hesitate to reach out to our
          support team or open an issue on our GitHub repository.
        </p>
      </div>
    );
  } else {
    router.push("/docs/instalation/process");
  }
}

export default IntilationPag;
