import React from 'react'
import { subscription_main_text, subscription_cards_text } from "../utils/texts"
import Polaroid from '../components/Polaroid'
import WholesaleCard from '../components/WholesaleCard'
import underline from "../assets/underline.svg"
import SubscriptionQuestions from '../components/SubscriptionQuestions'

const Subscriptions = () => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center mb-10 md:mb-24'>
            <div className='flex flex-col items-center text-center md:w-[68%] px-5 md:px-0 gap-8 md:mb-20'>
                <h1 className='text-4xl font-permanent-marker'>Why Join The Coffee Club?</h1>
                <p className='font-fira leading-loose'>{subscription_main_text}</p>
            </div>
            <Polaroid />
        </div>

        <div className='bg-[#F5F5F5] pt-16 px-[4%]'>
            <div className='flex flex-col items-center mb-10'>
                <h1 className='font-permanent-marker text-4xl text-center mb-2'>How Our Subscription Service works...</h1>
                <img src={underline} alt="line" />
            </div>
            <p className='font-fira text-center mb-14'>In each delivery, along with your new coffee, you'll receive monthly tuition pieces covering subjects such as growing, roasting, brewing and tasting coffee.</p>
            <div className='flex flex-col pb-16 md:flex-row gap-10 px-5 md:px-20 items-baseline'>
                {
                    subscription_cards_text.map(item => (
                        <WholesaleCard key={item.title} {...item} />
                    ))
                }
            </div>
        </div>

        <SubscriptionQuestions />
    </div>
  )
}

export default Subscriptions