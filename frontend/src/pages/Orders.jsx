import {useState, useEffect} from 'react'
import axiosInstance from '../utils/axiosInstance'
import OrderCard from '../components/OrderCard'
import OrderSkeleton from '../components/skeletons/OrderSkeleton'
import { useAuth } from '@clerk/clerk-react'
import { useBasket } from '../context/BasketContext'
import { transformDate } from '../utils/helpers'
import Pagination from "../components/Pagination"

const Orders = () => {
    const [orders, setOrders] = useState()
    const [totalOrders, setTotalOrders] = useState(0)
    const [loading, setLoading] = useState(false)
    const {setErrorData} = useBasket()
    const { getToken } = useAuth()
    const [page, setPage] = useState(1)

    useEffect(() => {
        (
            async() => {
                try{
                    setLoading(true)
                    setErrorData(null)

                    const token = await getToken()

                    const { data } = await axiosInstance.get("/orders", {
                        headers: { Authorization: `Bearer ${token}` },
                        params: { page },
                    })

                    const formattedData = data.orders.map(order => ({...order, createdAt: transformDate(order.createdAt)}))
                    setOrders(formattedData)
                    setTotalOrders(data.totalOrders)
                }catch(error){
                    setErrorData({
                        header: "Error fetching orders",
                        text: "There was an error getting your orders. Please try again",
                    })
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])

  return (
    <div className="md:px-[8%] px-5">
        <h1 className='font-permanent-marker text-3xl mb-10'>Order History</h1>
        {
            loading? (
                <OrderSkeleton />
            ) : orders ? (
                <div>
                    <div className='flex flex-col items-start gap-8 mb-16'>
                        {
                            orders.map((order, index) => (
                                <OrderCard key={index} {...order}/>
                            ))
                        }
                    </div>
                    <Pagination 
                        totalItems={totalOrders}
                        page={page}
                        setPage={setPage}
                        itemsPerPage={5}
                    />
                </div>
            ) : (
                <div className='border py-10 px-10 rounded-lg font-fira bg-gray-100 w-fit'>
                    <p>You have not placed any orders yet</p>
                </div>
            )
        }
    </div>
  )
}

export default Orders