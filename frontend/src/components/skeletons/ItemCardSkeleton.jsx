import React from 'react'

const ItemCardSkeleton = ({type}) => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap justify-center lg:justify-center items-center md:gap-10 gap-5 '>
        <div className='flex flex-col justify-between border border-gray-300 px-3 py-2 w-[399px] h-[628px]'>
            <div>
                <div className='bg-gray-400 w-full h-[380px] mb-5 animate-skeleton-pulse'></div>
                <div className='w-[180px] h-[30px] bg-gray-300 mb-10 animate-skeleton-pulse'></div>
                {
                    type === "coffee" && (
                        <div className='flex flex-col gap-3'>
                            <div className='w-[90px] h-[20px] bg-gray-200 animate-skeleton-pulse'></div>
                            <div className='w-[130px] h-[20px] bg-gray-200 animate-skeleton-pulse'></div>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-between items-center mb-10'>
                <div className='w-[90px] h-[15px] bg-gray-200 animate-skeleton-pulse'></div>
                <div className='w-[130px] h-[40px] bg-gray-300 animate-skeleton-pulse'></div>
            </div>
        </div>
        <div className='flex flex-col justify-between border border-gray-300 px-3 py-2 w-[399px] h-[628px]'>
            <div>
                <div className='bg-gray-400 w-full h-[380px] mb-5 animate-skeleton-pulse'></div>
                <div className='w-[180px] h-[30px] bg-gray-300 mb-10 animate-skeleton-pulse'></div>
                {
                    type === "coffee" && (
                        <div className='flex flex-col gap-3'>
                            <div className='w-[90px] h-[20px] bg-gray-200 animate-skeleton-pulse'></div>
                            <div className='w-[130px] h-[20px] bg-gray-200 animate-skeleton-pulse'></div>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-between items-center mb-10'>
                <div className='w-[90px] h-[15px] bg-gray-200 animate-skeleton-pulse'></div>
                <div className='w-[130px] h-[40px] bg-gray-300 animate-skeleton-pulse'></div>
            </div>
        </div>
        <div className='hidden xl:flex flex-col justify-between border border-gray-300 px-3 py-2 w-[399px] h-[628px]'>
            <div>
                <div className='bg-gray-400 w-full h-[380px] mb-5 animate-skeleton-pulse'></div>
                <div className='w-[180px] h-[30px] bg-gray-300 mb-10 animate-skeleton-pulse'></div>
                {
                    type === "coffee" && (
                        <div className='flex flex-col gap-3'>
                            <div className='w-[90px] h-[20px] bg-gray-200 animate-skeleton-pulse'></div>
                            <div className='w-[130px] h-[20px] bg-gray-200 animate-skeleton-pulse'></div>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-between items-center mb-10'>
                <div className='w-[90px] h-[15px] bg-gray-200 animate-skeleton-pulse'></div>
                <div className='w-[130px] h-[40px] bg-gray-300 animate-skeleton-pulse'></div>
            </div>
        </div>
    </div>
  )
}

export default ItemCardSkeleton