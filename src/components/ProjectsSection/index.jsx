import ProjectCard from "./ProjectCard";
import "./style.css";
import projects from "./data.json";

const ProjectsSection = () => {
  return (
    <div id="projects-section">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map(({ name, image }) => (
          <ProjectCard key={name} img={image} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
