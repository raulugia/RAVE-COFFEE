import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import BasketBtn from './BasketBtn'
import raveLogo from '../assets/logo.svg'
import userIcon from '../assets/user.svg'
import Footer from './Footer'
import burger from "../assets/burger.svg"
import { IoCloseOutline } from "react-icons/io5";
import SmallNavLink from './SmallNavLink'
import { navbarLinks} from "../utils/texts"

const Navbar = () => {
    const width = window.innerWidth
    const [displayModal, setDisplayModal] = useState(false)

  return (
    <div className='relative'>
        <nav className='flex justify-between items-center z-50 w-full bg-mustard text-xl px-8 py-7 font-permanent-marker fixed'>
            <div>
                <img src={raveLogo} alt="rave logo" />
            </div>

            {
                width > 1000 && (
                    <div className='flex gap-16 text-lg px-12'>
                        <Link to='/coffee'>COFFEE</Link>
                        <Link to='/equipment'>EQUIPMENT</Link>
                        <Link to='/subscriptions'>SUBSCRIPTIONS</Link>
                        <Link to='/wholesale'>WHOLESALE</Link>
                    </div>
                )
            }

            <div className='flex gap-5'>
                <Link to='/account'><img src={userIcon} alt="user icon" /></Link>
                <BasketBtn />
                {
                    width < 1000 && (
                        <img src={burger} alt="user icon" className='hover:cursor-pointer' onClick={() => setDisplayModal(!displayModal)}/>
                    )
                }
            </div>
        </nav>
            {   
                width < 1000 && displayModal && (
                    <div className='absolute z-[200] py-5 w-full top-0 h-screen flex flex-col gap-5 text-lg bg-mustard font-permanent-marker animate-slide-right'>
                        <div className='flex justify-between items-center px-5'>
                            <img src={raveLogo} alt="rave logo" />
                            <IoCloseOutline size={35} data-testid="close-button" className='hover:cursor-pointer' onClick={() => setDisplayModal(false)}/>
                        </div>
                        <div className='h-[1px] bg-black '></div>
                        <div className='flex flex-col gap-8 px-5'>
                            {
                                navbarLinks.map((item, index) => (
                                    <SmallNavLink key={index} to={item.to} text={item.text} />
                                ))
                            }
                        </div>
                    </div>
                )
            }
        <div className='pt-[99px] min-h-screen'>
            <Outlet />
            <Footer />
        </div>
    </div>
  )
}

export default Navbar