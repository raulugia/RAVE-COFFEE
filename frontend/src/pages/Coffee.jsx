import { useState, useEffect } from 'react'
import MainBanner from '../components/MainBanner'
import CoffeeCard from '../components/CoffeeCard'
import SideModal from '../components/SideModal'
import coffeeBanner from '../assets/coffee_banner.jpg'
import axiosInstance from '../utils/axiosInstance'
import { useBasket } from '../context/BasketContext'

const Coffee = () => {
    const [coffeeTypes, setCoffeeTypes] = useState([])
    const { displayModal } = useBasket()
    
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
        <MainBanner cardHeader="COFFEE BLENDS" cardText="On our blends, you can depend..." imgSrc={coffeeBanner} imgAlt="coffee basket"/>

        <div className='px-5 md:px-[8%] mx-auto mb-10 max-w-[1550px]'>
            <div className='flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap md:gap-10'>
                {
                    coffeeTypes.map((coffee, index) => (
                        <CoffeeCard key={index + coffee.name} {...coffee} />
                    ))
                }
            </div>
        </div>
        {
            displayModal && (
                <SideModal />
            )
        }
    </div>
  )
}

export default Coffee