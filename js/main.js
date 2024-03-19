let offset = 0;
const sliderWrapper = document.querySelector('.participants__slider-wrapper');
const pagination = document.querySelector('.participants__pagination');

const CONTAINER_WIDTH = 1222;

document.querySelector('.participants__button-next').addEventListener('click', function () {
  pagination.innerText = '6 / 6';
  if (offset >= CONTAINER_WIDTH) {
    return;
  }
  offset = offset + CONTAINER_WIDTH;
  sliderWrapper.style.left = -offset + 'px';
});

document.querySelector('.participants__button-prev').addEventListener('click', function () {
  pagination.innerText = '3 / 6';
  if (offset <= 0) {
    return;
  }
  offset = offset - CONTAINER_WIDTH;
  sliderWrapper.style.left = -offset + 'px';
});




/* Плавный скроллинг к якорю */

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}