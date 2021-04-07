// eslint-disable-next-line import/prefer-default-export
export function changeWeatherBackground(str) {
  switch (str.slice(0, 2)) {
    case '01':
      document.querySelector('.weather-block').style.backgroundImage = "url('/lab7/img/sun.jpg')";
      break;
    case '02':
      document.querySelector('.weather-block').style.backgroundImage = "url('/lab7/img/few-clouds-sky.jpg')";
      break;
    case '03':
      document.querySelector('.weather-block').style.backgroundImage = "url('/lab7/img/cloud.jpg')";
      break;
    case '04':
      document.querySelector('.weather-block').style.backgroundImage = "url('/lab7/img/more_cloud.jpg')";
      break;
    case '09':
      document.querySelector('.weather-block').style.backgroundImage = "url('/lab7/img/more_rain.jpg')";
      break;
    case '10':
      document.querySelector('.weather-block').style.backgroundImage = "url('/lab7/img/rain.jpg')";
      break;
    case '11':
      document.querySelector('.weather-block').style.backgroundImage = "url('/lab7/img/thunder.jpeg')";
      break;
    case '13':
      document.querySelector('.weather-block').style.backgroundImage = "url('/lab7/img/snow.jpg')";
      break;
    case '50':
      document.querySelector('.weather-block').style.backgroundImage = "url('/lab7/img/mist.jpg')";
      break;
    default:
      document.querySelector('.weather-block').style.backgroundImage = "url('/lab7/img/sun.jpeg')";
  }
}
