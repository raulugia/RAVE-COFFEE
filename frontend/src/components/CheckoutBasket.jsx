import { useEffect, useState } from 'react'
import { useBasket } from '../context/BasketContext'
import BasketItemCard from '../components/BasketItemCard'

const CheckoutBasket = () => {
    const {basket, totalPrice, itemsQuantity} = useBasket()
    const shippingPrice = 25 - totalPrice < 0 ? 0 : 7.99

    console.log(typeof totalPrice)
  return (
    <div className='w-[40%]'>
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
                        <p>{totalPrice}</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Shipping:</p>
                        <p>{shippingPrice === 0 ? "FREE": shippingPrice}</p>
                    </div>
                </div>

                <div className='h-[1px] w-full bg-black my-5'></div>
            </div>

            <div className='flex justify-between'>
                <p className='text-lg font-semibold'>Total:</p>
                <p className='font-fira text-2xl text-center'>£{totalPrice + shippingPrice}</p>
            </div>
        </div>
    </div>
  )
}

export default CheckoutBasket