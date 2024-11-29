import { useState, useEffect } from 'react'
import MainCard from '../components/MainCard'
import MainBanner from '../components/MainBanner'
import EquipmentCard from '../components/EquipmentCard'
import SideModal from '../components/SideModal'
import equipmentBanner from '../assets/Equipment-Banner.jpg'
import axiosInstance from '../utils/axiosInstance'
import { useBasket } from '../context/BasketContext'

export const Equipment = () => {
    const [allEquipments, setAllEquipments] = useState([])
    const { displayModal } = useBasket()
    
    //fetch all coffees and update state
    useEffect(() => {
        (
            async() => {
                try{
                    let allEquipmentCategories = []
                    let arrangedData = []
                    const { data } = await axiosInstance.get('/equipment')

                    //sort data - array ob objects by type
                    data.forEach(equipment => {
                        if(!allEquipmentCategories.includes(equipment.type)) {
                            allEquipmentCategories.push(equipment.type)
                            arrangedData = [...arrangedData, { type: equipment.type, items: [{...equipment}] }]
                        }else{
                            const index = allEquipmentCategories.indexOf(equipment.type)
                            arrangedData[index].items.push({...equipment})
                        }
                    })
                    
                    setAllEquipments(arrangedData)
                }catch(error){
                    console.log(error)
                }
            }
        )()
    }, [])

  return (
    <div>
        <MainBanner cardHeader="COFFEE EQUIPMENT" cardText="Top-picks from our coffee gear range" imgSrc={equipmentBanner} imgAlt="equipment banner"/>

        <div className='px-5 md:px-[8%] mx-auto mb-10 max-w-[1550px]'>
            <div className='flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap md:gap-10'>
                {
                    allEquipments.map((equipment, index) => (
                        <div>
                            <div className='mb-5 md:mb-10'>
                                <h3 className='font-permanent-marker text-3xl mb-2'>{equipment.type}</h3>
                                <div className='w-full h-[4px] bg-mustard'></div>
                            </div>
                            <div className='flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap md:gap-10'>
                                {
                                    equipment.items.map(item => (
                                        <EquipmentCard key={index + item.name} {...item} />
                                    ))
                                }
                            </div>
                        </div>
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

export default Equipment
