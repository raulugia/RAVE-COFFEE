import React from 'react'
import { subscription_main_text, subscription_cards_text } from "../utils/texts"
import Polaroid from '../components/Polaroid'
import WholesaleCard from '../components/WholesaleCard'

const Subscriptions = () => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center mb-24'>
            <div className='flex flex-col items-center text-center w-[68%] gap-8 mb-20'>
                <h1 className='text-4xl font-permanent-marker'>Why Join The Coffee Club?</h1>
                <p className='font-fira leading-loose'>{subscription_main_text}</p>
            </div>
            <Polaroid />
        </div>

        <div className='bg-gray-100 py-8'>
            <h1 className='font-permanent-marker text-4xl text-center'>How Our Subscription Service works...</h1>
            {
                subscription_cards_text.map(item => (
                    <WholesaleCard key={item.title} title={item.title} text={item.text} />
                ))
            }
        </div>
    </div>
  )
}

export default Subscriptions