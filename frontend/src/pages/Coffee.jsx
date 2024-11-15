import React from 'react'
import MainCard from '../components/MainCard'
import coffeeBanner from '../assets/coffee_banner.jpg'

const Coffee = () => {
  return (
    <div>
        <div className='flex'>
            <MainCard header="COFFEE BLENDS" text="On our blends, you can depend..." />
            <img src={coffeeBanner} alt="coffee basket" className='w-1/2'/>
        </div>
    </div>
  )
}

export default Coffee