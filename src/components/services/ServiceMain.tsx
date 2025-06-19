import BreadCamb from "../shearedComponents/BreadCamb";
import SustainableEnergy from "./SustainableEnergy";
import FaultActivity from "./FaultActivity";
import UnlimitedSource from "./UnlimitedSource";
import WhyUseEnergix from "../home/WhyUseEnergix";
import SolarPV from "./SolarPV";

const ServiceMain = () => {
  return (
    <>
      <BreadCamb title="Services" />
      <SustainableEnergy />
      <FaultActivity />
      <UnlimitedSource />
      <WhyUseEnergix propsClass="two" bgImg={null} />
      <SolarPV />
    </>
  );
};

export default ServiceMain;
