import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Button, Alert } from "react-bootstrap";
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export default function ContactTechnician() {
    const [localisation, setLocalisation] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const userId = localStorage.getItem('UserId');
  const [userData, setUserData] = useState(null);
  const {tech_id} = useParams();


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/depanem/currentUser/${userId}`);
        const user = response.data.user;
  
        setUserData(user); // Stocke les données de l'utilisateur
        setLocalisation(user.localisation || ''); // Définit la localisation si elle est disponible, sinon chaîne vide
      } catch (err) {
        console.error(err); // Gère l'erreur ici
      }
    };
  
    fetchUser();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!localisation) {
    //   toast.error('La localisation est obligatoire')
    //   return;
    // }
    setIsLoading(true);
    try {
      const response = await axios.post(`http://localhost:8000/api/depanem/SendRequest/${tech_id}/${userId}`, {
        localisation,
        message,
      });
toast.success('Votre demande a été bien envoyé')
  
    } catch (error) {
      console.error('Error:', error);

      if (error.response && error.response.status === 422) {
        const errorMessage = error.response.data.data?.localisation[0] || 'Erreur de validation';
        toast.error(errorMessage);
      } else {
        toast.error('Une erreur est survenue lors de l\'envoi de la demande.');
      }

      setIsLoading(false);
    }finally {
      setIsLoading(false); // Indiquer que le chargement est terminé
  }
    }

  return (
    <div className="container mt-4">
    <h1>Contacter Un Technicien</h1>
    <Form onSubmit={handleSubmit} >
      <Form.Group controlId="formLocalisation" className="mb-3">
 <br />

        <Form.Label>Gardez votre localisation initiale ou fournissez en une autre (URL Google Maps) <span style={{ color: "red", fontWeight: "bold" }}>*</span></Form.Label>
        <Form.Control
          type="url"
          placeholder="Entrez l'URL de Google Maps"
          value={localisation}
          onChange={(e) => setLocalisation(e.target.value)}
          // required
        />
      </Form.Group>

      <Form.Group controlId="formMessage" className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Décrivez votre problème..."
          value={message}
          // value={'venez ici'}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary"  className={`btn btn-primary btn-block ${isLoading ? "disabled" : ""}`} disabled={isLoading} type="submit">
      {isLoading ? "Chargement..." : "Envoyer la demande"}
      </Button>
    </Form>
  </div>
  )
}
