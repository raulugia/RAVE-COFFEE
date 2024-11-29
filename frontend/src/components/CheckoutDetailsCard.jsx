import { useState, useEffect } from 'react'
import { useAuth } from '@clerk/clerk-react'
import axiosInstance from '../utils/axiosInstance'
import Loading from '../components/Loading'

const CheckoutDetailsCard = () => {
    const [userData, setUserData] = useState()
    const [loading, setLoading] = useState(false)
    const { getToken} = useAuth()

    useEffect(() => {
        (
            async() => {
                try{
                    setLoading(true)

                    const token = await getToken()
                    const { data } = await axiosInstance.get("/account/details", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })

                    setUserData(data)
                }catch(error){

                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])

  return (
    <div className='max-w-[55%]'>
        {
            userData && (
                <div className='font-fira mx-10'>
                    <div>
                        <h4 className='font-semibold mb-1'>Account</h4>
                        <p>{userData.email}</p>
                    </div>
                    <div className='h-[1px] w-full bg-black my-5'></div>
                    <div>
                        <h4 className='font-semibold mb-1'>Ship to</h4>
                        <p className='text-wrap'>{userData.name} {userData.surname}, 
                            {userData.address.line1}, {userData.address.line2 ? `${userData.address.line2},` : ""} 
                            {userData.address.postcode}, {userData.address.county}, {userData.address.country}
                        </p>
                    </div>
                    <div className='h-[1px] w-full bg-black my-5'></div>
                    <div>
                        <h4 className='font-semibold mb-1'>Shipping Method</h4>
                        <p>1st Class Tracked (Next working day despatch) · £2.95</p>
                    </div>
                </div>
            )
        }
        {
            loading && <Loading />
        }
    </div>
  )
}

export default CheckoutDetailsCard