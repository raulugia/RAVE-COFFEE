import { useState, useEffect } from 'react'
import CheckoutBasket from '../components/CheckoutBasket'
import { useBasket } from '../context/BasketContext'
import { useAuth } from '@clerk/clerk-react'
import axiosInstance from '../utils/axiosInstance'
import Loading from '../components/Loading'
import CheckoutDetailsCard from '../components/CheckoutDetailsCard'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import {PaymentElement} from '@stripe/react-stripe-js';


const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY)

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { getToken } = useAuth()

  return (
    <Elements stripe={stripePromise}>
      <div className='mt-10 flex justify-between min-h-[calc(100vh-140px)]'>
          <CheckoutDetailsCard />
          <CheckoutBasket />
          {
            loading && <Loading />
          }
      </div>
    </Elements>
  )
}

export default Checkout
