import AboutSection from "../../components/AboutSection";
import BioSection from "../../components/BioSection";

import "./style.css";
const home = () => {
  return (
    <div className="home-page">
      <AboutSection />
      <BioSection />
    </div>
  );
};

export default home;
