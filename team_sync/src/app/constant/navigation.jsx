import {
  Bot,
  File,
  LayoutDashboard,
  MessageCircle,
  PersonStanding,
  PersonStandingIcon,
  Settings2,
  Table,
} from "lucide-react";

export const adminNavigation = [
  {
    path: "/home/dashboard",
    Icon: LayoutDashboard,
    title: "Dashboard",
  },
  {
    path: "/home/employee",
    Icon: PersonStanding,
    title: "Employee",
  },
  {
    path: "/home/task",
    Icon: Table,
    title: "Task",
  },
  {
    path: "/home/chats",
    Icon: MessageCircle,
    title: "Chats",
  },
  {
    path: "/home/department",
    Icon: Bot,
    title: "Department",
  },
  {
    path: "/home/documents",
    Icon: File,
    title: "Documents",
  },
  {
    path: "/home/settings",
    Icon: Settings2,
    title: "Settings",
  },
];

export const employeeNavigation = [
  {
    path: "/home/dashboard",
    Icon: LayoutDashboard,
    title: "Dashboard",
  },
  {
    path: "/home/mytask",
    Icon: Table,
    title: "My Task",
  },
  {
    path: "/home/chats",
    Icon: MessageCircle,
    title: "Chats",
  },
  {
    path: "/home/profile",
    Icon: PersonStanding,
    title: "Profile",
  },
  {
    path: "/home/attendance",
    Icon: PersonStandingIcon,
    title: "Attendance",
  },
  {
    path: "/home/settings",
    Icon: Settings2,
    title: "Settings",
  },
];