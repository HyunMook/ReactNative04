import Geolocation from '../../components/Geolocation';
import * as actions from './geoActions';
import * as weatherActions from '../weather/weatherActions';
import { connect } from 'react-redux';

// props 값으로 넣어 줄 상태를 정의
const mapStateToProps = (state) => {
  // console.log('mapStateToProps-state:', state);

  return {
    ...state,
    geolocation: {
      latitude: state.geolocation.latitude,
      longitude: state.geolocation.longitude,
    },
  };
};
// props 값으로 넣어 줄 액션 함수들을 정의
const mapDispatchToProps = (dispatch) => {
  return {
    changeGeolocation: (inputText) =>
      dispatch(actions.changeGeolocation(inputText)),
    loadWeather: () => dispatch(weatherActions.fetchWeatherData()),
  };
};
const GeoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Geolocation);

export default GeoContainer;
