import MyTask from "../../features/EmployModule/myTask/ui/pages/MyTask"
import Profile from "../../features/EmployModule/profile/ui/pages/Profile"
import Attendence from "../../features/EmployModule/attendence/ui/pages/Attendence"

export let employeeRoutes = [
    {
        path: "/home/mytask",
        element: <MyTask />,
    },
    {
        path: "/home/profile",
        element: <Profile/>,
    },
    {
        path: "/home/attendence",
        element: <Attendence/>,
    },
    
]