'use client';
import { deleteCodeByUser } from '@/lib/actions/codeSave'
import { Trash } from 'iconsax-react' 
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

function DeleteCode({owner , title}) {


const router = useRouter()
    const deleteCode = async () => {
        // await deleteCodeByUser({owner , title})
        toast.success('Code deleted successfully')
        router.refresh()
    }
  const showAlert = () => {
    MySwal.fire({
      title: 'Delete?',
      text: `Do you want to delete ${title}?`,
      cancelButtonText: 'Cancel',
      background:'#ffffffd6',
      backdrop: '#000000c7',
      confirmButtonText: 'Delete',
      confirmButtonColor: '#f00',
      showCloseButton: true,
      showCancelButton: true,
      reverseButtons: true,
      focusCancel: true,
      focusConfirm: false,

                    
    }).then(result => {
      if (result.isConfirmed) {
        deleteCode();
      }
    })
  }


  
  return (
    <button onClick={showAlert} className="cursor-pointer"
    ><Trash color="red "/></button>
  )
}

export default DeleteCode