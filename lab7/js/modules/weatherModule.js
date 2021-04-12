async function getDataFromAPI(params, option = 'weather') {
  const defaultUrlSettings = {
    lang: 'ru',
    units: 'metric',
    appid: 'aed6bd52ec5ebf5b1f40aa5ea739aad6',
  };
  const urlParams = Object.assign(params, defaultUrlSettings);
  const url = new URL(`https://api.openweathermap.org/data/2.5/${option}`);
  Object.entries(urlParams).forEach(([key, val]) => {
    url.searchParams.append(key, val);
  });
  return fetch(url)
    .then((data) => data.json())
    .then((data) => {
      if (data.cod === '404') {
        throw Error(data.message);
      } else {
        return data;
      }
    });
}

async function getWeatherByCoords(latitude, longitude) {
  return getDataFromAPI({
    lat: latitude,
    lon: longitude,
  });
}

async function getWeatherByCity(city) {
  return getDataFromAPI({
    q: city,
  });
}

async function getForecastByCoords(latitude, longitude) {
  return getDataFromAPI({
    lat: latitude,
    lon: longitude,
  }, 'forecast');
}

async function getForecastByCity(city) {
  return getDataFromAPI({
    q: city,
  }, 'forecast');
}

export {
  getWeatherByCity,
  getWeatherByCoords,
  getForecastByCity,
  getForecastByCoords,
};
