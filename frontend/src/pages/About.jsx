import React from 'react'
import AboutBanner from "../assets/About-Banner.jpg"
import coffeebeans from "../assets/coffee-beans.svg"
import toplines from "../assets/top-lines.svg"
import aboutText from "../utils/aboutText.js"

const About = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row mb-20">
            <div className="bg-black md:w-1/2 py-10 md:py-0 flex flex-col gap-5 items-center justify-center">
                <img src={toplines} alt="lines" />
                <p className='font-permanent-marker text-4xl lg:text-5xl text-white'>ABOUT RAVE COFFEE</p>
                <img src={coffeebeans} alt="coffee beans" className='mt-3'/>
            </div>
            <img src={AboutBanner} alt="" className='md:w-1/2'/>
        </div>
        <section className="px-5">

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
        </section>
    </div>
  )
}

export default About