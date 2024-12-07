import React, {useEffect, useState} from 'react'
import axiosInstance from '../utils/axiosInstance'
import { useAuth } from '@clerk/clerk-react'
import OrderCard from '../components/OrderCard'

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
                                <OrderCard key={index} {...order}/>
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