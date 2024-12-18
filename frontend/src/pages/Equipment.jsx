import { useState, useEffect } from 'react'
import MainBanner from '../components/MainBanner'
import EquipmentCard from '../components/EquipmentCard'
import equipmentBanner from '../assets/Equipment-Banner.jpg'
import axiosInstance from '../utils/axiosInstance'
import { useBasket } from '../context/BasketContext'
import ItemCardSkeleton from '../components/skeletons/ItemCardSkeleton'

export const Equipment = () => {
    const [allEquipments, setAllEquipments] = useState([])
    const { setErrorData } = useBasket()
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        (
            async() => {
                try{
                    setErrorData(null)
                    setLoading(true)

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
                    setErrorData({
                        header: "Error fetching data",
                        text: "There was an error getting the data. Please try again",
                    })
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [])

  return (
    <div>
        <MainBanner cardHeader="COFFEE EQUIPMENT" cardText="Top-picks from our coffee gear range" imgSrc={equipmentBanner} imgAlt="equipment banner"/>

        <div className='px-5 mx-auto mb-10 max-w-[1550px]'>
            {
                loading ? (
                    <ItemCardSkeleton type="equipment" />
                ) : (
                    <div className='flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap md:gap-10'>
                        {
                            allEquipments.map((equipment, index) => (
                                <div key={index}>
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
                )
            }
        </div>
    </div>
  )
}

export default Equipment
