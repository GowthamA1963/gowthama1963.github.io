document.addEventListener('DOMContentLoaded', () => {
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

  /* LiDAR Reveal Logic */
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add a small delay for effect or trigger immediately
        setTimeout(() => {
          entry.target.classList.add('scanned');
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const targets = document.querySelectorAll('.lidar-target');
  targets.forEach(target => {
    observer.observe(target);
  });
});

