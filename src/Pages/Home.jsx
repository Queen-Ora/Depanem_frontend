import React, { useEffect, useState } from 'react'
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
import video from "../assets/Launch_video.mp4";
function Preloader({ onEnd }) {
  return (
    <div className="preloader" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: 'black' }}>
      <video 
        src={video} 
        autoPlay 
        muted 
        onEnded={onEnd} 
        onError={onEnd}
        // style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}


export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Vérifier si la vidéo a déjà été lue (utiliser 'hasSeenIntro' comme clé dans localStorage)
    const hasSeenIntro = localStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      // Si non, montrer la vidéo et enregistrer l'état dans localStorage
      setShowVideo(true);
      localStorage.setItem("hasSeenIntro", "true");
    }
  }, []);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };
  return (
  <div>
     {showVideo ? (
        <Preloader onEnd={handleVideoEnd} />
      ) : (
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
       
      )}
  </div>
  )
}
