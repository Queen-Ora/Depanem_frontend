import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Greetings() {
  const controlStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#007bff', 
    border: 'none',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    cursor: 'pointer',
  };

  const iconStyle = {
    color: 'white',
    fontSize: '1.5rem',
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Bonjour, De qui avez-vous besoin?</h1>

      {/* Carousel */}
      <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Mecaniciens</h5>
                    <p className="card-text">"Vos meilleurs mécaniciens, prêts à remettre votre véhicule sur la route en un rien de temps.
                    .</p>
                    <button className="btn btn-primary">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Plombiers</h5>
                    <p className="card-text">"Des plombiers qualifiés à votre service pour des réparations rapides et fiables."
                    </p>
                    <button className="btn btn-primary">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Electriciens</h5>
                    <p className="card-text">Restez éclairé en toute sécurité avec nos électriciens certifiés, disponibles 24/7</p>
                    <button className="btn btn-primary">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Climaticiens</h5>
                    <p className="card-text">"Un air frais et confortable grâce à nos climaticiens qualifiés et réactifs."
                    .</p>
                    <button className="btn btn-primary">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Serruriers</h5>
                    <p className="card-text">"Déverrouillez vos soucis avec nos serruriers experts, disponibles à toute heure."
                    </p>
                    <button className="btn btn-primary">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Technicien informatique</h5>
                    <p className="card-text">"Dépannage informatique rapide et efficace pour tous vos soucis techniques."
                    .</p>
                    <button className="btn btn-primary">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ajoute d'autres slides si nécessaire */}
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
