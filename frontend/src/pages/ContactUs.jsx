import React from 'react'
import MainCard from '../components/MainCard'
import telephone from "../assets/Telephone.png"

const ContactUs = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row mb-10 md:mb-20 w-full max-h-[450px]">
            <MainCard header="GET IN TOUCH..." text="We are available via email or telephone. Please see below for our opening hours."/>
            <img src={telephone} alt="" className='md:w-1/2 object-cover'/>
        </div>
    </div>
  )
}

export default ContactUs