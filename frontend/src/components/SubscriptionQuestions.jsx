import React, { useState, useRef } from 'react'
import underline from "../assets/underline.png"
import { subscription_questions } from '../utils/texts'

const SubscriptionQuestions = () => {
  const [selected, setSelected] = useState(null)

  const handleClick = (index) => {
    if(selected === index){
      setSelected(null)
    }else{
      setSelected(index)
    }
  }
  
  return (
    <div className='mt-20 mx-[8%]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl text-center font-permanent-marker mb-2'>Common Questions</h1>
        <img src={underline} alt="underline" className='w-[400px] h-[18px]'/>
      </div>
      <div className='mt-16'>
        <div className='w-full h-[1px] bg-gray-200 mb-4'></div>
        {
          subscription_questions.map((item, index) => (
            <div key={item.question} className='flex flex-col font-fira'>
              <div className='flex justify-between hover:cursor-pointer' onClick={() => handleClick(index)}>
                <h3 className='font-semibold'>{item.question}</h3>
                <button>{`${selected === index ? "-" : "+"}`}</button>
              </div>
                <p className={`${selected === index ? "animate-slide-down" : "hidden"} `}>{item.answer}</p>
                <div className='w-full h-[1px] bg-gray-200 my-4'></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SubscriptionQuestions