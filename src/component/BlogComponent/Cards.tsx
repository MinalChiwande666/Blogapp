import React from 'react'
import timeAgo from '../BlogCards'
interface CardProp {
    blogs: any,
    navigation: (value: any) => void
}

const Cards = ({ blogs, navigation }: CardProp) => {
    const date = new Date()
    const postdate = timeAgo(date)
    return (
        <>
            {
                blogs.map((item: any, index: any) => {

                    return(

                    <div  onClick={() => navigation(`/singlepost/${item?.id}`)} key={index} className='bg-white m-3 rounded-md cursor-pointer shadow-md'>
                        <div className='h-60 w-full overflow-hidden'>
                            <img src={item?.img} alt='post' className='w-full h-full object-cover' />
                        </div>
                        <div className='flex gap-3 p-3 items-center'>
                            <img className='w-10 h-10 object-cover rounded-full' src='https://images.pexels.com/photos/11940641/pexels-photo-11940641.jpeg' alt='profile' />
                            <span className='opacity-20'>{item?.username}</span>
                        </div>
                        <div className='mx-3 opacity-30 font-bold'>post at : {postdate}</div>

                        <div className='p-3 gap-2'>
                            <span className='font-bold text-2xl'>{item?.title}</span>
                            <span className='mx-2'>{item?.desc.slice(0, 100)}</span>
                        </div>

                        <div className='mx-3 mb-3'>
                            <button onClick={() => navigation(`/singlepost/${item?.id}`)} className='bg-green-800 p-2 rounded-md text-white'>Read More</button>
                        </div>
                    </div>
                    )
                })
            }


        </>

    )
}

export default Cards