// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// controla na página about.pug o scroll que contem overflow somente no responsivo
const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('box-js').scrollLeft += 20;
};
buttonLeft.onclick = function () {
  document.getElementById('box-js').scrollLeft -= 20;
};