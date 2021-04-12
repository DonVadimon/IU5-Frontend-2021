/* eslint-disable no-nested-ternary */
import { capitalize } from './capitalize.js';
import { getCelsius } from './getCelsius.js';

// eslint-disable-next-line import/prefer-default-export
export function createWeatherCard(city, data) {
  const card = document.createElement('div');
  card.classList.add('weather-card');
  const forecastDate = data.dt_txt.split(' ')[0].split('-').reverse().join('.');
  const forecastTime = data.dt_txt.split(' ')[1].slice(0, 5);

  card.innerHTML = `
  <div class="forecast-card">
    <div class="time-stamp">
      <div class="forecast-date">${forecastDate}</div>
      <div class="forecast-time">${forecastTime}</div>
    </div>
    <div class="forecast-temp">
      <h3>${getCelsius(data.main.feels_like)}</h3>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"} />
    </div>
    <div class="forecast-descr">${capitalize(data.weather[0].description)}</div>
  </div>
  `;

  return card;
}
