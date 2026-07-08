import { Save, X } from "lucide-react";

const FormActions = ({
  onSubmit,
  onCancel,
  isSubmitting = false,
}) => {
  return (
    <div className="flex items-center justify-end gap-4 border-t border-[var(--bg-border)] pt-6">

      {/* Cancel */}

      <button
        type="button"
        onClick={onCancel}
        className="
          flex items-center gap-2
          rounded-xl
          border
          border-[var(--bg-border)]
          bg-[var(--bg-surface)]
          px-6
          py-3
          text-[var(--text-secondary)]
          transition-all
          duration-300
          hover:bg-[var(--bg-card)]
          hover:text-[var(--text-primary)]
        "
      >
        <X size={18} />
        Cancel
      </button>

      {/* Save */}

      <button
        type="submit"
        onClick={onSubmit}
        disabled={isSubmitting}
        className="
          flex items-center gap-2
          rounded-xl
          bg-[var(--btn-primary)]
          px-6
          py-3
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-[var(--btn-primary-hover)]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        <Save size={18} />

        {isSubmitting
          ? "Saving..."
          : "Save Employee"}

      </button>

    </div>
  );
};

export default FormActions;