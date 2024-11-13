import React from 'react'
import AboutBanner from "../assets/About-Banner.jpg"
import coffeebeans from "../assets/coffee-beans.svg"
import toplines from "../assets/top-lines.svg"

const About = () => {
  return (
    <div>
        <div className="flex mb-20">
            <div className="bg-black w-1/2 flex flex-col gap-5 items-center justify-center">
                <img src={toplines} alt="lines" />
                <p className='font-permanent-marker text-5xl text-white'>ABOUT RAVE COFFEE</p>
                <img src={coffeebeans} alt="coffee beans" className='mt-3'/>
            </div>
            <img src={AboutBanner} alt="" className='w-1/2'/>
        </div>
        <section className="px-5">

            <div className='flex justify-center mb-10'>
                <iframe
                    width="1000"
                    height="528"
                    src="https://www.youtube.com/embed/cmcNsKrPIa8?si=tnWdSXddwUSQqA9t" 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
        </section>
    </div>
  )
}

export default About