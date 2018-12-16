import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import WeatherContainer from './src/redux/weather/weatherContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <WeatherContainer />
      </Provider>
    );
  }
}
