import React from "react";

export default function Opinion() {
  return (
    <div className="d-flex flex-column min-vh-100 py-5">
      <div className="mx-auto w-100" style={{ maxWidth: "400px" }}>
        <h6 className="mt-6 text-xl text-center text-dark">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          nulla obcaecati doloremque assumenda. Ducimus laboriosam aperiam
          earum, voluptate dolore nihil.
        </h6>



        <div className="mx-auto w-100 mt-4" style={{ maxWidth: "400px" }}>
          <div class="p-4 bg-white shadow rounded">
            <form method="POST" action="" /*onSubmit={handleSubmit}*/>
              <div class="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Laissez votre opinion!"
                  //   value={code}
                  //   onChange={(e) => setCode(e.target.value)}
                />
              </div>
<br />
              {/* input pour nombre d'etoiles */}
              <div class="form-group">
                <input
                  type="number"
                  min="1"
                  max="5"
                  className="form-control"
                  placeholder="Nombre d'etoiles"
                  //   value={code}
                  //   onChange={(e) => setCode(e.target.value)}
                />
              </div>

             


        

              <div className="form-group">
                {/* <button
          type="submit"
          className={`btn btn-primary btn-block ${isLoading ? "disabled" : ""}`}
          disabled={isLoading}
          >
          {isLoading ? "Chargement..." : "Soumettre"}
          </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
