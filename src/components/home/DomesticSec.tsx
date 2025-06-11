import DomesticCommercialIcon from "@/svg/DomesticCommercialIcon";
import DomesticSvgIcon from "@/svg/DomesticSvgIcon";
import React from "react";

const DomesticSec = () => {
  return (
    <>
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="domestic">
                <i>
                  <DomesticSvgIcon />
                </i>
                <h3>Solar Power Equipments</h3>
                <p>
                  Solar Panels, Racks, Cables, Hybrid Inverters, Lithium-Iron
                  Batteries, etc.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="domestic commercial">
                <i>
                  <DomesticCommercialIcon />
                </i>
                <h3>Electric Power Applications</h3>
                <p>
                  Lithiumion / Iron cells, modules, packs and solutions for
                  Electric Cars, Electric Carts, Electric Scooters, Electric
                  Bikes, Electric Forklifts, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DomesticSec;
