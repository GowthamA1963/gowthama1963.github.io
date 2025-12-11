document.addEventListener('DOMContentLoaded', () => {

  /* Typewriter Effect */
  const textElement = document.getElementById('typewriter-text');
  const textToType = "Gowtham Ammanamanchi.";
  const typingSpeed = 100; // milliseconds per character
  const startDelay = 500; // milliseconds before starting

  if (textElement) {
    // Clear initial text
    textElement.textContent = '';
    textElement.classList.add('typing-cursor');

    setTimeout(() => {
      let charIndex = 0;
      const typeChar = () => {
        if (charIndex < textToType.length) {
          textElement.textContent += textToType.charAt(charIndex);
          charIndex++;
          setTimeout(typeChar, typingSpeed);
        } else {
          // Start blinking cursor animation after typing finishes
          textElement.classList.add('cursor-blink');
        }
      };
      typeChar();
    }, startDelay);
  }

  /* Scroll Animation for Skills */
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all skill categories
  const skillCategories = document.querySelectorAll('.skills-category');
  skillCategories.forEach(category => {
    observer.observe(category);
  });

  /* Page Transition Effect */
  const transition = document.getElementById('page-transition');

  // Intercept all internal links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    // Check if it's an internal link (not external, not anchor-only)
    if (link && link.href &&
      link.hostname === window.location.hostname &&
      !link.href.includes('#') &&
      link.href !== window.location.href) {

      e.preventDefault();
      const destination = link.href;

      // Show transition
      transition.classList.add('active');

      // Navigate after animation
      setTimeout(() => {
        window.location.href = destination;
      }, 1200); // Total animation duration
    }
  });

  // Hide transition on page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      transition.classList.remove('active');
    }, 100);
  });

});
