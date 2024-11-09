let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        // Your resize event handling code here
        console.log('Resize event handled');
    }, 200);
});
