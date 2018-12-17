import * as geoActions from '../geolocation/geoActions';
import OWM_API_KEY from '../../api_key';
import weatherCases from './weatherCases';

/**
 * 액션 타입
 */
export const LOAD_WEATHER_DATA = 'LOAD_WEATHER_DATA';

/**
 * 액션 생성자
 */
export function fetchWeatherData(lat, long) {
  return (dispatch) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${long}&APPID=${OWM_API_KEY}`,
    )
      .then((response) => response.json())
      .then((json) => {
        return dispatch(transWeather(json));
      });
  };
}

export function transWeather(api_data) {
  return (dispatch) => {
    const wid = api_data.weather[0].id;
    for (var i in weatherCases) {
      if (weatherCases[i].minCod <= wid && weatherCases[i].maxCod >= wid) {
        let obj = {
          id: api_data.id,
          icon: weatherCases[i].icon,
          name: api_data.weather[0].main,
          location: api_data.name,
          temp_min: api_data.main.temp_min,
          temp: api_data.main.temp,
          temp_max: api_data.main.temp_max,
          wind_speed: api_data.wind.speed,
          colors: weatherCases[i].colors,
        };
        return dispatch(loadWeather(obj));
      }
    }
  };
}

export function loadWeather(data) {
  return { type: LOAD_WEATHER_DATA, payload: data };
}

export function loadCurrentLocationWeather() {
  return (dispatch) => {
    dispatch(geoActions.autoGeolocation());
    return dispatch(loadWeather());
  };
}
