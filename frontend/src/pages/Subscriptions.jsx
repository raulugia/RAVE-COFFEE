import React from 'react'
import { subscription_main_text, subscription_cards_text } from "../utils/texts"
import Polaroid from '../components/Polaroid'
import WholesaleCard from '../components/WholesaleCard'
import underline from "../assets/underline.svg"
import SubscriptionQuestions from '../components/SubscriptionQuestions'
import giftPic from "../assets/Sub_Gift.png"
import { gift_text } from "../utils/texts.js"
import bullet from "../assets/bullet.svg"
import ribbon from "../assets/ribbon.svg"

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

        <div className='w-full h-[800px] relative'>
            <img src={giftPic} alt=""  className='h-full w-full object-cover object-center'/>
            <div className='absolute top-0 px-10 w-[35%] h-full flex items-center'>
                <div className='font-fira text-white bg-black py-12 relative'>
                    <div className='px-10 mt-5'>
                        <h3 className='font-permanent-marker text-4xl mb-10'>The gift of coffee...</h3>
                        <p>Why not give a budding bean buff a 3, 6 or 12 month gift coffee subscription? Our monthly deliveries will take them on a journey of discovery and teach them a thing or two along the way.</p>
                        <div className='font-fira mt-8'>
                            {
                                gift_text.map((text, index) => (
                                    <div className='flex gap-2 items-center'>
                                        <img src={bullet} alt="bullet"/>
                                        <p key={index} className=''>{text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='z-10 absolute top-[-70px] w-full flex justify-center'>
                        <img src={ribbon} alt="ribbon" />
                    </div>
                </div>
            </div>
        </div>

        <SubscriptionQuestions />
    </div>
  )
}

export default Subscriptions