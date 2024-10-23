import React, { useEffect, useState } from 'react';
import { FaCheck, FaUsersCog, FaUsers, FaWrench } from 'react-icons/fa'; 
import counterUp from 'counterup2'; 
import axios from 'axios';

export default function Facts() {
  const [users, setUsers] = useState('');
  const [technicians, setTechnicians] = useState('');

  useEffect(() => {
    // Fetch data from the API
    const fetchTechnicians = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/depanem/CountTechnicians')
        setTechnicians(response.data['0']);
      } catch (error) {
        console.error('Error fetching technicians:', error);
      }
    };

    const fetchUsers = async () =>{
      try {
        const response = await axios.get('http://localhost:8000/api/depanem/CountUsers')
        setUsers(response.data['0']);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    
    fetchTechnicians();
    fetchUsers();
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll('[data-toggle="counter-up"]');
    counters.forEach(counter => {
      counterUp(counter, {
        duration: 2000, 
        delay: 16, 
      });
    });
  }, [technicians, users]); // Trigger animation when technicians is updated

  return (
    <div className="container-fluid fact bg-dark my-5 py-5">
      <div className="container">
        <div className="row g-4">

          <div className="col-md-6 col-lg-3 text-center wow fadeIn">
            <FaCheck className="fa-2x text-white mb-3" size={50}/>
            <h2 className="text-white mb-2" data-toggle="counter-up">1</h2>
            <p className="text-white mb-0">Années d'experiences</p>
          </div>

          <div className="col-md-6 col-lg-3 text-center">
            <FaUsersCog className="fa-2x text-white mb-3" size={50} />
            <h2 className="text-white mb-2" data-toggle="counter-up">{technicians}</h2>
            <p className="text-white mb-0">Expert Techniciens</p>
          </div>

          <div className="col-md-6 col-lg-3 text-center">
            <FaUsers className="fa-2x text-white mb-3" size={50} />
            <h2 className="text-white mb-2" data-toggle="counter-up">{users}</h2>
            <p className="text-white mb-0">Utilisateurs</p>
          </div>

          <div className="col-md-6 col-lg-3 text-center">
            <FaWrench className="fa-2x text-white mb-3" size={50} />
            <h2 className="text-white mb-2" data-toggle="counter-up">120</h2>
            <p className="text-white mb-0">missions accomplies</p>
          </div>

        </div>
      </div>
    </div>
  );
}
