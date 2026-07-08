
import Chat from "../../features/chats/ui/pages/Chat";
import Home from "../../features/dashboad/ui/pages/Home"
import Setting from "../../features/settings/ui/pages/setting";
export let CommonRoutes = [
    {
        path: "/home/dashboard",
        element: <Home/>,
    },
    {
        path: "/home/chats",
        element:<Chat/>,
    },
    {
        path: "/home/settings",
        element: <Setting/>,
    },
]