import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import L from "leaflet";
import { IoCallSharp } from "react-icons/io5";
import toast from "react-hot-toast";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
});

export default function ReceivedRequests() {
  const userId = JSON.parse(localStorage.getItem("UserId"));
  const [requests, setRequests] = useState([]);
  const prevRequestsRef = useRef([]);
  const [validatedRequests, setValidatedRequests] = useState({}); // Garde l’état des requêtes validées

  const notificationSound = useRef(new Audio("/audio/ping.wav"));

  const fetchRequests = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/depanem/GetRequestsByTechnician/${userId}`
      );

      const newRequests = response.data.data;

      if (newRequests.length > prevRequestsRef.current.length) {
        notificationSound.current.load();
        notificationSound.current.play().catch((error) =>
          console.error("Erreur de lecture audio:", error)
        );
      }

      setRequests(newRequests);
      prevRequestsRef.current = newRequests;
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  useEffect(() => {
    fetchRequests();

    const intervalId = setInterval(fetchRequests, 5000);
    return () => clearInterval(intervalId);
  }, [userId]);

  // Fonction pour gérer la validation
  const handleValidateClick = async (request) => {
    setValidatedRequests((prev) => ({ ...prev, [request.id]: true })); // Définit "En cours" et désactive
  
    try {
      // Utilisation de await pour attendre la réponse de l'appel API
      const response = await axios.get(`http://localhost:8000/api/depanem/AcceptService/${userId}/${request.user.id}`);
      console.log(response);
      toast.success("La requête a été bien validée"); // Message de succès
    } catch (error) {
      console.error("Erreur lors de la validation de la requête:", error);
      toast.error("Erreur lors de la validation de la requête"); // Message d'erreur
    }
  };
  
  const handleFinishOrReject = (requestId) => {
    if (validatedRequests[requestId]) {
      // Action à exécuter si le texte du bouton est "Finir"
      alert("La requête est terminée.");
      // Par exemple, une requête pour mettre à jour le statut de la requête :
      // axios.post(`http://localhost:8000/api/depanem/FinishRequest/${requestId}`)
      //   .then(() => toast.success("La requête a été terminée avec succès"))
      //   .catch((error) => console.error("Erreur lors de la finalisation de la requête:", error));
    } else {
      // Action à exécuter si le texte du bouton est "Rejeter"
    // alert("La requête est rejetée.");
      // Par exemple, une requête pour rejeter la requête :
      axios.get(`http://localhost:8000/api/depanem/RejectRequest/${requestId}`)
        .then(() => toast.success("La requête a été rejetée avec succès"))
        .catch((error) => console.error("Erreur lors du rejet de la requête:", error));
    }
  };
  

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Requêtes Reçues</h3>

      {requests.length === 0 ? (
        <p className="text-center text-muted">Aucune requête reçue pour le moment.</p>
      ) : (
        <Row>
          {requests.map((request) => (
            <Col key={request.id} md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>
                    Demande de {request.user.firstname} {request.user.lastname}
                  </Card.Title>
                  <Card.Text>
                    <img
                      src={
                        request.user && request.user.avatar
                          ? "http://localhost:8000/uploads/" + request.user.avatar
                          : "http://localhost:8000/default.png"
                      }
                      alt="Avatar"
                      style={{ width: "50px", borderRadius: "50%", height: "50px" }}
                      className="me-2"
                    />
                    <strong>+228 {request.user.phone}</strong> <IoCallSharp size={30} color="blue" />
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
                <div className="d-flex justify-content-center mt-3">
                <button
  className="btn btn-primary me-4"
  onClick={() => handleValidateClick(request)} // Passez l'objet complet
  disabled={validatedRequests[request.id]} // Désactive si déjà validée
>
  {validatedRequests[request.id] ? "En cours..." : "Valider"}
</button>

<button 
  className="btn btn-danger" 
  onClick={() => handleFinishOrReject(request.id)}
>
  {validatedRequests[request.id] ? "Finir" : "Rejeter"}
</button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
