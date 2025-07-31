document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('nav-links');
  const allNavLinks = document.querySelectorAll('.nav-link');

  // This listener handles opening AND closing via the hamburger button
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Function to close the menu, we'll reuse this
  const closeMenu = () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  };

  // Close menu when a nav link is clicked
  allNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when clicking anywhere outside of it
  document.addEventListener('click', (event) => {
    // We check if the menu is active and if the click was NOT on the hamburger
    // and NOT inside the navigation links container.
    if (navLinks.classList.contains('active') && 
        !hamburger.contains(event.target) && 
        !navLinks.contains(event.target)) {
      closeMenu();
    }
  });
});