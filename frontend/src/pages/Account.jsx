import React, {useEffect, useState} from 'react'
import axiosInstance from '../utils/axiosInstance'
import { useAuth } from '@clerk/clerk-react'
import OrderCard from '../components/OrderCard'
import {useBasket} from '../context/BasketContext'
import OrderSkeleton from '../components/skeletons/OrderSkeleton'

const Account = () => {
    const { getToken } = useAuth()
    const [orders, setOrders] = useState()
    const {setErrorData} = useBasket()
    const [loading, setLoading] = useState(false)

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
                    setLoading(true)
                    setErrorData(null)

                    const token = await getToken()
                    const {data} = await axiosInstance.get("/recent-orders", {
                        headers: { Authorization: `Bearer ${token}` }
                    })

                    const formattedData = data.map(item => ({...item, createdAt: transformDate(item.createdAt)}))
                    setOrders(formattedData)
                }catch(error){
                    setErrorData({
                        header: "Error fetching data",
                        text: "There was an error getting your data. Please try again",
                    })
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])

  return (
    <div>
        <div className='mt-20 px-[8%]'>
            <h1 className='text-3xl font-permanent-marker mb-10'>RECENT ORDERS</h1>
            {   
                loading ? (
                    <OrderSkeleton />
                ) : orders ? (
                    <div className='flex flex-col items-start gap-8'>
                        {
                            orders.map((order, index) => (
                                <OrderCard key={index} {...order}/>
                            ))
                        }
                    </div>
                ) : (
                    <div className='border py-10 px-10 rounded-lg font-fira bg-gray-100 w-fit'>
                        <p>You have not placed any orders yet</p>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Account