import Departments from "../../features/AdminModule/departments/ui/pages/Department";
import Employee from "../../features/AdminModule/employee/ui/pages/Employee";
import Task from "../../features/AdminModule/task/ui/pages/Task";
import Documents from "../../features/AdminModule/documents/ui/pages/Documents";
import Chat from "../../features/chats/ui/pages/Chat";
import AddEmployee from "../../features/AdminModule/employee/ui/pages/AddEmployee";
 

export let AdminRoutes =[
    {
        path: "/home/employee",
        element:<Employee/>
    },
    // Add-Employee
      {
        path: "/home/employee/add-employee",
        element:<AddEmployee/>
    },
    {
        path:"/home/task",
        element:<Task/>
    },
    {
        path:"/home/department",
        element:<Departments/>
    },
    {
        path:"/home/documents",
        element:<Documents/>
    },
    
]