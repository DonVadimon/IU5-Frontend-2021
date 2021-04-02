/**
 * Creates button element with className 'btn'
 * @param {String} type
 * @param {String} innnerTxt
 * @returns {Object}
 */
// eslint-disable-next-line import/prefer-default-export
export function createBtn(type, innnerTxt) {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.type = type;
  btn.textContent = innnerTxt;
  return btn;
}
