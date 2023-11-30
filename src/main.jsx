import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import Home from './Components/Home/Home.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import Register from './Components/Register/Register.jsx'
import Login from './Components/Login/Login.jsx'
 import EmployeeUser from './Employee/EmployeeUser.jsx'
import ContactUs from './Components/ContactUs.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import Worksheet from './Dashboard/EmployeeRoute/Worksheet.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement : <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/contact-us',
        element: <ContactUs/>
      },
      
    ]
 },
 {
  
    path: '/dashboard',
    element: <Dashboard/>,
    children: [
      
        {
          path: '/dashboard/employee-list',
          element: <EmployeeUser/>
         },
         {
          path: '/dashboard/my-wroksheet',
          element: <Worksheet/>
         },

      
    ]
  

 }
 
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
