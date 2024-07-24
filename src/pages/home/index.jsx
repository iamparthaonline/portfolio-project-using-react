import AboutSection from "../../components/AboutSection";
import BioSection from "../../components/BioSection";
import ExperienceSection from "../../components/ExperienceSection";
import SkillsSection from "../../components/SkillsSection";
import EducationSection from "../../components/EducationSection";
import ProjectsSection from "../../components/ProjectsSection";
import ContactsSection from "../../components/ContactsSection";

import "./style.css";
const home = () => {
  return (
    <div className="home-page">
      <AboutSection />
      <BioSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactsSection />
    </div>
  );
};

export default home;
