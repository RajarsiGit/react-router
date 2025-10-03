import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Button from "./components/Button";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored === "true") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white dark:bg-gray-800 shadow-lg rounded-2xl px-8 py-10 my-16 text-center space-y-8 transition-colors">
          {/* Header */}
          <header>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              React Router Demo
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              Vite ⚡ + Tailwind 🎨
            </p>
          </header>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:opacity-80 transition"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

          {/* Navigation */}
          <nav className="flex justify-center flex-wrap gap-3">
            <Button to="/" nav color="blue">
              Home
            </Button>
            <Button to="/about" nav color="green">
              About
            </Button>
            <Button to="/contact" nav color="purple">
              Contact
            </Button>
          </nav>

          {/* Content */}
          <div className="text-gray-800 dark:text-gray-200">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
