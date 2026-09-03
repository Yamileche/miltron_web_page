"use client";

import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function getTheme(): Theme {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  function toggleTheme() {
    const nextTheme = getTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      className="icon-button"
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar tema de color"
      title="Cambiar tema"
    >
      <Sun className="theme-icon theme-icon--sun" aria-hidden="true" />
      <Moon className="theme-icon theme-icon--moon" aria-hidden="true" />
    </button>
  );
}
