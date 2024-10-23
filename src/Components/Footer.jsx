import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaAngleRight } from 'react-icons/fa';
// import './style.css';

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Address</h4>
            <p className="mb-2"><FaMapMarkerAlt className="me-3" />123 Avenue, Lome,Togo</p>
            <p className="mb-2"><FaPhoneAlt className="me-3" />0022892622266</p>
            <p className="mb-2"><FaEnvelope className="me-1" />Depanemtogo@gmail.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className="btn btn-outline-light btn-social" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a className="btn btn-outline-light btn-social" href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a className="btn btn-outline-light btn-social" href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Heures d'ouverture </h4>
            <h6 className="text-light">Monday - Friday:</h6>
            <p className="mb-4">09.00 AM - 09.00 PM</p>
            <h6 className="text-light">Saturday - Sunday:</h6>
            <p className="mb-0">09.00 AM - 12.00 PM</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Services</h4>
            <a className="btn btn-link" href="#"> <FaAngleRight />Mecanique</a>
            <a className="btn btn-link" href="#"> <FaAngleRight />Electricité</a>
            <a className="btn btn-link" href="#"> <FaAngleRight />maintenance informatique</a>
            <a className="btn btn-link" href="#"> <FaAngleRight />plomberie</a>
            <a className="btn btn-link" href="#"> <FaAngleRight />climatique</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Soyez le premier à tout savoir
</h4>
            <p>Recevez nos meilleures offres, astuces pratiques et mises à jour sur les nouveaux services directement dans votre boîte mail..</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">Depanem</a>, All Right Reserved.
            </div>
            {/* <div className="col-md-6 text-center text-md-end">
              Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
              Distributed By <a href="https://themewagon.com">ThemeWagon</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
