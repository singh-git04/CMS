import { useMemo, useState } from "react";

import EmployeeHeader from "../components/employee/EmployeeHeader";
import EmployeeStats from "../components/employee/EmployeeStats";
import SearchFilterBar from "../components/employee/SearchFilterBar";
import EmployeeTable from "../components/employee/EmployeeTable";

import { useEmployee } from "../../hook/useEmployees";
import Pagination from "../components/employee/Pagination";
import { useNavigate } from "react-router";



const Employee = () => {
  // Pagination 
  const [page, setPage] = useState(1);
  const { data, isPending, isError, error } = useEmployee(page);
  const pagination = data?.pagination || {};

  // AddEmployee

  const navigate = useNavigate()

  const employees = data?.employees || [];

  // Search & Filters
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  // Unique Departments
  const departments = useMemo(() => {
    return [...new Set(employees.map((employee) => employee.department))];
  }, [employees]);

  // Filter Employees
  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.email.toLowerCase().includes(search.toLowerCase());

      const matchesRole = role ? employee.role === role : true;

      const matchesDepartment = department
        ? employee.department === department
        : true;

      const matchesStatus = status
        ? employee.status === status
        : true;

      return (
        matchesSearch &&
        matchesRole &&
        matchesDepartment &&
        matchesStatus
      );
    });
  }, [employees, search, role, department, status]);

  // Loading State
  if (isPending) {
    return (
      <div className="flex justify-center py-20">
        <h2 className="text-lg font-semibold">
          Loading Employees...
        </h2>
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="flex justify-center py-20">
        <h2 className="text-red-500">
          {error?.message || "Something went wrong."}
        </h2>
      </div>
    );
  }

  // Button Actions
  const handleExport = () => {
    console.log("Export Employees");
  };

  const handleAddEmployee = () => {
     navigate("/home/employee/add-employee")
  };

  
  return (
    <section className="space-y-6">

      <EmployeeHeader
        onExport={handleExport}
        onAddEmployee={handleAddEmployee}
      />

      <EmployeeStats
        employees={employees}
      />

      <SearchFilterBar
        search={search}
        setSearch={setSearch}

        role={role}
        setRole={setRole}

        department={department}
        setDepartment={setDepartment}

        status={status}
        setStatus={setStatus}

        departments={departments}
      />

      <EmployeeTable
        employees={filteredEmployees}
      />

      <Pagination
        currentPage={pagination.page}
        totalPages={pagination.totalPages}
        totalItems={pagination.total}
        onPageChange={setPage}
      />

    </section>
  );
};

export default Employee;