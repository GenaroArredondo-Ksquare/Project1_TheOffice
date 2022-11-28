
//Playing The Office's theme when the page loads
document.body.addEventListener("click", event => {
   const audio = document.querySelector("audio");
       audio.volume = 0.05;
       audio.loop = true;
       audio.muted = false;
       audio.play();
  });

  const banner = document.querySelector('.banner');
  const header = document.querySelector('header');


  
window.addEventListener('scroll', async (event) => {
  header.setAttribute('class','header2');
  header.classList.toggle('sticky', window.scrollY > 0);
  banner.setAttribute('class','banner2');
  await new Promise(resolve => setTimeout(resolve, 500));
  document.body.setAttribute('class','body2');
  
});
