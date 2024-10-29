import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner, Alert } from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Configuration de l'icône par défaut de Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const TechnicianRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = () => {
      const fakeRequests = [
        {
          id: 1,
          user: { name: 'Alice Dupont' },
          location: 'https://maps.app.goo.gl/SJHR9c7JLnS7hY8L8',
          message: "Bonjour, j'ai besoin d'une réparation urgente.",
          created_at: '2024-10-25T10:00:00Z',
          coords: { lat: 48.8566, lng: 2.5 }, // Paris (fictif)
       
        },
        {
          id: 2,
          user: { name: 'Bob Martin' },
          location: 'https://www.google.com/maps/@48.8708,2.3643',
          message: 'Pourriez-vous venir demain, s’il vous plaît?',
          created_at: '2024-10-26T12:30:00Z',
          coords: { lat: 48.8708, lng: 2.3643 }, // Paris
        },
        {
          id: 3,
          user: { name: 'Claire Dubois' },
          location: 'https://www.google.com/maps/@48.8450,2.3050',
          message: 'Merci de me contacter pour fixer un rendez-vous.',
          created_at: '2024-10-26T15:45:00Z',
          coords: { lat: 48.8450, lng: 2.3050 }, // Paris
        //   coords: { lat: 48.8566, lng: 2.3522 },
        },
      ];

      setRequests(fakeRequests);
      setLoading(false);
    };

    fetchRequests();
  }, []);

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Demandes reçues</h2>
      <Row>
        {requests.length > 0 ? (
          requests.map((request) => {
            // Extraction des coordonnées à partir de l'URL de localisation
            const locationMatch = request.location.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
            const lat = locationMatch ? parseFloat(locationMatch[1]) : request.coords.lat;
            const lng = locationMatch ? parseFloat(locationMatch[2]) : request.coords.lng;

            return (
              <Col md={4} key={request.id} className="mb-4">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>{request.user.name}</Card.Title>
                    <Card.Text>
                      <strong>Localisation :</strong>{' '}
                      <a href={request.location} target="_blank" rel="noopener noreferrer">
                        Voir l'emplacement
                      </a>
                    </Card.Text>
                    <Card.Text>
                      <strong>Message :</strong> {request.message || 'Aucun message'}
                    </Card.Text>
                    <Card.Text>
                      <small className="text-muted">Reçue le : {new Date(request.created_at).toLocaleDateString()}</small>
                    </Card.Text>

                    {/* Carte Leaflet */}
                    <MapContainer
                      center={[lat, lng]}
                      zoom={13}
                      style={{ height: '200px', width: '100%' }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                      <Marker position={[lat, lng]}>
                        <Popup>{request.message}</Popup>
                      </Marker>
                    </MapContainer>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <p>Aucune demande reçue pour le moment.</p>
        )}
      </Row>
    </div>
  );
};

export default TechnicianRequests;
