import React from "react";
import HeroSlider from "./HeroSlider";
import DomesticSec from "./DomesticSec";
import SaveEnegryGallarySec from "./SaveEnegryGallarySec";
import LatestInstallations from "./LatestInstallations";
import WhyUseEnergix from "./WhyUseEnergix";
import ProcessSolutionsSec from "./ProcessSolutionsSec";
import RequestAQuote from "./RequestAQuote";
import bgImg from "../../../public/assets/img/energix.jpg";
const HomeMain = () => {
  return (
    <>
      <HeroSlider />
      <DomesticSec />
      <SaveEnegryGallarySec />
      {/* <LatestInstallations classOne="" noBottom="no-bottom" /> */}
      <WhyUseEnergix bgImg={bgImg} propsClass="" />
      <ProcessSolutionsSec propsClass="gap" />
      <RequestAQuote noTop="pt-0" quoteClass="" />
    </>
  );
};

export default HomeMain;
