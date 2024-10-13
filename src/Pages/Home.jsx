import React from 'react'
import TopBar from '../Components/TopBar.jsx'
import Navbar from '../Components/Navbar.jsx'
import DepanemCarousel from '../Components/Carousel.jsx'
import ServicesSection from '../Components/ServiceSection.jsx'
import About from '../Components/About.jsx'
import Facts from '../Components/Facts.jsx'
import OurServices from '../Components/OurServices.jsx'
import VideoAndForm from '../Components/VideoAndBooking.jsx'
import OurBests from '../Components/OurBests.jsx'
import Testimonials from '../Components/Testimonials.jsx'
import Footer from '../Components/Footer.jsx'
import BackToTop from '../Components/BackToTop.jsx'



export default function Home() {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <DepanemCarousel />
        <ServicesSection/>
        <About/>
        <Facts />
        <OurServices />
        <VideoAndForm />
        <OurBests />
        <Testimonials />
        <Footer />
        <BackToTop />
  

    </div>
  )
}
