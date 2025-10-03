export default function Footer() {
  return (
    <footer className="pt-6 border-t border-gray-200 dark:border-gray-600 text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} React Router Demo. All rights reserved.
    </footer>
  );
}

// Footer has no props, so no PropTypes needed.
