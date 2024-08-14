// This function scrolls smoothly to the section with the hash
function smoothScrollToHash() {
    const hash = window.location.hash; // Get the hash from the URL
    if (hash) {
        const target = document.querySelector(hash); // Find the element with that ID
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth' // Smooth scroll behavior
            });
        }
    }
}

// Scroll on page load if there's a hash in the URL
window.addEventListener('load', smoothScrollToHash);

// Update URL on clicking links, with smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default jump to the anchor
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            history.pushState(null, null, this.getAttribute('href')); // Update URL hash without jumping
        }
    });
});