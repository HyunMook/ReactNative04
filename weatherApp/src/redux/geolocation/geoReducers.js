import {
  SET_GEOLOCATION,
  GET_GEOLOCATION,
  ERR_GEOLOCATION,
} from './geoActions';

const initialState = {
  loadState: false,
  err: false,
  latitude: 0,
  longitude: 0,
};

export default function geolocation(state = initialState, action) {
  switch (action.type) {
    case GET_GEOLOCATION:
      return { ...state, loadState: false };
    case SET_GEOLOCATION:
      const { latitude, longitude } = action.payload;
      // SAMPLE: { latitude: 37.497758, longitude: 127.02745 };
      // return Object.assign({}, state, { latitude, longitude, loadState: false });
      return { ...state, latitude, longitude, loadState: true, err: false };
    case ERR_GEOLOCATION:
      return { ...state, err: action.payload };
    default:
      return state;
  }
}
