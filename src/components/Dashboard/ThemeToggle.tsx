import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

 function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <MoonIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <SunIcon className="h-6 w-6 text-white" />
      )}
    </button>
  );
}

export default  ThemeToggle;
