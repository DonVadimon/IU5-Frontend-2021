import { createWeatherCard } from './createWeatherCard.js';

// eslint-disable-next-line import/prefer-default-export
export function createForecastBlock(data) {
  const forecastContainer = document.createElement('div');
  forecastContainer.classList.add('forecast-container');
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < 6; i++) {
    forecastContainer.appendChild(createWeatherCard(data.city.name, data.list[i]));
  }
  return forecastContainer;
}
