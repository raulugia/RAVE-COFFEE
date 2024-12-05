import React from 'react'
import Carousel from '../components/Carousel'
import coffeeBanner from "../assets/home_banner_coffee.jpeg"
import equipmentBanner from "../assets/home_banner_eq.png"
import MainBtn from '../components/MainBtn'
import creds from "../assets/Creds_Banner.svg"

const Home = () => {
  return (
    <div className='min-h-screen'>

      <div className='flex w-full mb-10'>
        <div className='w-1/2 relative'>
          <img src={coffeeBanner} alt="" className='object-cover h-full w-full'/>
          <div className='absolute bottom-[15%] w-full flex justify-center'>
            <MainBtn text="SHOP COFFEE" />
          </div>
        </div>
        <div className='w-1/2 relative'>
          <img src={equipmentBanner} alt="" className='object-cover h-full w-full'/>
          <div className='absolute bottom-[15%] w-full flex justify-center'>
            <MainBtn text="SHOP COFFEE" />
          </div>
        </div>
      </div>

      <div className='mb-10'>
        <img src={creds} alt="" />
      </div>

      <Carousel header='Featured Coffee' type='coffee' />
      <Carousel header='Featured Equipment' type='equipment' />
    </div>
  )
}

export default Home