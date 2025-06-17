import React from "react";
import checkImg from "../../../public/assets/img/check-mark.png";
import businessModel from "../../../public/assets/img/business-model.png";
import Image from "next/image";
import HomeSolarIcon from "@/svg/HomeSolarIcon";
import CommercialSolarEnergyTwoIcon from "@/svg/CommercialSolarEnergyTwoIcon";
import IndustrialSolarEnergy from "@/svg/IndustrialSolarEnergy";
const SolarPV = () => {
  return (
    <>
      <section className="gap no-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading">
                <h2>
                  Which Model Best Aligns With Your Local Sourcing Strategy?
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="renewable-group">
                <p>
                  OffgridSynergy – Your independent sourcing partner for energy
                  storage, solar inverter, and electric power battery
                  technologies.{" "}
                </p>
              </div>
            </div>
          </div>
          <Image
            alt="check-mark"
            src={businessModel}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: 790,
              margin: "auto",
              display: "block",
            }}
          />
          {/* <div className="row mt-3">
            <div className="col-xl-4 col-lg-6">
              <div className="solar-pv">
                <i>
                  <HomeSolarIcon />
                </i>
                <h4>Home solar energy</h4>
                <div className="team-info">
                  <ul className="pb-0">
                    <li>
                      <Image alt="check-mark" src={checkImg} />
                      Reduce Bills
                    </li>
                    <li>
                      <Image alt="check-mark" src={checkImg} />
                      Low Maintenance
                    </li>
                    <li className="pb-0">
                      <Image alt="check-mark" src={checkImg} />
                      25 Year Panel Warranty
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="solar-pv">
                <i>
                  <CommercialSolarEnergyTwoIcon />
                </i>
                <h4>Commercial solar energy</h4>
                <div className="team-info">
                  <ul className="pb-0">
                    <li>
                      <Image alt="check-mark" src={checkImg} />
                      Reduce Bills
                    </li>
                    <li>
                      <Image alt="check-mark" src={checkImg} />
                      Low Maintenance
                    </li>
                    <li className="pb-0">
                      <Image alt="check-mark" src={checkImg} />
                      25 Year Panel Warranty
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="solar-pv">
                <i>
                  <IndustrialSolarEnergy />
                </i>
                <h4>Industrial solar energy</h4>
                <div className="team-info">
                  <ul className="pb-0">
                    <li>
                      <Image alt="check-mark" src={checkImg} />
                      Reduce Bills
                    </li>
                    <li>
                      <Image alt="check-mark" src={checkImg} />
                      Low Maintenance
                    </li>
                    <li className="pb-0">
                      <Image alt="check-mark" src={checkImg} />
                      25 Year Panel Warranty
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default SolarPV;
