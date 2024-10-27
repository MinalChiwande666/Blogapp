import React from 'react'
import Navbar from '../../constants/Navbar/Navbar'
import BlogCards from '../../component/BlogCards/BlogCards'
// import Footer from '../../constants/Footer/Footer'
import Blog1 from '../../assets/images/blog1.jpg'
import { useNavigate } from 'react-router-dom'
const Blogs = () => {
    const navigate:any = useNavigate()

    const blogs = [
        {
          id:1,
          img:Blog1,
          title:'Blog 1',
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          username:'Minal chiwande'
        },
        {
          id:1,
          img:Blog1,
          title:'Blog 2',
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          username:'Minal chiwande'
        },
        {
          id:1,
          img:Blog1,
          title:'Blog 3',
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          username:'Minal chiwande'
        },
        {
          id:1,
          img:Blog1,
          title:'Blog 4',
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          username:'Minal chiwande'
        },
        {
          id:1,
          img:Blog1,
          title:'Blog 5',
          desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          username:'Minal chiwande'
        },
    
      ]
  return (
    <>
    <Navbar/>
    <div className='flex-1 h-[70vh] items-center'>
    <BlogCards navigation={navigate} data={blogs}/>
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Blogs