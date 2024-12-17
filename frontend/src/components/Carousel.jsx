import React, { useEffect, useRef, useState} from 'react'
import CoffeeCard from './CoffeeCard'
import EquipmentCard from './EquipmentCard'
import axiosInstance from '../utils/axiosInstance'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import underline from "../assets/underline.png"
import { useBasket } from '../context/BasketContext';

const Carousel = ({header, type}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const carouselRef = useRef(null)
    const h1Ref = useRef(null)
    const underlineRef = useRef(null)
    const { setErrorData } = useBasket()

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
                    setErrorData(null)

                    const { data } = await axiosInstance.get(`/carousel`, {
                        params: { type }
                    })
                    console.log(data)
                    setItems(data)
                }catch(error){
                    console.log(error)
                    setErrorData({
                        header: "Error fetching data",
                        text: "An error occurred while fetching data. Please try again",
                    })
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

    useEffect(() => {
        if(carouselRef.current){
            carouselRef.current.refresh()
        }
    }, [items])

  return (
    <div className='mx-[8%]'>
        <div className='flex flex-col justify-start items-start mb-10'>
            <h1 ref={h1Ref} className='font-permanent-marker text-4xl'>{header}</h1>
            <div ref={underlineRef} >
                <img src={underline} alt="" className='w-full'/>
            </div>
        </div>
        <div className='min-h-[460px]'>
            <Splide options={splideOptions} 
                onMounted={(splide) => {
                    carouselRef.current = splide
                    carouselRef.refresh()
                }}
            >
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