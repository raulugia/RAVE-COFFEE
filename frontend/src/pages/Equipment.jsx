import { useState, useEffect } from 'react'
import MainCard from '../components/MainCard'
import EquipmentCard from '../components/EquipmentCard'
import SideModal from '../components/SideModal'
import equipmentBanner from '../assets/Equipment-Banner.jpg'
import axiosInstance from '../utils/axiosInstance'
import { useBasket } from '../context/BasketContext'

export const Equipment = () => {
    const [equipmentTypes, setEquipmentTypes] = useState([])
    const { displayModal } = useBasket()
    
    //fetch all coffees and update state
    useEffect(() => {
        (
            async() => {
                try{
                    const { data } = await axiosInstance.get('/equipment')
                    setEquipmentTypes(data)
                }catch(error){
                    console.log(error)
                }
            }
        )()
    }, [])

  return (
    <div>
        <div className='flex mb-10 md:mb-20'>
            <MainCard header="COFFEE EQUIPMENT" text="Top-picks from our coffee gear range" />
            <img src={equipmentBanner} alt="equipment banner" className='w-1/2 hidden md:block'/>
        </div>

        <div className='px-5 md:px-[8%] mx-auto mb-10 max-w-[1550px]'>
            <div className='flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap md:gap-10'>
                {
                    equipmentTypes.map((equipment, index) => (
                        <EquipmentCard key={index + equipment.name} {...equipment} />
                    ))
                }
            </div>
        </div>
        {
            displayModal.isVisible && (
                <SideModal />
            )
        }
    </div>
  )
}
