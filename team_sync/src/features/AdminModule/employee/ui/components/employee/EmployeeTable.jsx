import EmployeeRow from "./EmployeeRow";

const EmployeeTable = ({ employees = [] }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--bg-main)] bg-[var(--bg-border)] shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">

          <thead className="bg-[var(--bg-card)]">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">
                Employee
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">
                Role
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">
                Department
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">
                Status
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--text-primary)]">
                Joined
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-[var(--text-primary)]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <EmployeeRow
                  key={employee._id}
                  employee={employee}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-10 text-center text-[var(--text-primary)]"
                >
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;