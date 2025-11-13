const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.innerHTML = '<span id="theme-icon"></span> Light Mode';
} else {
  toggleBtn.innerHTML = '<span id="theme-icon"></span> Dark Mode';
}

toggleBtn.addEventListener('click', () => {
  const icon = document.getElementById('theme-icon');
  icon.classList.add('rotate'); // ikon döner
  setTimeout(() => icon.classList.remove('rotate'), 600); // animasyon biter

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleBtn.innerHTML = '<span id="theme-icon"></span> Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleBtn.innerHTML = '<span id="theme-icon"></span> Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});
