import React from 'react'

const MainBtn = ({text, method, disabled=false}) => {
  return (
    <div className='bg-black py-1 hover:cursor-pointer'>
        <button onClick={method} disabled={disabled} className='flex justify-center font-permanent-marker text-lg outline w-[98%] py-1 px-4 mt-[-4px] ml-1 bg-mustard hover:bg-yellow-500'>
            <p>{text}</p>
        </button>
    </div>
  )
}

export default MainBtn