import CountUpContent from "@/elements/counter/CountUpContent";
import Delivery from "@/svg/Delivery";
import SupplierCompliance from "@/svg/SupplierCompliance";
import ReduceCost from "@/svg/ReduceCost";
import React from "react";

const FaultActivity = () => {
  return (
    <>
      <div className="container">
        <div className="count-title-text two">
          <div className="col-lg-4 col-md-6">
            <i>
              <SupplierCompliance />
            </i>
            <div className="d-flex align-items-center justify-content-center">
              <h2 className="timer count-title count-number">
                <CountUpContent number={10000000} text="" />
              </h2>
              <span>+</span>
            </div>
            <p>Instances of fault activity captured on LV networks</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <i>
              <ReduceCost />
            </i>
            <h2 className="timer count-title count-number">
              <CountUpContent number={3500000} text="" />
            </h2>
            <p>Train pantographs inspected annually</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <i>
              <Delivery />
            </i>
            <div className="d-flex align-items-center justify-content-center">
              <h2 className="timer count-title count-number">
                <CountUpContent number={20000000} text="" />
              </h2>
              <span>+</span>
            </div>
            <p>Hours of LV circuit load profile data captured and analysed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaultActivity;
