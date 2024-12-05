import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import MainBtn from './MainBtn'
import { useBasket } from '../context/BasketContext'


const EquipmentCard = ({id, name, price, smallpictureUrl, carousel= false}) => {
    const { dispatch } = useBasket()
    const [loaded, setLoaded] = useState(false)

    const addToBasket = () => {
        dispatch({ type: "ADD", payload: { id, name, price, smallpictureUrl, quantity: 1, type: "equipment" }  });
    }
    
  return (
    <div className={`mb-14 flex flex-col justify-between ${carousel ? "max-w-[360px]" : "max-w-[400px]" }`}>
        <Link to={`/equipment/${id}`}>
            <div className={`${carousel ? "w-[360px] h-[360px]" : "w-[400px] h-[400px]"} mb-5`}>
                <img src={smallpictureUrl} alt={name} className='w-full' onLoad={() => setLoaded(true)}/>
                {!loaded && <div className='w-full h-full bg-gray-200 flex items-center justify-center font-permanent-marker text-2xl'>Loading...</div>}
            </div>
            <div>   
                <h4 className='font-permanent-marker text-lg mb-6'>{name}</h4>
            </div>
        </Link>

        <div className='flex justify-between items-center font-fira pr-1'>
            <p>From £{price.toFixed(2)}</p>
            <MainBtn text="QUICK ADD +" method={addToBasket}/>
        </div> 
    </div>
  )
}

export default EquipmentCard