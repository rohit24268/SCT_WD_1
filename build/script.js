// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Get references to the menu toggle button and the navigation links
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const body = document.body; // Reference to the body element

    // Add a click event listener to the menu toggle button
    menuToggle.addEventListener('click', () => {
        // Toggle the 'active' class on the navigation links to show/hide it
        navLinks.classList.toggle('active');

        // Toggle the 'active' class on the menu toggle button itself for icon animation
        menuToggle.classList.toggle('active');

        // Toggle the 'no-scroll' class on the body to prevent/allow scrolling
        body.classList.toggle('no-scroll');
    });

    // Optional: Close the mobile menu when a link is clicked (for single-page apps)
    // This improves UX by collapsing the menu after navigation
    const navLinkItems = navLinks.querySelectorAll('.nav-link');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
    });
});
