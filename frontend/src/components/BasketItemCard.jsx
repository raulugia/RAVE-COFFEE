import React from 'react'
import { RiDeleteBin7Line } from "react-icons/ri";

const BasketItemCard = ({smallpictureUrl, name, price, quantity}) => {
  return (
    <div className='flex items-center gap-5 px-5'>
        <img src={smallpictureUrl} alt={name} className='w-[110px]'/>
        <div>
            <div className='flex justify-between'>
                <p>{name}</p>
                <RiDeleteBin7Line />
            </div>
            <div className='flex justify-between'>
                <div className='flex'>
                    <p>+</p>
                    <p>{quantity}</p>
                    <p>-</p>
                </div>
                <p>£{price}</p>
            </div>
        </div>
    </div>
  )
}

export default BasketItemCard