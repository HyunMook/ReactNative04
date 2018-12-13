import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Styles from './styles';

const Bottom = ({ locationName }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{locationName}</Text>
    </View>
  );
};

Bottom.propTypes = {
  locationName: PropTypes.string.isRequired,
};

export default Bottom;
