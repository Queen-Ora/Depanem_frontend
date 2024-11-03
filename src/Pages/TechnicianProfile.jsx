import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
// import

export default function TechnicianProfile() {
  const { id } = useParams(); // Récupère l'ID du technicien depuis l'URL
  const [technician, setTechnician] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le chargement
  const navigate = useNavigate();

  useEffect(
    () => {
      // Fonction pour récupérer les détails du technicien
      const fetchTechnician = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/api/depanem/currentUser/${id}`
          );
          setTechnician(response.data.user); // Stocke les données du technicien
        } catch (error) {
          console.error(
            "Erreur lors de la récupération des détails du technicien:",
            error
          );
        } finally {
          setIsLoading(false); // Termine le chargement
        }
      };

      fetchTechnician();
    },
    [id]
  );

  if (isLoading) {
    // Affiche un spinner pendant le chargement
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <IoArrowBackCircleSharp
        onClick={() => navigate(-1)}
        className="fa-2x text-primary mb-3 cursor-pointer"
        size={50}
      />
      <Card className="text-center ">
        <Card.Img
          variant="top"
          src={technician.avatar || "http://localhost:8000/default.png"}
          alt={`${technician.lastname} ${technician.firstname}`}
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "50%" /*margin: '20px auto',*/
          }}
        />
        <Card.Body>
          <Card.Title
          >{`${technician.lastname} ${technician.firstname}`}</Card.Title>
          <Card.Text>
            <strong>Profession:</strong>{" "}
            {technician.profession || "Non spécifiée"}
          </Card.Text>
          <Card.Text>
            <strong>Contact:</strong> {technician.phone || "Non spécifié"}
          </Card.Text>
          <Card.Text>
            <strong>Email:</strong> {technician.email || "Non spécifié"}
          </Card.Text>
          <Button variant="primary">Contacter</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
