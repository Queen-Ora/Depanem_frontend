import React from "react";
import logo from "../assets/img/logo.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="container-fluid bg-light d-none d-lg-block">
      <div className="row align-items-center top-bar">
        <div className="col-lg-3 col-md-12 text-center text-lg-start">
          <a href className="navbar-brand m-0 p-0">
            <img src={logo} alt="" width={100} />
          </a>
        </div>
        <div className="col-lg-9 col-md-12 text-end">
          
          <div className="h-100 d-inline-flex align-items-center me-4">
            <MdOutlineMailOutline color="blue"  size={20}/>
            {/* <i  className="far fa-envelope-open text-primary me-2"></i> */}
            <p className="m-0">Depanemtogo@gmail.com</p>
          </div>
          <div className="h-100 d-inline-flex align-items-center">

            <a className="btn btn-sm-square bg-white text-primary me-1" href>
            <FaFacebook size={25} />
            </a>
            
            <a className="btn btn-sm-square bg-white text-primary me-1" href>
            <FaLinkedin size={25}  />

            </a>      
          </div>
        </div>
      </div>
    </div>
  );
}
