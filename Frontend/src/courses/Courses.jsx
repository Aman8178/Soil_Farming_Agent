import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Soilstudy from '../components/Soilstudy'

function Courses() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <Soilstudy/>
      </div>
      <Footer/>
    </div>
  )
}

export default Courses