import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

const Bottom = ({ locationName, onPressFunc }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title} onPress={onPressFunc}>
        {locationName}
      </Text>
    </View>
  );
};

Bottom.propTypes = {
  locationName: PropTypes.string.isRequired,
};

export default Bottom;
