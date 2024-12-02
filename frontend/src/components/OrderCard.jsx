import React from 'react'
import { Link } from 'react-router-dom'

const OrderCard = ({id, createdAt, orderCoffees, orderEquipments,total, deliveryTotal}) => {
  return (
    <Link to={`/account/orders/${id}`} className="border border-black min-w-[450px] rounded-md overflow-hidden shadow-md">
        <div className='flex font-permanent-marker py-1 text-lg bg-mustard justify-between border-b border-black px-2'>
            <h3>Order ID: {id}</h3>
            <p>Date: {createdAt}</p>
        </div>
        <div className='py-2 bg-slate-50 flex flex-col gap-2'>
        {
            orderCoffees.map((item, index) => (
                <div key={index} className='flex justify-between px-2 font-fira'>
                    <div className='w-[60%]'>
                        <p>{item.coffee.name}</p>
                    </div>
                    <div className='flex justify-between w-[30%]'>
                        <p>x {item.quantity}</p>
                        <p>£{item.coffee.price.toFixed(2)}</p>
                    </div>
                </div>
            )) 
                
        }
        {
            orderEquipments.map((item, index) => (
                <div key={index} className='flex justify-between px-2 font-fira'>
                    <div className='w-[60%]'>
                        <p>{item.coffee.name}</p>
                    </div>
                    <div className='flex justify-between w-[30%]'>
                        <p>x {item.quantity}</p>
                        <p>£{item.coffee.price.toFixed(2)}</p>
                    </div>
                </div>
            )) 
                
        }
        <div className='flex justify-between font-fira px-2'>
            <p>Delivery</p>
            <p>£{deliveryTotal}</p>
        </div>
        <div>
            <p className='text-right font-semibold px-2'>Total: £{total.toFixed(2)}</p>
        </div>
        </div>
    </Link>
  )
}

export default OrderCard