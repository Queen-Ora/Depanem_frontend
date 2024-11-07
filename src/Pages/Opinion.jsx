import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Opinion() {
  const [opinion, setOpinion] = useState("");
  const [rate, setRate] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const userId = localStorage.getItem("UserId");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Indiquer que le chargement commence
    try {
      const response = await axios.post(`http://localhost:8000/api/depanem/saveOpinion/${userId}`, {
        opinion,
        rate
      });
      toast.success(response.data.message);
      setOpinion("");
      setRate(1); // Réinitialiser le rating à 1 par défaut
    //   console.log(response.data);
      setIsLoading(false); // Indiquer que le chargement est terminé
    } catch (error) {
        if (error.response && error.response.status === 422) {
            // Afficher des erreurs spécifiques pour chaque champ
            const validationErrors = error.response.data.errors;
            // setErrors(validationErrors);

            // Afficher chaque message d'erreur dans une notification distincte
            Object.values(validationErrors).forEach((errMsgArray) => {
                toast.error(errMsgArray[0]);
            });
        } else {

            // Message d'erreur générique si ce n'est pas une erreur de validation
            // console.log(error);
            
            toast.error('Erreur de publication de l’opinion.');
        }
    } finally {
        setIsLoading(false); // Indiquer que le chargement est terminé
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 py-5">
      <div className="mx-auto w-100" style={{ maxWidth: "400px" }}>
        <h6 className="mt-6 text-xl text-center text-dark">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          nulla obcaecati doloremque assumenda. Ducimus laboriosam aperiam
          earum, voluptate dolore nihil.
        </h6>

        <div className="mx-auto w-100 mt-4" style={{ maxWidth: "400px" }}>
          <div className="p-4 bg-white shadow rounded">
            <form method="POST" action="" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Laissez votre opinion!"
                  value={opinion}
                  onChange={(e) => setOpinion(e.target.value)}
                />
              </div>
              <br />
              {/* input pour nombre d'étoiles */}
              <div className="form-group">
                <label htmlFor="">Note sur 5</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  className="form-control"
                  placeholder="Nombre d'étoiles"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </div>

              <br />

              <div className="form-group">
                <button
                  type="submit"
                  className={`btn btn-primary btn-block ${isLoading ? "disabled" : ""}`}
                  disabled={isLoading}
                >
                  {isLoading ? "Chargement..." : "Publier"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}