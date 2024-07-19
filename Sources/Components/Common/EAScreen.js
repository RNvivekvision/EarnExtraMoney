import React from 'react';
import { StyleSheet, View } from 'react-native';
import Reanimated, { FadeIn } from 'react-native-reanimated';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNStyles, RNText } from '../../Common';
import { HStack, VStack } from '../Renders';

const EAScreen = ({ title, data, horizontal, onPress }) => {
  return (
    <Reanimated.View entering={FadeIn.delay(200)} style={styles.container}>
      <RNText pBottom={hp(1)} size={FontSize.font18} family={FontFamily.Bold}>
        {title}
      </RNText>
      <View style={RNStyles.flexWrapHorizontal}>
        {horizontal
          ? data.map((v, i) => (
              <HStack key={i} item={v} index={i} onPress={onPress} />
            ))
          : data.map((v, i) => (
              <VStack key={i} item={v} index={i} onPress={onPress} />
            ))}
      </View>
    </Reanimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
    paddingBottom: hp(1),
  },
});

export default EAScreen;
