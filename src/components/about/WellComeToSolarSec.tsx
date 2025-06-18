import React from "react";
import directorImg from "../../../public/assets/img/signature.png";
import about1 from "../../../public/assets/img/about-1.jpg";
import about2 from "../../../public/assets/img/about-2.jpeg";
import Image from "next/image";
import ExperienceTwoIcon from "@/svg/ExperienceTwoIcon";
import CountUpContent from "@/elements/counter/CountUpContent";
const WellComeToSolarSec = () => {
  const width = 200;
  const height = (width / 850) * 467;
  return (
    <>
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="heading">
                <p>Welcome to OffgridSynergy</p>
                <div className="line"></div>
                <h2>Global Collaboration, Local Insight</h2>
              </div>
              <div className="renewable-group w-100">
                <p>
                  Based in Shenzhen, China — a global sourcing hub adjacent to
                  Hong Kong, Guangzhou, and Dongguan — We specializes in
                  providing high-quality sourcing services for renewable energy
                  components.
                </p>
                <p>
                  We are not just a sourcing agent — we are your trusted supply
                  chain partner, helping you access reliable manufacturers,
                  optimize solutions, and ensure smooth delivery from China to
                  the world.
                </p>
                <Image
                  alt="John Sun - Managing Director of OffgridSynergy"
                  src={directorImg}
                  style={{ width: 200, height: "auto" }}
                />
                <h3>John Sun</h3>
                <h6>Managing Director of OffgridSynergy</h6>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="about-img">
                <Image alt="about" src={about1} />
                <Image alt="about" className="img-about" src={about2} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WellComeToSolarSec;
