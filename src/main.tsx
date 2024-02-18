import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider } from 'react-router-dom';
import AppRouter from './app/AppRouter.tsx';
import Background from './app/core/components/background/Background.tsx';

// Detect preferred color scheme
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Change the favicon based on the color scheme
const faviconLink = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
faviconLink.href = isDarkMode ? '/favicon-dark.ico' : '/favicon-light.ico';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Background/>
    <RouterProvider router={AppRouter}/>
  </React.StrictMode>
)