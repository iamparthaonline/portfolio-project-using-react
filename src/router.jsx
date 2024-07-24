import HomePage from "./pages/home";
import ProjectPage from "./pages/project";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/project", element: <ProjectPage /> },
]);

export default routes;
