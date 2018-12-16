// import Weather from '../../components/Weather';
// import * as actions from './weatherActions';
// import * as geoActions from '../geolocation/geoActions';
import Geolocation from '../../components/Geolocation';
import * as actions from './geoActions';
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
    setGeolocation: (lat, long) => dispatch(actions.setGeolocation(lat, long)),
  };
};
const GeoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Geolocation);

export default GeoContainer;
