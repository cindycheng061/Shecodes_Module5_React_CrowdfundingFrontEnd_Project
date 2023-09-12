import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
//import pages
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import OneProjectPage from './pages/OneProjectPage'
import LoginPage from './pages/LoginPage'
//import components
import NavBar from './components/NavBar'
// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <NavBar />,
//       children: [
//         { path: "/", element: <HomePage /> },
//         { path: "/project/", element: <ProjectPage /> },
//         { path: "/project/:id", element: <OneProjectPage /> },
//         { path: "/login/", element: <LoginPage />},
//       ]
//     }
//   ]
// )
const router = createBrowserRouter([
  { path: "/", element: <NavBar /> },
  { path: "/", element: <HomePage /> },
  { path: "/project/", element: <ProjectPage /> },
  { path: "/project/:id", element: <OneProjectPage /> },
  { path: "/login/", element: <LoginPage /> },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Here we wrap our app in the router provider for rendering */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)



