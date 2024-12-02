import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
import Loading from '../components/Loading'
import CoffeeDetailsCard from '../components/CoffeeDetailsCard'
import QuantityEdit from '../components/QuantityEdit'
import MainBtn from '../components/MainBtn'
import { useBasket } from '../context/BasketContext'
import ItemQuantityCard from '../components/ItemQuantityCard'

const ItemPage = () => {
    const { id } = useParams()
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

    const updateQuantity = (action) => {
        if(action === "ADD") {
            setQuantity(prevQuantity => prevQuantity + 1)
        } else if(action === "REMOVE ONE" && quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    if(loading) return <Loading />

  return (
    <div>
        {
            item && (
                <div className='flex flex-col items-center lg:items-start lg:flex-row mt-10 mb-10 md:mb-0 md:px-5'>
                    <div className='md:w-1/2 md:min-w-1/2'>
                        <img src={item.pictureUrl} alt={item.name} />
                    </div>

                    <div className='md:w-1/2 md:px-16 mt-5 lg:mt-0 flex justify-center px-5'>
                        <div className='flex flex-col items-start'>
                            <div className='mb-10'>
                                <h1 className='font-permanent-marker text-3xl md:text-4xl mb-5'>{item.name}</h1>
                                <p className='font-fira font-semibold text-lg'>£{item.price.toFixed(2)}</p>
                            </div>

                            {
                                type === "coffee" && (
                                    <CoffeeDetailsCard taste={item.taste} roast={item.roast}/>
                                )
                            }

                            <div className="max-w-[400px] my-10 font-fira">
                                {item.description}
                            </div>

                            <ItemQuantityCard {...item}/>

                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ItemPage