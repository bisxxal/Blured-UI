import CodeForm from '@/components/custom/CodeForm' 
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
 
async function page() { 
  
    const session = await getServerSession(authOptions);
  return (
    <div> 
        <CodeForm head={'Create'} owner={session?.user?.email}  />
    </div>
  )
}

export default page