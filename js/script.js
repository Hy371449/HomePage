const text = document.querySelector('.sec-text');
const textLoad = () => {
  setTimeout(() => {
    text.textContent = 'Software Developer';
  }, 1600);

  setTimeout(() => {
    text.textContent = 'Data Analyst';
  }, 5600);

  setTimeout(() => {
    text.textContent = 'Hoophead';
  }, 9600);

  setTimeout(() => {
    text.textContent = 'Surfing Beginner';
  }, 13600);
};

textLoad();
setInterval(textLoad, 16000);

const contact = document.querySelector('.contact');
const socialMedia = document.querySelector('.social-media');
contact.addEventListener('click', () => {
  if (socialMedia.classList.contains('display')) {
    socialMedia.classList.remove('display');
    contact.textContent = 'Contact Me';
  } else {
    socialMedia.classList.add('display');
    contact.textContent = 'Back';
  }
});
