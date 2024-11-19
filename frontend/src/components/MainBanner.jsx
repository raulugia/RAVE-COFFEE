import React from 'react'
import MainCard from '../components/MainCard'

const MainBanner = ({imgSrc, imgAlt, cardHeader, cardText}) => {
  return (
    <div className='flex mb-10 md:mb-20'>
        <MainCard header={cardHeader} text={cardText} />
        <img src={imgSrc} alt={imgAlt} className='w-1/2 hidden md:block'/>
    </div>
  )
}

export default MainBanner