const variants = {
  primary:
    "bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-600",

  outline:
    "bg-white hover:bg-gray-100 text-gray-700 border border-gray-300",

  danger:
    "bg-red-600 hover:bg-red-700 text-white border border-red-600",
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  type = "button",
  ...props
}) => {
  return (
    <button 
      type={type}
      disabled={disabled || loading}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        font-medium
        transition-all
        duration-200
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {leftIcon && leftIcon}

      {loading ? "Loading..." : children}

      {rightIcon && rightIcon}
    </button>
  );
};

export default Button;