import React from 'react'
import { Link } from 'react-router-dom'

const AccountNavCard = ({route, text, iconPath}) => {
  return (
    <Link to={route} className='min-h-[110px] min-w-[95px] flex flex-col items-center'>
        <div className='w-full h-full bg-mustard mb-2 flex items-center justify-center'>
            <img src={iconPath} alt={text} />
        </div>
        <div>
            <p>{text}</p>
        </div>
    </Link>
  )
}

export default AccountNavCard