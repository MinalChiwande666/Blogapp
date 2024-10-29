/* eslint-disable no-unreachable */
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../authContext/AuthContext';
import { useLoader } from '../../loaderContext/loaderContext';
const Login = () => {
    const {login} = useAuth()

    const {setLoader} = useLoader()

    const navigate:any = useNavigate()

    const [userDetail,setUserdetail] = React.useState({
   
        email:'',
        password:''
    })

    const [Error] = React.useState({
 
        email:'',
        password:''
    })


    const handleSubmit = (e:any)=>{
     e.preventDefault()
     login(userDetail?.email)
     navigate('/')
     setLoader(true)
    }


    return (

   
        <div className='flex h-[100vh] items-center justify-center'>
            <div className='shadow-2xl flex flex-col'>
                <h1 className='text-center text-3xl font-bold mt-3'>Login</h1>
                <form className='flex flex-col p-3' onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder='email'
                        value={userDetail.email}
                        onChange={(e:any)=>{
                            if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e?.target?.value))
                            {
                                Error.email = 'Enter Correct Email'
                            }
                            else
                            {
                                Error.email = ''
                            }
                           
                                setUserdetail({
                                    ...userDetail,
                                    email:e.target.value
                                })
                           
                        }}
                        required
                        className='mt-3 p-3 bg-gray-100 rounded-lg sm:w-[100px] lg:w-[300px]'
                    />
                     {Error.email}
                    <input
                        type="password"
                        name="password"
                        placeholder='password'
                        required
                        onChange={(e:any)=>{
                            setUserdetail({
                                ...userDetail,
                                password:e?.target.value
                            })
                        }}
                        className='mt-3 bg-gray-100 rounded-lg p-3 sm:w-[100px] lg:w-[300px]'
                    />
                   {Error.password}
                    <button className='mt-3 rounded-md text-white bg-green-900 p-3 sm:w-[100px] lg:w-[300px]' type="submit" >
                        Submit
                    </button>
                    <span className='text-sm m-3 text-center text-blue-900' onClick={() => navigate('/Register')}>Don't have an Account? <span className='cursor-pointer'>SignUp</span></span>
                </form>
            </div>

        </div>
    )
}

export default Login