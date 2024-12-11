import React from 'react'
import StarRating from './StarRating'

const ReviewCard = ({name, surname, createdAt, review, rating}) => {
  return (
    <div>
        <div  className='flex md:flex-row flex-col'>
            <div className='flex flex-col md:w-1/3 md:border-r md:border-gray-300'>
                <div className='bg-gray-200 mb-5 w-[70px] h-[70px] rounded-full flex items-center justify-center'>
                    <p className='text-lg font-bold'>{name[0].toUpperCase()}{surname[0].toUpperCase()}</p>
                </div>
                <p className='md:ml-2 text-lg font-semibold'>{name} {surname}</p>
            </div>
            <div className='md:w-2/3 md:ml-8 mt-5 md:mt-0 flex flex-col justify-between font-fira'>
                <div className='mb-8'>
                    <StarRating rating={rating} />
                    <p className='mt-2'>{review}</p>
                </div>
                <div className='ml-auto'>
                    <p className='text-gray-500 text-sm'>Reviewed on {createdAt}</p>
                </div>
            </div>
        </div>
        <div className='h-[1px] my-8 w-full bg-gray-300'></div>
    </div>
  )
}

export default ReviewCard