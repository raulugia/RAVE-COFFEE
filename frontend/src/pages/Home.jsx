import React from 'react'
import Carousel from '../components/Carousel'
import coffeeBanner from "../assets/home_banner_coffee.jpeg"
import equipmentBanner from "../assets/home_banner_eq.png"
import MainBtn from '../components/MainBtn'
import creds from "../assets/Creds_Banner.svg"
import { home_card_text } from "../utils/texts"
import homeSubscription from "../assets/home_subscription.jpeg"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen'>

      <div className='flex lg:flex-row flex-col w-full mb-10'>
        <div className='lg:w-1/2 relative'>
          <img src={coffeeBanner} alt="" className='object-cover h-full w-full'/>
          <div className='absolute bottom-[15%] w-full flex justify-center'>
            <MainBtn text="SHOP COFFEE" method={() => navigate("/coffee")}/>
          </div>
        </div>
        <div className='lg:w-1/2 relative'>
          <img src={equipmentBanner} alt="" className='object-cover h-full w-full'/>
          <div className='absolute bottom-[15%] w-full flex justify-center'>
            <MainBtn text="SHOP EQUIPMENT" method={() => navigate("/equipment")}/>
          </div>
        </div>
      </div>

      <div className='mb-10'>
        <img src={creds} alt="credentials" />
      </div>

      <Carousel header='Featured Coffee' type='coffee' />

      <div className='text-center bg-gray-200 py-10 px-[8%] mb-16 mt-5'>
        <h3 className='font-permanent-marker text-3xl mb-10'>{home_card_text.header}</h3>
        {
          home_card_text.text.map((text, index) => (
            <p key={index} className='font-fira mb-5'>{text}</p>
          ))
        }
      </div>

      <Carousel header='Featured Equipment' type='equipment' />

      <div className='relative hidden md:flex'>
        <img src={homeSubscription} alt="" className='w-full'/>
        <div className='absolute w-full h-full lg:pl-[8%] bg-black/10 flex items-center'>
          <h3 className='font-permanent-marker text-white text-5xl text-center w-[350px] lg:w-[400px]'>Delivered Monthly Freshness Guaranteed</h3>
        </div>
      </div>
    </div>
  )
}

export default Home