import React from 'react'
import MainBanner from '../components/MainBanner'
import wholesaleBanner from '../assets/wholesale_banner.png'
import wholesaleMachine from '../assets/wholesale_machine.jpg'
import wholesaleOffice from '../assets/wholesale_office.jpg'
import { wholesaleText, wholesale_commercial_text } from '../utils/texts'

const Wholesale = () => {
  return (
    <div>
        <MainBanner cardHeader="WHOLESALE COFFEE BEANS" cardText="Roasted fresh & despatched daily to offices & hospitality" imgSrc={wholesaleBanner} imgAlt="roasting coffee"/>
        <div>
            <div className='px-[8%] md:px-0 max-w-[1024px] mx-auto mb-10 md:mb-20'>
                <div className='flex justify-center'>
                    <h3 className='font-permanent-marker text-3xl'>Wholesale coffee suppliers uk</h3>
                </div>
                <div className="font-fira flex flex-col gap-6 mt-10 leading-loose">
                    {
                        wholesaleText.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))
                    }
                </div>
            </div>

            <div className='flex mb-10 md:mb-20'>
                <div className='px-20 w-1/2 text-white bg-black flex flex-col justify-center items-center'>
                <div className='max-w-[600px]'>
                    <div className='font-permanent-marker text-5xl mb-8'>
                        <h3>Commercial Coffee Machines UK</h3>
                    </div>
                    <div className='flex flex-col gap-5 font-fira'>
                        {
                            wholesale_commercial_text.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))
                        }
                    </div>
                </div>
                </div>
                <div className='w-1/2'>
                    <img src={wholesaleMachine} alt="" className='h-full'/>
                </div>
            </div>

            <div className='mb-10 md:mb-20'>
                <div className='relative h-[570px]'>
                    <img src={wholesaleOffice} alt="" className='h-full w-full object-cover'/>
                    <div className='absolute top-[22%] left-20 max-w-[500px] font-fira bg-white px-16 py-16'>
                        <h3 className='font-permanent-marker text-4xl mb-5'>BE THE OFFICE LEGEND</h3>
                        <p>Coffee for the office - Studies show workers who have access to good office coffee are happier and more productive. (We made this up but we're pretty sure it's true).</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Wholesale