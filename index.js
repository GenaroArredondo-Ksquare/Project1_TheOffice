
//Playing The Office's theme when the page loads
document.body.addEventListener("click", event => {
   const audio = document.querySelector("audio");
       audio.volume = 0.05;
       audio.loop = true;
       audio.muted = false;
       audio.play();
  });

  

