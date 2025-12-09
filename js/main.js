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

});
