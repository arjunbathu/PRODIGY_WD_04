// Add any JavaScript you need here
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        window.scrollTo({
            top: document.querySelector(targetId).offsetTop,
            behavior: "smooth"
        });
    }
});
