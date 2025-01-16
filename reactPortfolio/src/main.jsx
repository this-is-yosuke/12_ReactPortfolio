import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
// importing the pages for routing
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// defining routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <AboutMe/>
      },
      {
        path: '/Portfolio',
        element: <Portfolio/>
      },
      {
        path: '/Contact',
        element: <Contact/>
      },
      {
        path: '/Resume',
        element: <Resume/>
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
