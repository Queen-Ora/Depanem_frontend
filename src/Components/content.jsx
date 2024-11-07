// src/Content.js

import React from "react";
import Greetings from "./Greetings";
import Dashboard from "./Dashboard";
import TechnicianRequests from "./Example";
import ReceivedRequests from "./ReceivedRequests";
import Opinion from "../Pages/Opinion";

const Content = ({ activePage }) => {
  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <Greetings />;
      case "history":
        return <TechnicianRequests />;
      case "settings":
        return <h2 style={{ textAlign: "center" }}>Paramètres</h2>;
      case "technicianDashboard":
        return <Dashboard />;
   
      case "feedback":
        return <Opinion />;
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
