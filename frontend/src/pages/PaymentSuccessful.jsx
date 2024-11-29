import React, {useEffect} from 'react'
import axiosInstance from '../utils/axiosInstance'
import { useAuth } from '@clerk/clerk-react'

const PaymentSuccessful = () => {
    const { getToken } = useAuth()

    useEffect(() => {
        (
            async() => {
                try{
                    const token = await getToken()
                    const response = await axiosInstance.get("/orders", {
                        headers: { Authorization: `Bearer ${token}` }
                    })

                    console.log(response)
                }catch(error){
                    console.error(error)
                }
            }
        )()
    }, [])
  return (
    <div>PaymentSuccessful</div>
  )
}

export default PaymentSuccessful