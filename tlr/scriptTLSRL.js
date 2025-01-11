// JavaScript for TLSRL website

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");
    });
  }

  // Smooth scrolling for anchor links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Modal for ticket booking (if applicable)
  const ticketModal = document.querySelector("#ticket-modal");
  const openModalButtons = document.querySelectorAll(".open-ticket-modal");
  const closeModalButton = document.querySelector("#close-modal");

  if (ticketModal) {
    openModalButtons.forEach(button => {
      button.addEventListener("click", () => {
        ticketModal.style.display = "block";
      });
    });

    if (closeModalButton) {
      closeModalButton.addEventListener("click", () => {
        ticketModal.style.display = "none";
      });
    }

    window.addEventListener("click", event => {
      if (event.target === ticketModal) {
        ticketModal.style.display = "none";
      }
    });
  }

  // Dynamic footer year update
  const yearSpan = document.querySelector("#current-year");

  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  // Interactive map logic (if included)
  const mapContainer = document.querySelector("#map-container");

  if (mapContainer) {
    // Placeholder: Add map logic or integration here
    mapContainer.innerHTML = "<p>Interactive map coming soon!</p>";
  }
});
