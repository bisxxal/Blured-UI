'use client'
import { HambergerMenu } from 'iconsax-react'
import Link from 'next/link'
import React from 'react' 
import Logout from './Logout' 
import SearchCom from './SearchCom' 

function MobileNav({session}) { 
  return (
    <>
    <div className=' hidden max-lg:block '>
   <SearchCom />
    </div>
    <div className=' group lg:hidden max-lg:block  cursor-pointer text-3xl font-thin'>
    <HambergerMenu size="24" />
    
    <div className="  hidden group-hover:block  absolute top-0 text-base right-0 w-52 h-screen bg-[#000000c7] backdrop-blur-md">
      <div className='flex items-start p-7 flex-col gap-4'>
        <Link href={'/docs'}>Docs</Link>
        <Link  href={'https://github.com/bisxxal/Blured-UI'}  > GitHub </Link>
        {
          session ? <Link href={'/code'}>Create Components</Link> : null
        }
        {
          session && <Link href={'/code/userprofile'}>Profile</Link>
        }
        {
          session ? <Logout/> : <Link href={'/sign-in'}>SignIn </Link>
        }
      </div>
    </div>
  </div>
        
        </>
  )
}

export default MobileNav