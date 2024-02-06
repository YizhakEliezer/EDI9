document.addEventListener('DOMContentLoaded', function () {
    const themeSwitcher = document.getElementById('modeScreen');
    const body = document.body;

    themeSwitcher.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
    });
});


