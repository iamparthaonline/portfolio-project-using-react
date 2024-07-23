import ExperienceCard from "./ExperienceCard";
import experienceData from "./data.json";

import "./style.css";

const ExperienceSection = () => {
  return (
    <div id="experience">
      <h1>Experience</h1>
      <div>
        {experienceData.map(
          ({ company, designation, logo, description, years }) => (
            <ExperienceCard
              key={company}
              designation={designation}
              logo={logo}
              description={description}
              years={years}
              company={company}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
