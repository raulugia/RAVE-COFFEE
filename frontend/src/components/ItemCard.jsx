import React from 'react'
import { Link } from 'react-router-dom'
import MainBtn from './MainBtn'

const ItemCard = ({name, id, price, roast, taste, smallpictureUrl}) => {
  return (
    <Link to={`/coffee/${id}`} className='mb-14 max-w-[400px] flex flex-col justify-between'>
        <div>
            <div className='max-w-[400px] mb-5'>
                <img src={smallpictureUrl} alt={`name`} className='w-full'/>
            </div>
            <div>   
                <h4 className='font-permanent-marker text-lg mb-6'>{name}</h4>
                <div className='font-fira flex flex-col gap-3 mb-14'>
                    <p>Roast: {roast}</p>
                    <div className='flex gap-2'>
                        <p className='text-nowrap'>Tastes like: </p>
                        <p className='font-semibold'>{taste}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-between items-center font-fira'>
            <p>From £{price}</p>
            <MainBtn text="QUICK ADD +" />
        </div> 
    </Link>
  )
}

export default ItemCard