import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

export default router;
