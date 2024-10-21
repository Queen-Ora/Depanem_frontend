import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Greetings() {
  // Styles inline pour la carte et le bouton

  const buttonStyle = {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    transition: "background-color 0.3s",
    cursor: "pointer",
  };
  const controlStyle = {
    position: 'absolute',
    top: '110%',
    transform: 'translateY(-50%)',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Assurez-vous que les boutons sont visibles
    backgroundColor: '#007bff', // Assurez-vous que les boutons sont visibles
    border: 'none',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  };
  
  const iconStyle = {
    color: 'white', // Couleur de l'icône
    fontSize: '1.5rem', // Taille de l'icône
  };
  

  return (
    <div className="container mt-5">
      <h1 className="text-center">Bonjour, De qui avez-vous besoin?</h1>

      {/* Carousel */}
      <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* <div id="myCarousel" className="carousel slide" data-bs-ride="carousel"> */}
      <div className="carousel-inner">
    {/* Card 1 */}
    <div className="carousel-item active">
      <div className="col-md-4 mx-auto">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Mecanicien</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button className="btn btn-primary">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
    
    {/* Card 2 */}
    <div className="carousel-item">
      <div className="col-md-4 mx-auto">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Plombier</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button className="btn btn-primary">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="carousel-item">
      <div className="col-md-4 mx-auto">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Electricien</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button className="btn btn-primary">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#cardCarousel"
          data-bs-slide="prev"
          style={controlStyle}
        >
          <FaArrowLeft style={iconStyle} />
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#cardCarousel"
          data-bs-slide="next"
          style={controlStyle}
        >
          <FaArrowRight style={iconStyle} />
        </button>
      </div>
    </div>
  );
}
