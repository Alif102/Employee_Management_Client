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
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
// import AllUsers from './Dashboard/Admin/AllUsers.jsx'
import EmployeeDetails from './Employee/EmployeeDetails.jsx'
import ToggleView from './Dashboard/Admin/ToggleView.jsx'




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
      {
        path: '/dashboard',
        element: <PrivateRoute>
          <Dashboard/>
        </PrivateRoute>,
      },
      {
        
          path: 'dashboard/employee-list',
          element: <PrivateRoute>
            <EmployeeUser>
    
            </EmployeeUser>,

            
          </PrivateRoute>,
         
      },
      {
  
        path: '/detail/:_id',
        element: <PrivateRoute>
         <EmployeeDetails/>
         
        </PrivateRoute>,
        loader: ({params})=> fetch(`https://employeeserver.vercel.app/users/employee/${params._id}`)
        
   },
   
  // http://localhost:5000 https://employeeserver.vercel.app
      {
                  path: 'dashboard/my-wroksheet',
                  element:<PrivateRoute>
                     <Worksheet/>
                  </PrivateRoute>
                 },
                 {
                  path: 'dashboard/all-hr-employee-list',
                  element: <PrivateRoute>
                    <ToggleView/>
                  </PrivateRoute>
                 },
                
      
 
    ]
  }
      
//         {
//           path: '/employee-list',
//           element: <EmployeeUser/>
//          },
//          {
//           path: '/my-wroksheet',
//           element: <Worksheet/>
//          },

      
//     ]
  

//  }
 
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </React.StrictMode>,
)
