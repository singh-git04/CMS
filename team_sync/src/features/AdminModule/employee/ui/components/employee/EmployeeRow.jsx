 
import { useState } from "react";
import EmployeeStatusBadge from "./EmployeeStatusBadge";
import { MoreHorizontal } from "lucide-react";
import EmployeeActions from "./EmployeeAction";
import { updateEmployee } from "../../../apis/employeeApi";

const EmployeeRow = ({ employee }) => {
  const {
    avatar,
    name,
    email,
    role,
    department,
    status,
    createdAt,
  } = employee;

  const initials = name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

 
 
  return (
    <tr className="border-b border-[var(--bg-border)] hover:bg-[var(--bg-card)] transition">
      {/* Employee */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
              {initials}
            </div>
          )}

          <div>
            <h3 className="font-semibold text-[var(--text-primary)]">
              {name}
            </h3>

            <p className="text-sm text-[var(--text-primary)]">
              {email}
            </p>
          </div>
        </div>
      </td>

      {/* Role */}
      <td className="px-6 py-4 capitalize">
        {role}
      </td>

      {/* Department */}
      <td className="px-6 py-4 capitalize">
        {department}
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <EmployeeStatusBadge status={status} />
      </td>

      {/* Joined */}
      <td className="px-6 py-4">
        {new Date(createdAt).toLocaleDateString()}
      </td>

      {/* Actions */}
    <td className="relative px-6 py-4 text-right">

  <button
    onClick={() => setOpenMenu(prev => !prev)}
    className="rounded-lg p-2 hover:bg-[var(--input-bg)] transition"
  >
    <EmployeeActions
          employee={employee}
          onEdit={(employee) => console.log("Edit", employee)}
          onDelete={(employee) => console.log("Delete", employee)}
          onInactive={async () => 
           {
             await updateEmployee(employee?._id,{status:'inactive'})
               alert("employee status updated")

           }
          }
        />
  </button >
</td>
    </tr>
  );
};

export default EmployeeRow;