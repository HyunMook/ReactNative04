import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';

class Geolocation extends Component {
  constructor() {
    super();
    this.state = { text: '' };
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
  }
  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps', nextProps);
    /**
     * TODO:  Error State에 대한 처리는 어떻게 하지?
     */
    // console.log('ggggggg geolocation ERROR:', nextProps.geolocation.err);
    // console.log('ggggggg weather ERROR:', nextProps.weather.err);
  }
  _typeGeolocation = (text) => {
    // console.log('inputText', text);
    this.setState({ text });
  };
  _applyGeolocation = async () => {
    try {
      await this.props.changeGeolocation(this.state.text);
      this.props.loadWeather(); // 로딩화면을 보여주기 위해 날씨정보 fetch에서는 await을 붙이지 않는다.
      this._popScreenOnStack();
    } catch (err) {
      alert(err);
    }
  };
  _popScreenOnStack = () => {
    Navigation.pop(this.props.componentId);
  };
  render() {
    // console.log('GGGGGGGGGG render(state):', this.state);
    // console.log('GGGGGGGGGG render(props):', this.props);
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
        <Button onPress={this._applyGeolocation} title="OK" />
      </View>
    );
  }
}

Geolocation.propTypes = {
  geolocation: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }),
  changeGeolocation: PropTypes.func.isRequired,
  loadWeather: PropTypes.func.isRequired,
};

export default Geolocation;
