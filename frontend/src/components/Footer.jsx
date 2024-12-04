import React from 'react'
import logo from "../assets/footer_logo.svg"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import { Link } from 'react-router-dom'
import { footerLinks_col2, footerLinks_col1 } from "../utils/texts"

const Footer = () => {
  return (
    <div className='bg-black flex justify-between gap-16 px-[8%] py-10 text-white'>
        <div className='w-[40%]'>
            <img src={logo} alt="" className='mb-14' />
            <div>
                <h1 className='font-permanent-marker text-3xl mb-5'>Keep In Touch</h1>
                <p className='font-fira'>Get 15% off your first order, the latest news and new product alerts… No junk, we promise!</p>
                <div className='flex my-6'>
                    <input type="email" title="Not implemented yet" placeholder='Email address' className='py-2 px-3 font-fira border border-mustard w-full'/>
                    <button className='bg-mustard px-8 text-black font-fira' title="Not implemented yet">SUBSCRIBE</button>
                </div>
                <div className='flex items-center mt-14 gap-6'>
                    <h1 className='font-permanent-marker text-3xl'>Follow us</h1>
                    <Link to="#">
                        <img src={instagram} alt="instagram" className='w-[50px] h-[50px]'/>
                    </Link>
                    <Link to="#">
                        <img src={facebook} alt="facebook" className='w-[50px] h-[50px]'/>      
                    </Link>
                </div>
            </div>
        </div>

        <div className='flex justify-around w-[60%]'>
            <div className='flex flex-col gap-20'>
                {
                    footerLinks_col1.map((item, index) => (
                        <div key={index}>
                            <h1 className='font-permanent-marker text-2xl mb-2'>{item.header}</h1>
                            <div className='flex flex-col gap-3'>
                                {
                                    item.links.map((link, index) => (
                                        <Link key={index+link.text} to={link.to} className='font-fira hover:text-mustard'>{link.text}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-col gap-20'>
                {
                    footerLinks_col2.map((item, index) => (
                        <div key={index}>
                            <h1 className='font-permanent-marker text-2xl mb-2'>{item.header}</h1>
                            <div className='flex flex-col gap-3'>
                                {
                                    item.links.map((link, index) => (
                                        <Link key={index+link.text} to={link.to} className='font-fira hover:text-mustard'>{link.text}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Footer