import { useState, useEffect } from 'react'
import CheckoutBasket from '../components/CheckoutBasket'
import { useBasket } from '../context/BasketContext'
import { useAuth } from '@clerk/clerk-react'
import axiosInstance from '../utils/axiosInstance'
import Loading from '../components/Loading'
import CheckoutDetailsCard from '../components/CheckoutDetailsCard'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import EmptyBasket from '../components/EmptyBasket'


const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY)

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { getToken } = useAuth()
    const { totalPrice, basket} = useBasket()
    const [secret, setSecret] = useState()

    useEffect(() => {
        const createPaymentIntent = async() => {
            if(!totalPrice || basket.length === 0){
                return
            }
            
            const amount = totalPrice >= 25 ? totalPrice : totalPrice + 7.99

            try{
                const token = await getToken()
    
                const { data } = await axiosInstance.post("/create-payment-intent", {amount}, {
                    headers: { Authorization: `Bearer ${token}` }
                })
    
                if(data && data.clientSecret){
                    setSecret(data.clientSecret)
                    console.log(data)
                }
            }catch(error){
                console.log(error)
            }
        }

        createPaymentIntent()
    }, [totalPrice, basket])

    if(basket.length === 0) return <EmptyBasket />
    
  return (
    !secret && basket.length > 0 ? (
        <Loading />
    ) : (
        <Elements stripe={stripePromise} options={{clientSecret: secret, business: "RAVE"}}>
        <div className='mt-10 flex justify-between min-h-[calc(100vh-140px)]'>
            <CheckoutDetailsCard />
            <CheckoutBasket />
        </div>
        </Elements>
    )
  )
}

export default Checkout
