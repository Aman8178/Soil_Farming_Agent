import React from 'react'
import Navbar from '../components/Navbar'
import Detail from '../components/Detail'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'

function Home() {
  return (
    <div>
      <Navbar/>
      <Detail/>
      <Freebook/>
      <Footer/>
    </div>
  )
}

export default Home
