import React from 'react'

const WholesaleCard = ({imgSrc, imgAlt, header, text}) => {
  return (
    <div className='flex flex-col items-center md:w-1/3 self-stretch'>
        <div className='w-full overflow-hidden object-cover'>
            <img src={imgSrc} alt={imgAlt} className='h-full w-full'/>
        </div>
        <div className='flex flex-col items-center gap-5 mt-5 text-center'>
            <h3 className='font-permanent-marker text-xl'>{header}</h3>
            <p className='font-fira text-center'>{text}</p>
        </div>
    </div>
  )
}

export default WholesaleCard