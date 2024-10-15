import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Login.css';  // Réutilisation du fichier CSS

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });
  const [imageUploadVisible, setImageUploadVisible] = useState(false);  // Gérer la visibilité de l'input image
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageClick = () => {
    setImageUploadVisible(true);  // Rendre l'input de type image visible
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation basique
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      setLoading(false);
      return;
    }

    // Simule l'enregistrement de l'utilisateur
    setTimeout(() => {
      setLoading(false);
      console.log('Inscription réussie', formData);
      // Ajoutez la redirection vers une autre page après inscription réussie si nécessaire
    }, 2000);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <h2>Inscription</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Nom</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Entrez votre nom"
                value={formData.lastName}
                onChange={handleChange}
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
                value={formData.firstName}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.phoneNumber}
                onChange={handleChange}
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
                value={formData.password}
                onChange={handleChange}
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
                value={formData.confirmPassword}
                onChange={handleChange}
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

export default Register;
