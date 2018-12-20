import {
  SET_WEATHER_DATA,
  GET_WEATHER_DATA,
  ERR_WEATHER_DATA,
} from './weatherActions';

const initialState = {
  loadState: false,
  err: false,
  id: 0,
  icon: '',
  name: '',
  location: '',
  temp: 0,
  temp_min: 0,
  temp_max: 0,
  wind_speed: 0,
  colors: ['', ''],
};

export default function weather(state = initialState, action) {
  // console.log('payload', action.payload);
  switch (action.type) {
    case GET_WEATHER_DATA:
      return { ...state, loadState: false };
    case SET_WEATHER_DATA:
      return {
        ...state,
        ...action.payload,
        loadState: true,
        err: false,
      };
    case ERR_WEATHER_DATA:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
}
