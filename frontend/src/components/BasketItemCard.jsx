import React from 'react'
import { RiDeleteBin7Line } from "react-icons/ri";
import QuantityEdit from './QuantityEdit';

const BasketItemCard = ({id, smallpictureUrl, name, price, quantity}) => {
  return (
    <div className='flex items-center gap-5 px-5 font-fira'>
        <img src={smallpictureUrl} alt={name} className='w-[110px]'/>
        <div className='w-full'>
            <div className='flex justify-between mb-3'>
                <p>{name}</p>
                <RiDeleteBin7Line />
            </div>
            <div className='flex justify-between'>
                <QuantityEdit id={id} quantity={quantity}/>
                <p>£{price}</p>
            </div>
        </div>
    </div>
  )
}

export default BasketItemCard