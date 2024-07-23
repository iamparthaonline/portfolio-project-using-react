import { useState } from "react";

const EducationCard = ({
  data: { university, course, years, stream, location, cgpa },
}) => {
  const [isExpanded, setIsExpanded] = useState();
  return (
    <div className="education-card">
      <div className="shown flex-container">
        <p>
          {stream} from {university}
        </p>
        <img
          src={isExpanded ? "cancel.png" : "plus.png"}
          alt=""
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        />
      </div>
      {isExpanded && (
        <div className="controlled">
          <div className="education-meta flex-container ">
            <span>
              {course} in {stream}
            </span>
            <span>{years}</span>
          </div>
          <div className="education-meta flex-container ">
            <span>{cgpa}</span>
            <span>{university}</span>
            <span>{location}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationCard;
