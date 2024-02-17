import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom';
import AppRouter from './app/AppRouter.tsx';
import Background from './app/core/components/background/Background.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Background/>
    <RouterProvider router={AppRouter}/>
  </React.StrictMode>
)