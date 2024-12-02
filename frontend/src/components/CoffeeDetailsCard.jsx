import React from 'react'
import CoffeeBean from '../components/CoffeeBean'
import box from "../assets/product-icon-box.svg"

const CoffeeDetailsCard = ({taste, roast}) => {
  return (
    <div className='font-fira text-lg bg-box w-full py-8 px-6 w-[400px]'>
        <div className='flex gap-1 mb-2'>
            <p>Tastes like: </p>
            <p className='font-semibold'>{taste}</p>
        </div>
        <div className='flex items-center gap-1'>
            <p>Roast: </p>
            <div className='flex gap-1'>
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <CoffeeBean key={index} color={index + 1 <= roast ? "brown" : "white"}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default CoffeeDetailsCard