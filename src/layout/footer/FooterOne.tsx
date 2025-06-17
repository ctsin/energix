import React from "react";
import bgImg from "../../../public/assets/img/10013.png";
import LogoIcon from "@/svg/LogoIcon";
import Link from "next/link";
import PhoneIcon from "@/svg/PhoneIcon";
import LocationIcon from "@/svg/LocationIcon";
import EmailIcon from "@/svg/EmailIcon";
const FooterOne = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer
        className="gap no-bottom one"
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="logo">
                <Link href="/">
                  <LogoIcon />
                </Link>
                <ul className="d-flex social-media">
                  <li>
                    <Link href="https://www.linkedin.com/in/sunenergystorage/">
                      <i className="fa-brands fa-linkedin"></i>Linkedin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-energix">
                <h5>About OffgridSynergy</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-energix">
                <p>
                  With over 12 years of experience in supply chain and
                  CM(Contract Manufacturer) management, and over 7 years of
                  hands-on expertise in lithium battery and energy storage
                  industries, we have a deep understanding of the entire value
                  chain — from raw material sourcing, production, and inventory
                  control, to order fulfillment, logistics coordination, on-site
                  commissioning, and after-sales support.
                </p>
              </div>
            </div>
          </div>
          <div className="row contact-footer">
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div>
                  <i>
                    <PhoneIcon />
                  </i>
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <Link href="callto:+8618576775218">
                    <p>Phone No. +86 18576775218</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info">
                <div>
                  <i>
                    <LocationIcon />
                  </i>
                </div>
                <div>
                  <p>Hi-Tech Zone, Nanshan District, Shenzhen, PRC</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="contact-info mb-0">
                <div>
                  <i>
                    <EmailIcon />
                  </i>
                </div>
                <div>
                  <h4>Email Address:</h4>
                  <Link href="mailto:info@offgridsynergy.com">
                    <p>info@offgridsynergy.com</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Ⓒ Copyright OffgridSynergy {year}. All Right Reserved.</p>
            <ul>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
