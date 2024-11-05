import React from 'react';
import { Carousel } from 'react-bootstrap';
import Testimonial1 from '../assets/img/WhatsApp Image 2024-10-02 at 5.27.04 PM (1).jpeg';
import Testimonial2 from '../assets/img/WhatsApp Image 2024-10-02 at 5.27.04 PM (1).jpeg';
import Testimonial3 from '../assets/img/WhatsApp Image 2024-10-02 at 5.27.04 PM (1).jpeg';
import Testimonial4 from '../assets/img/WhatsApp Image 2024-10-02 at 5.27.04 PM (1).jpeg';
import { FaStar } from 'react-icons/fa';  // Utiliser les icônes de React

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "J'ai contacté un technicien en plein milieu de la nuit pour une urgence. Je suis vraiment satisfait de la rapidité et de la qualité du service",
      img: Testimonial1,
      name: "Honorine",
      profession: "Profession 1",
      stars: 5
    },
    {
      id: 2,
      text: "J'avais des fuites d'eau dans la cuisine, et grâce à cette application, j'ai trouvé un plombier disponible rapidement. Travail soigné et efficace",
      img: Testimonial2,
      name: "Gracie",
      profession: "Profession 2",
      stars: 5
    },
    {
      id: 3,
      text: "J'ai eu une panne d'électricité un dimanche soir, et en moins de 30 minutes, un technicien qualifié était chez moi. Service au top !",
      img: Testimonial3,
      name: "Deniwa",
      profession: "Profession 3",
      stars: 5
    },
    {
      id: 4,
      text: "Un dépannage rapide pour ma voiture en panne sur la route. Le technicien était à l'heure et très professionnel. Je recommande fortement ",
      img: Testimonial4,
      name: "Pelagie",
      profession: "Profession 4",
      stars: 5
    },
  ];

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="text-secondary text-uppercase">Temoignages</h6>
          <h1 className="mb-5">Que disent nos utilisateurs!</h1>
        </div>
        <Carousel className="testimonial-carousel">
          {testimonials.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <div className="text-center">
                <div className="testimonial-text bg-light text-center p-4 mb-4">
                  <p className="mb-0">{testimonial.text}</p>
                </div>
                <img className="bg-light rounded-circle p-2 mx-auto mb-2" src={testimonial.img} style={{ width: '80px', height: '80px' }} alt={testimonial.name} />
                <div className="mb-2">
                  {[...Array(testimonial.stars)].map((_, index) => (
                    <FaStar color='#ffc' key={index} className="text-secondary" />
                  ))}
                </div>
                <h5 className="mb-1">{testimonial.name}</h5>
                <p className="m-0">{testimonial.profession}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
