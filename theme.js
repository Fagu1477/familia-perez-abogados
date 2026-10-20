(() => {
  const toggle = document.getElementById('theme-toggle');
  const savedTheme = window.localStorage.getItem('site-theme');
  const initialTheme = savedTheme === 'dark' ? 'dark' : 'light';

  document.documentElement.dataset.theme = initialTheme;

  const updateToggle = (theme) => {
    const isDark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute(
      'aria-label',
      isDark ? 'Activar modo claro' : 'Activar modo oscuro'
    );
  };

  updateToggle(initialTheme);

  toggle.addEventListener('click', () => {
    const nextTheme =
      document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('site-theme', nextTheme);
    updateToggle(nextTheme);
  });
})();
