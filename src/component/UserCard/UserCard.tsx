import React from 'react'

interface UserDetailProp{
    username:string | any,
    profile_img: string | any,
}

const UserCard = ({username,profile_img}:UserDetailProp) => {
  return (
    <div className='mb-3 cursor-pointer gap-2 flex items-center'>
        <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
            <img src={profile_img} alt='' className='w-full h-full object-cover'/>
        </div>
        <span className='opacity-30 font-semibold'>{username}</span>
    </div>
  )
}

export default UserCard