const FormSelect = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  required = false,
  disabled = false,
}) => {
  return (
    <div className="space-y-2">

      <label className="text-sm font-medium text-[var(--text-secondary)]">
        {label}

        {required && (
          <span className="ml-1 text-[var(--danger)]">*</span>
        )}

      </label>

      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="
          w-full
          rounded-xl
          border
          border-[var(--input-border)]
          bg-[var(--input-bg)]
          px-4
          py-3
          text-[var(--text-primary)]
          outline-none
          transition-all
          duration-300
          focus:border-[var(--primary)]
          focus:ring-2
          focus:ring-[var(--primary-light)]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >

        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}

      </select>

    </div>
  );
};

export default FormSelect;