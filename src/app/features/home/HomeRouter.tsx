import {Navigate} from "react-router-dom";
import Home from "./Home.tsx";

const HomeRouter = [
  {
    path: "/",
    element: <Navigate to="/home"/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: '*',
    element: <Navigate to="/"/>,
  },
]

export default HomeRouter;
