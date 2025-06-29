import React from "react";
import bgImg from "../../../public/assets/img/10015.jpg";
interface propsType {
  title: string;
}

const BreadCamb = ({ title }: propsType) => {
  return (
    <>
      <section
        className="banner"
        style={{
          backgroundImage: `url(${bgImg.src})`,
        }}
      >
        <div className="container">
          <div className="banner-text">
            <h2>{title}</h2>
            <p>Reliable Solar. Global Sourcing. Trusted Partner.</p>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">
                  <i className="fa-solid fa-house pe-2"></i>Home
                </a>
              </li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreadCamb;
