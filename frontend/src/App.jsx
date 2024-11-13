import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Routes>
        <Route element={ <Navbar /> }>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact-us" element={<ContactUs />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
