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
    // console.log('componentWillMount-props', this.props);
  }
  componentDidMount() {
    console.log('componentDidMount-props', this.props);
    // this.props.loadCurrentLocationWeather();
    this._loadDefault();
  }
  componentWillUpdate() {
    // console.log('componentWillUpdate-props', this.props);
  }
  componentDidUpdate() {
    // console.log('componentDidUpdate-props', this.props);
  }
  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps', nextProps);
    if (!!nextProps.geolocation.err) {
      console.log('geolocation ERROR:', nextProps.geolocation.err);
    }
    if (!!nextProps.weather.err) {
      console.log('weather ERROR:', nextProps.weather.err);
    }
  }

  _loadDefault = async () => {
    try {
      await this.props.loadGeolocation();
      await this.props.loadWeather();
    } catch (err) {
      alert(err);
    }
  };

  _pushScreenOnStack = () => {
    Navigation.push(this.props.componentId, {
      component: this.props.geolocationNaviComponent,
    });
  };

  render() {
    // console.log('WWWWWWWWWW render(state):', this.state);
    // console.log('WWWWWWWWWW render(props):', this.props);
    return (
      <View style={{ flex: 1 }}>
        {this.props.geolocation.loadState && this.props.weather.loadState ? (
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
        ) : (
          <Loading />
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
  loadCurrentLocationWeather: PropTypes.func.isRequired,
};

export default Weather;
