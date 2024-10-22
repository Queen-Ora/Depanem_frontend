import React, { useEffect } from 'react';
import { FaCheck, FaUsersCog, FaUsers, FaWrench } from 'react-icons/fa'; // React Icons

import counterUp from 'counterup2'; // Utilisez import pour counterup2

export default function Facts() {
  useEffect(() => {
  
    const counters = document.querySelectorAll('[data-toggle="counter-up"]');
    counters.forEach(counter => {
      counterUp(counter, {
        duration: 2000, // Durée de l'animation
        delay: 16, // Délai entre les incréments
      });
    });
  }, []);

  return (
    <div className="container-fluid fact bg-dark my-5 py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3 text-center wow fadeIn" >
            <FaCheck className="fa-2x text-white mb-3"  size={50}/>
            <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
            <p className="text-white mb-0">Years Experience</p>
          </div>
          <div className="col-md-6 col-lg-3 text-center " >
            <FaUsersCog className="fa-2x text-white mb-3" size={50} />
            <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
            <p className="text-white mb-0">Expert Technicians</p>
          </div>
          <div className="col-md-6 col-lg-3 text-center ">
            <FaUsers className="fa-2x text-white mb-3" size={50} />
            <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
            <p className="text-white mb-0">Utilisateurs</p>
          </div>
          <div className="col-md-6 col-lg-3 text-center  " >
            <FaWrench className="fa-2x text-white mb-3" size={50} />
            <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
            <p className="text-white mb-0">Completed Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
}
