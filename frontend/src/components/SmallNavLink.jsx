import React from 'react'
import { Link } from 'react-router-dom'

const SmallNavLink = ({to, text}) => {
  return (
    <div>
        <Link to={to}>{text}</Link>
        <div className='h-[1px] bg-black '></div>
    </div>
  )
}

export default SmallNavLink