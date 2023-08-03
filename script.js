// Function to close the menu when clicking a menu item link
function closeMenu() {
    var nav = document.querySelector('.main-nav');
    nav.classList.remove('open');
}

// Function to check if an element is in the viewport
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event and trigger the animation
function handleScroll() {
    var projectCards = document.querySelectorAll(".project");

    projectCards.forEach(function(card) {
        if (isElementInViewport(card)) {
            card.classList.add("animation-active");
        }
    });
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// Call the handleScroll function once on page load to check initial position
handleScroll();
