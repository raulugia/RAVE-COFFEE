import React from 'react'
import set from "../assets/polaroid_set.jpg"
import bean from "../assets/polaroid_bean.png"
import box from "../assets/polaroid_box.png"
import coffee from "../assets/polaroid_coffee.jpg"

const Polaroid = () => {
  return (
    <div className='xl:flex hidden'>
        <div className='bg-polaroid bg-no-repeat bg-cover w-[300px] h-[300px] flex items-end -rotate-6 shadow-md mt-10 z-20'>
            <img src={set} alt="" className='absolute top-[19px] left-[21px] w-[260px] h-[235px]'/>
            <h3 className='font-permanent-marker text-lg text-center leading-[20px] mb-1'>New exclusive coffees every month!</h3>
        </div>
        <div className='ml-2 bg-polaroid bg-no-repeat bg-cover w-[300px] h-[300px] flex items-end rotate-12 shadow-md'>
            <img src={box} alt="" className='absolute top-[18px] left-[21px] w-[262px] h-[237px]'/>
            <h3 className='font-permanent-marker text-lg text-center leading-[20px] mb-1'>Get schooled with monthly tuition pieces</h3>
        </div>
        <div className='bg-polaroid bg-no-repeat bg-cover w-[300px] h-[300px] flex items-end -rotate-12 shadow-md mt-24'>
            <img src={coffee} alt="" className='absolute top-[18px] left-[21px] w-[262px] h-[237px]'/>
            <h3 className='font-permanent-marker text-lg text-center leading-[20px] mb-1'>Flexible & free Postage</h3>
        </div>
        <div className='bg-polaroid bg-no-repeat bg-cover w-[300px] h-[300px] flex items-end rotate-[20deg] shadow-md'>
            <img src={bean} alt="" className='absolute top-[18px] left-[21px] w-[262px] h-[237px]'/>
            <h3 className='font-permanent-marker text-lg text-center leading-[20px] mb-1'>Ethical; Above Fairtrade plus 1% For the planet</h3>
        </div>
    </div>
  )
}

export default Polaroid