import { Search } from "lucide-react";

const SearchFilterBar = ({
  search,
  setSearch,

  role,
  setRole,

  department,
  setDepartment,

  status,
  setStatus,

  departments = [],
}) => {
  return (
    <div className="mb-6 rounded-xl border border-gray-100 bg-[var(--bg-main)] p-5 shadow-sm">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-primary)]"
          />

          <input
            type="text"
            placeholder="Search employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none transition focus:border-indigo-500"
          />
        </div>

        {/* Role */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="rounded-lg  bg-[var(--bg-card)] 
          bg-[var(--input-bg)]text-[var(--text-primary)]borderborder-[var(--input-border)]rounded-lgpx-3py-2
          border border-gray-300 px-3 py-2 outline-none transition focus:border-indigo-500"
        >
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>

        {/* Department */}
        <select 
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="rounded-lg  bg-[var(--bg-card)] 
           border border-gray-300 px-3 py-2 outline-none transition focus:border-indigo-500"
        >
          <option value="">All Departments</option>

          {departments.map((dept) => (
            <option
              key={dept}
              value={dept}
            >
              {dept}
            </option>
          ))}
        </select>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg 
          bg-[var(--bg-card)]  
           border border-gray-300 px-3 py-2 outline-none transition focus:border-indigo-500"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilterBar;