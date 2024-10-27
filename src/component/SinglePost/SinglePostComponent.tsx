import React from 'react'
import blog1 from '../../assets/images/blog1.jpg'
import UserCard from '../UserCard/UserCard'
import timeAgo from '.'
const SinglePostComponent = () => {
    const postdate = new Date()
  return (
    <div className='flex  h-[100vh] items-center'>
       <div className='w-[500px] h-[70vh]'>
        <img src={blog1} alt='post' className='object-contain w-full h-full'/>
       </div>
       <div className='flex-1 h-[70vh]'>
         <div className='mb-3'><span className='text-3xl font-bold'>Title</span></div>

         <UserCard username={"Minal Chiwande"} profile_img={blog1}/>

         <div className='mb-3'><span className='opacity-30'>{timeAgo(postdate)}</span></div>

         <div className='text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt quisquam porro odio consequatur unde earum veniam nesciunt, possimus aliquid adipisci error culpa quod perferendis aut impedit sint necessitatibus velit excepturi obcaecati nulla cumque? Molestias recusandae adipisci aperiam nostrum sint modi unde eaque, nam sequi nulla, voluptas repellendus sed natus est, id odio et vitae architecto cupiditate omnis! Nostrum consequatur eaque, voluptatum facere, labore tenetur ipsa eum voluptates quam atque incidunt iste esse ratione ducimus est, minus repudiandae consequuntur quaerat quod voluptas saepe similique et. Facilis sunt iure minima illo! Temporibus minus voluptas exercitationem, at quis odit recusandae delectus aut.</div>
       </div>
    </div>
  )
}

export default SinglePostComponent