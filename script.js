function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#000000" }, // Adjust color if needed
    shape: { type: "circle" },
    opacity: { value: 0.5, random: false },
    size: { value: 3, random: true },
    move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const typingAnimationElement = document.getElementById("typing-animation");

  const typingTexts = [
      "Aspiring Data Engineer",
      "Data Analyst",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 100; // Typing speed
  const delayBetweenTexts = 1000; // Pause before switching to next text

  function typeEffect() {
      const currentText = typingTexts[textIndex];

      if (!isDeleting) {
          typingAnimationElement.textContent = currentText.substring(0, charIndex);
          charIndex++;
          if (charIndex > currentText.length) {
              isDeleting = true;
              setTimeout(typeEffect, delayBetweenTexts); // Pause before deleting
              return;
          }
      } else {
          typingAnimationElement.textContent = currentText.substring(0, charIndex);
          charIndex--;
          if (charIndex === 0) {
              isDeleting = false;
              textIndex = (textIndex + 1) % typingTexts.length; // Move to next text
          }
      }

      setTimeout(typeEffect, speed);
  }

  typeEffect(); // Start the animation
});


// Skills 
document.addEventListener("DOMContentLoaded", function () {
  function animateProgressBars() {
      const progressBars = document.querySelectorAll(".progress");
      progressBars.forEach(bar => {
          const width = bar.getAttribute("data-width");
          bar.style.width = width;
      });
  }

  function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.8; // Triggers animation sooner
  }

  function checkScroll() {
      const skillsSection = document.getElementById("skills");
      if (isElementInViewport(skillsSection)) {
          animateProgressBars();
          window.removeEventListener("scroll", checkScroll);
      }
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Trigger immediately if section is already visible
});





