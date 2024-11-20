import React from 'react'
import wholesaleIphone from '../assets/wholesale_iphone.jpg'
import wholesaleBox from '../assets/wholesale_box.png'
import wholesaleFallingBeans from '../assets/wholesale_fallingbeans.png'

const WholesaleCard = ({imgSrc, imgAlt, header, text}) => {
    const source = imgSrc === "wholesaleIphone" ? wholesaleIphone : imgSrc === "wholesaleBox" ? wholesaleBox : wholesaleFallingBeans;
  return (
    <div className='md:w-1/3'>
        <div>
            <img src={source} alt={imgAlt} />
        </div>
        <div className='flex flex-col items-center gap-5 mt-5'>
            <h3 className='font-permanent-marker text-xl'>{header}</h3>
            <p className='font-fira text-center'>{text}</p>
        </div>
    </div>
  )
}

export default WholesaleCard