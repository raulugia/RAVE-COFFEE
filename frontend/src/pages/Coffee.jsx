import { useState, useEffect } from 'react'
import MainCard from '../components/MainCard'
import ItemCard from '../components/ItemCard'
import coffeeBanner from '../assets/coffee_banner.jpg'
import axiosInstance from '../utils/axiosInstance'

const Coffee = () => {
    const [coffeeTypes, setCoffeeTypes] = useState([])

    //fetch all coffees and update state
    useEffect(() => {
        (
            async() => {
                try{
                    const { data } = await axiosInstance.get('/coffee')
                    console.log(data)
                    setCoffeeTypes(data)
                }catch(error){
                    console.log(error)
                }
            }
        )()
    }, [])

  return (
    <div>
        <div className='flex mb-20'>
            <MainCard header="COFFEE BLENDS" text="On our blends, you can depend..." />
            <img src={coffeeBanner} alt="coffee basket" className='w-1/2'/>
        </div>

        <div className='px-5 md:px-[8%] mx-auto mb-10 max-w-[1550px]'>
            <div className='flex flex-wrap justify-between'>
                {
                    coffeeTypes.map((coffee, index) => (
                        <ItemCard key={index + coffee.name} {...coffee} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Coffee