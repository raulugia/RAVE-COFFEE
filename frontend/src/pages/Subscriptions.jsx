import React from 'react'
import { subscription_main_text } from "../utils/texts"
import Polaroid from '../components/Polaroid'

const Subscriptions = () => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center text-center w-[68%] gap-8 mb-10'>
                <h1 className='text-4xl font-permanent-marker'>Why Join The Coffee Club?</h1>
                <p className='font-fira leading-loose'>{subscription_main_text}</p>
            </div>
            <Polaroid />
        </div>
    </div>
  )
}

export default Subscriptions