import { useState } from "react";
import {
  MoreHorizontal,
  Pencil,
  Trash2,
  UserX,
} from "lucide-react";

const EmployeeActions = ({
  employee,
  onEdit,
  onDelete,
  onInactive,
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative">

      {/* Toggle Button */}

      <button
        onClick={() => setOpenMenu((prev) => !prev)}
        className="
          rounded-lg
          p-2
          transition
          hover:bg-[var(--bg-card)]
        "
      >
        <MoreHorizontal size={20} />
      </button>

      {/* Dropdown */}

      {openMenu && (
        <div
          className="
            absolute
            right-0
            top-12
            z-50
            w-44
            overflow-hidden
            rounded-xl
            border
            border-[var(--bg-border)]
            bg-[var(--bg-surface)]
            shadow-[var(--shadow-md)]
          "
        >

          <button
            onClick={() => {
              onEdit(employee);
              setOpenMenu(false);
            }}
            className="
              flex
              w-full
              items-center
              gap-3
              px-4
              py-3
              text-left
              text-[var(--text-primary)]
              transition
              hover:bg-[var(--bg-card)]
            "
          >
            <Pencil size={17} />
            Update
          </button>

          <button
            onClick={() => {
              onInactive(employee);
              setOpenMenu(false);
            }}
            className="
              flex
              w-full
              items-center
              gap-3
              border-t
              border-[var(--bg-border)]
              px-4
              py-3
              text-left
              text-yellow-400
              transition
              hover:bg-[var(--bg-card)]
            "
          >
            <UserX size={17} />
            Inactive
          </button>

          <button
            onClick={() => {
              onDelete(employee);
              setOpenMenu(false);
            }}
            className="
              flex
              w-full
              items-center
              gap-3
              border-t
              border-[var(--bg-border)]
              px-4
              py-3
              text-left
              text-red-400
              transition
              hover:bg-[var(--bg-card)]
            "
          >
            <Trash2 size={17} />
            Delete
          </button>

        </div>
      )}

    </div>
  );
};

export default EmployeeActions;