import BattaryIcon from "@/svg/BattaryIcon";
import InverterIcon from "@/svg/InverterIcon";
import SupplierCompliance from "@/svg/SupplierCompliance";
import ReduceCost from "@/svg/ReduceCost";
import Delivery from "@/svg/Delivery";
import RenewAbleEnergy from "@/svg/RenewAbleEnergy";
import WindKinetic from "@/svg/WindKinetic";
import React from "react";
import Image from "next/image";
// import images
import sun from "../../../public/assets/img/signature.png";
import SolarStorageEquipments from "../../../public/assets/img/SolarStorageEquipments.jpg";
import ElectricPowerApplications from "../../../public/assets/img/ElectricPowerApplications.jpg";
import battaryStorage2 from "../../../public/assets/img/battery-storage-2.jpg";
import battaryStorage3 from "../../../public/assets/img/battery-storage-3.jpg";
import battaryStorage4 from "../../../public/assets/img/battery-storage-4.jpg";
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
                <h2>End-to-End Sourcing Support You Can Count On</h2>
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
                  style={{ width: 200, height: "auto" }}
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
                  src={SolarStorageEquipments}
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="battery-storage-text">
                  <Link href="/services">
                    <h3>Solar Power Equipments</h3>
                  </Link>
                  <p>
                    Solar Panels, Racks, Cables, Hybrid Inverters, Lithium-Iron
                    Batteries, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="battery-storage">
                <Image
                  alt="chris-hemsworth"
                  src={ElectricPowerApplications}
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="battery-storage-text">
                  <Link href="/services">
                    <h3>Electric Power Applications</h3>
                  </Link>
                  <p>
                    Lithium ion modules, packs and solutions for electric cars,
                    etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="count-title-text">
            <div className="col-lg-4 col-md-6">
              <i>
                <SupplierCompliance />
              </i>
              <p style={{ marginTop: "2em" }}>
                Delivering carefully sourced, high-quality energy components
                with verified supplier compliance.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <i>
                <ReduceCost />
              </i>
              <p style={{ marginTop: "2em" }}>
                Providing transparent supply chain management for timely and
                efficient product delivery.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <i>
                <Delivery />
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
