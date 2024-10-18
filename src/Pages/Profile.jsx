// src/App.js

import React, { useState } from 'react';

// import Content from './Content';
import Sidebar from '../Components/Sidebar';
import Content from '../Components/content';

const Profile = () => {
    const [activePage, setActivePage] = useState('home'); // Gérer la page active ici

    const handleContentChange = (page) => {
        setActivePage(page); // Update active page
    };

    return (
        <div className="d-flex">
            <Sidebar setActivePage={setActivePage} /> {/* Transmettre setActivePage à Sidebar */}
            <Content activePage={activePage} /> {/* Transmettre activePage à Content */}
        </div>
    );
};

export default Profile;
