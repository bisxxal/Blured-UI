import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DeleteCode from "@/components/custom/DeleteCode";
import { createdByUser } from "@/lib/actions/codeSave";
import { Edit } from "iconsax-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: 'User Profile', 
}
 async function ProfilePage() {
  const session = await getServerSession(authOptions); 
  const createdCode = await createdByUser({owner: session?.user?.email})
 
  return (
    <div className="w-full min-h-screen">
      <h1 className=" text-center mb-8 text-2xl font-medium">Profile Page</h1>

      <div className="gap-3 flex flex-col items-center">
        <Image className=" rounded-full object-cover" src={session?.user?.image} height={90} width={90} alt="profile" />
        <h1 className=" capitalize font-bold text-2xl">{session?.user?.name}</h1>
      </div>


      <div >
        {
          createdCode.length > 0 ? <h1 className=" mb-5 text-center flex flex-col mt-8 ">Created Components <span className="text-sm  text-zinc-500">Total {createdCode.length} Component created</span> </h1> : null
        }
    

      <div className=" flex gap-5 flex-wrap mt-10 justify-center max-[388px]:justify-center max-lg:justify-between max-lg:px-0">
        {
           createdCode && createdCode?.map((item,index)=>{
            return(
              <>
              <div key={index} className="bg-[#0c0e23 profil frame inshadow relative  hover:scale-[1.02] transition-all  capitalize border-[2px] border-[#ffffff24] max-[388px]:w-[80%]  max-lg:w-40 max-lg:h-40 h-52 w-60 rounded-xl flex items-center justify-center">
                <Link href={`/docs/${item}`}>{item}</Link>

                <div className=" right-2 absolute top-1 flex bg-[#ffffff2f] p-2 rounded-2xl gap-2">

                <Link className=" " href={`/code/${item}/update`}>  <Edit size="25" color="#2563eb " /> </Link> /
                 <DeleteCode title={item} owner={session?.user?.email} />
                </div>
              </div>
              
              </>
            )
          })
        } 

        {
          createdCode.length === 0 ? <div className=" w-full flex flex-col items-center justify-center"><h1 className=" text-center text-xl mb-7">No Components Created</h1> <Link className=" text-sm bg-[#ffffff2d] mx-auto px-4 py-2 rounded-xl border-[2px] border-[#ffffff2e] " href={'/code'}>Create New Component</Link> </div> 
          : null
        }
      </div>


      </div>
    </div>
  )
}

export default ProfilePage