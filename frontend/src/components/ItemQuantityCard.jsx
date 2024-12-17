import React, { useState } from 'react'
import MainBtn from '../components/MainBtn'
import { useBasket } from '../context/BasketContext'

//change item quantity

const ItemQuantityCard = ({type, id, smallpictureUrl, name, price }) => {
    const [quantity, setQuantity] = useState(1)
    const { dispatch } = useBasket()

    const handleQuantity = (action) => {
        if(action === "ADD") {
            setQuantity(prevQuantity => prevQuantity + 1)
        } else if(action === "REMOVE" && quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    const handleSubmit = () => {
        dispatch({ type: "ADD", payload: { id, name, price, smallpictureUrl, quantity, type }  });
    }

  return (
    <div className='flex gap-8 mx-auto lg:mx-0'>
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
        <MainBtn text="ADD TO BASKET" method={handleSubmit} />
    </div>
  )
}

export default ItemQuantityCard