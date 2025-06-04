import React from "react";
import bgImg from "../../../public/assets/img/footer.jpg";
import LogoIcon from "@/svg/LogoIcon";
import Link from "next/link";
import PhoneIcon from "@/svg/PhoneIcon";
import LocationIcon from "@/svg/LocationIcon";
import EmailIcon from "@/svg/EmailIcon";
const FooterOne = () => {
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
                    <Link href="https://www.facebook.com/">
                      <i className="fa-brands fa-facebook"></i>facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/">
                      <i className="fa-brands fa-twitter"></i>Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/">
                      <i className="fa-brands fa-instagram"></i>instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-energix">
                <h5>About Energix</h5>
                <p>
                  Solar energy’s exceptional synergies with energy storage,
                  electric vehicles and smart grids means the industry works on
                  the frontline of technology and system change to deliver.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-energix">
                <h5>Subscribe to our newsletter.</h5>
                <p>Subscribe email and get recent news and updates</p>
                <form>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email address..."
                  />
                  <button className="button">
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
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
                  <h4>Phone No:</h4>
                  <Link href="callto:01234525407">
                    <p>01234 525 407 - 01234 525 407</p>
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
                  <p>12/7 new town, 245x Town 1214 Street, United State</p>
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
                  <Link href="mailto:username@domainname.com">
                    <p>username@domainname.com</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Ⓒ Copyright Energix 2024. All Right Reserved.</p>
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
