 
import  { getAllTitles } from "@/lib/actions/codeSave"
import { HambergerMenu } from "iconsax-react";
import Link from "next/link"; 

async function SideBar(props) {
  
  const title =await getAllTitles(); 
  return (
    <>
    
    <label htmlFor='navch' className=" fixed top-3 right-3  hidden  h-10 w-10 max-lg:flex justify-center items-center rounded-xl bg-indigo-500 z-10 ">
    <HambergerMenu size="24" />
     </label>
  <input type="checkbox" id="navch" className="hidden"/>


    <div className=' aside max-lg:hidden max-lg:z-10 max-lg:bg-[#000000a5] backdrop-blur-lg fixed top-[60px] left-0 bg-[#ffffff0f] text-white w-[200px] h-screen px-7 py-3'>

    <h1 className=' text-lg font-medium '>Get Started</h1>
    <div className=' flex flex-col gap-2  mt-3'>
        <Link className=" hover:text-zinc-100 hover:font-semibold  text-zinc-400" href={'/docs'}>Introduction</Link>
        <Link className=" hover:text-zinc-100 hover:font-semibold text-zinc-400" href={'/docs/instalation/process'}>Installation </Link>
         
    </div>
    <h1 className=' text-lg font-medium mt-3'>Components</h1>
    <div className=' text-sm text-zinc-400 mt-4 flex flex-col '>
        {
            title?.map((item,index)=>(
                <div key={index} className=" mb-2">
                    <Link className=" hover:text-zinc-100 hover:font-semibold" href={`/docs/${item}`} key={index}>{item}</Link>
                </div>
            ))
        }
    </div>
 

    </div>
    </>
  )
}

export default SideBar