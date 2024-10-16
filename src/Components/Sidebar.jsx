// src/Sidebar.js

import React, { useState } from 'react';
import './Sidebar.css'; // Create this CSS file for custom styles
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`wrapper ${isActive ? 'active' : ''}`}>
            {/* Sidebar */}
            <nav id="sidebar" className={isActive ? 'active' : ''}>
                <div className="sidebar-header">
                    <h4>Dacor Sidebar</h4>
                </div>
                <ul className="list-unstyled components">
                    <p>Dummy Heading</p>
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            Home
                        </a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><a href="#">Home 1</a></li>
                            <li><a href="#">Home 2</a></li>
                            <li><a href="#">Home 3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">About</a></li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            Pages
                        </a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul className="list-unstyled CTAs">
                    <li><a href="#" className="download">Download source</a></li>
                    <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a></li>
                </ul>
            </nav>

            {/* Page Content */}
            <div id="content">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button type="button" id="sidebarCollapse" className="btn text-sidebar bg-turbo-yellow" onClick={toggleSidebar}>
                        {isActive ? <FaArrowRight /> : <FaArrowLeft />}
                            <span></span>
                        </button>
                    </div>
                </nav>

                <h2>Collapsible Sidebar Using Bootstrap 4</h2>
                <p>Lorem ipsum dolor sit amet...</p>
                {/* Add more content as needed */}
            </div>
        </div>
    );
};

export default Sidebar;
