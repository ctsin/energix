import PowerIcon from "@/svg/PowerIcon";
import CommercialSolarEnergyIcon from "@/svg/CommercialSolarEnergyIcon";
import React from "react";
import serviceOne from "../../../public/assets/img/services-1.jpg";
import serviceTwo from "../../../public/assets/img/services-2.jpg";
import Image from "next/image";
import Link from "next/link";
const SustainableEnergy = () => {
  return (
    <>
      <section className="services gap no-bottom">
        <div className="container">
          <div className="heading">
            <p>process and the solutions we can provide</p>
            <div className="line"></div>
            <h2>Our Products Serve a Wide Range of Applications, including:</h2>
            <span>
              Powerful & intelligent energy storage solutions,helping you
              maximize your energy potential.
            </span>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="use-energix three">
                <div className="use-energix-icon">
                  <i>
                    <PowerIcon />
                  </i>
                </div>
                <div>
                  <Link href="#">
                    <h2>Energy Storage Equipments</h2>
                  </Link>
                  <p>
                    Solar Panels, Racks, Cables, Hybrid Inverters, Lithium-Iron
                    Batteries, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="services-img">
                <figure>
                  <Image alt="img" src={serviceOne} />
                </figure>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-md-5 mt-2">
            <div className="col-lg-7">
              <div className="services-img two">
                <figure>
                  <Image alt="img" src={serviceTwo} />
                </figure>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="use-energix three">
                <div className="use-energix-icon">
                  <i>
                    <CommercialSolarEnergyIcon />
                  </i>
                </div>
                <div>
                  <Link href="#">
                    <h2>Electric Power Applications</h2>
                  </Link>
                  <p>
                    Lithium cells, modules, packs and solutions for Electric
                    Cars, Electric Scooters, Electric Carts, Electric Bikes,
                    Electric Forklifts, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SustainableEnergy;
