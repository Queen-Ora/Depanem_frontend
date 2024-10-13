import React from 'react';
import logo from "../assets/img/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Assurez-vous d'utiliser React Router

export default function Navbar() {
  return (
    <div className="container-fluid nav-bar bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">
        <Link to="/" className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none">
          <img src={logo} alt="Logo" width={50} />
        </Link>
          <div className="d-flex d-lg-none"> {/* Visible seulement sur les petits écrans */}
            <button className="btn btn-primary rounded py-2 px-4 me-3">S'inscrire</button>
            <button className="btn btn-outline-primary py-2 px-4" style={{ outline: 'none', border: '1px solid blue' }}>Se Connecter</button>
          </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav me-auto">
            <Link to="/" className="nav-item nav-link active">Accueil</Link>
            <Link to="/about" className="nav-item nav-link">À Propos</Link>
            <Link to="/services" className="nav-item nav-link">Nos Services</Link>
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
              <div className="dropdown-menu fade-up m-0">
                <Link to="/booking" className="dropdown-item">Réservation</Link>
                <Link to="/team" className="dropdown-item">Nos Techniciens</Link>
                <Link to="/testimonials" className="dropdown-item">Témoignages</Link>
              </div>
            </div>
            <Link to="/contact" className="nav-item nav-link">Nous Contacter</Link>
          </div>

        </div>

        {/* Ajoutez les boutons pour les grands écrans */}
        <div className="d-none d-lg-flex"> {/* Visible seulement sur les grands écrans */}
          <button className="btn btn-primary rounded py-2 px-4 me-3">S'inscrire</button>
          <button className="btn btn-outline-primary py-2 px-4" style={{ outline: 'none', border: '1px solid blue' }}>Se Connecter</button>
        </div>
      </nav>
    </div>
  );
}
