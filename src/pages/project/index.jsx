/* eslint-disable react/prop-types */
import "./style.css";
import queryString from "query-string";
import projectData from "../../components/ProjectsSection/data.json";
const ProjectPage = ({ location }) => {
  const searchObj = queryString.parse(
    location?.search || `?${window.location.href.split("?")[1]}`
  );
  const projectId = searchObj.id;

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
