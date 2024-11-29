import React from 'react'

const OrderCard = ({id, createdAt, orderCoffees, orderEquipments,total}) => {
  return (
    <div className="border border-black min-w-[450px] rounded-md overflow-hidden shadow-md">
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
                        <p>£{item.coffee.price}</p>
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
                        <p>£{item.coffee.price}</p>
                    </div>
                </div>
            )) 
                
        }
        <p className='text-right font-semibold mt-3 px-2'>Total: £{total}</p>
        </div>
    </div>
  )
}

export default OrderCard