import { capitalize } from './capitalize.js';
import { getCelsius } from './getCelsius.js';

// eslint-disable-next-line import/prefer-default-export
export function createCurrentWeatherBlock(data) {
  const curDate = new Date();
  const date = `${curDate.getDate() > 10 ? curDate.getDate() : `${curDate.getDate()}`}.${curDate.getMonth() + 1 > 10 ? curDate.getMonth() + 1 : `0${curDate.getMonth() + 1}`}.${curDate.getFullYear()}`;
  const block = document.createElement('div');
  block.innerHTML = `
  <div class="weather-block">
    <div class="current-weather-block">
      <div class="city-head">
        <h1>${data.name}</h1>
        <h4>${date}</h4>
        <div class="weather-descr">
          ${capitalize(data.weather[0].description)}
        </div>
      </div>
      <div class="occur-container">
        <div class="temp-block">
          <div class="temp-feels">
            <h2>${getCelsius(data.main.feels_like)}</h2>
          </div>
          <div class="temp-min-max">
            <div class="temp-min">Min: ${getCelsius(data.main.temp_min)}</div>
            <div class="temp-max">Max: ${getCelsius(data.main.temp_max)}</div>
          </div>
        </div>
        <div class="weather-props">
          <div class="weather-prop-row">
            <img class="weather-prop-icon" src="/lab7/icons/cloud.svg" /><span
              >Облачность: ${data.clouds.all}%</span
            >
          </div>
          <div class="weather-prop-row">
            <img class="weather-prop-icon" src="/lab7/icons/droplet.svg" /><span
              >Влажность: ${data.main.humidity}%</span
            >
          </div>
          <div class="weather-prop-row">
            <img class="weather-prop-icon" src="/lab7/icons/wind.svg" /><span
              >Скорость ветра: ${data.wind.speed}м/с</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  return block;
}
