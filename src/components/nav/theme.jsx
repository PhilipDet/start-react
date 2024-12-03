import { useEffect, useState } from "react";

export const ThemeBTN = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const body = document.querySelector("body");
        body.style.backgroundColor = theme === "light" ? "#f4f4f4" : "#333";
        body.style.color = theme === "light" ? "#333" : "#f4f4f4";
        const toggleButton = document.getElementById("toggle-theme-btn");
        toggleButton.textContent = theme === "light" ? "🌙" : "☀️";
    }, [theme]);

    return (
        <a
            id="toggle-theme-btn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        ></a>
    );
};
