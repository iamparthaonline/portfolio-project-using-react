import ProjectCard from "./ProjectCard";
import "./style.css";
import projects from "./data.json";

const ProjectsSection = () => {
  return (
    <div id="projects-section" className="section-container">
      <div>
        <h1>Projects</h1>
        <div className="projects-list">
          {projects.map(({ name, image }, index) => (
            <ProjectCard key={name} img={image} name={name} id={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
