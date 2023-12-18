// main.js
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    const sunIcon = document.querySelector('#sun-icon');
    const moonIcon = document.querySelector('#moon-icon');

    const updateIcons = () => {
        if (darkModeToggle && darkModeToggle.checked) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline';
        } else {
            sunIcon.style.display = 'inline';
            moonIcon.style.display = 'none';
        }
    };

    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
            updateIcons();
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });

        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }
        updateIcons();
    }
});
