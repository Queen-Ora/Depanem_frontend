import React from 'react'
import TopBar from '../Components/TopBar'
import Navbar from '../Components/Navbar'
import ServicesSection from '../Components/ServiceSection'
import VideoAndForm from '../Components/VideoAndBooking'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testimonials'
import BackToTop from '../Components/BackToTop'

export default function Services() {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <ServicesSection/>
        <VideoAndForm/>
        <Testimonials/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}
