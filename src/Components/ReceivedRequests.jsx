import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L from "leaflet";
import { IoCallSharp } from "react-icons/io5";
import toast from "react-hot-toast";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png"
});

export default function ReceivedRequests() {
  const userId = JSON.parse(localStorage.getItem("UserId"));
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/depanem/GetRequestsByTechnician/${userId}`
      );
      setRequests(response.data.data); // Adapter l'accès aux données
      console.log(requests);
    } catch (error) {
      console.error("Error fetching requests:", error);
      // toast.error("Erreur lors de la récupération des requêtes.");
    }
  };

  useEffect(
    () => {
      fetchRequests(); // Appel initial

      const intervalId = setInterval(() => {
        fetchRequests(); // Récupération des requêtes toutes les 30 secondes
      }, 15000);

      // Nettoyage de l'intervalle lors du démontage du composant
      return () => clearInterval(intervalId);
    },
    [userId]
  );

  // Fonction pour gérer le clic sur "Valider"
  const handleValidateClick = requestId => {
    // Logique pour valider la requête
    // Assurez-vous d'adapter cette logique à votre application
    // Exemple: Envoi d'un email, notification, etc.
    axios.put(`http://localhost:8000/api/depanem/UpdateRequest/${requestId}`)
     .then(() => toast.success("La requête a été bien validee"))
     .catch(error => console.error("Erreur lors de la validation de la requête:", error));
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Requêtes Reçues</h3>
  
      {requests.length === 0 ? (
        <p className="text-center text-muted">Aucune requête reçue pour le moment.</p>
      ) : (
        <Row>
          {requests.map(request => (
            <Col key={request.id} md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>
                    Demande de {request.user.firstname} {request.user.lastname}
                  </Card.Title>
                  <Card.Text>
                    <img
                    //   src={`http://localhost:8000/uploads/${request.user.avatar}`}
                      src={request.user && request.user.avatar ? 'http://localhost:8000/uploads/'+request.user.avatar : 'http://localhost:8000/default.png'} 
                      alt="Avatar"
                      style={{ width: "50px", borderRadius: "50%", height: "50px" }}
                      className="me-2"
                    />
                    <strong>+228 {request.user.phone}</strong>{" "}
                    <IoCallSharp size={30} color="blue" />
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                    {/* Informations supplémentaires */}
                  </ListGroup>
                </Card.Body>
  
                {/* Carte */}
                <MapContainer center={[45.0, -73.0]} zoom={13} style={{ height: "200px" }}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={[45.0, -73.0]}>
                    <Popup>
                      Localisation de {request.user.firstname} {request.user.lastname}
                    </Popup>
                  </Marker>
                </MapContainer>
                <div className="d-flex justify-content-c mt-3">
                  <button
                    className="btn btn-primary me-4"
                    onClick={() => handleValidateClick(request.id)}
                  >
                    Valider
                  </button>
                  <button className="btn btn-danger">Rejeter</button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
  
}
