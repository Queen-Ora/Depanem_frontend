import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Register.css';  // Réutilisation du fichier CSS
import toast from 'react-hot-toast';
import axios from 'axios';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [imageUploadVisible, setImageUploadVisible] = useState(false);  // Gérer la visibilité de l'input image
   //   mot de passe test : z4Cm&042
  const handleImageClick = () => {
    setImageUploadVisible(true);  // Rendre l'input de type image visible
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
toast.error('Les mots de passe ne sont pas identiques');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('FirstName', firstName);
    formData.append('LastName', lastName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('password_confirmation', confirmPassword);
    if (avatar) {
      formData.append('avatar', avatar);
    }
  
    try {
      const response = await axios.post('http://localhost:8000/api/depanem/registerUser', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
      toast.success('Inscription réussie');
      setLoading(false);
      navigate('/login'); // Redirection vers la page de connexion

      
      
    } catch (error) {
      setLoading(false); // Arrêtez le chargement
    if (error.response && error.response.data && error.response.data.data) {
      // Gestion des erreurs de validation
      Object.values(error.response.data.data).forEach((err) => {
        toast.error(err[0]);  // Affiche chaque message d'erreur
      });
    } else {
      toast.error('Une erreur est survenue lors de l\'inscription.');
    }
};
      
      
    }


  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
        <IoArrowBackCircleSharp onClick={() => window.location.href = '/'}   className="fa-2x text-primary mb-3 cursor-pointer" size={50}/>
          <h2>Inscription</h2>
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
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Créez un mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirmez le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Bouton pour afficher le champ de téléchargement d'image */}
            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={handleImageClick}
            >
              Ajouter une photo de profil
            </button>

            {/* Input pour télécharger l'image, qui sera caché par défaut */}
            {imageUploadVisible && (
              <div className="mb-3">
                <label htmlFor="profileImage" className="form-label">Photo de profil</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  id="profileImage"
                  accept="image/*"
                />
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Chargement...' : "S'inscrire"}
            </button>
            {/* <button type="submit" className="btn btn-primary">S'inscrire</button> */}
          </form>
          <p className="form-text">
            Vous avez déjà un compte ? <a href="/login">Se connecter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
