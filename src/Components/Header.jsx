import React from "react";
import "../Components/header.css";
import phone from "../assets/phone.png";
import logo from "../assets/Logo-new.png";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
function Header() {
  return (
    <div className="row">
      <div className="col-lg-12 ">
        <div>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <img src={logo} alt="logo" />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* Links */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="">
                  <div className="row text-center header-social-media">
                    <div className="col-6 fw-bold m-2 ">
                      <img src={phone} alt="phone-logo" />
                      UAN: 0800-44441
                    </div>
                  
                  <div className="col"><FaFacebook /></div>
                    <div className="col social-icons"><FaInstagram /></div>
                    <div className="col social-icons"><FaSquareTwitter /></div>
                    <div className="col social-icons"><FaSquareWhatsapp /></div>
                    <div className="col social-icons"><FaYoutube /></div>
                    <div className="col social-icons"> <FaLinkedin /></div>
                  
                    <div className="row justify-content-center ">
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                        >
                          ABOUT
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          HOW YOU CAN HELP
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          LRBT WORLD WIDE
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          LATEST
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          CONTACT US
                        </a>
                      </li>
                    </ul>
                    </div>
                  </div>
                </div>
                <div className="header-buttons p-3 mx-5 ">
                  <div className="buttons">
                    <button type="button" className="header-button-one">
                      DONATE ONLINE
                    </button>

                    <button type="button" className="header-button-two mx-2 ">
                      ZAKAT CALCULATOR
                    </button>
                  </div>
                </div>
              </div>
              {/* Links */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
