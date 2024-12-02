import React, { useState, useEffect } from 'react'
import MainBtn from '../components/MainBtn'


const ItemQuantityCard = () => {
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (action) => {
        if(action === "ADD") {
            setQuantity(prevQuantity => prevQuantity + 1)
        } else if(action === "REMOVE" && quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

  return (
    <div className='flex gap-8'>
        <div className='flex items-center gap-5'>
            <button 
                onClick={() => handleQuantity("REMOVE")}
                className={`w-[40px] h-[40px] border ${quantity === 1 ? "hover:cursor-default" : "hover:cursor-pointer hover:bg-slate-100"} `}
            >
                -
            </button>
            <p data-testid="quantity">{quantity}</p>
            <button 
                onClick={() => handleQuantity("ADD")}
                className='w-[40px] h-[40px] border hover:cursor-pointer hover:bg-slate-100'
            >
                +
            </button>
        </div>
        <MainBtn text="ADD TO CART" onClick={() => addToCart(item)} />
    </div>
  )
}

export default ItemQuantityCard