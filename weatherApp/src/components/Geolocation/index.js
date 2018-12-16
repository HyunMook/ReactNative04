import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';

class Geolocation extends Component {
  constructor() {
    super();
    this.state = { text: '', send: false };
  }
  componentWillMount() {
    // console.log('componentWillMount', this.props);
  }
  componentDidMount() {
    // console.log('componentDidMount', this.props);
  }
  componentWillUnmount() {
    // console.log('componentWillUnmount', this.props);
  }
  componentWillUpdate() {
    // console.log('componentWillUpdate', this.props);
  }
  componentDidUpdate() {
    // console.log('componentDidUpdate', this.props);
    if (this.state.send) {
      this.props.loadWeather(
        this.props.geolocation.latitude,
        this.props.geolocation.longitude,
      );
      this.setState({ send: false });
    }
  }
  componentWillReceiveProps() {
    // console.log('componentWillReceiveProps', this.props);
  }
  _typeGeolocation = (text) => {
    this.setState({ text });
  };
  _convertGeolocation = () => {
    const geoData = this.state.text.replace(/\s/gi, '').split(',');
    if (geoData.length < 2) {
      alert('Please type in the correct format.');
    } else {
      const lat = parseFloat(geoData[0]);
      const long = parseFloat(geoData[1]);
      if (lat > -90 && lat < 90 && long > -180 && long < 180) {
        this.props.setGeolocation(lat, long);
        this.setState({ send: true });
        this._popScreenOnStack();
      } else {
        alert('Wrong Data Input.');
      }
    }
  };
  _popScreenOnStack = () => {
    Navigation.pop(this.props.componentId);
  };
  render() {
    console.log('GGGGGGGGGG render(state):', this.state);
    console.log('GGGGGGGGGG render(props):', this.props);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Insert Custom Geolocation</Text>
        <TextInput
          placeholder={
            this.props.geolocation.latitude +
            ',' +
            this.props.geolocation.longitude
          }
          onChangeText={this._typeGeolocation}
        />
        <Button onPress={this._convertGeolocation} title="OK" />
      </View>
    );
  }
}

export default Geolocation;
