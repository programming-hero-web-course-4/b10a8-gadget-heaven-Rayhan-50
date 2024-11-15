import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Statistics from "../pages/Statistics"
import Dashboard from "../pages/Dashboard"
import Notice from "../pages/Notice"
import DeviceCards from "../components/DeviceCards"
import CardDetails from "../components/CardDetails"






const routes = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout></MainLayout>,
      errorElement:<p>Error:401</p>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('../device.json'),
            children:[
              {
                path:'/',
                element:<DeviceCards></DeviceCards>,  
                loader:()=> fetch('../allDevices.json'),
            },
            {
              path:'/category/:category',
              element:<DeviceCards></DeviceCards>,  
              loader:()=> fetch('../allDevices.json'),
          },
            ]  ,
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>,  
        },
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>,  
        },
        {
            path:'/notice',
            element:<Notice></Notice>,  
        },
        {
          path:'/device/:id',
          element:<CardDetails></CardDetails>, 
          loader:()=> fetch('../allDevices.json'), 
      },
      ]
    }
  ])

export default routes