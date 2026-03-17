"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    const initialTheme = savedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const handleToggle = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <button className="btn btn-sm btn-outline-light theme-toggle" type="button" onClick={handleToggle}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}