import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Coffee from './pages/Coffee'
import Equipment from './pages/Equipment'
import Wholesale from './pages/Wholesale'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Navbar from './components/Navbar'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Routes>
        <Route element={ <Navbar /> }>
          <Route path="/" element={<Home />}/>
          <Route path="/coffee" element={<Coffee />}/>
          <Route path="/equipment" element={<Equipment />}/>
          <Route path="/Wholesale" element={<Wholesale />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact-us" element={<ContactUs />}/>
          <Route path="/account/">
            <Route path="register" element={<Register />}/>
            <Route path="login" element={<Register />}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
