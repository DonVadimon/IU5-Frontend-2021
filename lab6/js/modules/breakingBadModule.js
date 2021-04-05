import { createBtn } from '../utils/createButton.js';
import { createEpisodeBlock } from '../utils/createEpisodeBlock.js';

/**
 * Button to render info about Breaking Bad
 */
const getBrBdbtn = createBtn('submit', 'GET EPISODES');
getBrBdbtn.classList.add('get-series-btn');

/**
 * Div with info about Breaking Bad
 */
const epsBlock = document.createElement('div');
epsBlock.classList.add('episodes');
getBrBdbtn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('https://breakingbadapi.com/api/episodes')
    .then((data) => data.json()).then((data) => {
      epsBlock.innerHTML = '';
      data.forEach((el) => {
        const epBlock = createEpisodeBlock(el);
        epsBlock.appendChild(epBlock);
      });
    });
});

export {
  getBrBdbtn,
  epsBlock,
};
