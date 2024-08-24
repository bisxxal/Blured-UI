'use client'

import Link from "next/link"

function page() {
  return (
    <div className="pb-10">
    <h1 className=" text-3xl font-semibold capitalize mb-5 ">Installation Guide for Blured UI</h1>
    <p>
    How to install dependencies and structure your app.
    </p> 

       <h1 className=" text-xl font-semibold capitalize my-5 mb-2 "> Prerequisites</h1>  
      
      <p className=" text-sm my-1 text-gray-400 ">Before you begin, ensure you have the following installed: </p> 
      <p className=" text-sm my-1 text-gray-400 ">Node.js (v14 or higher) </p> 
      <p className=" text-sm my-1 text-gray-400 ">npm (v6 or higher) or yarn (v1.22 or higher) </p> 

  
    <h2 className=" my-5 font-semibold text-2xl">Frameworks</h2>

        <div className=" flex w-full gap-10 max-lg:flex-col mt-7  max-lg:items-center ">
        <div className=" hover:scale-[1.02] transition-all text-4xl font-semibold  profile capitalize border-[2px] border-[#ffffff24] max-lg:w-5/6 max-lg:h-52 h-[300px] w-[400px] rounded-xl flex items-center justify-center">
              <Link href={'/docs/instalation/react'} > Recact Js    </Link> 
              </div>
        <div className="  hover:scale-[1.02] transition-all text-4xl font-semibold profile capitalize border-[2px] border-[#ffffff24] max-lg:w-5/6 max-lg:h-52 h-[300px] w-[400px] rounded-xl flex items-center justify-center">
        <Link href={'/docs/instalation/nextjs'} >Next Js   </Link>  
              </div>
        </div>


    </div> 
  )
}

export default page