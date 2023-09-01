// JavaScript for navbar upscroll graphics
const navbar = document.getElementById('navbar');
const body = document.body;

// Define the scroll offset threshold
const scrollOffsetThreshold = 40;

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Apply the scrolling effect when the scroll offset exceeds the threshold
  if (scrollY > scrollOffsetThreshold) {
    navbar.classList.add('navbar-scroll');
    body.classList.add('body-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
    body.classList.remove('body-scroll');
  }
});
