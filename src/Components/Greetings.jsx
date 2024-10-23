import React, { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Greetings() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTechnicians, setSelectedTechnicians] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedProfession, setSelectedProfession] = useState(null);

   // Example technician data
   const technicians = {
    Mecanicien: [
      {
        id: 1,
        name: "Jean Dupont",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        id: 2,
        name: "Paul Martin",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      },
    ],
    Plombier: [
      {
        id: 3,
        name: "Marie Durand",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      },
      {
        id: 4,
        name: "Julie Thomas",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      },
    ],
    Electricien: [
      {
        id: 5,
        name: "Pierre Lambert",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      },
    ],
  };

  // Handle showing modal with technicians for selected job
  const handleShowModal = (profession) => {
    setSelectedProfession(profession);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);



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
                    <button className="btn btn-primary" onClick={() => handleShowModal("Mecanicien")}>

                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">

                    <h5 className="card-title">Plombier</h5>
                    <p className="card-text">Des plombiers qualifiés à votre service pour des réparations rapides et fiables.</p>
                    <button className="btn btn-primary" onClick={() => handleShowModal("Plombier")}>

                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">

                    <h5 className="card-title">Electricien</h5>
                    <p className="card-text">Restez éclairé en toute sécurité avec nos électriciens certifiés, disponibles 24/7</p>
                    <button className="btn btn-primary" onClick={() => handleShowModal("Electricien")}>

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


      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Liste des {selectedProfession}s</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center">
            {technicians[selectedProfession]?.map((tech) => (
              <Col key={tech.id} md={6} className="mb-4">
                <Card className="shadow-sm text-center">
                  <Card.Img
                    variant="top"
                    src={tech.avatar}
                    alt={tech.name}
                    className="rounded-circle mx-auto mt-3"
                    style={{ width: "50px", height: "50px", objectFit: "cover" , border: "3px solid #007bff" }}
                  />
                  <Card.Body>
                    <Card.Title>{tech.name}</Card.Title>
                    <Button variant="primary">Contactez</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}
