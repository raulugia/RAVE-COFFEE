import React from 'react'
import { useBasket } from '../context/BasketContext'

const QuantityEdit = ({id, quantity}) => {
    const { dispatch } = useBasket()

    const removeOne = () => {
        if(quantity > 1) {
            dispatch({ type: "REMOVE ONE", payload: { id } })
        }
    }

    const addOne = () => {
        dispatch({ type: "ADD", payload: { id, quantity: 1 } })
    }

  return (
    <div className='flex gap-3'>
        <button 
            onClick={removeOne}
            className={`px-3 border ${quantity === 1 ? "hover:cursor-default" : "hover:cursor-pointer hover:bg-slate-100"} `}
        >
            -
        </button>
        <p data-testid="quantity">{quantity}</p>
        <button 
            onClick={addOne}
            className='px-3 border hover:cursor-pointer hover:bg-slate-100'
        >
            +
        </button>
    </div>
  )
}

export default QuantityEdit