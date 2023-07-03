// Query the modal elements
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modalImage');
const modalContent = document.getElementById('modalContent');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

// Get all area elements
const areas = document.querySelectorAll('area');

// Add event listeners to each area
areas.forEach((area) => {
  area.addEventListener('mouseover', handleMouseOver);
  area.addEventListener('mouseout', handleMouseOut);
});

// Handling the mouseover event
function handleMouseOver(event) {
  // Get the title from the hovered area
  const title = event.target.getAttribute('title');

  // Set the title in the modal
  modalTitle.innerText = title;

  // Get the image source from the 'data-image' attribute of the hovered area
  const imageSource = event.target.getAttribute('data-image');

  // Set the image source for the modal image element
  modalImage.src = imageSource;

  // Get the data description from the 'data-description' attribute of the hovered area
  const description = event.target.getAttribute('data-description');

  // Set the data description in the modal content
  modalText.innerText = description;

  // Add the 'active' class to the modal to make it visible
  modal.classList.add('active');
}

// Handling the mouseout event
function handleMouseOut() {
  // Remove the 'active' class from the modal to hide it
  modal.classList.remove('active');

  // Reset the image source, title, and description in the modal
  modalImage.src = '';
  modalTitle.innerText = '';
  modalText.innerText = '';
}

// Smooth scroll on nav link click
document.querySelectorAll('nav ul li a').forEach(function(navLink) {
  navLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});