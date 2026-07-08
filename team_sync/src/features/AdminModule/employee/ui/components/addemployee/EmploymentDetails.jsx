import { BriefcaseBusiness } from "lucide-react";

const EmploymentDetails = ({
  department,
  setDepartment,
  role,
  setRole,
  joiningDate,
  setJoiningDate,
  status,
  setStatus,
}) => {
  return (
    <section className="rounded-2xl border border-[var(--bg-border)] bg-[var(--bg-surface)] p-6 shadow-[var(--shadow-sm)]">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--bg-card)]">
          <BriefcaseBusiness
            size={20}
            className="text-[var(--icon-primary)]"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">
            Employment Details
          </h2>

          <p className="text-sm text-[var(--text-secondary)]">
            Assign role, department and joining information.
          </p>
        </div>

      </div>

      {/* Form */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Department */}

        <div>

          <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
            Department
          </label>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="w-full rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
          >
            <option value="">Select Department</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="HR">HR</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
          </select>

        </div>

        {/* Role */}

        <div>

          <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
            Role
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
          </select>

        </div>

        {/* Joining Date */}

        <div>

          <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
            Joining Date
          </label>

          <input
            type="date"
            value={joiningDate}
            onChange={(e) => setJoiningDate(e.target.value)}
            className="w-full rounded-lg border border-[var(--input-border)] bg-[var(--input-bg)] px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--primary)]"
          />

        </div>

        {/* Status */}

        <div>

          <label className="mb-3 block text-sm font-medium text-[var(--text-secondary)]">
            Employment Status
          </label>

          <div className="flex items-center gap-6">

            <label className="flex cursor-pointer items-center gap-2">

              <input
                type="radio"
                name="status"
                value="active"
                checked={status === "active"}
                onChange={(e) => setStatus(e.target.value)}
              />

              <span className="text-[var(--text-primary)]">
                Active
              </span>

            </label>

            <label className="flex cursor-pointer items-center gap-2">

              <input
                type="radio"
                name="status"
                value="inactive"
                checked={status === "inactive"}
                onChange={(e) => setStatus(e.target.value)}
              />

              <span className="text-[var(--text-primary)]">
                Inactive
              </span>

            </label>

          </div>

        </div>

      </div>

    </section>
  );
};

export default EmploymentDetails;