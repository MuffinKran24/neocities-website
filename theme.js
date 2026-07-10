const savedTheme = localStorage.getItem('site-theme') || 'gruvbox-dark';
document.documentElement.setAttribute('data-theme', savedTheme);

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    themeToggle.src = savedTheme === 'gruvbox-dark' ? 'Assets/Moon.png' : 'Assets/Sun.png';
    
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'gruvbox-dark';
      let newTheme = 'gruvbox-dark';
  
      if (currentTheme === 'gruvbox-dark') {
        newTheme = 'gruvbox-light';
        themeToggle.src = 'Assets/Sun.png'; 
      } else {
        themeToggle.src = 'Assets/Moon.png';
      }
  
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('site-theme', newTheme);
    });
  }
});
