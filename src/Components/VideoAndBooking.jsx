import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'wowjs/css/libs/animate.css';
// import WOW from 'wowjs';

export default function VideoAndForm() {
  const [videoSrc, setVideoSrc] = useState('');

  // Initialiser l'animation WOW.js une fois que le composant est monté


  const handleVideoPlay = (src) => {
    setVideoSrc(src);
  };

  return (
    <div className="container-fluid my-5 px-0">
      {/* Section vidéo avec bouton */}
      <div className="video wow fadeInUp" data-wow-delay="0.1s">
        <button
          type="button"
          className="btn-play"
          data-bs-toggle="modal"
          data-bs-target="#videoModal"
          onClick={() => handleVideoPlay('https://www.youtube.com/embed/Yp864FzGBEE?list=RDYp864FzGBEE')}
        >
          <span></span>
        </button>

        {/* Modal pour afficher la vidéo */}
        <div
          className="modal fade"
          id="videoModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Vidéo YouTube */}
                <div className="ratio ratio-16x9">
                  <iframe
                    className="embed-responsive-item"
                    src={videoSrc}
                    allowFullScreen
                    title="YouTube Video"
                    allow="autoplay; encrypted-media"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Texte sous la vidéo */}
        <h1 className="text-white mb-4">Emergency Plumbing Service</h1>
        <h3 className="text-white mb-0">24 Hours 7 Days a Week</h3>
      </div>

      {/* Formulaire de réservation */}
      <div
        className="container position-relative wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ marginTop: '-6rem' }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-light text-center p-5">
              <h1 className="mb-4">Book For A Service</h1>
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Name"
                      style={{ height: '55px' }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email"
                      style={{ height: '55px' }}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <select className="form-select border-0" style={{ height: '55px' }}>
                      <option selected>Select A Service</option>
                      <option value="1">Service 1</option>
                      <option value="2">Service 2</option>
                      <option value="3">Service 3</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="date" id="date1" data-target-input="nearest">
                      <input
                        type="text"
                        className="form-control border-0 datetimepicker-input"
                        placeholder="Service Date"
                        style={{ height: '55px' }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control border-0"
                      placeholder="Special Request"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
