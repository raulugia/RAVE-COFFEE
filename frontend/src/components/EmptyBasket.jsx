import React from 'react'
import cartIcon from '../assets/cart.svg'
import MainBtn from './MainBtn'
import { useNavigate } from "react-router-dom"

const EmptyBasket = () => {
    const navigate = useNavigate()

  return (
    <div className='px-[8%] flex flex-col items-center text-center justify-center min-h-[calc(100vh-140px)]'>
        <img src={cartIcon} alt="cart icon"  className='w-[300px]'/>
        <h1 className='font-permanent-marker text-4xl mt-10 mb-5'>Your Basket Is Currently Empty!</h1>
        <p className='mb-10 font-fira'>Before you proceed to checkout you must add items to your basket</p>
        <MainBtn text="Shop Now!" method={() => navigate("/coffee")}/>
    </div>
  )
}

export default EmptyBasket