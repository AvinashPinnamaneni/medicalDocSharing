function openRescheduleModal(rescheduleButton) {
  const listItem = rescheduleButton.closest('.list-group-item');
  const modal = document.getElementById('rescheduleModal');

  // Extract appointment details from the list item (replace with your logic)
  const appointmentDetails = extractDetailsFromListItem(listItem);

  // Populate the modal form fields with the appointment details
  const modalForm = modal.querySelector('form');
  // Example: modalForm.elements.date.value = appointmentDetails.date;
  // Populate other form fields similarly

  $(modal).modal('show'); // Show the modal
}

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
