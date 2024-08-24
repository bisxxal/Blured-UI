 
import { IoLogoGithub } from "react-icons/io";
import Link from 'next/link'; 
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Logout from './Logout';
import SearchCom from './SearchCom'; 
import MobileNav from "./MobileNav"; 

async function Header() {
  const session = await getServerSession(authOptions); 
  
  return (
    <div className=' z-10 bg-[#ffffff06] fixed top-0 items-center h-[60px] shadow-md w-full pr-5 left-0 backdrop-blur-md flex justify-between max-lg:pr-4 max-lg:px-2 px-14'>
      <Link href={'/'} className=' logo text-4xl max-lg:text-2xl font-bold text-[#CBACF9] '>
         Blured UI.  
        <span className=' max-lg:text-xs text-sm bg-indigo-500 text-white font-normal max-lg:px-1  px-2 ml-2 rounded'>Beta</span>
      </Link>

      <div className=' max-lg:hidden flex items-center gap-5'>
       <SearchCom/>

        <button> <IoLogoGithub className=' text-2xl' /> </button>
        <Link href={'/docs'}>Docs </Link>
        {
          session ? <Link href={'/code'}>Create-components</Link> : null
        }
         {
          session && <Link href={'/code/userprofile'}>Profile</Link>
       }
       {
          session ?  <Logout/> : <Link className=" loginshadow px-5 bg-[#3b83f623] py-2 rounded-xl " href={'/sign-in'}>SignIn </Link>
       } 
      </div>
 

 <MobileNav session={session}/>

    </div>
  )
}

export default Header