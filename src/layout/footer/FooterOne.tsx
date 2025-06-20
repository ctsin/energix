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
            <div className="col-lg-6">
              <div className="logo">
                <Link href="/">
                  <LogoIcon />
                </Link>
                <p>
                  Bridging global buyers and China’s complex solar and storage ,
                  electric power ecosystem with trust, transparency, and
                  technical relevance.
                </p>
                <ul className="d-flex social-media">
                  <li>
                    <Link href="https://www.linkedin.com/in/sunenergystorage/">
                      <i className="fa-brands fa-linkedin"></i>Linkedin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <ul>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
            </ul>
            <p>Ⓒ Copyright OffgridSynergy {year}. All Right Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
