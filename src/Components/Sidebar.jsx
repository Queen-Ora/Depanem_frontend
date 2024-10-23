import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css'; // Fichier CSS
import axios from 'axios';
import { BiEdit } from 'react-icons/bi';
import { IoMdHome } from 'react-icons/io';
import { GoHistory } from 'react-icons/go';
import { IoSettings } from 'react-icons/io5';

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
    /><br />

    <p>{userData && userData.firstname}</p>
    <BiEdit size={25} color="white" /> 
</div>

                <ul className="list-unstyled components">
                    <li onClick={() => handlePageChange('home')}>
                        <button className="btn btn-primary"> <IoMdHome size={25}/> Accueil</button>
                    </li>
                    <li onClick={() => handlePageChange('history')}>
                    <button className="btn btn-primary"> <GoHistory size={25}/> Historique</button>
                    </li>
                    <li onClick={() => handlePageChange('settings')}>
                    <button className="btn btn-primary"> <IoSettings size={25}/> Parametres</button>
                    </li>
                    {/* <li onClick={() => handlePageChange('page2')}>
                        <a href="#">Page 2</a>
                    </li> */}
                    {/* <li onClick={() => handlePageChange('portfolio')}>
                        <a href="#">Portfolio</a>
                    </li> */}
                    {/* <li onClick={() => handlePageChange('contact')}>
                        <a href="#">Contact</a>
                    </li> */}
                    <a href="/"><button className="btn btn-primary" ><FaArrowLeft size={25} /> Retour</button></a>
                </ul> 
                <button className="btn btn-danger" onClick={handleLogout}>   <FaSignOutAlt size={24} /> Deconnexion</button>
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
