import React from 'react';
import { Carousel } from 'react-bootstrap';
import Testimonial1 from '../assets/img/testimonial-1.jpg';
import Testimonial2 from '../assets/img/testimonial-2.jpg';
import Testimonial3 from '../assets/img/testimonial-3.jpg';
import Testimonial4 from '../assets/img/testimonial-4.jpg';
import { FaStar } from 'react-icons/fa';  // Utiliser les icônes de React

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
      img: Testimonial1,
      name: "Client Name 1",
      profession: "Profession 1",
      stars: 5
    },
    {
      id: 2,
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
      img: Testimonial2,
      name: "Client Name 2",
      profession: "Profession 2",
      stars: 5
    },
    {
      id: 3,
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
      img: Testimonial3,
      name: "Client Name 3",
      profession: "Profession 3",
      stars: 5
    },
    {
      id: 4,
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
      img: Testimonial4,
      name: "Client Name 4",
      profession: "Profession 4",
      stars: 5
    },
  ];

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="text-secondary text-uppercase">Testimonial</h6>
          <h1 className="mb-5">Our Clients Say!</h1>
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
