import React from 'react'
import { useBasket } from '../context/BasketContext'
import cartIcon from '../assets/cart.svg'

const BasketBtn = () => {
    const { itemsQuantity, setDisplayModal } = useBasket()

  return (
    <div className='relative hover:cursor-pointer' onClick={() => setDisplayModal(true)}>
        <img src={cartIcon} alt="cart icon" />
        <div className='bg-black rounded-full w-[20px] h-[20px] flex justify-center absolute left-5 bottom-4'>
            <p className='text-white text-sm'>{itemsQuantity}</p>
        </div>
    </div>
  )
}

export default BasketBtn