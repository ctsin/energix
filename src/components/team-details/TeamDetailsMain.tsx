import BreadCambDefault from "../shearedComponents/BreadCambDefault";
import ExperienceSec from "./ExperienceSec";
import AboutMeSec from "./AboutMeSec";

const TeamDetailsMain = () => {
  return (
    <>
      <BreadCambDefault title="Team Details" pages="Pages" />
      <ExperienceSec />
      <AboutMeSec />
    </>
  );
};

export default TeamDetailsMain;
