import { createSquare } from '../utils/createSquare.js';

/**
 * Div that contains counter.
 * Counter increments everu second on hover
 */
const timerContainer = createSquare();
timerContainer.classList.add('timer-container');
const timer = document.createElement('span');
timer.textContent = '0';
timerContainer.appendChild(timer);

let timerId;
let timerInt = 0;
timerContainer.addEventListener('mouseover', (e) => {
  timerId = setInterval(() => {
    timerInt += 1;
    e.target.textContent = timerInt;
  }, 1000);
});

timerContainer.addEventListener('mouseout', () => {
  clearInterval(timerId);
});

// eslint-disable-next-line import/prefer-default-export
export { timerContainer as timerModule };
