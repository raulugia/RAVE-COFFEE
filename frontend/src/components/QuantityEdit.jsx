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
        <p 
            onClick={removeOne} class
            className='px-3 border hover:cursor-pointer hover:bg-slate-100'
        >
            -
        </p>
        <p>{quantity}</p>
        <p 
            onClick={addOne}
            className='px-3 border hover:cursor-pointer hover:bg-slate-100'
        >
            +
        </p>
    </div>
  )
}

export default QuantityEdit