import React from 'react'
import { useUser } from '@clerk/clerk-react'
import AccountNavCard from './AccountNavCard'
import Loading from './Loading'
import {accountNavCardData } from '../utils/texts'
import { Outlet } from 'react-router-dom'

const AccountNav = ({children}) => {
    const { user } = useUser()

    if(!user ){
        return <Loading />
    }

  return (
    <div>
        <div className='flex flex-col items-center py-10 bg-[#F5F5F5] bg-coffee-beans-pattern bg-no-repeat bg-cover'>
            <div className='font-permanent-marker text-5xl mb-14'>
                <h1>HELLO, {user?.firstName}</h1>
            </div>
            <div className='flex gap-3'>
                {
                    accountNavCardData.map((data, index) => (
                        <AccountNavCard key={index+data.text} {...data} />
                    ))
                }
            </div>
        </div>
        <Outlet />
    </div>
  )
}

export default AccountNav