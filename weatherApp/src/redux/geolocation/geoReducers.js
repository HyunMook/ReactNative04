import { SET_GEOLOCATION, setGeolocation } from './geoActions';

const initialState = {
  latitude: 0,
  longitude: 0,
};

export default function geolocation(state = initialState, action) {
  switch (action.type) {
    case SET_GEOLOCATION:
      // return { latitude: 37.497758, longitude: 127.02745 };
      const { latitude, longitude } = action.payload;
      return { latitude, longitude };
    default:
      return state;
  }
}
