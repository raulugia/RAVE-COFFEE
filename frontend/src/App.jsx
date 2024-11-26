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
import SignIn from './pages/SignIn'
import Account from './pages/Account'
import AccountDetails from './pages/AccountDetails'
import ProtectedRoute from './components/ProtectedRoute'
import AccountNav from './components/AccountNav'
import AccountResetPassword from './pages/AccountResetPassword'


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
          
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<SignIn />}/>

          <Route path="/account" element={<ProtectedRoute />}>
            <Route element={<AccountNav />}>
              <Route index element={<Account />}/>
              <Route path="details" element={<AccountDetails />}/>
              <Route path="reset-password" element={<AccountResetPassword />}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
