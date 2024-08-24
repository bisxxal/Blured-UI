"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

function Logout() {
  return (
    <div>
    <button onClick={()=>signOut()} className='bg-[#ef444421] inshadow px-4 py-2 text-sm rounded-xl borde border-red-700 border--4 gap-2 items-center hover:scale-[0.95] transition-transform'>
        Logout
    </button>
    </div>
  )
}

export default Logout