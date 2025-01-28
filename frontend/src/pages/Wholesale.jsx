import React from 'react'
import MainBanner from '../components/MainBanner'
import wholesaleBanner from '../assets/wholesale_banner.png'
import wholesaleMachine from '../assets/wholesale_machine.jpg'
import wholesaleOffice from '../assets/wholesale_office.jpg'
import { wholesaleText, wholesale_commercial_text, wholesale_cards_text } from '../utils/texts'
import WholesaleCard from '../components/WholesaleCard'

const Wholesale = () => {
  return (
    <div>
        <MainBanner cardHeader="WHOLESALE COFFEE BEANS" cardText="Roasted fresh & despatched daily to offices & hospitality" imgSrc={wholesaleBanner} imgAlt="roasting coffee"/>
        <div>
            <div className='px-[8%] md:px-0 max-w-[1024px] mx-auto mb-10 md:mb-20'>
                <div className='flex justify-center'>
                    <h3 className='font-permanent-marker text-xl md:text-3xl'>Wholesale coffee suppliers uk</h3>
                </div>
                <div className="font-fira flex flex-col gap-6 mt-10 leading-loose text-sm md:text-md">
                    {
                        wholesaleText.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col md:flex-row mb-10 md:mb-20'>
                <div className='px-5 py-5 md:py-0 md:px-20 md:w-1/2 text-white bg-black flex flex-col justify-center items-center'>
                <div className='max-w-[600px]'>
                    <div className='font-permanent-marker text-3xl md:text-5xl mb-8'>
                        <h3 className='text-center md:text-start'>Commercial Coffee Machines UK</h3>
                    </div>
                    <div className='flex flex-col gap-5 font-fira text-sm md:text-md'>
                        {
                            wholesale_commercial_text.map((text, index) => (
                                <p key={index} className='text-center md:text-start'>{text}</p>
                            ))
                        }
                    </div>
                </div>
                </div>
                <div className='md:w-1/2'>
                    <img src={wholesaleMachine} alt="" className='h-full'/>
                </div>
            </div>

            <div className='mb-10 md:mb-20'>
                <div className='relative h-[430px] md:h-[570px]'>
                    <img src={wholesaleOffice} alt="" className='h-full w-full object-cover'/>
                    <div className='absolute flex flex-col justify-center mx-5 md:mx-0 bottom-20 top-20 md:top-[22%] md:left-20 max-w-[500px] font-fira bg-white px-10 md:px-16 py-16'>
                        <h3 className='font-permanent-marker text-2xl md:text-4xl mb-5'>BE THE OFFICE LEGEND</h3>
                        <p>Coffee for the office - Studies show workers who have access to good office coffee are happier and more productive. (We made this up but we're pretty sure it's true).</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:justify-center gap-10 px-5 md:px-20 mb-10 md:mb-20'>
                {
                    wholesale_cards_text.map((text, index) => (
                        <WholesaleCard imgSrc={text.imgSource} imgAlt="wholesale coffee bean" header={text.header} text={text.text} key={index+text.header}/>
                    ))
                }
            </div>
            
        </div>
    </div>
  )
}

export default Wholesale