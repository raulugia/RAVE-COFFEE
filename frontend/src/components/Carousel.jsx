import React, { useEffect, useRef, useState} from 'react'
import CoffeeCard from './CoffeeCard'
import EquipmentCard from './EquipmentCard'
import axiosInstance from '../utils/axiosInstance'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

const Carousel = ({header, type}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const carouselRef = useRef(null)

    const splideOptions = {
        type: "loop",
        perMove: 1,
        rewind: true,
        pagination: false,
        fixedWidth: '400px',
    };

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
                    console.log(error)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])

  return (
    <div className='mx-[8%]'>
        <h1 className='font-permanent-marker text-4xl mb-10'>{header}</h1>
        <div ref={carouselRef} className=''>
            <Splide options={splideOptions} >
            {
                type === "coffee" ? (
                    items.map((item, index) => (
                        <SplideSlide key={index + item.name} className="flex self-stretch">
                            <CoffeeCard  {...item} carousel={true}/>
                        </SplideSlide>
                    ))
                ) : (
                    items.map((item, index) => (
                        <EquipmentCard key={index + item.name} {...item} />
                    ))
                )
            }
            </Splide>
        </div>
    </div>
  )
}

export default Carousel