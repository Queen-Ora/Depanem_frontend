import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

export default function Testimonials() {
  const [opinions, setOpinions] = useState([]);


  useEffect(() => {
    // Récupérer les données d'opinions depuis l'API
    const fetchOpinions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/depanem/getOpinions'); // Remplacez l'URL par celle de votre API
        setOpinions(response.data.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des opinions:", error);
      } 
    };
    fetchOpinions();
  }, []);



  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="text-secondary text-uppercase">Témoignages</h6>
          <h1 className="mb-5">Que disent nos utilisateurs!</h1>
        </div>
        <Carousel className="testimonial-carousel">
          {opinions.map((opinion) => (
            <Carousel.Item key={opinion.id}>
              <div className="text-center">
                <img
                  className="bg-light rounded-circle p-2 mx-auto mb-2"
                  src={`http://localhost:8000/uploads/${opinion.avatar}` || 'path_to_default_avatar.png'}
                  style={{ width: '80px', height: '80px' }}
                  alt={opinion.user_name}
                />
                <div className="testimonial-text bg-light text-center ">
                  <p className="mb-0">{opinion.opinion}</p>
                </div>
                <div className="mb-2">
                  {[...Array(opinion.rate)].map((_, index) => (
                    <FaStar color='#ffc107' key={index} />
                  ))}
                </div>
                <h5 className="mb-1">{opinion.user_name}</h5>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

