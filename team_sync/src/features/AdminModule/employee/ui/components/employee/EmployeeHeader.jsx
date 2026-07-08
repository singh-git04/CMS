import { Download, Plus } from "lucide-react";
import Button from "./Button";

const EmployeeHeader = ({
  title = "Employee Directory",
  description = "Manage employees and their roles",
  onExport,
  onAddEmployee,
}) => {
  return (
    <div className="mb-6 flex items-center justify-between">
      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">
          {title}
        </h1>

        <p className="mt-1 text-sm text-[var(--text-muted)">
          {description}
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          leftIcon={<Download size={18} />}
          onClick={onExport}
        >
          Export
        </Button>

        <Button
          leftIcon={<Plus size={18} />}
          onClick={onAddEmployee}
        >
          Add Employee
        </Button>
      </div>
    </div>
  );
};

export default EmployeeHeader;