import { combineReducers } from 'redux';
import geolocation from './geolocation/geoReducers';
import weather from './weather/weatherReducers';

const reducers = combineReducers({ geolocation, weather });

export default reducers;
