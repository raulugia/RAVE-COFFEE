import React from 'react'
import { Link } from 'react-router-dom'
import arrow from "../assets/icon-arrow.svg"

const SmallNavLink = ({to, text, setDisplayModal, displayModal}) => {
    
  return (
    <div className=''>
        <Link to={to} onClick={() => setDisplayModal(!displayModal)} className='flex justify-between items-center px-5'>
            <p>{text}</p>
            <img src={arrow} alt="arrow" />
        </Link>
        <div className='h-[1px] bg-black my-3'></div>
    </div>
  )
}

export default SmallNavLink