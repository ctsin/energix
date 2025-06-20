import BattaryIcon from "@/svg/BattaryIcon";
import BattaryIconTwo from "@/svg/BattaryIconTwo";
import CommercialSolarEnergyIcon from "@/svg/CommercialSolarEnergyIcon";
import CredentialsIcon from "@/svg/CredentialsIcon";
import InvestmentIcon from "@/svg/InvestmentIcon";
import SupplierCompliance from "@/svg/SupplierCompliance";
import SolarEnergyIcon from "@/svg/SolarEnergyIcon";
import TechnologiesIcon from "@/svg/TechnologiesIcon";
import React from "react";

const UnlimitedSource = () => {
  return (
    <>
      <section className="section-solar-energy gap">
        <div className="container">
          <div className="heading">
            <p>What We Do</p>
            <div className="line"></div>
            <h2>
              We Support Your Projects from Supplier Identification to Final
              Shipment
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <BattaryIconTwo />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Factory Sourcing & Matchmaking</h4>
                  </a>
                  <p>
                    Identify qualified manufacturers based on your product
                    specs, certifications, and pricing targets.
                  </p>
                  <p>
                    Provide a shortlist of vetted suppliers with focus on
                    long-term reliability over lowest cost.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <CommercialSolarEnergyIcon />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Factory Auditing & Verification</h4>
                  </a>
                  <p>
                    Arrange on-site or third-party audits to verify factory
                    capacity, compliance, and quality systems.
                  </p>
                  <p>
                    Deliver professional audit reports and insights to help
                    reduce sourcing risks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two">
                <div className="use-energix-icon">
                  <i>
                    <InvestmentIcon />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Sample & Order Coordination</h4>
                  </a>
                  <p>
                    Coordinate sample development and align all technical,
                    packaging, and branding details.
                  </p>
                  <p>
                    Ensure smooth communication and transition from sampling to
                    mass production.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                    <CredentialsIcon />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Quality Control & Inspection</h4>
                  </a>
                  <p>
                    Provide in-production or pre-shipment inspection with
                    functional and visual checks.
                  </p>
                  <p>
                    Support defect handling and offer bilingual QC reports when
                    needed.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5">
                <div className="use-energix-icon">
                  <i>
                    <SolarEnergyIcon />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>Shipping & Logistics Support</h4>
                  </a>
                  <p>
                    Assist with customs clearance, international shipping, and
                    logistics planning.
                  </p>
                  <p>
                    Provide all necessary export documents and optimize delivery
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="use-energix two mt-xl-5 mb-0">
                <div className="use-energix-icon">
                  <i>
                    <TechnologiesIcon />
                  </i>
                </div>
                <div>
                  <a href="#">
                    <h4>OEM Branding Support (optional)</h4>
                  </a>
                  <p>
                    Offer logo printing, packaging design, and custom manuals
                    for private label products.
                  </p>
                  <p>
                    Coordinate low-MOQ branded production to support emerging
                    brands.
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

export default UnlimitedSource;
