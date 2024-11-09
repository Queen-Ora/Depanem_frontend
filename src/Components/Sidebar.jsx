import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaBell, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css'; // Fichier CSS
import axios from 'axios';
import { BiEdit } from 'react-icons/bi';
import { IoMdHome } from 'react-icons/io';
import { GoHistory } from 'react-icons/go';
import { IoSettings } from 'react-icons/io5';
import { ImStatsDots } from 'react-icons/im';
import { Badge } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { MdFeedback } from 'react-icons/md';
import { AiFillMessage, AiFillSafetyCertificate } from 'react-icons/ai';

const Sidebar = ({ setActivePage }) => {
    const [userData, setUserData] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [userType, setUserType] = useState(null);
    const userId = JSON.parse(localStorage.getItem('UserId'));
    const [notificationCount, setNotificationCount] = useState(); // Notification count fixé à 5 pour le moment
    const navigate = useNavigate();

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
            try {
                const response = await axios.get(`http://localhost:8000/api/depanem/currentUser/${userId}`);
                setUserData(response.data.user); // Stocke les données de l'utilisateur
            } catch (err) {
                console.error(err); // Gérer l'erreur ici
            }
        };

        // Fonction pour détecter si l'utilisateur est technicien ou non
        const fetchUserType = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/depanem/CheckIsTechnician/${userId}`);
                const isTechnician = response.data['0'] ; // S'assure que c'est bien un booléen
                setUserType(response.data['0'] ? 'Technicien' : 'Utilisateur'); // Mettez à jour le type d'utilisateur

                // console.log(response.data['0']); //[]
                // console.log(isTechnician);
                // console.log(response.data);
                // console.log(userType);
                
            } catch (err) {
                console.error(err); // Gérer l'erreur ici
            }
        };

        const fetchNotificationCount = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/depanem/CountCheckedRequests/${userId}`);
                // console.log(response.data.count);
                
                // const count = response.data['0']; // S'assure que c'est bien un booléen
                setNotificationCount(response.data.count); // Mettez à jour le type d'utilisateur
            } catch (err) {
                console.error(err); // Gérer l'erreur ici
            }
        };

        
        fetchUserType(); // Appelle l'API au chargement du composant
        fetchUser(); // Appelle l'API au chargement du composant
        fetchNotificationCount();

        const intervalId = setInterval(() => {
            fetchNotificationCount();
           
        }, 15000);

        // Nettoyage de l'intervalle lors du démontage du composant
        return () => clearInterval(intervalId);
    }, [userId]);

    const handleEditClick = () => {
        navigate(`userEdit/${userId}`);
      };

      const handleTechnicianEdit = () => {
        navigate(`technicianEdit/${userId}`);
      };

    // Fonction pour la déconnexion
    const handleLogout = () => {
        localStorage.removeItem('UserId');
        // Redirection vers la page de connexion
        window.location.href = '/';
    };

    return (
        <>
            {/* Sidebar */}
                    {userType === 'Technicien' ? (
                                   <nav id="sidebar" className={isActive ? 'active' : ''}>
                                   <div className="sidebar-header">
                                       <img 
                                           src={userData && userData.avatar ? userData.avatar : 'http://localhost:8000/default.png'} 
                                           alt="Logo" 
                                           className="logo" 
                                           width={100} 
                                       /><br />
                                       <p>{userData && userData.firstname}</p>
                                       <p style={{fontFamily: "DynaPuff"}}>{userData && userData.profession}</p>
                                       <BiEdit size={25} color="white" title='Modifier le profil' onClick={() => handleTechnicianEdit()} /> 
                                   </div>
                                   {/* <BiEdit size={25} color="white" title='Modifier le profil' onClick={handleEditClick } /> */}
                                   <ul className="list-unstyled components">
                                       {/* <li onClick={() => handlePageChange('technicianDashboard')}>
                                           <button className="btn btn-primary"> <ImStatsDots size={25}/> Tableau de bord</button>
                                       </li> */}
                                       <li onClick={() => handlePageChange('home')}>
                                           <button className="btn btn-primary"> <IoMdHome size={25}/> Accueil</button>
                                       </li>
                                       <li onClick={() => handlePageChange('notifications')}>
                                       <button className="btn btn-primary">
                                <FaBell size={25}/> Notifications{' '}
                                <Badge pill bg="danger">{notificationCount}</Badge> {/* Ajout du badge */}
                            </button>
                                    </li>
                                       <li onClick={() => handlePageChange('history')}>
                                           <button className="btn btn-primary"> <GoHistory size={25}/> Historique</button>
                                       </li>
                                       {/* <li onClick={() => handlePageChange('feedback')}>
                                        <button className="btn btn-primary"> <MdFeedback size={25}/> Publier un avis</button>
                                    </li> */}

                                       {/* <li onClick={() => handlePageChange('certificate')}>
                                        <button className="btn btn-primary"> <AiFillSafetyCertificate  size={25}/> Demander un certificat</button>
                                    </li> */}
                                     
                                       {/* <li onClick={() => handlePageChange('depanemBot')}>
                                           <button className="btn btn-primary"> <AiFillMessage size={25}/> DepanemBot</button>
                                       </li> */}
                                       <li onClick={() => handlePageChange('settings')}>
                                           <button className="btn btn-primary"> <IoSettings size={25}/> Paramètres</button>
                                       </li>
                                       <a href="/"><button className="btn btn-primary"><FaArrowLeft size={25} /> Retour</button></a>
                                   </ul> 
                                   <button className="btn btn-danger" onClick={handleLogout}>
                                       <FaSignOutAlt size={24} /> Déconnexion
                                   </button>
                               </nav>
                            ) : (
                                <nav id="sidebar" className={isActive ? 'active' : ''}>
                                <div className="sidebar-header">
                                    <img 
                                        src={userData && userData.avatar ? userData.avatar : 'http://localhost:8000/default.png'} 
                                        alt="Logo" 
                                        className="logo" 
                                        width={100} 
                                    /><br />
                                    <p>{userData && userData.firstname}</p>
                                    <BiEdit size={25} color="white" title='Modifier le profil' onClick={handleEditClick } /> 
                                </div>
                
                                <ul className="list-unstyled components">
                                    <li onClick={() => handlePageChange('home')}>
                                        <button className="btn btn-primary"> <IoMdHome size={25}/> Accueil</button>
                                    </li>
                                    <li onClick={() => handlePageChange('history')}>
                                        <button className="btn btn-primary"> <GoHistory size={25}/> Historique</button>
                                    </li>
                                    {/* <li onClick={() => handlePageChange('feedback')}>
                                        <button className="btn btn-primary"> <MdFeedback size={25}/> Publier un avis</button>
                                    </li> */}
                                    {/* <li onClick={() => handlePageChange('depanemBot')}>
                                           <button className="btn btn-primary"> <AiFillMessage size={25}/> DepanemBot</button>
                                       </li> */}
                                    <li onClick={() => handlePageChange('settings')}>
                                        <button className="btn btn-primary"> <IoSettings size={25}/> Paramètres</button>
                                    </li>
                                    <a href="/"><button className="btn btn-primary"><FaArrowLeft size={25} /> Retour</button></a>
                                </ul> 
                                <button className="btn btn-danger" onClick={handleLogout}>
                                    <FaSignOutAlt size={24} /> Déconnexion
                                </button>
                            </nav>
                            )}
            {/* Afficher du contenu différent selon le type d'utilisateur */}
        

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
