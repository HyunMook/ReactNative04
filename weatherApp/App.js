import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import WeatherContainer from './src/reducers/weather/weatherContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WeatherContainer />
      </Provider>
    );
  }
}
