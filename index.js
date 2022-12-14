
//Playing The Office's theme when the page loads
/* document.body.addEventListener("click", event => {
   const audio = document.querySelector("audio");
       audio.volume = 0.05;
       audio.loop = true;
       audio.muted = false;
       audio.play();
  }); */

  const btn = document.querySelector('.soundBtn');
  const banner = document.querySelector('.banner');
  const header = document.querySelector('header');
  const home = document.querySelector('.home');
  const events = document.querySelector('.events');
  const temptitle = document.querySelector('.temptitle');

  btn.addEventListener('click', () => {
    const audio = document.querySelector("audio");
        if(audio.paused) {
         audio.volume = 0.05;
         audio.loop = true;
         audio.muted = false;
         audio.play();
         btn.style.backgroundImage = 'url(https://image.shutterstock.com/image-vector/sound-volume-icon-260nw-742030480.jpg)';
        }
        else {
          audio.pause();
          btn.style.backgroundImage = 'url(https://www.shutterstock.com/image-vector/mute-icon-260nw-609790580.jpg)';
        }
  })
  
window.addEventListener('scroll', async (event) => {
  header.setAttribute('class','header2');
  header.classList.toggle('sticky', window.scrollY > 0);
  banner.setAttribute('class','banner2');
  home.setAttribute('class','home2');
  events.setAttribute('class','events2');
  temptitle.setAttribute('class','temptitle2');

});

temptitle.addEventListener("click", event => {
  header.setAttribute('class','header2');
  header.classList.toggle('sticky', window.scrollY > 0);
  banner.setAttribute('class','banner2');
  home.setAttribute('class','home2');
  events.setAttribute('class','events2');
  temptitle.setAttribute('class','temptitle2');
 });