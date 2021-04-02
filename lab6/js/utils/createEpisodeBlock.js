/**
 * Creates div with information about one episode
 * @param {Object} episode
 * @param {String} episode.title
 * @param {String} episode.season
 * @param {String} episode.air_date
 * @param {Object} episode.characters
 * @returns {Object}
 */
// eslint-disable-next-line import/prefer-default-export
export function createEpisodeBlock({
  // eslint-disable-next-line camelcase
  title, season, air_date, characters,
}) {
  const block = document.createElement('div');
  block.classList.add('episode-block');
  const titleHeader = document.createElement('h3');
  titleHeader.innerText = `${title} - ${season} season`;
  const airDate = document.createElement('h5');
  // eslint-disable-next-line camelcase
  airDate.innerText = `Aired - ${air_date}`;
  const charactersList = document.createElement('ul');
  Object.values(characters).forEach((person) => {
    const character = document.createElement('li');
    character.innerText = person;
    charactersList.appendChild(character);
  });
  block.appendChild(titleHeader);
  block.appendChild(airDate);
  block.appendChild(charactersList);
  return block;
}
