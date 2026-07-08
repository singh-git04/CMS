const StatCard = ({
  title,
  value,
  icon,
  iconBg = "bg-indigo-100",
  iconColor = "text-indigo-600",
}) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-[var(--bg-main)] p-5 shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Left Content */}
      <div>
        <p className="text-sm font-medium text-[var(--text-primary)]">
          {title}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[var(--text-primary)]">
          {value}
        </h2>
      </div>

      {/* Icon */}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-lg ${iconBg}`}
      >
        <span className={iconColor}>{icon}</span>
      </div>
    </div>
  );
};

export default StatCard;