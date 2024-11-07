import React, { useEffect, useState } from 'react'
import './Css/Register.css';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function UserEdit() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);
    const [imageUploadVisible, setImageUploadVisible] = useState(false); 

    useEffect(() => {
        // Fetch user data from API
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/depanem/currentUser/${id}`);
                const data = response.data.user;
                // console.log(data);

        
                setFirstName(data.firstname || ""); // Si la valeur est indéfinie, on attribue une chaîne vide
                setLastName(data.lastname || ""); // Idem pour le prénom
                setEmail(data.email || ""); // Idem pour l'email
                setPhone(data.phone || ""); // Idem pour le téléphone
                
   
        
              
        //         setName(data.name || ""); // Si la valeur est indéfinie, on attribue une chaîne vide
        // setEmail(data.email || ""); // Idem pour l'email
                
       
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, []);

    const handleImageClick = () => {
        setImageUploadVisible(true);  // Rendre l'input de type image visible
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            if (image) {
                formData.append('avatar', image);
            }
            formData.append('firstname', firstName);
            formData.append('lastname', lastName);
            formData.append('email', email);
            formData.append('phone', phone);
            const response = await axios.post(`http://localhost:8000/api/depanem/editUser/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                toast.success("Informations mises à jour avec succès!");
                navigate('/profile');
            } else {
                toast.error("Une erreur s'est produite lors de la mise à jour des informations.");
            }
        } catch (error) {
            console.error("Error updating user data:", error);
            toast.error("Une erreur s'est produite lors de la mise à jour des informations.");
        }
        setLoading(false);
    
            }
       
   

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
        <IoArrowBackCircleSharp onClick={() => window.location.href = '/profile'}   className="fa-2x text-primary mb-3 cursor-pointer" size={50}/>
          <h2>Modifier mes informations</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Nom</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Entrez votre nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">Prénom</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Entrez votre prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Modifier ou ajouter votre email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">Numéro de téléphone</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                placeholder="Entrez votre numéro de téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            {/*git remote add origin https://github.com/Queen-Ora/Depanem_backend.git*/}

           

           
<p>Mettre à jour ou Ajouter une photo de profil</p>
            {/* Bouton pour afficher le champ de téléchargement d'image */}
            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={handleImageClick}
            >
        Choisir la photo
            </button>

            {/* Input pour télécharger l'image, qui sera caché par défaut */}
            {imageUploadVisible && (
              <div className="mb-3">
                <label htmlFor="profileImage" className="form-label">Photo de profil</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setImage(e.target.files[0])}
                  id="profileImage"
                  accept="image/*"
                />
              </div>
            )}

          <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Chargement...' : "Modifier"}
            </button> 
      



            {/* <button type="submit" className="btn btn-primary">S'inscrire</button> */}
          </form>
        
        
        </div>
      </div>
    </div>
  )
}
