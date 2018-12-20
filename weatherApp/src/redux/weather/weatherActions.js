import * as geoActions from '../geolocation/geoActions';
import OWM_API_KEY from '../../api_key';
import weatherCases from './weatherCases';

/**
 * 액션 타입
 */
export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';
export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';
export const ERR_WEATHER_DATA = 'ERR_WEATHER_DATA';

/**
 * 액션 생성자
 */
export function fetchWeatherData() {
  return async (dispatch, getState) => {
    dispatch({ type: GET_WEATHER_DATA });
    const { latitude, longitude } = getState().geolocation;
    console.log('latitude, longitude:', { latitude, longitude });
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&APPID=${OWM_API_KEY}`,
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch(transWeatherData(json));
      })
      .catch(function(err) {
        dispatch({ type: ERR_WEATHER_DATA, payload: err });
      });
  };
}

export function transWeatherData(api_data) {
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
        dispatch(setWeatherData(obj));
        break;
      }
    }
  };
}

export function setWeatherData(trans_data) {
  return { type: SET_WEATHER_DATA, payload: trans_data };
}

/**
 * 현재 Device 위치 기반 날씨 데이터 불러오기;
 * TODO:  여기서 geolocation Actions를 참조하지 말고,
 *        컴포넌트에서 geolocation과 weather를 순차적으로 불러오도록 하자.
 *        (try/catch, async/await)
 */
export function loadCurrentLocationWeather() {
  return async (dispatch) => {
    try {
      await dispatch(geoActions.autoGeolocation());
      await dispatch(fetchWeatherData());
    } catch (err) {
      dispatch({ type: ERR_WEATHER_DATA, payload: err });
    }
  };
}
