/* eslint-disable react/prop-types */
const ProjectCard = ({ name, img, id }) => {
  return (
    <div
      className="project-card"
      onClick={() => {
        window.location.href = `https://iamparthaonline.github.io/portfolio-project-using-react#project?id=${id}`;
      }}
    >
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default ProjectCard;
