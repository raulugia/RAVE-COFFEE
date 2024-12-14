import React from 'react'

const OrderSkeleton = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex flex-col gap-5 w-[447px] h-[204px] bg-gray-100 border border-gray-400 rounded-lg shadow-m overflow-hidden'>
            <div className='h-[48px] bg-gray-200 border-b border-black flex items-center justify-between px-2'>
                <div className='w-[90px] h-[15px] animate-skeleton-pulse bg-gray-300'></div>
                <div className='w-[140px] h-[15px] animate-skeleton-pulse bg-gray-300'></div>
            </div>
            <div className='flex flex-col justify-between h-full'>
                <div className='px-2 h-full flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <div className='w-[180px] h-[12px] animate-skeleton-pulse bg-gray-300'></div>
                        <div className='flex justify-between w-[130px]'>
                            <div className='w-[30px] h-[12px] animate-skeleton-pulse bg-gray-300'></div>
                            <div className='w-[50px] h-[12px] animate-skeleton-pulse bg-gray-300'></div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-[140px] h-[12px] animate-skeleton-pulse bg-gray-300'></div>
                        <div className='flex justify-between w-[130px]'>
                            <div className='w-[30px] h-[12px] animate-skeleton-pulse bg-gray-300'></div>
                            <div className='w-[50px] h-[12px] animate-skeleton-pulse bg-gray-300'></div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-[190px] h-[12px] animate-skeleton-pulse bg-gray-300'></div>
                        <div className='flex justify-between w-[130px]'>
                            <div className='w-[30px] h-[12px] animate-skeleton-pulse bg-gray-300'></div>
                            <div className='w-[50px] h-[12px] animate-skeleton-pulse bg-gray-300'></div>
                        </div>
                    </div>
                </div>
                <div className='px-2'>
                    <div className='w-[100px] h-[14px] animate-skeleton-pulse bg-gray-300 mb-3 ml-auto'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderSkeleton