import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import CodePreview from '@/components/custom/CodePreview'
import Preview from '@/components/custom/Preview'; 
import { getCode } from '@/lib/actions/codeSave';
import { getServerSession } from 'next-auth';
import Link from 'next/link'
import React from 'react'

async function page({params}) {

  const title = params.id;
  const session = await getServerSession(authOptions); 
  const codes = await getCode({ title});
   
  const codeString = codes?.code;
  
  return (
    <div>
      <div className=' text-gray-400 mb-4 flex items-center gap-2'>
      <Link href={'/dashbord'} > Dashbord 	&gt;  </Link> <p>{params.id}</p>
      </div>
      <p className=' text-sm text-zinc-300 '> Description : {codes?.description}. </p>

     
      {
        session ? <CodePreview code={codeString}/> : <Preview code={codeString}/>
      }
       
 </div>
  )
}

export default page