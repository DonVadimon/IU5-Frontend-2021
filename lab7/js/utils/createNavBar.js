import {
  getWeatherByCity, getForecastByCity,
} from '../modules/weatherModule.js';
import { createCurrentWeatherBlock } from './createCurrentWeatherBlock.js';
import { createErrorBlock } from './error.js';
import { createForecastBlock } from './createForecastBlock.js';
import { changeWeatherBackground } from './changeWeatherBackground.js';
import { addCloseErrorEvent } from './addCloseErrorEvent.js';

// eslint-disable-next-line import/prefer-default-export
export function createNavBar() {
  const nav = document.createElement('nav');
  nav.classList.add('navigation');
  const searchContainer = document.createElement('div');
  searchContainer.classList.add('search-container');
  const cityInput = document.createElement('input');
  cityInput.classList.add('city-input');
  cityInput.placeholder = 'City name';
  const searchButton = document.createElement('button');
  searchButton.classList.add('search-btn');
  searchButton.textContent = 'Search';
  const navBarToggler = document.createElement('button');
  navBarToggler.classList.add('nav-toggler');
  const navbarTogglerIcon = document.createElement('span');
  navbarTogglerIcon.classList.add('nav-toggler-icon');
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');
  const logo = document.createElement('img');
  logo.classList.add('logo-img');
  logo.src = '/lab7/icons/logo.svg';
  const visibleOnSmall = document.createElement('div');
  visibleOnSmall.classList.add('visible-on-small');
  navBarToggler.appendChild(navbarTogglerIcon);
  logoContainer.appendChild(logo);
  searchContainer.append(cityInput, searchButton);
  visibleOnSmall.append(logoContainer, navBarToggler);
  nav.append(visibleOnSmall, searchContainer);

  navBarToggler.addEventListener('click', (e) => {
    e.preventDefault();
    searchContainer.classList.toggle('search-container-visible');
  });

  const app = document.getElementById('app');
  searchButton.addEventListener('click', () => {
    if (cityInput.value.trim().length !== 0) {
      app.innerHTML = '';
      getWeatherByCity(cityInput.value.toLowerCase())
        .then((data) => {
          app.appendChild(createCurrentWeatherBlock(data));
          changeWeatherBackground(data.weather[0].icon);
        })
        .catch((err) => {
          app.innerHTML = '';
          app.appendChild(createErrorBlock(err.message));
          addCloseErrorEvent();
        });
      getForecastByCity(cityInput.value.toLowerCase())
        .then((data) => {
          document.querySelector('.weather-block').appendChild(createForecastBlock(data));
        })
        .catch((err) => {
          app.innerHTML = '';
          app.appendChild(createErrorBlock(err.message));
          addCloseErrorEvent();
        });
    }
  });

  return nav;
}
