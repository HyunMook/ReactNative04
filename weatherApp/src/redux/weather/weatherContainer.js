import Weather from '../../components/Weather';
import * as weatherActions from './weatherActions';
import * as geoActions from '../geolocation/geoActions';
import { connect } from 'react-redux';

// props 값으로 넣어 줄 상태를 정의
const mapStateToProps = (state) => {
  // console.log('mapStateToProps-state:', state);
  return {
    weather: state.weather,
    geolocation: state.geolocation,
  };
};
// props 값으로 넣어 줄 액션 함수들을 정의
const mapDispatchToProps = (dispatch) => {
  return {
    loadGeolocation: () => dispatch(geoActions.autoGeolocation()),
    loadWeather: () => dispatch(weatherActions.fetchWeatherData()),
  };
};
const WeatherContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);

export default WeatherContainer;
