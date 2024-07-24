import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProjectCard = ({ name, img, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="project-card"
      onClick={() => {
        navigate(`/project?id=${id}`);
      }}
    >
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default ProjectCard;
