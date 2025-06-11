import AnalysedIcon from "@/svg/AnalysedIcon";
import BattaryIcon from "@/svg/BattaryIcon";
import InverterIcon from "@/svg/InverterIcon";
import NetWorkIcon from "@/svg/NetWorkIcon";
import PantographsIcon from "@/svg/PantographsIcon";
import RenewAbleEnergy from "@/svg/RenewAbleEnergy";
import WindKinetic from "@/svg/WindKinetic";
import React from "react";
import Image from "next/image";
// import images
import sun from "../../../public/assets/img/signature.jpg";
import battaryStorage from "../../../public/assets/img/battery-storage-1.jpg";
import battaryStorage2 from "../../../public/assets/img/battery-storage-2.jpg";
import battaryStorage3 from "../../../public/assets/img/battery-storage-3.jpg";
import battaryStorage4 from "../../../public/assets/img/battery-storage-4.jpg";
import CountUpContent from "@/elements/counter/CountUpContent";
import Link from "next/link";

const SaveEnegryGallarySec = () => {
  return (
    <>
      <section className="gap no-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading">
                <p>WELCOME TO OFFGRIDSYNERGY</p>
                <div className="line"></div>
                <h2>Powering a cleaner tomorrow, today</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="renewable-group">
                <p>
                  OffgridSynergy – Your independent sourcing partner for energy
                  storage, solar inverter, and electric power battery
                  technologies.
                </p>
                <Image
                  alt="John Sun - Managing Director of OffgridSynergy"
                  src={sun}
                  style={{ width: "auto", height: "auto" }}
                />
                <h3>John Sun</h3>
                <h6>Managing Director of OffgridSynergy</h6>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-6">
              <div className="battery-storage">
                <Image
                  alt="chris-hemsworth"
                  src={battaryStorage}
                  style={{ width: "100%", height: "100%" }}
                />
                <i>
                  <BattaryIcon />
                </i>
                <div className="battery-storage-text">
                  <Link href="/services">
                    <h3>Battery Storage</h3>
                  </Link>
                  <p>Protecting our environment needn’t cost the earth.</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="battery-storage">
                    <Image
                      alt="chris-hemsworth"
                      src={battaryStorage2}
                      style={{ width: "100%", height: "100%" }}
                    />
                    <i>
                      <InverterIcon />
                    </i>
                    <div className="battery-storage-text">
                      <Link href="/services">
                        {" "}
                        <h3>Inverter</h3>
                      </Link>
                      <p>Protecting our environment.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="battery-storage">
                    <Image
                      alt="chris-hemsworth"
                      src={battaryStorage3}
                      style={{ width: "100%", height: "100%" }}
                    />
                    <i>
                      <WindKinetic />
                    </i>
                    <div className="battery-storage-text">
                      <Link href="/services">
                        <h3>Electric Power</h3>
                      </Link>
                      <p>Protecting our environment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="battery-storage two">
                <Image
                  alt="chris-hemsworth"
                  src={battaryStorage4}
                  style={{ width: "100%", height: "100%" }}
                />
                <i>
                  <RenewAbleEnergy />
                </i>
                <div className="battery-storage-text">
                  <Link href="/services">
                    <h3>Renewable Energy</h3>
                  </Link>
                  <p>Protecting our environment needn’t cost the earth.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="count-title-text">
            <div className="col-lg-4 col-md-6">
              <i>
                <NetWorkIcon />
              </i>
              <p style={{ marginTop: "2em" }}>
                Delivering carefully sourced, high-quality energy components
                with verified supplier compliance.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <i>
                <PantographsIcon />
              </i>
              <p style={{ marginTop: "2em" }}>
                Providing transparent supply chain management for timely and
                efficient product delivery.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <i>
                <AnalysedIcon />
              </i>
              <p style={{ marginTop: "2em" }}>
                Leveraging comprehensive market data and analysis to optimize
                procurement strategies and reduce costs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SaveEnegryGallarySec;
