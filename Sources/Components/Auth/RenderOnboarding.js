import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNText, RNStyles, RNImage, RNGradient } from '../../Common';
import { Colors, FontFamily, FontSize, height, hp, wp } from '../../Theme';
import Reanimated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const width = wp(100);
const RenderOnboarding = ({ item, index, scroll, isLast }) => {
  const styles = useStyles({ isLast });

  return (
    <Reanimated.View style={[styles.container]}>
      <RNText style={styles.title}>{item.title}</RNText>
      <View style={styles.imageContainer}>
        <RNImage
          source={item.image}
          style={isLast ? styles.lastImage : styles.image}
        />
        <View style={styles.gradientContainer}>
          {item.text1 && (
            <RNGradient
              colors={[Colors.White, Colors.White + '50']}
              style={{ height: hp(5) }}
            />
          )}
          <View style={styles.textContainer}>
            {item.text1 && <RNText style={styles.text1}>{item.text1}</RNText>}
            <RNText style={styles.text2}>{item.text2}</RNText>
          </View>
        </View>
      </View>
    </Reanimated.View>
  );
};

const useStyles = ({ isLast }) => {
  return StyleSheet.create({
    container: {
      paddingTop: hp(10),
      width: wp(100),
    },
    title: {
      fontSize: FontSize.font18,
      fontFamily: FontFamily.SemiBold,
      textAlign: 'center',
      paddingBottom: hp(2),
    },
    imageContainer: {
      width: '100%',
      height: hp(50),
      overflow: 'hidden',
    },
    image: {
      ...RNStyles.image100,
      height: '130%',
      alignSelf: 'center',
    },
    lastImage: {
      width: wp(70),
      height: wp(70),
      alignSelf: 'center',
    },
    gradientContainer: {
      position: isLast ? 'relative' : 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1,
    },
    textContainer: {
      ...RNStyles.center,
      backgroundColor: Colors.White,
      paddingVertical: hp(2),
      justifyContent: 'flex-end',
    },
    text1: {
      textAlign: 'center',
      paddingVertical: hp(1),
    },
    text2: {
      textAlign: 'center',
      fontSize: FontSize.font12,
      width: '75%',
    },
  });
};

export default RenderOnboarding;
