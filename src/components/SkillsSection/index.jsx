import skills from "./skills.json";
import "./style.css";

const SkillsSection = () => {
  return (
    <div id="skills-section" className="section-container">
      <div>
        <h1>Skills</h1>
        <ul>
          {skills.map(({ name, color: backgroundColor }) => (
            <li
              style={{
                backgroundColor,
                borderColor: backgroundColor,
              }}
              key={name}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
