import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { useBasket } from '../context/BasketContext'
import MainBtn from './MainBtn';
import BasketItemCard from './BasketItemCard';
import { useNavigate } from 'react-router-dom';

const BasketModal = () => {
    const {basket, totalPrice, setDisplayModal, itemsQuantity} = useBasket()
    const navigate = useNavigate()

    const closeModal = () => {
        document.body.style.overflow = 'auto'
        setDisplayModal({isVisible: false, contentType: null })
    }

  return (
    <div className='h-full overflow-y-auto flex flex-col'>
        {/* HEADER */}
        <div>
            <div className='flex items-center py-3'>
                <div className='w-full flex justify-center font-fira font-semibold'>
                    <h3>BASKET</h3>
                </div>
                <IoCloseOutline size={25}  className='ml-auto mr-5 hover:cursor-pointer' onClick={closeModal}/>
            </div>

            <div className='w-full h-[1px] bg-gray-300'></div>
            
            <div className='py-3 font-fira flex justify-center'>
                <p>You are £{25 - totalPrice} away from FREE SHIPPING</p>
            </div>

            <div className='w-full h-[1px] bg-gray-300 mb-5'></div>
        </div>
        {/* BODY */}
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
                <div className='flex flex-col gap-5 overflow-y-auto h-full'>
                    {
                        basket.map((item, index) => (
                            <BasketItemCard {...item } key={item.name+index}/>
                        ))
                    }
                </div>
            )
        }
        {/* FOOTER */}
        {
            totalPrice > 0 && (
                <div className='px-5 pb-5'>
                    <div className='flex justify-between font-fira font-semibold mb-3'>
                        <p>Subtotal <span>({itemsQuantity} item{itemsQuantity > 1 ? "s" : ""})</span></p>
                        <p>£{totalPrice}</p>
                    </div>
                    <MainBtn text="CHECKOUT" method={() => navigate("/")}/>
                </div>
            )
        }
    </div>
  )
}

export default BasketModal