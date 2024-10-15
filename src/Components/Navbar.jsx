import React, { useState } from 'react';
import logo from "../assets/img/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="container-fluid nav-bar bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">
        {/* Logo visible uniquement sur les petits écrans */}
        <Link to="/" className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none">
          <img src={logo} alt="Logo" width={50} />
        </Link>

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

            {/* Boutons de connexion pour les petits écrans */}
            <div className="d-flex d-lg-none">
              <button className="btn btn-primary rounded py-2 px-4 me-3" onClick={handleOpenModal}>S'inscrire</button>
              <button className="btn btn-outline-primary py-2 px-4" onClick={() => window.location.href = '/login'} style={{ outline: 'none', border: '1px solid blue' }}>Se Connecter</button>
            </div>
          </div>
        </div>

        {/* Boutons de connexion pour les grands écrans */}
        <div className="d-none d-lg-flex">
          {/* Bouton S'inscrire qui ouvre le modal */}
          <button className="btn btn-primary rounded py-2 px-4 me-3" onClick={handleOpenModal}>S'inscrire</button>
          <button className="btn btn-outline-primary py-2 px-4" style={{ outline: 'none', border: '1px solid blue' }}>Se Connecter</button>
        </div>
      </nav>

      {/* Modal Bootstrap */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Choisissez votre type d'inscription</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body text-center">
                <p>Veuillez sélectionner votre type d'inscription :</p>
                <button className="btn btn-primary mb-3" onClick={() => alert("Inscription Technicien")}>Technicien</button>
                <br />
                <button className="btn btn-secondary" onClick={() => window.location.href = '/register-user'} >Utilisateur</button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
