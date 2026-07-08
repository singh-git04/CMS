const StatusRadio = ({
  label = "Status",
  value,
  onChange,
  options = [],
}) => {
  return (
    <div className="space-y-3">

      <label className="text-sm font-medium text-[var(--text-secondary)]">
        {label}
      </label>

      <div className="flex flex-wrap gap-6">

        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-2"
          >
            <input
              type="radio"
              name={label}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="
                h-4
                w-4
                accent-[var(--primary)]
                cursor-pointer
              "
            />

            <span className="text-[var(--text-primary)]">
              {option.label}
            </span>
          </label>
        ))}

      </div>

    </div>
  );
};

export default StatusRadio;