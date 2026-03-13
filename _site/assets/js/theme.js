document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const rootElement = document.documentElement; // тег <html>
    const bodyElement = document.body; // тег <body>

    // Проверяем сохраненную тему в localStorage (по умолчанию light)
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Функция применения темы
    const applyTheme = (theme) => {
        rootElement.setAttribute('data-theme', theme);
        if (theme === 'dark') {
            bodyElement.classList.add('dark-theme');
            bodyElement.classList.remove('light-theme');
        } else {
            bodyElement.classList.remove('dark-theme');
            bodyElement.classList.add('light-theme');
        }
    };

    // Применяем тему при загрузке
    applyTheme(currentTheme);

    if (themeToggleBtn) {
        // Устанавливаем иконку
        themeToggleBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

        // Слушаем клик
        themeToggleBtn.addEventListener('click', () => {
            let activeTheme = rootElement.getAttribute('data-theme') || 'light';
            let newTheme = activeTheme === 'dark' ? 'light' : 'dark';
            
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
            
            themeToggleBtn.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });
    }
});