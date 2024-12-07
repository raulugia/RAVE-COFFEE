import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
import Loading from '../components/Loading'
import CoffeeDetailsCard from '../components/CoffeeDetailsCard'
import ItemQuantityCard from '../components/ItemQuantityCard'
import Review from '../components/Review'
import { useUser } from '@clerk/clerk-react'

const ItemPage = () => {
    const { id } = useParams()
    const { isSignedIn, user, isLoaded } = useUser()
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const location = useLocation()
    const type = location.pathname.includes("/coffee") ? "coffee" : "equipment"

    useEffect(() => {
        if(id){
            (
                async() => {
                    try{
                        setLoading(true)
                        const { data } = await axiosInstance.get(`/item/${id}`, {
                            params: { type },
                        })
                        console.log(data)
                        setItem(data)
                    }catch(error){
                        console.error(error)
                        alert("There was an error getting the item information. Please try again")
                    }finally{
                        setLoading(false)
                    }
                }
            )()
        }
    }, [id])

    if(loading) return <Loading />

  return (
    <div className='my-10'>
        {
            item && (
                <div className='flex flex-col items-center lg:items-stretch lg:flex-row md:mb-0 md:px-5'>
                    <div className='md:w-1/2 md:min-w-1/2'>
                        <img src={item.pictureUrl} alt={item.name} />
                    </div>

                    <div className='md:w-1/2 md:px-16 mt-5 lg:mt-0 flex flex-col px-5'>
                        <div className='flex flex-col items-start justify-between h-full'>
                            <div className='flex flex-col items-start'>
                                <div className={`${type === "coffee" ? "mb-10" : ""}`}>
                                    <h1 className='font-permanent-marker text-3xl md:text-4xl mb-5'>{item.name}</h1>
                                    <p className='font-fira font-semibold text-lg'>£{item.price.toFixed(2)}</p>
                                </div>

                                {
                                    type === "coffee" && (
                                        <CoffeeDetailsCard taste={item.taste} roast={item.roast}/>
                                    )
                                }

                                <div className="max-w-[400px] max-h-[400px] overflow-auto my-10 font-fira">
                                    {item.description}
                                </div>

                                <ItemQuantityCard {...item}/>
                            </div>

                            {
                                user && isSignedIn && (
                                    <Review itemId={item.id} type={type} />
                                )
                            }
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ItemPage