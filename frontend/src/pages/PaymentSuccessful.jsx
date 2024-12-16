import React, {useEffect, useState} from 'react'
import tick from "../assets/tick.svg"
import { useNavigate, useLocation } from 'react-router-dom'
import { useBasket } from '../context/BasketContext'
import OrderCard from '../components/OrderCard'

const PaymentSuccessful = ({totalPrice, id}) => {
    const navigate = useNavigate()
    const [countdown, setCountdown] = useState(5000)
    const { dispatch } = useBasket()
    const location = useLocation()

    useEffect(() => {
        if(!location.state?.order?.id){
            navigate("/account/orders")
        }

        // const timer = setInterval(() => {
        //     setCountdown((prevCountdown) => prevCountdown - 1000)
        // }, 1000)

        // return () => {
        //     clearInterval(timer)
        //     dispatch({ type: "EMPTY" })
        // }
        console.log(location.state)
    }, [location])

    // useEffect(() => {
    //     if (countdown === 0) {
    //         navigate(`/account/orders/`)
    //     }
    // }, [countdown])

  return (
    <div className='w-full h-full'>
        <div className='flex items-center px-5 md:px-10 py-4 md:py-8 gap-10 bg-white'>
            <div className='w-[80px] md:w-[150px]'>
                <img src={tick} alt="tick" />
            </div>
            <div>
                <h1 className='font-permanent-marker text-2xl md:text-3xl mb-2'>Payment Succeeded!</h1>
                {/* <p className='font-fira md:text-lg'>Amount paid: <span>£{totalPrice.toFixed(2)}</span></p> */}
                <p className='font-fira mt-2 md:mt-5 text-sm md:text-md'>You will be redirected in {countdown / 1000}</p>
            </div>
        </div>
        {
            location.state.order && (
                <OrderCard {...location.state.order} />
            )
        }
    </div>
  )
}

export default PaymentSuccessful