import React from "react";
import logo from "../assets/Logo-new.png";
import shariah from "../assets/shariah.png";
import address from "../assets/address.png";
import phone from "../assets/phone.png";
import smartphone from "../assets/smartphone.png";
import email from "../assets/email.png";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
function BottomHeader() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <div className="row">
            <div className="col-lg-4">
              <img src={logo} alt="logo" />
              <div>
                <p>
                  LRBT is the largest provider of eye care in Pakistan, giving
                  the gift of sight and transforming lives.
                </p>
                <div>
                  <p>
                    LRBT is a registered charity having Registration No. DSW (K)
                    183
                  </p>
                  <div>
                    <img src={shariah} alt="certificate" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="row">
                <div className="row">
                  <div className="col-lg-6">
                    <h5>Quick Links</h5>
                    <div>
                      <a href="#1">Sponser a Surgery</a>
                    </div>
                    <div>
                      <a href="#1">International Remittence</a>
                    </div>
                    <div>
                      <a href="#1">News and Events</a>
                    </div>
                    <div>
                      <a href="#1">Annual Reports</a>
                    </div>
                    <h3>Social Links</h3>
                    <div>
                      <span>
                        <FaFacebook />
                      </span>
                      <span>
                        <FaInstagram />
                      </span>
                      <span>
                        <FaSquareTwitter />
                      </span>
                      <span>
                        <FaSquareWhatsapp />
                      </span>
                      <span>
                        <FaYoutube />
                      </span>
                      <span>
                        <FaLinkedin />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div>
                      <a href="#1">Careers</a>
                    </div>
                    <div>
                      <a href="#1">Employment Applicant Form</a>
                    </div>
                    <div>
                      <a href="#1">Policies</a>
                    </div>
                    <div>
                      <a href="#1">Tender Notice</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-2 mx-auto bg-danger ">
              <h4>Contact US</h4>
              <div>
                <img src={address} alt="phone-logo" />
                <span>
                  {" "}
                  LRBT House, 37-C, Sunset Lane No.4 Off 24th Commercial Street
                  Phase-II Ext. DHA Karachi 75500
                </span>
              </div>
              <div>
                <img src={phone} alt="phone-logo" />{" "}
                <span>UAN: 0800-44441</span>
              </div>
              <div>
                <img src={smartphone} alt="phone" />
                <span>Mobile: 03158679600</span>
              </div>
              <div>
                <img src={email} alt="email" />
                <span> lrbt@lrbt.org.pk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomHeader;
