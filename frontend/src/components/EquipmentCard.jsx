import React from 'react'
import { Link } from 'react-router-dom'
import MainBtn from './MainBtn'
import { useBasket } from '../context/BasketContext'


const EquipmentCard = ({id, name, price, smallpictureUrl}) => {
    const { dispatch } = useBasket()

    const addToBasket = () => {
        dispatch({ type: "ADD", payload: { id, name, price, smallpictureUrl, quantity: 1 }  });
    }
    
  return (
    <div className='mb-14 max-w-[400px] flex flex-col justify-between'>
        <Link to={`/equipment/${id}`}>
            <div className='max-w-[400px] mb-5'>
                <img src={smallpictureUrl} alt={`name`} className='w-full'/>
            </div>
            <div>   
                <h4 className='font-permanent-marker text-lg mb-6'>{name}</h4>
            </div>
        </Link>

        <div className='flex justify-between items-center font-fira'>
            <p>From £{price.toFixed(2)}</p>
            <MainBtn text="QUICK ADD +" method={addToBasket}/>
        </div> 
    </div>
  )
}

export default EquipmentCard