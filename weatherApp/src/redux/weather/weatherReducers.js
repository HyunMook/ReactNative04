import { LOAD_WEATHER_DATA } from './weatherActions';

const initialState = {
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
    case LOAD_WEATHER_DATA:
      const {
        id,
        icon,
        name,
        location,
        temp_min,
        temp,
        temp_max,
        wind_speed,
        colors,
      } = action.payload;
      return {
        id,
        icon,
        name,
        location,
        temp_min,
        temp,
        temp_max,
        wind_speed,
        colors,
      };
    default:
      return state;
  }
}
