import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
import Loading from '../components/Loading'

const ItemPage = ({type}) => {
    const { id } = useParams()
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if(id){
            (
                async() => {
                    try{
                        setLoading(true)
                        const { data } = await axiosInstance.get(`/${type}/${id}`)

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
    <div>
        {
            item && (
                <div>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p>Price: £{item.price.toFixed(2)}</p>
                </div>
            )
        }
    </div>
  )
}

export default ItemPage