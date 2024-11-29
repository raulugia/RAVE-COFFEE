import React, {useEffect, useState} from 'react'
import axiosInstance from '../utils/axiosInstance'
import { useAuth } from '@clerk/clerk-react'

const Account = () => {
    const { getToken } = useAuth()
    const [orders, setOrders] = useState()

    const transformDate = (isoDateString) => {
        const date = new Date(isoDateString);
      
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
      
        return `${day}/${month}/${year}`;
      };

    useEffect(() => {
        (
            async() => {
                try{
                    const token = await getToken()
                    const {data} = await axiosInstance.get("/recent-orders", {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                    console.log(data)
                    const formattedData = data.map(item => ({...item, createdAt: transformDate(item.createdAt)}))
                    setOrders(formattedData)
                }catch(error){
                    console.error(error)
                }
            }
        )()
    }, [])

  return (
    <div>
        <div className='mt-20 px-[8%]'>
            <h1 className='text-3xl font-permanent-marker mb-10'>RECENT ORDERS</h1>
            {
                orders && (
                    <div className='flex flex-col items-start gap-8'>
                        {
                            orders.map((order, index) => (
                                <div key={index} className="border border-black min-w-[450px] rounded-md overflow-hidden shadow-md">
                                    <div className='flex font-permanent-marker py-1 text-lg bg-mustard justify-between border-b border-black px-2'>
                                        <h3>Order ID: {order.id}</h3>
                                        <p>Date: {order.createdAt}</p>
                                    </div>
                                    <div className='py-2 bg-slate-50 flex flex-col gap-2'>
                                    {
                                        order.orderCoffees.map((item, index) => (
                                            <div className='flex justify-between px-2 font-fira'>
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
                                    <p className='text-right font-semibold mt-3 px-2'>Total: £{order.total}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Account