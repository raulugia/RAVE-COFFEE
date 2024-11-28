import React from 'react'
import CheckoutBasket from '../components/CheckoutBasket'
import { useBasket } from '../context/BasketContext'

const Checkout = () => {
  return (
    <div className='mt-10 flex justify-between min-h-[calc(100vh-140px)]'>
        <div className=''>
            d
        </div>

        <CheckoutBasket />
    </div>
  )
}

export default Checkout