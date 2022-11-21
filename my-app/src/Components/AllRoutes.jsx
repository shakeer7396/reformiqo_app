import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Errror from '../Pages/Errror'
import Footer from '../Pages/Footer'
import Home from '../Pages/Home'
import Navbar from '../Pages/Navbar'
import Recover from '../Pages/Recover'
import Services from '../Pages/Services'
import SignIn from '../Pages/SignIn'
import Signup from '../Pages/Signup'
import SingleServicesPage from '../Pages/SingleServicesPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/recover' element={<Recover />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/singleService' element={<SingleServicesPage />} />
        <Route path='*' element={<Errror />} />
    </Routes>
   
  )
}

export default AllRoutes