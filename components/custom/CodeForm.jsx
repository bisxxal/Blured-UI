'use client';
import { codeSave, updateCode } from "@/lib/actions/codeSave";
import toast from "react-hot-toast";
import { IoSaveOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
 export default function CodeForm({head , owner , title }) {
  
  
  const handleSubmit = async (formData) => {
    
    const code = formData.get("code");
    const title = formData.get("title");
    const description = formData.get("description");
    const category = formData.get("category"); 

    if(head === 'Create'){

      try {
        await codeSave({code, title, description, category,owner})
        toast.success('Code saved successfully');
      } catch (error) {
        toast.error('Error saving code');
      }
    }

    if(head === 'Update'){

      try {
        console.log('updating code');
        
        await updateCode({code, title, description, category,owner})
        toast.success('Code updated successfully');
      } catch (error) {
        toast.error('Error updating code');
      }
    }
      
  }; 
  
  return (
    <form action={handleSubmit} className=" w-full  min-h-screen pb-5">
      <h1 className=" capitalize mb-6 text-center font-bold text-2xl">{head} Code</h1>

      <div className="flex w-full max-lg:flex-col max-lg:gap-4 max-lg:mb-40 h-10 mb-10">
        <div className=" max-lg:gap-3 max-md:w-full w-1/2 max-lg:flex-col max-lg:items-start  flex gap-5 items-center">
        <label htmlFor="title">Title</label>
        <input defaultValue={title?.title} required className=" bg-[#0c0e23] rounded-lg p-2 border border-[white] h-full max-lg:w-full w-5/6 outline-none border-[#ffffff16] " placeholder=" title" name='title' type="text" />
        </div>
        <div className=" max-lg:gap-3 max-md:w-full w-1/2 max-lg:flex-col max-lg:items-start flex gap-5 items-center"> 
        <label htmlFor="category">Category</label>
        <input defaultValue={title?.category} required className=" bg-[#0c0e23] rounded-lg p-2 border border-[white] h-full max-lg:w-full w-5/6 outline-none border-[#ffffff16] " placeholder=" Category" name='category' type="text" /> 
      </div>
      </div>

      <div className=" w-full h-32 flex flex-col">
        <label htmlFor="description">Description</label>
        <textarea defaultValue={title?.description}  className="h-full w-full bg-[#0c0e23] mt-2 rounded-lg p-2 border border-[white] outline-none border-[#ffffff16] " placeholder="Description" name='description' type="text" />
      </div>
 
      <div className=" flex flex-col mt-10">
      <label className=" flex items-center gap-2" htmlFor="code">Code <IoCodeSlashOutline />
      </label>
      <textarea
      required
      defaultValue={title?.code} 
        name="code" 
        placeholder="Write your code here..."
        rows="35"
        className="bg-[#0c0e23] mt-2 rounded-lg p-2 border-[2px] outline-none border-[#ffffff16] "
        cols="50"
      />
      </div>
      <button className="bg-blue-600 flex gap-2 mx-auto items-center rounded-lg px-5 py-3 mt-5 text-sm" type="submit">Save Code 
        <IoSaveOutline className=" text-lg " />
      </button>
    </form>
  );
}
