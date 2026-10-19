// ==========================================================================
// Portfolio Interactivity - Gopika D
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const menuOverlay = document.getElementById("menuOverlay");
  const navLinks = document.querySelectorAll(".nav-link, .nav-cta");

  function openMenu() {
    navMenu.classList.add("show");
    menuToggle.classList.add("active");
    menuOverlay.classList.add("show");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    navMenu.classList.remove("show");
    menuToggle.classList.remove("active");
    menuOverlay.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("show");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close when overlay is clicked
    if (menuOverlay) {
      menuOverlay.addEventListener("click", closeMenu);
    }

    // Close when clicking any navigation link
    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close on Escape key press for accessibility
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("show")) {
        closeMenu();
      }
    });
  }

  // Header elevation shadow on scroll
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Contact form submission notice (honest client-side handler)
  const contactForm = document.getElementById("contactForm");
  const formNotice = document.getElementById("formNotice");

  if (contactForm && formNotice) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = document.getElementById("name");
      const senderName = nameInput ? nameInput.value.trim() : "there";

      formNotice.style.display = "block";
      formNotice.innerHTML = `<strong>Thank you, ${senderName}!</strong><br>Your form input is validated. To receive client inquiries directly in your inbox, connect a service such as <a href="https://formspree.io" target="_blank" rel="noopener" style="text-decoration: underline; color: #0d9488; font-weight: 600;">Formspree</a> or <a href="https://www.emailjs.com" target="_blank" rel="noopener" style="text-decoration: underline; color: #0d9488; font-weight: 600;">EmailJS</a>.`;
    });
  }
});
