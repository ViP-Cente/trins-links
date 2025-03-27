function startScrolling(containerId) {
    const container = document.getElementById(containerId);
    const scrollContainer = container.querySelector('.scroll-container');

    // Duplicate images for seamless scrolling
    scrollContainer.innerHTML += scrollContainer.innerHTML;

    let scrollPosition = 0;

    function scroll() {
        scrollPosition += 1;
        if (scrollPosition >= scrollContainer.scrollHeight / 2) {
            scrollPosition = 0; // Reset scroll position for seamless looping
        }
        scrollContainer.style.transform = `translateY(-${scrollPosition}px)`;
        requestAnimationFrame(scroll);
    }

    scroll();
}

// Start scrolling for both sidebars
startScrolling('left-sidebar');
startScrolling('right-sidebar');

// Duplicate images dynamically for seamless scrolling
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.background-gallery .scroll-container');
    scrollContainer.innerHTML += scrollContainer.innerHTML; // Duplicate images
});