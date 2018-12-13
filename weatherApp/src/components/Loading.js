import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import CommonStyles from './styles';

const Loading = ({}) => {
  return (
    <View style={[CommonStyles.container, CommonStyles.bg_yellow]}>
      <ActivityIndicator size="large" color="#fff" />
      <Text
        style={[
          CommonStyles.h4,
          CommonStyles.color_white,
          CommonStyles.f_alignc,
        ]}
      >
        Now loading...
      </Text>
    </View>
  );
};

Loading.propTypes = {};

export default Loading;
