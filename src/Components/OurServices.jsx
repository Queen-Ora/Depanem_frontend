import React from 'react'
import { FaArrowRight, FaCheck, FaWrench } from 'react-icons/fa'
import { IoWater } from 'react-icons/io5'
import './style.css'
import { FaBoltLightning } from 'react-icons/fa6'
import { GiComputing } from 'react-icons/gi'

export default function OurServices() {
  return (
    <div class="container-fluid py-5 px-4 px-lg-0">
    <div class="row g-0">
        <div class="col-md-12 col-lg-9">
            <div class="ms-lg-5 ps-lg-5">
                <div class="text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="text-secondary text-uppercase">Nos Services</h6>
                    <h1 class="mb-5">Explorez Nos Services</h1>
                </div>

                {/* <!-- Bootstrap Carousel --> */}
                <div id="servicesCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">

                        {/* <!-- Service 1 --> */}
                        <div class="carousel-item active">
                            <div class="bg-light p-4">
                                <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{width: '75px', height: '75px'}}>
                                <IoWater class="fa-2x text-primary" />
                                    {/* <i class="fa fa-water fa-2x text-primary"></i> */}
                                </div>
                                <h4 class="mb-3">Plomberie</h4>
                                <p>Une fuite d’eau, un évier bouché ou un chauffe-eau en panne ? Nos plombiers certifiés interviennent rapidement pour résoudre tous vos problèmes de plomberie.</p>
                                <p class="text-primary fw-medium">  <FaCheck className="text-success me-3"/>Service de qualité</p>
                                <p class="text-primary fw-medium">  <FaCheck className="text-success me-3"/>Satisfaction du client</p>
                                <p class="text-primary fw-medium">  <FaCheck className="text-success me-3"/>Disponibilité 24/7</p>
                                {/* <a href="#" class="btn bg-white text-primary w-100 mt-2">Read More           <FaArrowRight className=" text-secondary ms-2" /></a> */}
                            </div>
                        </div>

                        {/* <!-- Service 2 --> */}
                        <div class="carousel-item">
                            <div class="bg-light p-4">
                                <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{width: '75px', height: '75px'}}>
                                <FaWrench class="fa-2x text-primary" />
                                    {/* A remplacer apres */}
                                    {/* <i class="fa fa-toilet fa-2x text-primary"></i> */}
                                </div>
                                <h4 class="mb-3">Mecanique</h4>
                                <p> plus jamais immobilisé! Nos mécaniciens qualifiés sont prêts à intervenir rapidement pour tous vos besoins de réparation ou d’entretien automobile.</p>
                                <p class="text-primary fw-medium"><FaCheck className="text-success me-3"/>Service de qualité</p>
                                <p class="text-primary fw-medium"><FaCheck className="text-success me-3"/>Satisfaction du client</p>
                                <p class="text-primary fw-medium"><FaCheck className="text-success me-3"/>Support 24/7</p>
                                {/* <a href="#" class="btn bg-white text-primary w-100 mt-2">Read More<FaArrowRight className=" text-secondary ms-2" /></a> */}
                            </div>
                        </div>

                        {/* <!-- Service 3 --> */}
                        <div class="carousel-item">
                            <div class="bg-light p-4">
                                <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{width: '75px', height: '75px'}}>
                                <FaBoltLightning class="fa-2x text-primary" />
                                   {/* A remplacer apres */}
                                    {/* <i class="fa fa-toilet fa-2x text-primary"></i> */}
                                </div>
                                <h4 class="mb-3">Electricité</h4>
                                <p>Ne restez plus dans le noir ! Que ce soit pour un court-circuit, une panne générale ou une installation électrique, nos électriciens certifiés sont là pour vous fournir un service sûr et rapide</p>
                                <p class="text-primary fw-medium"><FaCheck className="text-success me-3"/>Service de qualité</p>
                                <p class="text-primary fw-medium"><FaCheck className="text-success me-3"/>Satisfaction du client</p>
                                <p class="text-primary fw-medium"><FaCheck className="text-success me-3"/>Support 24/7</p>
                                {/* <a href="#" class="btn bg-white text-primary w-100 mt-2">Read More<FaArrowRight className=" text-secondary ms-2" /></a> */}
                            </div>
                        </div>

                        {/* <!-- Service 4 --> */}
                        <div class="carousel-item">
                            <div class="bg-light p-4">
                                <div class="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{width: '75px', height: '75px'}}>
                                <GiComputing class="fa-2x text-primary" />
                                     {/* A remplacer apres */}
                                    {/* <i class="fa fa-toilet fa-2x text-primary"></i> */}
                                </div>
                                <h4 class="mb-3">Maintenancier</h4>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                                <p class="text-primary fw-medium"><FaCheck className="text-success me-3"/>Service de qualité</p>
                                <p class="text-primary fw-medium"><FaCheck className="text-success me-3"/>Satisfaction du client</p>
                                <p class="text-primary fw-medium"><FaCheck className="text-success me-3"/>Support 24/7</p>
                                {/* <a href="#" class="btn bg-white text-primary w-100 mt-2">Read More<FaArrowRight className=" text-secondary ms-2" /></a> */}
                            </div>
                        </div>

                    </div>
{/* 
                    <!-- Carousel controls --> */}
                    <button class="carousel-control-prev" type="button" data-bs-target="#servicesCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#servicesCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <style jsx>{`
  /* Personnalisation des boutons de contrôle */
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(29%) sepia(99%) saturate(585%) hue-rotate(192deg) brightness(95%) contrast(94%);
    /* Cette combinaison de filter permet de rendre la flèche bleue */
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 5%; /* Ajustez la largeur du bouton pour qu'il soit plus large */
  }
`}</style>

</div>

  )
}
