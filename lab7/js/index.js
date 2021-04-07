/* eslint-disable no-plusplus */
import {
  getWeatherByCity, getWeatherByCoords, getForecastByCity, getForecastByCoords,
} from './modules/weatherModule.js';
import { createNavBar } from './utils/createNavBar.js';
import { createForecastBlock } from './utils/createForecastBlock.js';
import { changeWeatherBackground } from './utils/changeWeatherBackground.js';
import { createCurrentWeatherBlock } from './utils/createCurrentWeatherBlock.js';
import { createErrorBlock } from './utils/error.js';
import { addCloseErrorEvent } from './utils/addCloseErrorEvent.js';

const app = document.getElementById('app');
document.querySelector('body').prepend(createNavBar());
app.style.minHeight = `${(app.offsetHeight - document.querySelector('.navigation').offsetHeight)}px`;

navigator.geolocation.getCurrentPosition((p) => {
  getWeatherByCoords(p.coords.latitude, p.coords.longitude)
    .then((data) => {
      app.appendChild(createCurrentWeatherBlock(data));
      changeWeatherBackground(data.weather[0].icon);
    })
    .catch((err) => {
      app.innerHTML = '';
      app.appendChild(createErrorBlock(err.message));
      addCloseErrorEvent();
    });
}, () => {
  getWeatherByCity('Астрахань')
    .then((data) => {
      app.appendChild(createCurrentWeatherBlock(data));
      changeWeatherBackground(data.weather[0].icon);
    })
    .catch((err) => {
      app.innerHTML = '';
      app.appendChild(createErrorBlock(err.message));
      addCloseErrorEvent();
    });
});

navigator.geolocation.getCurrentPosition((p) => {
  getForecastByCoords(p.coords.latitude, p.coords.longitude)
    .then((data) => {
      document.querySelector('.weather-block').appendChild(createForecastBlock(data));
    })
    .catch((err) => {
      app.innerHTML = '';
      app.appendChild(createErrorBlock(err.message));
      addCloseErrorEvent();
    });
}, () => {
  getForecastByCity('Астрахань')
    .then((data) => {
      document.querySelector('.weather-block').appendChild(createForecastBlock(data));
    })
    .catch((err) => {
      app.innerHTML = '';
      app.appendChild(createErrorBlock(err.message));
      addCloseErrorEvent();
    });
});
