import React from 'react'
import HeroSection from './evComponents/HeroSection'
import HowItWorks from './evComponents/Work'
import WhyChooseUs from './evComponents/Choose'
import RevolutionizeCharging from './evComponents/Revolution'
import Footer from './homeComponents/Footer'
import Navbar from './evComponents/NavBar'
function Ev() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <HowItWorks/>
        <WhyChooseUs/>
        <RevolutionizeCharging/>
        <Footer/>
    </div>
  )
}

export default Ev