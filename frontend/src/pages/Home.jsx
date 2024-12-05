import React from 'react'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div className='min-h-screen'>
      Home
      <Carousel header='Featured Coffee' type='coffee' />
      <Carousel header='Featured Equipment' type='equipment' />
    </div>
  )
}

export default Home