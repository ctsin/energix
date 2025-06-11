import CalculationIcon from "@/svg/CalculationIcon";
import EstimateCalculationIcon from "@/svg/EstimateCalculationIcon";
import ProjectIcon from "@/svg/ProjectIcon";
import React from "react";

interface propsType{
  propsClass:string;
}

const ProcessSolutionsSec = ({propsClass}:propsType) => {
  return (
    <>
      <section className={`process-solutions ${propsClass}`}>
        <div className="container">
          <div className="heading">
            <p>process and the solutions we can provide</p>
            <div className="line"></div>
            <h2>
              How It Works
              <br />
              Simple, Smart, Seamless
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="free-consultation">
                <div className="free-consultation-number">
                  <h3>Tell Us What You Need</h3>
                  <span>1</span>
                </div>
                <p>
                  Start with a free consultation. Share your product
                  requirements, preferred specs, or target brands — we’ll
                  listen, ask the right questions, and align on your goals.
                </p>
                <CalculationIcon />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="free-consultation mt-lg-0">
                <div className="free-consultation-number">
                  <h3>Get a Plan That Works</h3>
                  <span>2</span>
                </div>
                <p>
                  We evaluate your needs, estimate costs, and match you with
                  qualified factories. You’ll receive a tailored proposal with
                  production options and a clear roadmap for execution.
                </p>
                <EstimateCalculationIcon />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="free-consultation">
                <div className="free-consultation-number">
                  <h3>Project Kickoff & Ongoing Support</h3>
                  <span>3</span>
                </div>
                <p>
                  Hire us to manage your sourcing project from start to finish.
                  We’ll coordinate execution, provide weekly progress reports,
                  and keep you informed with regular video updates — so you stay
                  in control, wherever you are.
                </p>
                <ProjectIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessSolutionsSec;
