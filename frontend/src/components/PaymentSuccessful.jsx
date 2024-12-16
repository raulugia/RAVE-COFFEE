import React, {useEffect, useState, useRef} from 'react'
import tick from "../assets/tick.svg"
import { useNavigate } from 'react-router-dom'
import { useBasket } from '../context/BasketContext'

const PaymentSuccessful = ({totalPrice, id}) => {
    const navigate = useNavigate()
    const [countdown, setCountdown] = useState(5000)
    const {dispatch} = useBasket()
    //ref needed due to strictmode
    const hasMounted = useRef(false)

    useEffect(() => {
        if(!id){
            navigate("/account/orders")
        }

        const timer = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1000)
        }, 1000)

        return () => {
            //strictmode workaround - clear interval, update ref and return
            if(!hasMounted.current){
                hasMounted.current = true
                clearInterval(timer)
                return
            }
            
            clearInterval(timer)
            dispatch({ type: "EMPTY" })
        }
    }, [id])

    useEffect(() => {
        if (countdown === 0) {
            navigate(`/account/orders/`)
        }
    }, [countdown])

  return (
    <div className='fixed top-0 bg-black/50 w-full flex justify-center items-center h-full'>
        <div className='flex items-center px-5 md:px-10 py-4 md:py-8 gap-10 bg-white'>
            <div className='w-[80px] md:w-[150px]'>
                <img src={tick} alt="tick" />
            </div>
            <div>
                <h1 className='font-permanent-marker text-2xl md:text-3xl mb-2'>Payment Succeeded!</h1>
                <p className='font-fira md:text-lg'>Amount paid: <span>£{totalPrice.toFixed(2)}</span></p>
                <p className='font-fira mt-2 md:mt-5 text-sm md:text-md'>You will be redirected in {countdown / 1000}</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentSuccessful