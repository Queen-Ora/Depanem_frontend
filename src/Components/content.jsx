// src/Content.js

import React from 'react';
import Facts from '../Components/Facts';
import Greetings from './Greetings';

const Content = ({ activePage }) => {
    const renderContent = () => {
        switch (activePage) {
            case 'home':
                return <Greetings />;
            case 'about':
                return <h2 style={{ textAlign: 'center' }}>About Us</h2>;
            case 'page1':
                return <h2 style={{ textAlign: 'center' }}>Page 1</h2>;
            case 'page2':
                return <h2 style={{ textAlign: 'center' }}>Page 2</h2>;
            case 'portfolio':
                return <h2 style={{ textAlign: 'center' }}>Portfolio</h2>;
            case 'contact':
                return <h2 style={{ textAlign: 'center' }}>Contact Us</h2>;
            default:
                return <h2 style={{ textAlign: 'center' }}>Welcome!</h2>;
        }
    };

    return (
        <div id="content" className="p-4">
            {renderContent()}
        </div>
    );
};

export default Content;
