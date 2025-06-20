"use client";
import { useState } from "react";
import Image from "next/image";
import WhyWorkWithUs3 from "../../../public/assets/img/WhyWorkWithUs-3.jpg";
import ModalVideo from "react-modal-video";
import FactorySourcingMatchmaking from "@/svg/FactorySourcingMatchmaking";
import OEMBrandingSupport from "@/svg/OEMBrandingSupport";
import FactoryAuditingVerification from "@/svg/FactoryAuditingVerification";
import QualityControlInspection from "@/svg/QualityControlInspection";
import ShippingLogistics from "@/svg/ShippingLogistics";
import SampleOrderCoordination from "@/svg/SampleOrderCoordination";
import useGlobalContext from "@/hooks/use-context";

const SolarEnergySec = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  return (
    <>
      <section className="section-solar-energy gap">
        <div className="container">
          <div className="heading">
            <p>WHAT WE DO</p>
            <div className="line"></div>
            <h2>
              We Support Your Projects from Supplier Identification to Final
              Shipment
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 ">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <FactorySourcingMatchmaking />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Factory Sourcing & Matchmaking</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="video two">
                <figure>
                  <Image
                    alt="img"
                    src={WhyWorkWithUs3}
                    style={{ width: "100%", height: "auto" }}
                  />
                </figure>
                <button
                  onClick={() => {
                    openVideoModal();
                  }}
                  type="button"
                >
                  <i>
                    <svg
                      width="11"
                      height="17"
                      viewBox="0 0 11 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 8.49951L0.5 0.27227L0.5 16.7268L11 8.49951Z"
                        fill="white"
                      ></path>
                    </svg>
                  </i>
                </button>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <FactoryAuditingVerification />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Factory Auditing & Verification</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                    <SampleOrderCoordination />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Sample & Order Coordination</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                    <QualityControlInspection />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Quality Control & Inspection</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                    <ShippingLogistics />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Shipping & Logistics Support</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5 mb-0 ">
                <div className="use-energix-icon">
                  <i>
                    <OEMBrandingSupport />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>OEM Branding Support (optional)</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="xKxrkht7CpY"
        onClose={() => {
          openVideoModal();
        }}
      />
    </>
  );
};

export default SolarEnergySec;
