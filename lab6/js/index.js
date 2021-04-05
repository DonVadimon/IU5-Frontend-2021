import { timerModule } from './modules/timerModule.js';
import { randomSquareModule } from './modules/randomSquareModule.js';
import { navBtn, navDiv } from './modules/dropdownModule.js';
import { epsBlock, getBrBdbtn } from './modules/breakingBadModule.js';
import { ballField } from './modules/ballModule.js';

window.onload = () => {
  const app = document.getElementById('app');

  const container = document.createElement('div');
  container.classList.add('container');
  app.appendChild(container);

  container.appendChild(navBtn);
  container.appendChild(navDiv);

  container.appendChild(randomSquareModule);

  container.appendChild(timerModule);

  container.appendChild(getBrBdbtn);
  app.appendChild(epsBlock);

  container.appendChild(ballField);
};
