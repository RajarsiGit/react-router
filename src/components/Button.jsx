import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";

export default function Button({
  to,
  children,
  color = "blue",
  nav = false,
  ...props
}) {
  const baseClasses = "px-5 py-3 rounded-lg font-medium transition text-white";

  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600 shadow-sm",
    green: "bg-green-500 hover:bg-green-600 shadow-sm",
    purple: "bg-purple-500 hover:bg-purple-600 shadow-sm",
    red: "bg-red-500 hover:bg-red-600 shadow-sm",
    gray: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 shadow-sm",
  };

  const activeColorClasses = {
    blue: "bg-blue-700 ring-2 ring-blue-400 shadow-lg",
    green: "bg-green-700 ring-2 ring-green-400 shadow-lg",
    purple: "bg-purple-700 ring-2 ring-purple-400 shadow-lg",
    red: "bg-red-700 ring-2 ring-red-400 shadow-lg",
    gray: "bg-gray-500 text-white ring-2 ring-gray-400 shadow-lg",
  };

  if (nav) {
    return (
      <NavLink
        to={to}
        end
        className={({ isActive }) =>
          `${baseClasses} ${
            isActive ? activeColorClasses[color] : colorClasses[color]
          }`
        }
        {...props}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <Link
      to={to}
      className={`${baseClasses} ${colorClasses[color]}`}
      {...props}
    >
      {children}
    </Link>
  );
}

// ✅ PropTypes validation
Button.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["blue", "green", "purple", "red", "gray"]),
  nav: PropTypes.bool,
};
