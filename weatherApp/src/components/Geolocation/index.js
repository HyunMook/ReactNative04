import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import PropTypes from 'prop-types';

class Geolocation extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Insert Custom Geolocation</Text>
        <TextInput
          placeholder={
            this.props.geolocation.latitude +
            ',' +
            this.props.geolocation.longitude
          }
        />
        <Button onPress={() => alert('ok')} title="OK" />
      </View>
    );
  }
}

export default Geolocation;
