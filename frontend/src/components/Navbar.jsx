import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import BasketBtn from './BasketBtn'
import raveLogo from '../assets/logo.svg'
import userIcon from '../assets/user.svg'
import Footer from './Footer'

const Navbar = () => {
  return (
    <div>
        <nav className='flex justify-between items-center z-50 w-full bg-mustard text-xl px-8 py-7 font-permanent-marker fixed'>
            <div>
                <img src={raveLogo} alt="rave logo" />
            </div>

            <div className='flex gap-10 text-lg px-12'>
                <Link to='/coffee'>COFFEE</Link>
                <Link to='/equipment'>EQUIPMENT</Link>
                <Link to='/subscriptions'>SUBSCRIPTIONS</Link>
                <Link to='/wholesale'>WHOLESALE</Link>
                <Link to='/gifts'>COFFEE GIFTS</Link>
            </div>

            <div className='flex gap-5'>
                <Link to='/account'><img src={userIcon} alt="user icon" /></Link>
                <BasketBtn />
            </div>
        </nav>
        <div className='pt-[99px] min-h-screen'>
            <Outlet />
            <Footer />
        </div>
    </div>
  )
}

export default Navbar