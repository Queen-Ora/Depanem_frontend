import React, { useEffect, useState, useRef } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Greetings() {
  const [showModal, setShowModal] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);
  const [newResponseModal, setNewResponseModal] = useState(false); // Pour le modal de réponse
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [technicians, setTechnicians] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingTechId, setLoadingTechId] = useState(null); 
  const [isLoadingTechs, setIsLoadingTechs] = useState(true); 
  const [response, setResponse] = useState(null); // État pour stocker la réponse
 // Utilisé pour détecter une nouvelle réponse
  const navigate = useNavigate();
  const prevResponseRef = useRef([]);
  const prevRejectedRequestsRef = useRef([]); // Référence pour stocker les demandes rejetées précédentes
  const [rejectedRequests, setRejectedRequests] = useState([]); // État pour stocker les demandes rejetées actuelles
  const prevFinishedRequestsRef = useRef([]);

  const userId = localStorage.getItem("UserId");

  useEffect(() => {
    const fetchTechnicians = async () => {

      setIsLoadingTechs(true);
      try {
        const response = await axios.get("http://localhost:8000/api/depanem/GetAllTechnicians");
        const data = response.data;
        setTechnicians(data);
      } catch (error) {
        console.error("Error fetching technicians:", error);
      } finally {
        setIsLoadingTechs(false);
      }

    };

    const fetchResponse = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/depanem/GetRequestsByUser/${userId}`);
        const data = response.data.data;
        // console.log("Réponse de l'API:", data);
        // Vérifie si la réponse a changé et ouvre le modal de notification si c'est le cas
        if (prevResponseRef.current && JSON.stringify(prevResponseRef.current) !== JSON.stringify(data)) {
          setNewResponseModal(true);
        }
  
        // Parcourt chaque demande pour détecter les changements de statut
        data.forEach((request) => {
          const prevRequest = prevResponseRef.current.find((prev) => prev.id === request.id);
          // console.log("Request:", request);
          // console.log("Previous Request:", prevRequest);
          // Si le statut a changé, afficher une notification
          if (prevRequest && prevRequest.status !== request.status) {
            if (request.status === "rejeté") {
              alert("La requête est rejetée.");
              toast.error("Votre demande a été rejetée.");
            } else if (request.status === "fini") {
              toast.success("La demande a été terminée.");
            }
          }
        });
  
        // Met à jour la réponse et la référence de la réponse précédente
        setResponse(data);
        prevResponseRef.current = data;
      } catch (error) {
        // Gère les erreurs de requêtes
        console.error("Erreur lors de la récupération des demandes :", error);
      }
    };
  

    // Exécute les appels API une première fois au montage
    fetchTechnicians();
    // fetchResponse();

    // Définis un intervalle pour actualiser la liste des techniciens toutes les 5 secondes
    const technicianIntervalId = setInterval(fetchTechnicians, 5000);

    // Définis un autre intervalle pour vérifier les réponses toutes les 7 secondes
    const responseIntervalId = setInterval(fetchResponse, 7000);

    // Nettoyage des intervalles au démontage du composant
    return () => {
      clearInterval(technicianIntervalId);
      clearInterval(responseIntervalId);
    };
  }, [userId]);

  useEffect(() => {
    // Fonction pour récupérer les demandes rejetées
    const getRejectedRequests = async () => {
      // console.log("Début de l'appel API pour récupérer les demandes rejetées");
  
      try {
        // Effectuer la requête GET pour récupérer les demandes rejetées
        const response = await axios.get(`http://localhost:8000/api/depanem/GetRejectRequests`);
        
        // Vérifiez la structure de la réponse pour comprendre comment elle est formatée
        // console.log("Réponse API reçue :", response.data); // Vérifier la structure complète de la réponse
  
        // Récupérer les demandes rejetées actuelles
        const newRejectedRequests = response.data.data || []; // Utiliser `data` si la réponse a cette structure
        
        // console.log("Demandes rejetées actuelles :", newRejectedRequests);
        // console.log("Nombre de demandes rejetées :", newRejectedRequests.length); // Affiche le nombre de demandes rejetées
  
        // Vérifie si des demandes rejetées sont présentes
        if (newRejectedRequests.length > 0) {
          // console.log("Il y a des demandes rejetées");
  
          // Comparer les nouvelles demandes rejetées avec les précédentes
          const hasNewRejectedRequests = newRejectedRequests.length !== prevRejectedRequestsRef.current.length ||
            newRejectedRequests.some((request, index) => request.id !== prevRejectedRequestsRef.current[index]?.id);
  
          // console.log("Comparaison avec les demandes précédentes : ", hasNewRejectedRequests);
  
          if (hasNewRejectedRequests) {
            // Afficher un toast si des nouvelles demandes rejetées sont récupérées
            // console.log("Affichage du toast pour les nouvelles demandes rejetées");
            toast.error("La demande a été rejetée!");
          } else {
            console.log("Aucune nouvelle demande rejetée");
          }
        } else {
          console.log("Aucune demande rejetée reçue");
        }
  
        // Met à jour la référence des demandes rejetées précédentes
        prevRejectedRequestsRef.current = newRejectedRequests;
        // console.log("Mise à jour de prevRejectedRequestsRef :", prevRejectedRequestsRef.current);
  
      } catch (error) {
        console.error("Erreur lors de la récupération des demandes rejetées :", error);
        // toast.error("Erreur lors de la récupération des demandes rejetées.");
      }
    };
  
    // Vérifier si userId existe avant d'effectuer la requête
    if (userId) {
      // console.log("userId trouvé :", userId);
  
      // Récupérer les demandes rejetées immédiatement lors du premier rendu
      getRejectedRequests();
  
      // Vérification périodique toutes les 10 secondes (par exemple)
      const intervalId = setInterval(() => {
        // console.log("Vérification périodique des demandes rejetées");
        getRejectedRequests();
      }, 10000);
  
      // Nettoyage de l'intervalle lorsque le composant est démonté
      return () => {
        // console.log("Nettoyage de l'intervalle");
        clearInterval(intervalId);
      };
    } else {
      console.log("userId non trouvé");
    }
  
  }, [userId]); // Le tableau de dépendances pour s'assurer que cela se lance lorsque userId change

  useEffect(() => {
    const fetchFinished = async () => {
      // console.log("Début de l'appel API pour récupérer les demandes terminées");
  
      try {
        // Appel de l'API pour obtenir les demandes terminées
        const response = await axios.get(`http://localhost:8000/api/depanem/GetFinRequest`);
  
        // Affiche la réponse API complète pour comprendre sa structure
        // console.log("Réponse API reçue :", response.data);
  
        // Vérifie si la structure de la réponse est correcte
        if (response.data && response.data.data) {
          // Récupérer le tableau de demandes terminées
          const newFinishedRequests = response.data.data;
  
          // console.log("Demandes terminées actuelles :", newFinishedRequests);
          // console.log("Nombre de demandes terminées :", newFinishedRequests.length); // Affiche le nombre de demandes terminées
  
          // Comparer les nouvelles demandes terminées avec celles stockées précédemment
          const hasNewFinishedRequests = newFinishedRequests.length !== prevFinishedRequestsRef.current.length ||
            newFinishedRequests.some((request, index) => request.id !== prevFinishedRequestsRef.current[index]?.id);
  
          // console.log("Comparaison avec les demandes terminées précédentes :", hasNewFinishedRequests);
  
          if (hasNewFinishedRequests) {
            // console.log("Affichage du toast pour les nouvelles demandes terminées");
            setShowNewModal(true)
            // toast.success("Une demande a été terminée !");
          } else {
            console.log("Aucune nouvelle demande terminée");
          }
  
          // Met à jour la référence des demandes terminées précédentes
          prevFinishedRequestsRef.current = newFinishedRequests;
          // console.log("Mise à jour de prevFinishedRequestsRef :", prevFinishedRequestsRef.current);
  
        } else {
          console.log("Structure inattendue de la réponse : la propriété 'data.data' est manquante.");
        }
  
      } catch (error) {
        console.error("Erreur lors de la récupération des demandes terminées :", error);
        toast.error("Erreur lors de la récupération des demandes terminées.");
      }
    };
  
    // Vérifie si userId existe avant d'effectuer l'appel API
    if (userId) {
      // console.log("userId trouvé :", userId);
  
      // Appel initial pour récupérer les demandes terminées
      fetchFinished();
  
      // Vérification périodique toutes les 10 secondes
      const intervalId = setInterval(() => {
        // console.log("Vérification périodique des demandes terminées");
        fetchFinished();
      }, 10000);
  
      // Nettoyage de l'intervalle lors du démontage du composant
      return () => {
        // console.log("Nettoyage de l'intervalle");
        clearInterval(intervalId);
      };
    } else {
      console.log("userId non trouvé");
    }
  
  }, [userId]); // Le tableau de dépendances pour s'assurer que cela se lance lorsque userId change
  


  const handleCloseNewResponseModal = () => setNewResponseModal(false);

  // Code pour le contact et la recherche des techniciens
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShowModal = (profession) => {
    setSelectedProfession(profession);
    setShowModal(true);
  };

  const handleContactClick = (tech) => {
    if (!tech || !tech.id) {
      console.error("Technician ID is undefined:", tech);
      return;
    }
    setLoadingTechId(tech.id);
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        await axios.post(`http://localhost:8000/api/depanem/SendRequest/${tech.id}/${userId}`);
        toast.success("Votre demande a été bien envoyée");
      } catch (error) {
        console.error("Error:", error);
        const errorMessage = error.response?.data?.data?.localisation[0] || "Erreur lors de l'envoi de la demande.";
        toast.error(errorMessage);
      } finally {
        setLoadingTechId(null);
      }
    };
    sendRequest();
  };

  const showContact = (tech) => {
    navigate(`technician-profile/${tech.id}`);
  };

  const handleCloseModal = () => setShowModal(false);

  const filteredTechnicians = technicians
    ? technicians[selectedProfession]?.filter((tech) =>
        tech.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];



  const controlStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "#007bff",
    border: "none",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
  };

  const iconStyle = {
    color: "white",
    fontSize: "1.5rem",
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

      {/* Modal pour la liste des techniciens */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Liste des {selectedProfession}s</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Recherche et liste des techniciens */}
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
                    className="rounded-circle mx-auto mt-3 cursor-pointer"
                    title="Voir les Informations du technicien"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      border: "3px solid #007bff",
                      cursor:'pointer',
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

      <Modal show={showNewModal} onHide={() => setShowNewModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Notification</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    La tache est terminée! <br />
    Voulez vous donnez un avis ? <br /> <br />
    <Button variant="primary" >
      oui,Bien sur
    </Button>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={() => setShowNewModal(false)}>
      OK
    </Button>
  </Modal.Footer>
</Modal>


      {/* Modal de notification pour une nouvelle réponse */}
      <Modal show={newResponseModal} onHide={handleCloseNewResponseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>Le technicien est en route pour répondre à votre demande !</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseNewResponseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}