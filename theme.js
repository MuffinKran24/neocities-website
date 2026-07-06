const savedTheme = localStorage.getItem('site-theme') || 'gruvbox-dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// 2. Wait for the DOM to load ONLY to hook up the button click event
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Set the correct image asset based on the theme that was just applied
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
