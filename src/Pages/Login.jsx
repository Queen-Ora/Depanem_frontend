import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/Register.css"; 
import { IoArrowBackCircleSharp } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import useLocalStorageWithExpiry from "../Components/Expiration";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userId, setUserId] = useLocalStorageWithExpiry('UserId', null, 50000); // 5 secondes d'expiration

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/depanem/login",
        {
          email,
          password
        }
      );
      toast.success("Connexion reussie!");
      navigate('/'); // Redirige vers la page de dashboard avec l'ID de l'utilisateur
     
      setUserId(response.data.user.id); // Enregistre l'ID de l'utilisateur avec expiration
 
    } catch (error) {
      console.error(error);
       // Gérer les erreurs de validation ou autres
       if (error.response && error.response.status === 401) {
        toast.error('Email ou mot de passe incorrect');
      } else {
        toast.error('Une erreur est survenue');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <IoArrowBackCircleSharp
            onClick={() => (window.location.href = "/")}
            className="fa-2x text-primary mb-3 cursor-pointer"
            size={50}
          />
          <h2>Connexion</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading? "Connexion en cours..." : "Se connecter"}
            </button>
          </form>
          <p className="form-text cursor-pointer">
            Pas de compte ?{" "}
            <span
              onClick={handleOpenModal}
              role="button"
              tabIndex="0"
              className="cursor-pointer text-primary"
              onKeyDown={e => e.key === "Enter" && handleOpenModal()}
            >
              S'inscrire
            </span>
          </p>
          <p className="form-text">
            <a href="#">Mot de passe oublié?</a>
          </p>
        </div>
      </div>

      {showModal &&
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Choisissez votre type d'inscription
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                />
              </div>
              <div className="modal-body text-center">
                <p>Veuillez sélectionner votre type d'inscription :</p>
                <button
                  className="btn btn-primary mb-3"
                  onClick={() => (window.location.href = "/technician-user")}
                >
                  Technicien
                </button>
                <br />
                <button
                  className="btn btn-secondary"
                  onClick={() => (window.location.href = "/register-user")}
                >
                  Utilisateur
                </button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default Login;
