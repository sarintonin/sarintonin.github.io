

function userPrefersDarkMode() {
    return localStorage.getItem("darkMode") === "enabled";
  }
  
  function setThemePreference(value) {
    localStorage.setItem("darkMode", value || "disabled");
  }
  var theme = Window.theme || {};

  const enableDarkMode = () => {
    theme.setAttribute('href', './css/default-dark.css');
  };
  
  const disableDarkMode = () => {
    theme.setAttribute('href', './css/default-light.css');
  };
  
  function setTheme() {
    if (userPrefersDarkMode()) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }
  
  function bootstrap() {
       const darkModeToggleButton = document.querySelector("#dark-toggle");
  darkModeToggleButton.addEventListener("click", () => {
    if (userPrefersDarkMode()) {
      setThemePreference("disabled");
      disableDarkMode();
    } else {
      setThemePreference("enabled");
      enableDarkMode();
    }
  });
  
  setTheme();
  }
  
  document.addEventListener("DOMContentLoaded", function(event) {
      bootstrap();
   
  });
  
  
  