/* eslint-disable no-empty-pattern */
import React from 'react'
import heroImage from '../../assets/images/hero.jpg';
interface HeroProp{

}

const Hero = ({}:HeroProp) => {
  return (
    <div className='h-[70vh] w-full overflow-hidden'>
         
      <img src={heroImage} alt='hero'  style={{width:'100%',height:'100%',objectFit:'cover'}}/>
      <div className='position-absolute z-30'>

      <h1 className='text-4xl text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sunt.</h1>
      </div>
     
         
 
    </div>
  )
}

export default Hero