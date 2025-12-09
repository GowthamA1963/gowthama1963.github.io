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

  /* Terminal Logic */
  const terminalToggle = document.getElementById('terminal-toggle');
  const terminalOverlay = document.getElementById('terminal-overlay');
  const terminalClose = document.getElementById('terminal-close');
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');

  if (terminalToggle && terminalOverlay) {
    // Open
    terminalToggle.addEventListener('click', () => {
      terminalOverlay.classList.add('open');
      setTimeout(() => terminalInput.focus(), 100);
    });

    // Close
    const closeTerminal = () => {
      terminalOverlay.classList.remove('open');
    };
    terminalClose.addEventListener('click', closeTerminal);

    // Close on outside click
    terminalOverlay.addEventListener('click', (e) => {
      if (e.target === terminalOverlay) closeTerminal();
    });

    // Command Processing
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const command = terminalInput.value.trim().toLowerCase();
        if (command) {
          processCommand(command);
        }
        terminalInput.value = '';
      }
    });

    function printOutput(text, isHtml = false) {
      const div = document.createElement('div');
      if (isHtml) div.innerHTML = text;
      else div.textContent = text;
      div.style.marginBottom = '4px';

      // Insert before the input line
      const inputLine = document.querySelector('.input-line');
      terminalOutput.insertBefore(div, inputLine);

      // Scroll to bottom
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function processCommand(cmd) {
      // Echo command
      printOutput(`user@ros2:~$ ${cmd}`);

      const parts = cmd.split(' ');
      const primary = parts[0];
      const arg = parts[1];

      switch (primary) {
        case 'help':
          printOutput('Available commands:');
          printOutput('  nav [target]   - Navigate to (about, skills, work, contact)');
          printOutput('  cat [file]     - Read file (about.txt, contact.txt)');
          printOutput('  whoami         - User info');
          printOutput('  clear          - Clear terminal');
          printOutput('  exit           - Close terminal');
          break;
        case 'clear':
          // Remove all previous output (except input line)
          const lines = terminalOutput.querySelectorAll('div:not(.input-line)');
          lines.forEach(l => l.remove());
          break;
        case 'whoami':
          printOutput('visitor@portfolio-v1');
          break;
        case 'exit':
          closeTerminal();
          break;
        case 'nav':
          if (['about', 'skills', 'contact'].includes(arg)) {
            printOutput(`Navigating to #${arg}...`);
            closeTerminal();
            window.location.hash = arg;
          } else if (arg === 'work' || arg === 'projects') {
            printOutput('Navigating to #projects...');
            closeTerminal();
            window.location.hash = 'projects';
          } else {
            printOutput('Usage: nav [about|skills|work|contact]');
          }
          break;
        case 'cat':
          if (arg === 'about.txt') {
            printOutput('Robotics Engineer. ROS 2 Specialist. Tech Enthusiast.');
          } else if (arg === 'contact.txt') {
            printOutput('Email: your.email@example.com');
            printOutput('Status: Open to work');
          } else {
            printOutput(`File not found: ${arg || ''}`);
          }
          break;
        default:
          printOutput(`Command not found: ${primary}. Type 'help' for list.`);
      }
    }
  }
});
