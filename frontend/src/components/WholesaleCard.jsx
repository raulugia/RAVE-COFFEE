import React from 'react'

const WholesaleCard = ({imgSrc, imgAlt, header, text}) => {
  return (
    <div className='flex flex-col items-center max-w-1/3'>
        <div>
            <img src={imgSrc} alt={imgAlt} />
        </div>
        <div className='flex flex-col items-center gap-5 mt-5'>
            <h3 className='font-permanent-marker text-xl'>{header}</h3>
            <p className='font-fira text-center'>{text}</p>
        </div>
    </div>
  )
}

export default WholesaleCard