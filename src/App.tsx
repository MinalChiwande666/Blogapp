import React from 'react'
import HomePage from './pages/Home/HomePage'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import SinglePosts from './pages/Posts/SinglePosts'
import Blogs from './pages/Blogs/Blogs'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import AddBlogs from './pages/Blogs/AddBlogs'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<HomePage/>}/>
      <Route path={'/Blogs'} element={<Blogs/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/singlepost/:id' element={<SinglePosts/>}/>
      <Route path='/addblog' element={<AddBlogs/>}/>
      <Route path={'*'} element={<NotFoundPage/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App