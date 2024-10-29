/* eslint-disable no-empty-pattern */
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../authContext/AuthContext'
import Blog1 from '../../assets/images/blog1.jpg'
import { useLoader } from '../../loaderContext/loaderContext'
import Modal from '../../utils/Modal/Modal'
import { Box } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
interface NavbarProp {

}

const Navbar = ({

}: NavbarProp) => {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  const { user, logout } = useAuth()

  const { setLoader } = useLoader()



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius:2,
    boxShadow: 24,
    p: 4,
  };
  const scrollRef: any = useRef(null)

  const [isScrolled, setisScrolled] = useState(false)

  const [disabled,setDisabled] = useState(false)

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

  const handleOpen = () => {
    setOpen(true)
  }

  const generateModal = () => {
    return (
      <>
        <Modal setOpenModal={setOpen} openModal={open}>
          <Box sx={style}>
            <div className='flex flex-col gap-4'>

              <EditIcon onClick={()=>{
                setDisabled(!disabled)
              }} className='text-green-700 cursor-pointer flex items-end justify-end' />

              <div className='mx-auto w-[40px] h-[40px]'>
                <img src={Blog1} className='w-full h-full rounded-full object-cover' alt='profile_img' />
              </div>
              <input type='text' value={`${user}`} placeholder='Username' disabled={disabled} className={`w-full bg-gray-100 rounded-lg p-3 outline-8 ${disabled ? 'text-black':'opacity-25'}`} />

              <input type='text' value={`${user}`} placeholder='Email' disabled={disabled} className={`w-full rounded-lg bg-gray-100 p-3 outline-8 ${disabled ? 'text-black':'opacity-25'}`} />

              <div className='flex items-center'>
                <div className='flex gap-2 items-center'><AddCircleIcon onClick={()=>navigate('/addblog')} className='text-green-600' /> <span className='font-semibold'>Add Blog</span></div>
              </div>
            </div>
          </Box>
        </Modal>
      </>
    )
  }



  return (
    <>
      {generateModal()}
      <div ref={scrollRef} className={`flex z-50 fixed top-0 left-0 right-0 p-3 px-6 items-center justify-between ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div onClick={()=>{
          navigate('/')
        }} className='flex gap-1 text-white transition-all ease-in 4s hover:text-green-800 cursor-pointer items-center'>
          <h1 className={`text-5xl font-bold ${isScrolled ? 'text-black' : 'text-blue-800'}`}>B.</h1>
          <span className={`text-2xl mt-3 font-semibold ${isScrolled ? 'text-black' : 'text-blue-800'}`}>log</span>
        </div>

        <div className='sm:flex-none lg:flex gap-10 cursor-pointer items-center'>
          {userActive ?
            <div onClick={handleOpen} className='flex gap-4 items-center cursor-pointer'>
              <div className='w-[30px] h-[30px] overflow-hidden rounded-full'>
                <img src={Blog1} className='w-full h-full object-cover' alt='profile-pic' />
              </div>
              <span className='text-green-800 font-semibold'>{userActive}</span>
            </div> : null}
          {generateLinks()}

          {!userActive || userActive === '' ?
            <button onClick={() => {
              navigate('/Login')
            }} className='bg-green-800 p-3 rounded-lg text-white'>Login</button> : <button
              onClick={handleLogout}
              className='bg-green-800 p-3 rounded-lg text-white'>Logout</button>}
        </div>
      </div></>
  )
}

export default Navbar