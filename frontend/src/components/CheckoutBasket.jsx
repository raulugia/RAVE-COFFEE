import React from 'react'
import { useBasket } from '../context/BasketContext'
import BasketItemCard from '../components/BasketItemCard'

const CheckoutBasket = () => {
    const {basket, totalPrice, itemsQuantity} = useBasket()
    const shippingPrice = 25 - totalPrice < 0 ? 0 : 7.99

  return (
    <div className='md:w-[40%] md:mx-10'>
        <h1 className='px-5 md:mx-0 font-semibold text-2xl mb-5'>Order Summary</h1>
        <div className='flex flex-col gap-3 max-h-[75%] overflow-y-scroll'>
            {
                basket.map((item, index) => (
                    <BasketItemCard key={item.name+index} {...item}/>
                ))
            }
        </div>

        <div className='font-fira px-5 flex flex-col justify-between mb-10'>
            <div>
                <div className='h-[1px] w-full bg-black my-5'></div>

                <div>
                    <div className='flex justify-between'>
                        <p>Subtotal:</p>
                        <p>£{totalPrice.toFixed(2)}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Shipping:</p>
                        <p>£{shippingPrice === 0 ? "FREE": shippingPrice}</p>
                    </div>
                </div>

                <div className='h-[1px] w-full bg-black my-5'></div>
            </div>

            <div className='flex justify-between'>
                <p className='text-lg font-semibold'>Total:</p>
                <p className='font-fira text-2xl text-center'>£{(totalPrice + shippingPrice).toFixed(2)}</p>
            </div>
        </div>
    </div>
  )
}

export default CheckoutBasket