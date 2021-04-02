import { createSquare } from '../utils/createSquare.js';

/**
 * Div that changes color to random on click
 */
const square = createSquare();

square.addEventListener('click', (e) => {
  e.target.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
});

// eslint-disable-next-line import/prefer-default-export
export { square as randomSquareModule };
