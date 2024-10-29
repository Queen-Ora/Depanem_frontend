import React from 'react';
import aboutImg1 from '../assets/img/carousel/about_1.jfif'; // Importez vos images
import aboutImg2 from '../assets/img/carousel/about_2.jfif'; // Importez vos images
import { FaCheck } from 'react-icons/fa';

export default function About() {
  return (
    <div className="container-xxl py-5"> 
      <div className="container">
        <div className="row g-5">

          <div className="col-lg-6" data-aos="zoom-out-right" data-aos-duration="3000">
            <h6 className="text-secondary text-uppercase">Qui sommes-nous ?</h6>
            <h1 className="mb-4">Nous sommes une équipe passionnée par la technologie et le service à la personne.</h1>
            <p className="mb-4">Notre plateforme a été créée pour combler un vide dans la gestion des urgences techniques à domicile et en entreprise. Grâce à un réseau de professionnels certifiés et une interface intuitive, nous facilitons la mise en relation entre ceux qui ont besoin d’aide et les techniciens qui peuvent intervenir rapidement. <br/>
            Voici ce qui nous rend unique. 
            </p>
            <p className="fw-medium text-primary">
              
            <FaCheck className="text-success me-3"/>Réactivité 
            </p>
            <p className="fw-medium text-primary">
            <FaCheck className="text-success me-3"/>Professionnalisme 
            </p>
            <p className="fw-medium text-primary">
            <FaCheck className="text-success me-3"/>Disponibilité 24/7 
            </p>
          </div>

          <div className="col-lg-6 pt-4" style={{ minHeight: '500px' }} data-aos="fade-up-left" data-aos-duration="3000">
            <div className="position-relative h-100 wow fadeInUp" >
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
