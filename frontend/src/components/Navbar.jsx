import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import raveLogo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between items-center w-full bg-mustard text-xl px-8 py-7 font-permanent-marker fixed'>
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

            <div>
                <Link to='/account'>ACCOUNT</Link>
                <Link to='/contact'>CART</Link>
            </div>
        </nav>
        <div className='pt-[99px]'>
            <Outlet />
        </div>
    </>
  )
}

export default Navbar