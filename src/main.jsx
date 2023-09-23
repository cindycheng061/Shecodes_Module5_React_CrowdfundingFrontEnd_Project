import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
//import pages
import HomePage from './pages/HomePage'
import CreateProjectPage from './pages/CreateProjectPage'
import ProjectPage from './pages/ProjectPage'
import OneProjectPage from './pages/OneProjectPage'
import LoginPage from './pages/LoginPage'
//import components

import CreateUserPage from './pages/CreateUserPage'
import UserPage from './pages/UserPage'
import UpdateUserPage from './pages/UpdateUserPage'
import AboutPage from './pages/AboutPage'
import UpdateProjectPage from './pages/UpdateProjectPage'



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
const isLogin = window.localStorage.getItem("is_login")
const hasToken = window.localStorage.getItem("token");
const router = createBrowserRouter([
  // { path: "/", element: <NavBar /> },
  { path: "/", element: <HomePage /> },
  { path: "/createproject/", element: <CreateProjectPage /> },
  // { path: "/createproject/", element: hasToken?<CreateProjectPage />:<LoginPage /> },
  { path: "/project/", element: <ProjectPage /> },
  { path: "/project/:id", element: <OneProjectPage /> },
  { path: "/login/", element: <LoginPage /> },
  { path: "/register/", element: <CreateUserPage /> },
  { path: "/user/", element: <UserPage /> },
  {
    path: "/user",
    element: hasToken ? <UserPage /> : <LoginPage />,
  },
  { path: "/user/update", element: <UpdateUserPage /> },
  { path: "/about/", element: <AboutPage /> },
  { path: "/project/:projectId/update", element: <UpdateProjectPage /> },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Here we wrap our app in the router provider for rendering */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)



