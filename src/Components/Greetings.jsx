import React from "react";
import { FaArrowRight } from "react-icons/fa";

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
    cursor: "pointer"
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Bonjour, De qui avez-vous besoin?</h1>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card">
            {/* <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Card image" /> */}
            <div className="card-body">
              <h5 className="card-title">Mecanicien</h5>
              <p className="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <button style={buttonStyle}>
                <FaArrowRight color="black" />
                {/* <FontAwesomeIcon icon={faArrowRight} /> */}
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card">
            {/* <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Card image" /> */}
            <div className="card-body">
              <h5 className="card-title">Plombier</h5>
              <p className="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <button style={buttonStyle}>
                <FaArrowRight color="black" />
                {/* <FontAwesomeIcon icon={faArrowRight} /> */}
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card">
            {/* <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Card image" /> */}
            <div className="card-body">
              <h5 className="card-title">Electricien</h5>   
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <button style={buttonStyle}>
                <FaArrowRight color="black" />
                {/* <FontAwesomeIcon icon={faArrowRight} /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
