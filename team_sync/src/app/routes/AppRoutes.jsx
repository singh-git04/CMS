import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"
import AuthLayout from '../layouts/AuthLayout'
import Login from '../../features/auth/ui/pages/Login'
import Register from '../../features/auth/ui/pages/Register'
import DashBoardLayout from '../layouts/DashBoardLayout'
import Home from '../../features/dashboad/ui/pages/Home'
import { useDispatch } from 'react-redux'
import { currentLoggedEmployee } from '../../features/auth/state/auth/authAction'
import PublicRoute from '../protectedRoutes/PublicRoute'
import ProtectedRoute from '../protectedRoutes/ProtectedRoute'
import { AdminRoutes } from './adminRoutes'
import { CommonRoutes } from './commonRoutes'
import RoleBaseRoute from '../protectedRoutes/RoleBaseRoute'
import { employeeRoutes } from './employeeRoutes'
const AppRoutes = () => {
  let dispatch = useDispatch()

  useEffect(() => {
    (() => {
      dispatch(currentLoggedEmployee())
    })()
  }, [])

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [{
        path: "",
        element: <AuthLayout />,
        children: [
          {
            path: "",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          }
        ]
      }]

    },

    {
      path: '/home',
      element: <ProtectedRoute />,
      children: [
        {
          path: '',
          element: <DashBoardLayout />,
          children:[
            ...CommonRoutes,
            {
              element:<RoleBaseRoute allowedRoles={"admin"}/> ,
              children: AdminRoutes
            },
             {
              element:<RoleBaseRoute allowedRoles={"employee"}/> ,
              children: employeeRoutes
            },

          ],
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppRoutes
