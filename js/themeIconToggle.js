const darkThemeIcon = document.querySelector(".theme-toggle__icon--dark");
const lightThemeIcon = document.querySelector(".theme-toggle__icon--light");

export const themeIconSwitchHandler = (theme) => {
  if (theme === "light") {
    darkThemeIcon.classList.add("active");
    lightThemeIcon.classList.remove("active");
  } else {
    lightThemeIcon.classList.add("active");
    darkThemeIcon.classList.remove("active");
  }
};
