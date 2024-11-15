import { useState, useEffect } from 'react'
import MainCard from '../components/MainCard'
import coffeeBanner from '../assets/coffee_banner.jpg'

const Coffee = () => {
    const [coffeeTypes, setCoffeeTypes] = useState([])

    

    useEffect(() => {
        // Fetch coffee types from API
        fetch('https://api.example.com/coffee-types')
           .then(response => response.json())
           .then(data => setCoffeeTypes(data))
    }, [])

  return (
    <div>
        <div className='flex'>
            <MainCard header="COFFEE BLENDS" text="On our blends, you can depend..." />
            <img src={coffeeBanner} alt="coffee basket" className='w-1/2'/>
        </div>

        <div className='px-5 md:px-[8%] max-w-[1024px] mx-auto mb-10'>
            <div className='flex'>

            </div>
        </div>
    </div>
  )
}

export default Coffee