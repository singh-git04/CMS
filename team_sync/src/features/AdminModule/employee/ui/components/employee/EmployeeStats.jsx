import {
  Users,
  ShieldCheck,
  UserCheck,
  Building2,
} from "lucide-react";

import StatCard from "./StatCard";

const EmployeeStats = ({ employees = [] }) => {
  const totalEmployees = employees.length;

  const totalAdmins = employees.filter(
    (employee) => employee.role === "admin"
  ).length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "active"
  ).length;

  const totalDepartments = new Set(
    employees.map((employee) => employee.department)
  ).size;

  const stats = [
    {
      title: "Total Employees",
      value: totalEmployees,
      icon: <Users size={22} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Admins",
      value: totalAdmins,
      icon: <ShieldCheck size={22} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Active Employees",
      value: activeEmployees,
      icon: <UserCheck size={22} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Departments",
      value: totalDepartments,
      icon: <Building2 size={22} />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          iconBg={stat.iconBg}
          iconColor={stat.iconColor}
        />
      ))}
    </div>
  );
};

export default EmployeeStats;