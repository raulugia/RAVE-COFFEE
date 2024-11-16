import React from 'react'

const MainBtn = ({text}) => {
  return (
    <div className='bg-black py-1'>
        <div className='font-permanent-marker text-lg outline w-[98%] py-1 px-4 mt-[-4px] ml-1 bg-mustard hover:bg-yellow-500'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default MainBtn