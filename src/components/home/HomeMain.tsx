import HeroSlider from "./HeroSlider";
import DomesticSec from "./DomesticSec";
import SaveEnegryGallarySec from "./SaveEnegryGallarySec";
import WhyUseEnergix from "./WhyUseEnergix";
import ProcessSolutionsSec from "./ProcessSolutionsSec";
import bgImg from "../../../public/assets/img/energix.jpg";
const HomeMain = () => {
  return (
    <>
      <HeroSlider />
      <DomesticSec />
      <SaveEnegryGallarySec />
      <WhyUseEnergix bgImg={bgImg} propsClass="" />
      <ProcessSolutionsSec propsClass="gap" />
    </>
  );
};

export default HomeMain;
