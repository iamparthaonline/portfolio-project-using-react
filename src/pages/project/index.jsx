import "./style.css";
import projectData from "../../components/ProjectsSection/data.json";
const ProjectPage = () => {
  const query = new URLSearchParams(window.location.search);
  const projectId = query.get("id");
  const data = projectData[projectId];

  return (
    <div className="project-page">
      <p
        onClick={() => {
          history.back();
        }}
      >
        {" "}
        {`<-`} Back
      </p>
      {data && (
        <>
          <img src={data.image} alt="" />
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <button>Check live app</button>
        </>
      )}
      {!data && <p> Data not found!!</p>}
    </div>
  );
};

export default ProjectPage;
