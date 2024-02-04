import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {RouterProvider} from "react-router-dom";
import AppRouter from "./app/AppRouter.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
)
