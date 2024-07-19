import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, hp, wp } from '../../Theme';
import Reanimated, { FadeInDown } from 'react-native-reanimated';

const EAContainer = ({ children }) => {
  return (
    <Reanimated.View entering={FadeInDown.delay(200)} style={styles.container}>
      {children}
    </Reanimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
    marginVertical: hp(1),
    backgroundColor: Colors.Primary + '15',
    borderRadius: wp(4),
    paddingVertical: hp(3),
    paddingHorizontal: wp(5),
  },
});

export default EAContainer;
