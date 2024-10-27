/* eslint-disable no-empty-pattern */
import React from 'react'
import './loader.css'
// import { LoaderProvider } from '../../loaderContext/loaderContext'
interface LoaderProp {
  
}

const Loader = ({}: LoaderProp) => {
    return (
      
            <div className='flex-1 flex items-center justify-center mt-72'>
                <div className='loader'>
                  
                </div>
            </div>
   
    )
}

export default Loader