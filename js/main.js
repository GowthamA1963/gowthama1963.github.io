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

  /* System HUD Logic */
  function updateHUD() {
    const timeEl = document.getElementById('hud-time');
    const cpuEl = document.getElementById('hud-cpu');

    if (timeEl) {
      const now = new Date();
      timeEl.textContent = now.toLocaleTimeString('en-US', { hour12: false });
    }

    if (cpuEl) {
      // Fake CPU fluctuation
      const cpu = Math.floor(Math.random() * 15) + 5; // 5-20%
      cpuEl.textContent = `${cpu}%`;
      // Randomly spike
      if (Math.random() > 0.9) cpuEl.textContent = `${Math.floor(Math.random() * 30) + 20}%`;
    }
  }
  setInterval(updateHUD, 1000);
  updateHUD();

});
