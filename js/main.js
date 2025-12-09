document.addEventListener('DOMContentLoaded', () => {

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
