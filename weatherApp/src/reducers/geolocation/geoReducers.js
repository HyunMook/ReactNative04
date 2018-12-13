import { SET_GEOLOCATION, setGeolocation } from './geoActions';

const initialState = {
  latitude: 0,
  longitude: 0,
};

export default function geolocation(state = initialState, action) {
  switch (action.type) {
    case SET_GEOLOCATION:
      const { latitude, longitude } = action.payload;
      return { latitude, longitude };
    default:
      return state;
  }
}
