/**
 * Creates a div with className 'square'
 * @returns {Object}
 */
// eslint-disable-next-line import/prefer-default-export
export function createSquare() {
  const square = document.createElement('div');
  square.classList.add('square');
  return square;
}
