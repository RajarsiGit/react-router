import PropTypes from "prop-types";

export default function PageWrapper({ children, className = "" }) {
  return (
    <div
      className={`bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-inner transition-colors ${className}`}
    >
      {children}
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
