import React from 'react'
import MainCard from '../components/MainCard'
import telephone from "../assets/Telephone.png"
import underline from "../assets/underline.png"

const ContactUs = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row mb-10 md:mb-20 w-full max-h-[450px]">
            <MainCard header="GET IN TOUCH..." text="We are available via email or telephone. Please see below for our opening hours."/>
            <img src={telephone} alt="" className='hidden md:block md:w-1/2 object-cover'/>
        </div>
        <div className='px-5 md:px-[8%] max-w-[1024px] mx-auto mb-10'>
            <div>
                <div className='mb-3'>
                    <h1 className="text-3xl md:text-4xl font-permanent-marker">CUSTOMER SERVICE</h1>
                    <img src={underline} alt="line" />
                </div>

                <div className='flex flex-col md:flex-row gap-10'>
                    <div className='flex flex-col gap-8'>
                        <div>
                            <p className='font-permanent-marker text-lg'>EMAIL</p>
                            <p className='font-fira'>info@ravecoffee.co.uk</p>
                        </div>
                        <div>
                            <p className='font-permanent-marker text-lg'>OPENING</p>
                            <p className='font-fira'>Monday - Friday 9am - 5pm</p>
                            <p className='font-fira'>phones and email</p>
                            <p className='font-fira'>(For Cafe see below)</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div>
                            <p className='font-permanent-marker text-lg'>WHATSAPP</p>
                            <p className='font-fira'>+44 7535 017079</p>
                        </div>
                        <div>
                            <p className='font-permanent-marker text-lg'>RETURNS</p>
                            <p className='font-fira'>Rave Coffee HQ,</p>
                            <p className='font-fira'>Phoenix Way,</p>
                            <p className='font-fira'>Cirencester,</p>
                            <p className='font-fira'>GL7 1QG</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='font-permanent-marker text-lg'>TELEPHONE</p>
                            <p className='font-fira'>+44 1285 651884</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-gray-400 h-[1px] my-10'></div>

            <div className='flex flex-col gap-8'>
                <div>
                    <p className='font-permanent-marker text-lg'>MARKETING / BRAND PARTNERSHIPS / PR</p>
                    <p className='font-fira'>marketing@ravecoffee.co.uk</p>
                </div>
                <div>
                    <p className='font-permanent-marker text-lg'>WHOLESALE</p>
                    <p className='font-fira'>wholesale@ravecoffee.co.uk</p>
                </div>
            </div>

            <div className='w-full bg-gray-400 h-[1px] my-10'></div>

            <div>
                <div>
                    <p className='font-permanent-marker text-lg'>COMPANY DETAILS</p>
                    <p className='font-fira'>Company Number: 07384599</p>
                    <p className='font-fira'>VAT registered:  105657716</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs