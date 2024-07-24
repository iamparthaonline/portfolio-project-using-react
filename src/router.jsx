import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  { path: "/", element: <div> Hello </div> },
  { path: "/morning", element: <div> Good Morning </div> },
]);

export default routes;
