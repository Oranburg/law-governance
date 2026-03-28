import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute("data-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 14,
        padding: "2px 6px",
        lineHeight: 1,
        color: theme === "dark" ? "var(--yellow)" : "var(--blue-light)",
      }}
    >
      {theme === "dark" ? "\u2600" : "\u263D"}
    </button>
  );
}
