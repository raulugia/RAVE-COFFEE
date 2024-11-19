import React from 'react'
import { RiDeleteBin7Line } from "react-icons/ri";
import { useBasket } from '../context/BasketContext'
import QuantityEdit from './QuantityEdit';

const BasketItemCard = ({id, smallpictureUrl, name, price, quantity}) => {
    const { dispatch } = useBasket()

    const removeAll= () => {
        dispatch({ type: "REMOVE ALL", payload: { id } })
    }

  return (
    <div className='flex items-center gap-5 px-5 font-fira'>
        <img src={smallpictureUrl} alt={name} className='w-[110px]'/>
        <div className='w-full'>
            <div className='flex justify-between mb-3'>
                <p>{name}</p>
                <RiDeleteBin7Line onClick={removeAll} className='hover:cursor-pointer'/>
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