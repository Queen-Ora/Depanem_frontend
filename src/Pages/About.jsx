import React from 'react'
import TopBar from '../Components/TopBar'
import Navbar from '../Components/Navbar'
import ServicesSection from '../Components/ServiceSection'
import About from '../Components/About'
import Facts from '../Components/Facts'
import OurBests from '../Components/OurBests'
import Footer from '../Components/Footer'
import BackToTop from '../Components/BackToTop'

export default function AboutPage() {
  return (
    <div>
    <TopBar/>
    <Navbar/>
 <ServicesSection/>
 <About/>
 <Facts/>
 <OurBests/>
 <Footer/>
 <BackToTop />
    </div>
  )
}
