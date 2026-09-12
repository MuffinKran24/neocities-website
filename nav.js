document.addEventListener("DOMContentLoaded", () => {
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("nav-placeholder").innerHTML = data;
      
      if (typeof initThemeToggle === "function") {
        initThemeToggle();
      }
    })
    .catch(error => console.error("Error loading navigation:", error));
});
