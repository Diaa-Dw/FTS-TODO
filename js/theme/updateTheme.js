import { themeIconSwitchHandler } from "./themeIconToggle.js";

export const toggleThemeHandler = (e) => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);

  themeIconSwitchHandler(newTheme);

  localStorage.setItem("theme", newTheme);
};
