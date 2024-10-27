/* eslint-disable no-empty-pattern */
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../authContext/AuthContext'
import Blog1 from '../../assets/images/blog1.jpg'
import { useLoader } from '../../loaderContext/loaderContext'
interface NavbarProp {

}

const Navbar = ({

}: NavbarProp) => {

  const navigate = useNavigate()

  const { user, logout } = useAuth()

  const {setLoader} = useLoader()



  const scrollRef: any = useRef(null)

  const [isScrolled, setisScrolled] = useState(false)

  const links = [
    {
      ref: '/',
      name: 'Home'
    },
    {
      ref: '/Blogs',
      name: 'Blogs'
    },


  ]

  const userActive: any = user

  console.log(userActive, 'user ')

  const handleLogout = () => {
    logout()
    setLoader(true)
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setisScrolled(true)
      }
      else {
        setisScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  const generateLinks = () => {
    return (
      links.map((item: any, index: any) => (
        <>

          <Link className='font-bold hover:text-green-700 text-1xl' to={item?.ref}>{item?.name}</Link>
        </>
      ))
    )
  }

  console.log(scrollRef.toScroll)

  return (
    <div ref={scrollRef} className={`flex z-50 fixed top-0 left-0 right-0 p-3 px-6 items-center justify-between ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className='flex gap-1 text-white transition-all ease-in 4s hover:text-green-800 cursor-pointer items-center'>
        <h1 className={`text-5xl font-bold ${isScrolled ? 'text-black' : 'text-blue-800'}`}>B.</h1>
        <span className={`text-2xl mt-3 font-semibold ${isScrolled ? 'text-black' : 'text-blue-800'}`}>log</span>
      </div>

      <div className='sm:flex-none lg:flex gap-10 cursor-pointer items-center'>
        {
          userActive ?
        <div className='flex gap-4 items-center cursor-pointer'>
          <div className='w-[30px] h-[30px] overflow-hidden rounded-full'>
            <img src={Blog1} className='w-full h-full object-cover' alt='profile-pic' />
          </div>
          <span className='text-green-800 font-semibold'>{userActive}</span>
        </div> : null
        }
        {generateLinks()}

        {
          !userActive || userActive === '' ?
            <button onClick={() => {
              navigate('/Login')
            }} className='bg-green-800 p-3 rounded-lg text-white'>Login</button> : <button
              onClick={handleLogout}
              className='bg-green-800 p-3 rounded-lg text-white'>Logout</button>

        }
      </div>
    </div>
  )
}

export default Navbar