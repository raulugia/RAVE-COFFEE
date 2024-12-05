import React, { useEffect, useRef, useState} from 'react'
import CoffeeCard from './CoffeeCard'
import EquipmentCard from './EquipmentCard'
import axiosInstance from '../utils/axiosInstance'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import underline from "../assets/underline.png"

const Carousel = ({header, type}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const carouselRef = useRef(null)
    const h1Ref = useRef(null)
    const underlineRef = useRef(null)

    const splideOptions = {
        type: "loop",
        perMove: 1,
        rewind: true,
        pagination: false,
        fixedWidth: '420px',
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
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])

    useEffect(() => {
        if(h1Ref.current){
        const {width} = h1Ref.current.getBoundingClientRect()

        underlineRef.current.style.width = `${width}px`
        }
    }, [])

  return (
    <div className='mx-[8%]'>
        <div className='flex flex-col justify-start items-start mb-10'>
            <h1 ref={h1Ref} className='font-permanent-marker text-4xl'>{header}</h1>
            <div ref={underlineRef} >
                <img src={underline} alt="" className='w-full'/>
            </div>
        </div>
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
                        <SplideSlide key={index + item.name} className="flex self-stretch">
                            <EquipmentCard key={index + item.name} {...item} carousel={true}/>
                        </SplideSlide>
                    ))
                )
            }
            </Splide>
        </div>
    </div>
  )
}

export default Carousel