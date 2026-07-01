import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from '../layouts/AuthLayout'
import Login from '../../features/auth/ui/pages/Login'
import Register from '../../features/auth/ui/pages/Register'
import DashBoardLayout from '../layouts/DashBoardLayout'
import Home from '../../features/dashboad/ui/pages/Home'
const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element:<AuthLayout/>,
      children:[
        {
        path:"",
        element:<Login/>,
      },
      {
        path:"register",
        element:<Register/>,
      }
    ]
    },

    {
      path: '/home',
      element: <DashBoardLayout/>,
      children:[
        {
          path:"",
          element:<Home/>,
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default AppRoutes
