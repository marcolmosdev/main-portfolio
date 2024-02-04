import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "./App.tsx";
import HomeRouter from "./features/home/HomeRouter.tsx";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: HomeRouter
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

export default AppRouter;