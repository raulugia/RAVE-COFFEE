import React from 'react'
import { Link } from 'react-router-dom'
import MainBtn from './MainBtn'

const ItemCard = ({name, id, price, roast, taste, smallpictureUrl}) => {
  return (
    <Link to={`/coffee/${id}`} className='mb-14'>
        <div className='max-w-[400px] mb-5'>
            <img src={smallpictureUrl} alt={`name`} className='w-full'/>
        </div>
        <div>
            <h4 className='font-permanent-marker text-lg mb-6'>{name}</h4>
            <div className='font-fira flex flex-col gap-3 mb-14'>
                <p>Roast: {roast}</p>
                <p>Tastes like: <span className='font-semibold'>{taste}</span></p>
            </div>
            <div className='flex justify-between font-fira'>
                <p>From £{price}</p>
                <MainBtn text="QUICK ADD +" />
            </div>
        </div>
    </Link>
  )
}

export default ItemCard