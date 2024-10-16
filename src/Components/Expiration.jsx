import { useState, useEffect } from 'react';

// Hook personnalisé pour gérer le localStorage avec expiration
const useLocalStorageWithExpiry = (key, initialValue, expiryTime) => {
  // Fonction pour récupérer la valeur stockée
  const getStoredValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) return initialValue; // Si aucun item n'est trouvé, retourne la valeur initiale

      const parsedItem = JSON.parse(item);
      const now = new Date().getTime();

      // Vérifie si l'élément est expiré
      if (now > parsedItem.expiry) {
        window.localStorage.removeItem(key); // Supprime l'élément expiré
        return initialValue;
      }
      return parsedItem.value;
    } catch (error) {
      console.error("Error accessing localStorage", error);
      return initialValue;
    }
  };

  // Utilisation du useState avec la valeur récupérée
  const [storedValue, setStoredValue] = useState(getStoredValue);

  const setValue = (value) => {
    try {
      const expiry = new Date().getTime() + expiryTime; // Ajoute le temps d'expiration
      const valueToStore = { value, expiry };

      // Met à jour le state et le localStorage
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting localStorage", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const item = window.localStorage.getItem(key);
      if (item) {
        const parsedItem = JSON.parse(item);
        const now = new Date().getTime();

        // Si l'élément a expiré, le supprimer et mettre à jour l'état local
        if (now > parsedItem.expiry) {
          window.localStorage.removeItem(key);
          setStoredValue(initialValue);
        }
      }
    }, 1000); // Vérifie chaque seconde

    return () => clearInterval(interval);
  }, [key, initialValue]);

  return [storedValue, setValue];
};

export default useLocalStorageWithExpiry;
