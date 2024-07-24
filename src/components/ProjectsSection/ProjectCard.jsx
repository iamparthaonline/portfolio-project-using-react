/* eslint-disable react/prop-types */
const ProjectCard = ({ name, img }) => {
  return (
    <div className="project-card">
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default ProjectCard;
