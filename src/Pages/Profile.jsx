// src/App.js

import React, { useEffect, useState } from 'react';

// import Content from './Content';
import Sidebar from '../Components/Sidebar';
import Content from '../Components/Content';
import axios from 'axios';


const Profile = () => {
    const [activePage, setActivePage] = useState('home'); // Gérer la page active ici
    const [userType, setUserType] = useState(null);
    const userId = JSON.parse(localStorage.getItem('UserId'));

    useEffect(() => {
        // Fonction pour récupérer le type d'utilisateur (Technicien ou non)
        const fetchUserType = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/depanem/CheckIsTechnician/${userId}`);
                const isTechnician = response.data['0'] ; // S'assure que c'est bien un booléen
                setUserType(response.data['0'] ? 'Technicien' : 'Utilisateur'); // Mettez à jour le type d'utilisateur

                // console.log(response.data['0']); //[]
                // console.log(isTechnician);
                // console.log(response.data);
                // console.log(userType);

                if (isTechnician) {
                    setActivePage('technicianDashboard'); // Page d'accueil pour technicien
                } else {
                    setActivePage('home'); // Page d'accueil pour utilisateur normal
                }
                
            } catch (err) {
                console.error(err); // Gérer l'erreur ici
            }
        };
        fetchUserType();
    }, [userId]);

          

    // const handleContentChange = (page) => {
    //     setActivePage(page); // Update active page
    // };
    // const userId = {"value": 1, "expiry": 1729378172985};

// {console.log(userId)};
// {console.log(userId['value'])};



    return (
        <div className="d-flex">
            <Sidebar setActivePage={setActivePage} />
            <Content userType={userType}  activePage={activePage} /> {/* Transmettre activePage à Content */}
        </div>
    );
};

export default Profile;
