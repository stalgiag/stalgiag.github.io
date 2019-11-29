
// Hack to avoid needing to use CSS Modules
export default function modifyVariables(colorString) {
  const root = document.documentElement;
  root.style.setProperty('--main-theme-color', colorString);
}
