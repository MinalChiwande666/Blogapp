import React from 'react'
import AddBlogForm from '../../component/BlogComponent/AddBlogForm'
import BlogSidebar from '../../component/BlogComponent/BlogSidebar'

const AddBlogs = () => {
  return (
    <div className='flex flex-1'>
        <AddBlogForm/>
        <BlogSidebar/>
    </div>
  )
}

export default AddBlogs