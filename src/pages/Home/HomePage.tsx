/* eslint-disable no-empty-pattern */
import React from 'react'
import Navbar from '../../constants/Navbar/Navbar'
import Footer from '../../constants/Footer/Footer'
import Hero from '../../component/Home/Hero'
import RecentBlogs from '../../component/Home/RecentBlogs'
import { useLoader } from '../../loaderContext/loaderContext'
import Loader from '../../utils/Loader/Loader'
 

// @ts-ignore
interface HomePageProp{

}

const HomePage = ({}:HomePageProp) => {
  const {loader,setLoader} = useLoader()


  console.log(loader,'home loader')

  React.useEffect(()=>{
    setTimeout(()=>{
       setLoader(false)
    },1000)
  },[loader, setLoader])
  
  return (
    <>
    {
      loader ? <Loader/>:
      <><Navbar /><Hero /><RecentBlogs /><Footer /></>
    }
    

    </>
  )
}

export default HomePage