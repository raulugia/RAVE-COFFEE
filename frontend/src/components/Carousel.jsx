import React, { useEffect, useRef, useState} from 'react'
import CoffeeCard from './CoffeeCard'
import EquipmentCard from './EquipmentCard'
import axiosInstance from '../utils/axiosInstance'

const Carousel = ({header, type}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const carouselRef = useRef(null)

    useEffect(() => {
        (
            async() => {
                try{
                    setLoading(true)
                    const { data } = await axiosInstance.get(`/carousel`, {
                        params: { type }
                    })
                    setItems(data)
                }catch(error){
                    console.log(error)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])

    const handleScroll= direction => {
        if(direction === "right"){
            carouselRef.current.scrollLeft += 300
        }else{
            carouselRef.current.scrollLeft -= 300
        }
    }

  return (
    <div>
        <h1>{header}</h1>
        <div ref={carouselRef} className='overflow-x-auto flex gap-5 items-center relative'>
            {
                type === "coffee" ? (
                    items.map((item, index) => (
                        <CoffeeCard key={index + item.name} {...item} />
                    ))
                ) : (
                    items.map((item, index) => (
                        <EquipmentCard key={index + item.name} {...item} />
                    ))
                )
            }
            <div className='absolute w-full top-[50%] flex justify-between items-center'>
                <button onClick={() => handleScroll("left")}>{"<"}</button>
                <button onClick={() => handleScroll("right")}>{">"}</button>
            </div>
        </div>
    </div>
  )
}

export default Carousel