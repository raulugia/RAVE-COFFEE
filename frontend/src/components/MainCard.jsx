import React from 'react'
import coffeebeans from "../assets/coffee-beans.svg"
import toplines from "../assets/top-lines.svg"

const MainCard = ({header, text}) => {
  return (
    <div className="bg-black w-full md:w-1/2 py-10 md:py-0 flex flex-col gap-5 items-center justify-center">
        <img src={toplines} alt="lines" />
        <p className='font-permanent-marker text-4xl lg:text-5xl text-white'>{header}</p>
        <p className='font-fira text-md text-white max-w-[65%]'>{text}</p>
        <img src={coffeebeans} alt="coffee beans" className='mt-3'/>
    </div>
  )
}

export default MainCard