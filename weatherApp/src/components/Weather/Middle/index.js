import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

const Middle = ({ temp_min, temp_max, wind_speed }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.block}>
        <Text style={Styles.keyText}>Min</Text>
        <Text style={Styles.valueText}>{temp_min}˚</Text>
      </View>
      <View style={Styles.block}>
        <Text style={Styles.keyText}>Max</Text>
        <Text style={Styles.valueText}>{temp_max}˚</Text>
      </View>
      <View style={Styles.block}>
        <Text style={Styles.keyText}>Wind</Text>
        <Text style={Styles.valueText}>{wind_speed}m/s</Text>
      </View>
    </View>
  );
};

Middle.propTypes = {
  temp_min: PropTypes.number.isRequired,
  temp_max: PropTypes.number.isRequired,
  wind_speed: PropTypes.number.isRequired,
};

export default Middle;
