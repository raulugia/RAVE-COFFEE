import { useState, useEffect } from 'react'
import CheckoutBasket from '../components/CheckoutBasket'
import { useBasket } from '../context/BasketContext'
import { useAuth } from '@clerk/clerk-react'
import axiosInstance from '../utils/axiosInstance'
import Loading from '../components/Loading'
import CheckoutDetailsCard from '../components/CheckoutDetailsCard'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { getToken} = useAuth()

  return (
    <div className='mt-10 flex justify-between min-h-[calc(100vh-140px)]'>
        <CheckoutDetailsCard />
        <CheckoutBasket />
        {
            loading && <Loading />
        }
    </div>
  )
}

export default Checkout