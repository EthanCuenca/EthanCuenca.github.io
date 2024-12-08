let resizeTimeout;

window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        const viewportWidth = window.innerWidth;
        if (viewportWidth < 768) {
            document.body.style.fontSize = '14px';
        } else if (viewportWidth < 1200) {
            document.body.style.fontSize = '16px';
        } else {
            document.body.style.fontSize = '18px';
        }
        console.log('Font size adjusted for viewport width:', viewportWidth);
    }, 200);
});

// Optional: Add a theme toggle button
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Theme';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '10px';
toggleButton.style.right = '10px';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
