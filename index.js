
//Playing The Office's theme when the page loads
window.addEventListener("DOMContentLoaded", event => {
   const audio = document.querySelector("audio");
       audio.volume = 0.05;
       audio.loop = true;
       audio.play();
  });

  

