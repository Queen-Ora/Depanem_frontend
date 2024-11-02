import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Greetings() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [technicians, setTechnicians] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [loadingTechId, setLoadingTechId] = useState(null); // Pour indiquer le technicien en cours de chargement
  const [isLoadingTechs, setIsLoadingTechs] = useState(true); // Pour afficher le chargement des techniciens
  const navigate = useNavigate();
  const userId = localStorage.getItem('UserId');

  // Fetch technicians data from API
  useEffect(() => {
    const fetchTechnicians = async () => {
      setIsLoadingTechs(true); // Indique le début du chargement
      try {
        const response = await axios.get('http://localhost:8000/api/depanem/GetAllTechnicians');
        const data = response.data;
        setTechnicians(data);
      } catch (error) {
        console.error('Error fetching technicians:', error);
      } finally {
        setIsLoadingTechs(false); // Fin du chargement
      }
    };

    fetchTechnicians();
  }, []);

  // Handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle showing modal with technicians for selected profession
  const handleShowModal = (profession) => {
    setSelectedProfession(profession);
    setShowModal(true);
  };

    const handleContactClick = (tech) => {
      // Vérifie si le technicien a un ID valide
      if (!tech || !tech.id) {
        console.error("Technician ID is undefined:", tech);
        return;
      }
      setLoadingTechId(tech.id);
      // Fonction pour envoyer la demande
      const sendRequest = async () => {
        setIsLoading(true);
        try {
          const response = await axios.post(`http://localhost:8000/api/depanem/SendRequest/${tech.id}/${userId}`, {
          });
    
          // Succès de l'envoi de la demande
          toast.success('Votre demande a été bien envoyée');
    
          // Navigation vers la page de contact du technicien après l'envoi
          // navigate(`/contact-technician/${tech.id}`);
        } catch (error) {
          console.error('Error:', error);
    
          // Gère les erreurs de validation ou autres
          if (error.response && error.response.status === 422) {
            const errorMessage = error.response.data.data?.localisation[0] || 'Erreur de validation';
            toast.error(errorMessage);
          } else {
            toast.error('Une erreur est survenue lors de l\'envoi de la demande.');
          }
        } finally {
          setLoadingTechId(null); // Réinitialise l'indicateur de chargement
        }
      };
    
      // Appelle la fonction pour envoyer la requête
      sendRequest();
    };

    const showContact = (tech) => {
        navigate(`technician-profile/${tech.id}`); 
    // alert(`Technician ID: ${tech.id}`)
    };
    

  const handleCloseModal = () => setShowModal(false);

  // Filter technicians by selected profession and search term
  const filteredTechnicians = technicians
    ? technicians[selectedProfession]?.filter((tech) =>
        tech.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];


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
                    <p className="card-text">Vos meilleurs mécaniciens, prêts à remettre votre véhicule sur la route en un rien de temps.</p>
                    <button className="btn btn-primary" onClick={() => handleShowModal("Mécanicien")}>
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
                    <p className="card-text">Restez éclairé en toute sécurité avec nos électriciens certifiés, disponibles 24/7.</p>
                    <button className="btn btn-primary" onClick={() => handleShowModal("Electricien")}>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
          {/* Add more slides if necessary */}
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
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Rechercher un technicien"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Form.Group>

          <Row className="justify-content-center" >
            {filteredTechnicians?.map((tech) => (
              <Col key={tech.id} md={6} className="mb-4">
                <Card className="shadow-sm text-center">
                  <Card.Img
                    variant="top"
                    src={ tech && tech.avatar ? 'http://localhost:8000/uploads/' + tech.avatar : 'http://localhost:8000/default.png'} 
                    alt={tech.name}
                    onClick={() => showContact(tech)}
                    className="rounded-circle mx-auto mt-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      border: "3px solid #007bff",
                    }}
                  />
                  <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                    <Card.Title>{tech.name}</Card.Title>
                  <Button
                          variant="primary"
                          onClick={() => handleContactClick(tech)}
                          disabled={loadingTechId === tech.id}
                        >
                          {loadingTechId === tech.id ? "En cours..." : "Contacter"}
                        </Button>
                    {/* <Button variant="secondary">Explorer</Button> */}
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
