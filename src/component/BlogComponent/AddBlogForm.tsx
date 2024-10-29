import React from 'react'

const AddBlogForm = () => {
  return (
    <div className='flex h-[100vh] flex-1 items-center justify-center'>
        
       <form className='flex flex-col items-center my-auto  gap-6'>
         <h1 className='text-4xl font-bold'>Add Blog</h1>
         <input type='text' className='w-[400px] bg-gray-100 p-3 rounded-lg' placeholder='Title...' />
         <textarea placeholder='Description...' className='bg-gray-100 p-3 rounded-lg'  rows={4} cols={35}></textarea>
         <input type='file' className='bg-gray-100 border-none'/>
         <button className='w-[400px] bg-green-800 p-3 rounded-lg text-white'>Add Blog</button>
       </form>
    </div>
  )
}

export default AddBlogForm