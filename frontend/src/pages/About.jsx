import React from 'react'
import MainCard from '../components/MainCard.jsx'
import aboutText from "../utils/aboutText.js"

const About = () => {
  return (
    <div>
        <MainCard header="ABOUT RAVE COFFEE"/>
        <div className="px-5 max-w-[1024px] mx-auto">
            <div className='flex flex-col items-center mb-10'>
                <iframe
                    src="https://www.youtube.com/embed/cmcNsKrPIa8?si=tnWdSXddwUSQqA9t" 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    className='aspect-video w-full'
                />

                <div className='font-fira flex flex-col gap-6 text-sm mt-10 leading-loose'>
                    {
                        aboutText.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default About