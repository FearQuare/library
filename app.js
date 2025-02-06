const addBookCard = document.querySelector('#add-book');
const closePopup = document.querySelector('#closePopup');
const popup = document.querySelector('#popup');

addBookCard.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {    
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});