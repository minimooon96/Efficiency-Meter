// theme-handler.js

function changeTheme(theme) {
    document.getElementById('theme-style').href = `themes/${theme}.css`;
    localStorage.setItem('currentTheme', theme);
}

function applyStoredTheme() {
    const currentTheme = localStorage.getItem('currentTheme');
    if (currentTheme) {
        changeTheme(currentTheme);
    }
}

// Apply the stored theme when the DOM is ready
document.addEventListener('DOMContentLoaded', applyStoredTheme);
