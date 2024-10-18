// src/Sidebar.js

import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Sidebar.css'; // Fichier CSS

const Sidebar = ({ setActivePage }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    // Fonction pour changer de page et fermer la sidebar
    const handlePageChange = (page) => {
        setActivePage(page);
        toggleSidebar(); // Fermer la sidebar après le clic
    };

    return (
        <>
            {/* Sidebar */}
            <nav id="sidebar" className={isActive ? 'active' : ''}>
                <div className="sidebar-header">
                    {/* <h4>Dacor Sidebar</h4> */}
                </div>
                <ul className="list-unstyled components">
                    <li onClick={() => handlePageChange('home')}>
                        <a href="#">Home</a>
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
                </ul>
            </nav>

            {/* Toggle Button - Always visible */}
            <button
                type="button"
                id="sidebarCollapse"
                className="btn"
                onClick={toggleSidebar}
            >
                {isActive ? <FaArrowRight /> : <FaArrowLeft />}
            </button>
        </>
    );
};

export default Sidebar;
