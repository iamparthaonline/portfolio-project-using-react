import EducationCard from "./EducationCard";
import educationData from "./data.json";
import "./style.css";

const EducationSection = () => {
  return (
    <div id="education-section">
      <h1>Education</h1>
      <div className="education-list">
        {educationData.map((edc, index) => (
          <EducationCard data={edc} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
