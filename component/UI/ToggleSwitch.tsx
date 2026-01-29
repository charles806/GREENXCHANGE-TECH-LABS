"use client";
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ToggleSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className={`
          flex items-center justify-between w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none shadow-lg
          ${isDarkMode ? "bg-gray-800" : "bg-blue-500"}
        `}
        aria-label="Toggle Dark Mode"
      >
        <div
          className={`
            w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-transform duration-300 ease-in-out
            ${isDarkMode ? "translate-x-8" : "translate-x-0"}
          `}
        >
          {isDarkMode ? (
            <Moon size={14} className="text-gray-800" />
          ) : (
            <Sun size={14} className="text-yellow-500" />
          )}
        </div>

        {/* Visual icons in the track background for extra flair */}
        <div className="absolute left-2 text-white/50 pointer-events-none">
          <Sun size={12} className={isDarkMode ? "opacity-100" : "opacity-0"} />
        </div>
        <div className="absolute right-2 text-white/50 pointer-events-none">
          <Moon size={12} className={!isDarkMode ? "opacity-100" : "opacity-0"} />
        </div>
      </button>
    </div>
  );
};

export default ToggleSwitch;
