import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';
import Styles from './styles';

class Weather extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    console.log('componentWillMount-props', this.props);
    if (
      this.props.geolocation.latitude == 0 &&
      this.props.geolocation.longitude == 0
    ) {
      this.props.autoGeolocation();
    }
  }
  componentWillUpdate() {
    // console.log('componentWillUpdate-props', this.props);
  }
  componentDidUpdate() {
    // console.log('componentDidUpdate-props', this.props);
    if (this.props.weather.id == '') {
      this.props.loadWeather(
        this.props.geolocation.latitude,
        this.props.geolocation.longitude,
      );
    }
  }

  _pushScreenOnStack = () => {
    Navigation.push(this.props.componentId, {
      component: this.props.geolocationNaviComponent,
    });
  };

  render() {
    console.log('WWWWWWWW render():', this.props);
    const nowLoading = this.props.weather.id == '' ? true : false;

    return (
      <View style={{ flex: 1 }}>
        {nowLoading ? (
          <Loading />
        ) : (
          <View
            style={[
              Styles.container,
              { backgroundColor: this.props.weather.colors[1] },
            ]}
          >
            <Top
              iconName={this.props.weather.icon}
              weatherName={this.props.weather.name}
              currentTemperature={this.props.weather.temp}
            />
            <Middle
              temp_min={this.props.weather.temp_min}
              temp_max={this.props.weather.temp_max}
              wind_speed={this.props.weather.wind_speed}
            />
            <Bottom
              locationName={this.props.weather.location}
              onPressFunc={this._pushScreenOnStack}
            />
          </View>
        )}
      </View>
    );
  }
}

Weather.propTypes = {
  weather: PropTypes.shape({
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    temp_max: PropTypes.number.isRequired,
    wind_speed: PropTypes.number.isRequired,
  }),
  geolocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }),
  loadWeather: PropTypes.func.isRequired,
  autoGeolocation: PropTypes.func.isRequired,
};

// Weather.defaultProps = {
//   lat: 0,
//   long: 0,
//   openWeather: () => console.log('openWeather'),
//   loadWeather: () => console.log('loadWeather'),
//   transWeather: () => console.log('transWeather'),
// };

export default Weather;
