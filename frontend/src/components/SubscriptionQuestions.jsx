import React, { useState, useRef, useEffect } from 'react'
import underline from "../assets/underline.png"
import { subscription_questions } from '../utils/texts'

const SubscriptionQuestions = () => {
  const [selected, setSelected] = useState({
    current: null,
    prev: null
  })

  const handleClick = (index) => {
    console.log("index", index)
    console.log("prev",selected)
    if(selected.current === index){
      setSelected({
        current: null,
        prev: index
      })
    }else if(selected.current !== index){
      setSelected(prevSelected => ({
        current: index,
        prev: prevSelected.current
      }))
    }
  }
  
  return (
    <div className=' my-10 md:my-20 mx-[8%]'>
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
                <button>{`${selected.current === index ? "-" : "+"}`}</button>
              </div>
                <p className={selected.current === index ? "animate-slide-down" : selected.prev === index ? "animate-slide-up" : "hidden"}>{item.answer}</p>
                <div className='w-full h-[1px] bg-gray-200 my-4'></div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SubscriptionQuestions