import React from 'react'
import { useUser } from '@clerk/clerk-react'

const AccountNav = () => {
    const { user } = useUser()

  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='font-permanent-marker text-5xl'>
            <h1>HELLO {user?.firstName}</h1>
        </div>
        <div className='flex gap-3'>
            
        </div>
    </div>
  )
}

export default AccountNav