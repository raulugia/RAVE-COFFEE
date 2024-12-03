import React, {useEffect, useState} from 'react'
import tick from "../assets/tick.svg"
import { useNavigate } from 'react-router-dom'

const PaymentSuccessful = ({totalPrice, id}) => {
    const navigate = useNavigate()
    const [countdown, setCountdown] = useState(5000)

    useEffect(() => {
        if(!id){
            return
        }
        
        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1000)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [id])

    useEffect(() => {
        if (countdown === 0) {
            navigate(`/account/orders/${id}`)
        }
    }, [countdown])

  return (
    <div className='fixed top-0 bg-black/50 w-full flex justify-center items-center h-full'>
        <div className='flex items-center px-10 py-8 gap-10 bg-white'>
            <div className='w-[150px]'>
                <img src={tick} alt="tick" />
            </div>
            <div>
                <h1 className='font-permanent-marker text-3xl mb-2'>Payment succeeded!</h1>
                <p className='font-fira text-lg'>Amount paid: <span>£{totalPrice.toFixed(2)}</span></p>
                <p className='font-fira mt-5'>You will be redirected in {countdown / 1000}</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentSuccessful