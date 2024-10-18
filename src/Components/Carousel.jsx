import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel1 from '../assets/img/carousel/carousel_1.jfif';
import Carousel2 from '../assets/img/carousel/carousel_2.jfif';
// import './CustomCarousel.css'; // Importer votre fichier CSS personnalisé

function DepanemCarousel() {
  return (
    <div className=" header-carousel container-fluid p-0 mb-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Carousel1}
            alt="Efficient Residential Plumbing Services"
          />
          <Carousel.Caption className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .4)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h5 className="text-white text-uppercase mb-3">Nos meilleurs mecaniciens</h5>
                  <h1 className="display-3 text-white mb-4">Je ne sais quoi ecrire</h1>
<p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                  </p>
                  <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3">Read More</a>
                  <a href="#" className="btn btn-secondary py-md-3 px-md-5">Free Quote</a>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Carousel2}
            alt="Efficient Commercial Plumbing Services"
          />
          <Carousel.Caption className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .4)' }}>
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h5 className="text-white text-uppercase mb-3">Plumbing & Repairing Services</h5>
                  <h1 className="display-3 text-white mb-4">Efficient Commercial Plumbing Services</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                  </p>
                  <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3">Read More</a>
                  <a href="#" className="btn btn-secondary py-md-3 px-md-5">Free Quote</a>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DepanemCarousel;
