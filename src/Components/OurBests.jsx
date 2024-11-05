import React from 'react';
import Best1 from '../assets/img/ideo2.webp';
import Best2 from '../assets/img/une femme noire mecanicienne.png';
import Best3 from '../assets/img/un plombier africain.png';
import Best4 from '../assets/img/ideo4.webp';
import { FaFacebook } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { IoLogoTiktok } from 'react-icons/io5';
import './style.css';

export default function OurBests() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-secondary text-uppercase">Nos techniciens</h6>
          <h1 className="mb-5">Nos experts techniciens</h1>
        </div>
        <div className="row g-4">
          {[
            { 
              id: 1, 
              img: Best1, 
              name: 'Maurice AKAKPO', 
              designation: 'Climaticien', 
              facebook: 'https://facebook.com/johndoe', 
              whatsapp: 'https://wa.me/1234567890', // Lien WhatsApp
              tiktok: 'https://tiktok.com/@johndoe' // Lien TikTok
            },
            { 
              id: 2, 
              img: Best2, 
              name: 'Gagachou ABALO', 
              designation: 'Mecanicienne Auto', 
              facebook: 'https://facebook.com/janesmith', 
              whatsapp: 'https://wa.me/1234567891', // Lien WhatsApp
              tiktok: 'https://tiktok.com/@janesmith' // Lien TikTok
            },
            { 
              id: 3, 
              img: Best3, 
              name: 'Eliezer LARE', 
              designation: 'Plombier', 
              facebook: 'https://facebook.com/Eliezer Lare', 
              whatsapp: 'https://wa.me/92622266', // Lien WhatsApp
              tiktok: 'https://tiktok.com/@queen.ora05' // Lien TikTok
            },
            { 
              id: 4, 
              img: Best4, 
              name: 'Regina KOAMI', 
              designation: 'Electricienne', 
              facebook: 'https://facebook.com/alicejohnson', 
              whatsapp: 'https://wa.me/1234567893', // Lien WhatsApp
              tiktok: 'https://tiktok.com/@alicejohnson' // Lien TikTok
            },
          ].map((tech, index) => (
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (index + 1)}s`} key={tech.id}>
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src={tech.img} alt={tech.name} />
                </div>
                <div className="team-text">
                  <div className="bg-light">
                    <h5 className="fw-bold mb-0">{tech.name}</h5>
                    <small>{tech.designation}</small>
                  </div>
                  <div className="bg-primary">
                    <a className="btn btn-square mx-1" href={tech.facebook} target="_blank" rel="noopener noreferrer">
                      <FaFacebook size={25} />
                    </a>
                    <a className="btn btn-square mx-1" href={tech.whatsapp} target="_blank" rel="noopener noreferrer">
                      <BsWhatsapp size={25} />
                    </a>
                    <a className="btn btn-square mx-1" href={tech.tiktok} target="_blank" rel="noopener noreferrer">
                      <IoLogoTiktok size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
