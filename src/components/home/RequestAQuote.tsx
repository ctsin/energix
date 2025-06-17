import React from "react";
import bgImg from "../../../public/assets/img/request-quote.jpg";
import HomePageContactForm from "@/forms/HomePageContactForm";
interface propsClass{
  noTop:string
  quoteClass:string;
}
const RequestAQuote = ({noTop,quoteClass}:propsClass) => {
  return (
    <>
      <section className={`gap ${noTop}`}>
        <div className="container">
          <div
            className={`row request-quote ${quoteClass}`}
            style={{ backgroundImage: `url(${bgImg.src})` }}
          >
            <div className="col-lg-6">
              <div className="heading">
                <p>Request A Quote</p>
                <div className="line"></div>
                <h2>
                  Not Just a Sourcing Agent — We Are Your Trusted Supply Chain
                  Partner
                </h2>
                <h6>
                  helping you access reliable manufacturers, optimize solutions,
                  and ensure smooth delivery from China to the world.
                </h6>
              </div>
            </div>
            <div className="col-lg-6">
              <HomePageContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestAQuote;
