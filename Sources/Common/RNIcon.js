import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, wp } from '../Theme';
import RNStyles from './RNStyles';

const RNIcon = ({ Svg, svgProps, onPress, containerStyle }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Svg {...svgProps} />
    </TouchableOpacity>
  );
};

const size = wp(8);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.center,
    width: size,
    height: size,
    backgroundColor: Colors.Primary,
  },
});

export default RNIcon;
