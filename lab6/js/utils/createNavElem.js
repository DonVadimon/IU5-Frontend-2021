/**
 * Creates element of navigation bar
 * @param {Object} navLink
 * @param {String} navLink.title
 * @param {String} navLink.href
 * @param {String} navLink.logo
 * @returns {Object}
 */
// eslint-disable-next-line import/prefer-default-export
export function createNavElem({ title, href, logo }) {
  const elemContainer = document.createElement('div');
  elemContainer.classList.add('nav-elem');
  const elemLogoLandscape = document.createElement('div');
  elemLogoLandscape.classList.add('circular-landscape');
  const elemLogo = document.createElement('img');
  elemLogo.src = logo;
  elemLogo.classList.add('circular-img');
  const elemTitle = document.createElement('h3');
  elemTitle.innerText = title;
  const elemArchor = document.createElement('a');
  elemArchor.appendChild(elemTitle);
  elemArchor.href = href;
  elemLogoLandscape.appendChild(elemLogo);
  elemContainer.appendChild(elemLogoLandscape);
  elemContainer.appendChild(elemArchor);
  return elemContainer;
}
