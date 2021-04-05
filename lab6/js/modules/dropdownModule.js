import { createBtn } from '../utils/createButton.js';
import { createNavElem } from '../utils/createNavElem.js';

/**
 * Get dropdown menu items from .json
 * @returns {Promise}
 */
function getNavConfig() {
  return fetch('/lab6/json/navConfig.json').then((data) => data.json())
    .then((data) => data);
}

/**
 * Button to show/hide dropdown menu
 */
const navBtn = createBtn('submit', 'NAVIGATION');
navBtn.classList.add('nav-btn');

/**
 * Div with dropdown menu
 */
const navDiv = document.createElement('div');
navDiv.classList.add('nav-container');

getNavConfig().then((data) => {
  Object.values(data).forEach((el) => {
    navDiv.appendChild(createNavElem(el));
  });
});

navBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navDiv.classList.toggle('nav-container-visible');
});

export {
  navBtn,
  navDiv,
};
