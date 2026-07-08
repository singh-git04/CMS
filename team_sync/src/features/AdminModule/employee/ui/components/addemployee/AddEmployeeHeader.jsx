import { ChevronRight } from "lucide-react";

const AddEmployeeHeader = () => {
  return (
    <header className="space-y-3">

      {/* Breadcrumb */}

      <div className="flex items-center text-sm text-[var(--text-muted)]">

        <span>Employee</span>

        <ChevronRight
          size={16}
          className="mx-2"
        />

        <span className="text-[var(--text-primary)] font-medium">
          Add Employee
        </span>

      </div>

      {/* Title */}

      <div>

        <h1 className="text-3xl font-bold text-[var(--text-primary)]">
          Add Employee
        </h1>

        <p className="mt-1 text-[15px] text-[var(--text-secondary)]">
          Create a new team member profile and assign their role,
          department and employment details.
        </p>

      </div>

    </header>
  );
};

export default AddEmployeeHeader;