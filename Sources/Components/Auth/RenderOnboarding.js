import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNText, RNStyles, RNGradient } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import Reanimated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { useInset } from '../../Hooks';

const width = wp(100);
const RenderOnboarding = ({ item, index, scroll, isLast }) => {
  const styles = useStyles({ isLast });
  const size = wp(isLast ? 80 : 120);

  const animatedStyles = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];
    const scale = interpolate(
      scroll.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(
      scroll.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP,
    );
    const translateX = interpolate(
      scroll.value,
      inputRange,
      [-width, 0, width],
      Extrapolation.CLAMP,
    );

    return {
      opacity: opacity,
      transform: [{ scale: scale }, { translateX }],
    };
  }, []);

  return (
    <Reanimated.View style={[styles.container]}>
      <RNText style={styles.title}>{item.title}</RNText>
      <View style={styles.imageContainer}>
        <item.icon width={size} height={size} style={{ alignSelf: 'center' }} />
        <View style={styles.gradientContainer}>
          {item.text1 && (
            <RNGradient
              colors={[Colors.White, Colors.White + '10']}
              style={{ height: hp(4) }}
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
  const inset = useInset();
  return StyleSheet.create({
    container: {
      paddingTop: inset.top + hp(3),
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
      height: wp(100),
      overflow: 'hidden',
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
      width: '90%',
    },
    text2: {
      textAlign: 'center',
      width: '75%',
      fontSize: FontSize.font12,
    },
  });
};

export default RenderOnboarding;
