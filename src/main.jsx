import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import Home from './Components/Home/Home.jsx'
import SignUp from './UserAuthentication/SignUp.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'




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
        path: '/signup',
        element: <SignUp/>
      },
    ]
 } ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
