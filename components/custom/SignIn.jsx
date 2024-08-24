// 'use client'; 
// import {signIn} from "next-auth/react";
// import { useRouter } from "next/navigation";

// export default function SignIn() {
//   const router = useRouter();
//   const onSiginIN =()=>{
//     signIn('google')
//   }
//   return ( 
//        <button
//         onClick={onSiginIN}
//         className="bg-indigo-500 text-white text-sm px-4 py-2 rounded-xl border border-indigo-700 border-b-4 items-center ">
//         Sign-In with Google
//       </button>
    
//   );
// }
'use client'; 
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn({session}) {
  const router = useRouter();
  if(session){
    router.push('/');
  }
else{
  return (
    <button
    onClick={()=>signIn('google')}
    className="bg-indigo-500 text-white text-sm px-4 py-2 rounded-xl border border-indigo-700 border-b-4 items-center">
      Sign-In with Google
    </button>
  );
}
}
