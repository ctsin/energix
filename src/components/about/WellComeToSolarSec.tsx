import React from "react";
import directorImg from "../../../public/assets/img/signature.jpg";
import about1 from "../../../public/assets/img/about-1.jpg";
import about2 from "../../../public/assets/img/about-2.jpg";
import Image from "next/image";
import ExperienceTwoIcon from "@/svg/ExperienceTwoIcon";
import CountUpContent from "@/elements/counter/CountUpContent";
const WellComeToSolarSec = () => {
  return (
    <>
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="heading">
                <p>Welcome to OffgridSynergy</p>
                <div className="line"></div>
                <h2>OffgridSynergy</h2>
              </div>
              <div className="renewable-group w-100">
                <p>
                  Based in Shenzhen, China — a global sourcing hub adjacent to
                  Hong Kong, Guangzhou, and Dongguan — We specializes in
                  providing high-quality sourcing services for renewable energy
                  components. We focus on hybrid inverters, and lithium
                  batteries (cells, modules, packs and complete energy storage
                  systems).
                </p>
                <p>
                  We are not just a sourcing agent — we are your trusted supply
                  chain partner, helping you access reliable manufacturers,
                  optimize solutions, and ensure smooth delivery from China to
                  the world. Our products serve a wide range of applications,
                  including: Residential energy storage solutions Small and
                  medium commercial & industrial energy storage Large-scale
                  industrial energy storage projects Lithium cells, modules,
                  packs used for cars, trucks, bikes, scooters, forklifts,
                  golfcarts, etc OffgridSynergy is committed to delivering
                  reliable, cost-effective, and technically supported sourcing
                  solutions to international brands, system integrators, and
                  distributors. With strong local supply chain advantages and
                  professional service, we help customers reduce procurement
                  risks and accelerate project delivery.
                </p>
                <Image
                  alt="John Sun - Managing Director of OffgridSynergy"
                  src={directorImg}
                />
                <h3>John Sun</h3>
                <h6>Managing Director of OffgridSynergy</h6>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="about-img">
                <Image alt="about" src={about1} />
                <Image alt="about" className="img-about" src={about2} />
                <div className="about-two-content">
                  <div className="d-flex">
                    <i>
                      <ExperienceTwoIcon />
                    </i>
                    <div>
                      <div className="d-flex">
                        <h2 className="timer count-title count-number">
                          {" "}
                          <CountUpContent number={18} text="" />{" "}
                        </h2>
                        <span>+</span>
                      </div>
                      <h6>Years Experience</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WellComeToSolarSec;
