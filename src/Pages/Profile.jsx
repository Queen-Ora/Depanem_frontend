// src/App.js

import React, { useEffect, useState } from 'react';

// import Content from './Content';
import Sidebar from '../Components/Sidebar';
import Content from '../Components/content';


const Profile = () => {
    const [activePage, setActivePage] = useState('home'); // Gérer la page active ici

    // const handleContentChange = (page) => {
    //     setActivePage(page); // Update active page
    // };
    // const userId = {"value": 1, "expiry": 1729378172985};

// {console.log(userId)};
// {console.log(userId['value'])};



    return (
        <div className="d-flex">
            <Sidebar setActivePage={setActivePage} />
            <Content activePage={activePage} /> {/* Transmettre activePage à Content */}
        </div>
    );
};

export default Profile;
