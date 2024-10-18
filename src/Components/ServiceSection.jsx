import React from 'react';
import Service1 from '../assets/img/d90c51ee-0e5f-47da-aff6-73efb0a0f6ee.jfif';
import Service2 from '../assets/img/service_2.jfif';
import Service3 from '../assets/img/service_3.jfif';
import { FaArrowRight } from 'react-icons/fa';
import 'animate.css';


const ServicesSection = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    {/* Service Item 1 */}
                    <div className="col-lg-4 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.1s">
                        <div className="overflow-hidden">
                            <img className="img-fluid w-100 h-100" src={Service1} alt="Residential Plumbing" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between bg-light p-4">
                            <h5 className="text-truncate me-3 mb-0">Residential Plumbing</h5>
                            <a className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" href="#">
                            <FaArrowRight />
                            </a>
                        </div>
                    </div>

                    {/* Service Item 2 */}
                    <div className="col-lg-4 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.3s">
                        <div className="overflow-hidden">
                            <img className="img-fluid w-100 h-100" src={Service2} alt="Commercial Plumbing" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between bg-light p-4">
                            <h5 className="text-truncate me-3 mb-0">Commercial Plumbing</h5>
                            <a className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" href="#">
                            <FaArrowRight />
                            </a>
                        </div>
                    </div>

                    {/* Service Item 3 */}
                    <div className="col-lg-4 col-md-6 service-item-top wow fadeInUp" data-wow-delay="0.5s">
                        <div className="overflow-hidden">
                            <img className="img-fluid w-100 h-100" src={Service3} alt="Emergency Servicing" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between bg-light p-4">
                            <h5 className="text-truncate me-3 mb-0">Emergency Servicing</h5>
                            <a className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0" href="#">
                            <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
