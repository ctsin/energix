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
                <h3>Domestic Installation</h3>
                <p>
                  Solar PV, Battery Storage, Heat Recovery Ventilation Systems &
                  EV Charging
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="domestic commercial">
                <i>
                  <DomesticCommercialIcon />
                </i>
                <h3>Commercial Installation</h3>
                <p>
                  Solar PV, Battery Storage, Heat Recovery Ventilation Systems &
                  EV Charging
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
