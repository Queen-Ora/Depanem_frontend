import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Register.css'; // Réutilisation du fichier CSS
import toast from 'react-hot-toast';
import axios from 'axios';
import { IoArrowBackCircleSharp } from 'react-icons/io5';

const TechnicianRegister = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [matricule, setMatricule] = useState(''); // État pour le numéro de matricule
  const [profession, setProfession] = useState(''); // Nouveau champ pour la profession
  const [location, setLocation] = useState(''); // Nouveau champ pour la localisation
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUploadVisible, setImageUploadVisible] = useState(false);

  const handleImageClick = () => {
    setImageUploadVisible(true);
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
    if(email) {
      
      formData.append('email', email);
    }
    formData.append('password_confirmation', confirmPassword);
    formData.append('phone', phone);
    formData.append('profession', profession); // Ajout de la profession
    formData.append('localisation', location); // Ajout de la localisation
    formData.append('matricule', matricule); // Ajout du numéro de matricule
    formData.append('password', password);
    if (avatar) {
        formData.append('avatar', avatar);
      }

    try {
        
      const response = await axios.post('http://localhost:8000/api/depanem/technicianRegister', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    //   console.log(response);
      toast.success('Inscription réussie');
      localStorage.setItem('UserId', response.data.user.id);
      navigate('/profile');
    } catch (error) {
      if (error.response && error.response.data) {
        // Afficher les erreurs de validation
        Object.values(error.response.data.data).forEach((message) => {
          toast.error(message.join(', '));
        });
      } else {
        toast.error('Une erreur est survenue lors de l\'inscription');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
        <IoArrowBackCircleSharp onClick={() => window.location.href = '/'}  className="fa-2x text-primary mb-3 cursor-pointer" size={50}/>
          <h2>Inscription Technicien</h2>
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="email" className="form-label">Email <span className="text-danger">(Pas obligatoire!)</span></label>
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
            {/* Champ pour la profession */}
            <div className="mb-3">
              <label htmlFor="profession" className="form-label">Profession</label>
              <select
                className="form-control"
                id="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                required
              >
                <option value="">Sélectionnez votre profession</option>
                <option value="Electricien">Électricien</option>
                <option value="Plombier">Plombier</option>
                <option value="Mécanicien">Mécanicien</option>
                <option value="Menuisier">Menuisier</option>
                <option value="Décorateur">Décorateur</option>
                <option value="Ingénieur">Ingénieur</option>
                <option value="Autre">Autre</option>
                {/* Ajoutez d'autres professions si nécessaire */}
              </select>
            </div>

            {/* <div className="mb-3">
              <label htmlFor="matricule" className="form-label">Numéro de Matricule</label>
              <input
                type="text"
                className="form-control"
                id="matricule"
                placeholder="Entrez votre numéro de matricule"
                value={matricule}
                onChange={(e) => setMatricule(e.target.value)}
                required
              />
            </div> */}
            {/* Champ pour la localisation */}
            {/* <div className="mb-3">
              <label htmlFor="location" className="form-label">Localisation</label>
              <input
                type="text"
                className="form-control"
                id="location"
                placeholder="Entrez votre localisation"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div> */}


            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={handleImageClick}
            >
              Ajouter une photo de profil
            </button>
            <span className="text-danger">(Pas obligatoire!)</span>
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
          </form>
          <p className="form-text">
            Vous avez déjà un compte ? <a href="/login">Se connecter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnicianRegister;

