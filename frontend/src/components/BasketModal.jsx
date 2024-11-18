import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useBasket } from '../context/BasketContext'
import MainBtn from './MainBtn';
import { useNavigate } from 'react-router-dom';

const BasketModal = () => {
    const {basket, totalPrice} = useBasket()
    const navigate = useNavigate()

  return (
    <div>
        <div className='flex items-center py-3'>
            <div className='w-full flex justify-center font-fira font-semibold'>
                <h3>BASKET</h3>
            </div>
            <IoCloseOutline size={25}  className='ml-auto mr-5'/>
        </div>

        <div className='w-full h-[1px] bg-gray-300'></div>
        
        <div className='py-3 font-fira flex justify-center'>
            <p>You are £{25 - totalPrice} away from FREE SHIPPING</p>
        </div>

        <div className='w-full h-[1px] bg-gray-300'></div>

        {
            totalPrice === 0 ? (
                <div className='px-5 font-fira py-3 mt-10'>
                    <div className='flex flex-col items-center mb-5'>
                        <p>Your cart is empty!</p>
                        <p>Add your favorite items to your cart.</p>
                    </div>
                    <MainBtn text="SHOP NOW!" method={() => navigate("/")}/>
                </div>
            ) : (
                <div>

                </div>
            )
        }
    </div>
  )
}

export default BasketModal