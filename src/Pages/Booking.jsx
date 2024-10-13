import React from 'react'
import TopBar from '../Components/TopBar'
import Navbar from '../Components/Navbar'
import VideoAndForm from '../Components/VideoAndBooking'
import Footer from '../Components/Footer'
import BackToTop from '../Components/BackToTop'

export default function Booking() {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <VideoAndForm/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}
