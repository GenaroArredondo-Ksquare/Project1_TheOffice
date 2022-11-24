
//Playing The Office's theme when the page loads
document.body.addEventListener("click", event => {
   const audio = document.querySelector("audio");
       audio.volume = 0.05;
       audio.loop = true;
       audio.muted = false;
       audio.play();
  });

  const banner = document.querySelector('.banner');

  window.addEventListener('scroll', (event) => {
    banner.setAttribute('class','banner2');
    document.body.setAttribute('class','body2');
  });
  

