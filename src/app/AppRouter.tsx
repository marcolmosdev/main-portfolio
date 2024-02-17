import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App.tsx';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '*',
    element: <Navigate to="/"/>,
  },
]);

export default AppRouter;