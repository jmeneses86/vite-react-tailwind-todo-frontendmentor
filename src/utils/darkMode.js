// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    // Whenever the user explicitly chooses dark mode
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
} else {
    // Whenever the user explicitly chooses light mode
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
}

// Whenever the user explicitly chooses to respect the OS preference
/* localStorage.removeItem("theme"); */
