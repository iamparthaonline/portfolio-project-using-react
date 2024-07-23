import AboutSection from "../../components/AboutSection";
import BioSection from "../../components/BioSection";
import ExperienceSection from "../../components/ExperienceSection";

import "./style.css";
const home = () => {
  return (
    <div className="home-page">
      <AboutSection />
      <BioSection />
      <ExperienceSection />
    </div>
  );
};

export default home;
