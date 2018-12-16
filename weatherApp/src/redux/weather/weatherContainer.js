import Weather from '../../components/Weather';
import * as actions from './weatherActions';
import * as geoActions from '../geolocation/geoActions';
import { connect } from 'react-redux';

// props 값으로 넣어 줄 상태를 정의
const mapStateToProps = (state) => {
  // console.log('mapStateToProps-state:', state);
  const {
    id,
    icon,
    name,
    location,
    temp_min,
    temp,
    temp_max,
    wind_speed,
  } = state.weather;
  return {
    weather: {
      id,
      icon,
      name,
      location,
      temp_min,
      temp,
      temp_max,
      wind_speed,
    },
    geolocation: {
      latitude: state.geolocation.latitude,
      longitude: state.geolocation.longitude,
    },
  };
};
// props 값으로 넣어 줄 액션 함수들을 정의
const mapDispatchToProps = (dispatch) => {
  return {
    loadWeather: (lat, long) => dispatch(actions.fetchWeatherData(lat, long)),
    autoGeolocation: () => dispatch(geoActions.autoGeolocation()),
  };
};
const WeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);

export default WeatherContainer;
