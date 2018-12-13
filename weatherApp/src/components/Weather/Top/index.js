import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import Styles from './styles';

const Top = ({ iconName, currentTemperature }) => {
  return (
    <View style={Styles.container}>
      <Icon name={iconName} size={90} color="#fff" />
      <Text style={Styles.currentTemperature}>
        {'  '}
        {currentTemperature}˚
      </Text>
    </View>
  );
};

Top.propTypes = {
  iconName: PropTypes.string.isRequired,
  currentTemperature: PropTypes.number.isRequired,
};

export default Top;
