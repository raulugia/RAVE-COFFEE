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
                                <div key={index} className="border border-black">
                                    <div className='flex justify-between border-b border-black px-2'>
                                        <h3>Order ID: {order.id}</h3>
                                        <p>Date: {order.createdAt}</p>
                                    </div>
                                    {
                                        order.coffees.map((coffee, index) => (
                                            <div>
                                                <h4>Coffee ID: {coffee.id}</h4>
                                                <div>
                                                    
                                                </div>
                                                <p>{coffee.name}</p>
                                                <p>Price: ��{coffee.price}</p>
                                                <p>Quantity: {coffee.quantity}</p>
                                                <p>Total: ��{coffee.totalPrice}</p>
                                            </div>
                                        )) 
                                            
                                    }
                                    <p>Total: ��{order.total}</p>
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