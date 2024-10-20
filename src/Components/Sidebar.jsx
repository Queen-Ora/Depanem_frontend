import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Sidebar.css'; // Fichier CSS
import axios from 'axios';

const Sidebar = ({ setActivePage }) => {
    const [userData, setUserData] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const userId = JSON.parse(localStorage.getItem('UserId'));

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };    
    // Fonction pour changer de page et fermer la sidebar
    const handlePageChange = (page) => {
        setActivePage(page);
        toggleSidebar(); // Fermer la sidebar après le clic
    };

    useEffect(() => {
     
        // Fonction pour récupérer les données de l'utilisateur
        const fetchUser = async () => {
            // console.log("Fetching user data...");
            try {
                const response = await axios.get(`http://localhost:8000/api/depanem/currentUser/${userId}`);
                // const response = await axios.get(`http://localhost:8000/api/depanem/currentUser/1`);
                // console.log(response.data.user);
                
                setUserData(response.data.user); // Stocke les données de l'utilisateur
            } catch (err) {
                // setError(err.response ? err.response.data.message : 'Une erreur est survenue');
            }
        };

        fetchUser(); // Appelle l'API au chargement du composant
    }, [] );

    //Fonction pour la deconnexion
    const handleLogout = () => {
        localStorage.removeItem('UserId');
        //redirect vers la page de connexion
        window.location.href = '/';
        // window.location.reload();
    };
    

    return (
        <>
            {/* Sidebar */}
            <nav id="sidebar" className={isActive ? 'active' : ''}>
            <div className="sidebar-header">
    <img 
        src={userData && userData.avatar ? userData.avatar : 'http://localhost:8000/default.png'} 
        alt="Logo" 
        className="logo" 
        width={100} 
    /> <br />

    <p>{userData && userData.firstname}</p>
</div>

                <ul className="list-unstyled components">
                    <li onClick={() => handlePageChange('home')}>
                        <button className="btn btn-primary">Accueil</button>
                    </li>
                    <li onClick={() => handlePageChange('about')}>
                        <a href="#">About</a>
                    </li>
                    <li onClick={() => handlePageChange('page1')}>
                        <a href="#">Page 1</a>
                    </li>
                    <li onClick={() => handlePageChange('page2')}>
                        <a href="#">Page 2</a>
                    </li>
                    <li onClick={() => handlePageChange('portfolio')}>
                        <a href="#">Portfolio</a>
                    </li>
                    <li onClick={() => handlePageChange('contact')}>
                        <a href="#">Contact</a>
                    </li>
                    <button className="btn btn-primary">Retour</button>
                </ul>
                <button className="btn btn-danger" onClick={handleLogout}>Deconnexion</button>
            </nav>

            {/* Toggle Button - Always visible */}
            <button
                type="button"
                id="sidebarCollapse"
                className="btn"
                onClick={toggleSidebar}
            >
                {isActive ? <FaArrowLeft /> : <FaArrowRight />}
            </button>
        </>
    );
};

export default Sidebar;
