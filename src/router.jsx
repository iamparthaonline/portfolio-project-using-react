import HomePage from "./pages/home";
import ProjectPage from "./pages/project";
import { createHashRouter } from "react-router-dom";

const routes = createHashRouter([
  { path: "/", element: <HomePage /> },
  { path: "project", element: <ProjectPage /> },
]);

export default routes;
