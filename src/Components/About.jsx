import React from 'react';
import aboutImg1 from '../assets/img/carousel/about_1.jfif'; // Importez vos images
import aboutImg2 from '../assets/img/carousel/about_2.jfif'; // Importez vos images
import { FaCheck } from 'react-icons/fa';

export default function About() {
  return (
    <div className="container-xxl py-5"> 
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">À propos de nous</h6>
            <h1 className="mb-4">Nous sommes une entreprise de plomberie de confiance depuis 1990</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
            </p>
            <p className="fw-medium text-primary">
              
            <FaCheck className="text-success me-3"/>Plomberie résidentielle et commerciale
            </p>
            <p className="fw-medium text-primary">
            <FaCheck className="text-success me-3"/>Services de qualité à des prix abordables
            </p>
            <p className="fw-medium text-primary">
            <FaCheck className="text-success me-3"/>Services d'urgence disponibles 24h/24 et 7j/7
            </p>
          </div>
          <div className="col-lg-6 pt-4" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100 wow fadeInUp" data-wow-delay="0.5s">
              <img 
                className="position-absolute img-fluid w-100 h-100" 
                src={aboutImg1} 
                style={{ objectFit: 'cover', padding: '0 0 50px 100px' }} 
                alt="À propos de nous" 
              />
              <img 
                className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50" 
                src={aboutImg2} 
                style={{ objectFit: 'cover' }} 
                alt="Nos services" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
