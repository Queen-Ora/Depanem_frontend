// src/Content.js

import React from "react";
import Greetings from "./Greetings";
import Dashboard from "./Dashboard";
import TechnicianRequests from "./Example";
import ReceivedRequests from "./ReceivedRequests";

const Content = ({ activePage }) => {
  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Greetings />;
      case "history":
        return <TechnicianRequests />;
        <h2 style={{ textAlign: "center" }}>Mon historique</h2>;
      case "settings":
        return <h2 style={{ textAlign: "center" }}>Paramètres</h2>;
      case "technicianDashboard":
        return <Dashboard />;
        // <h2 style={{ textAlign: "center" }}>Dashboard</h2>;
      case "portfolio":
        return <h2 style={{ textAlign: "center" }}>Portfolio</h2>;
      case "notifications":
        return <ReceivedRequests />;
      case "contact":
        return <h2 style={{ textAlign: "center" }}>Contact Us</h2>;
      default:
        return <h2 style={{ textAlign: "center" }}>Welcome!</h2>;
    }
  };

  return (
    <div id="content" className="p-4">
      {renderContent()}
    </div>
  );
};

export default Content;
