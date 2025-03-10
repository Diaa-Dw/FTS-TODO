import { themeIconSwitchHandler } from "./themeIconToggle.js";

export const loadSavedTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeIconSwitchHandler(savedTheme);
  }
};
