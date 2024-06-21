import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { Colors, wp } from '../Theme';

const RNProgress = ({ onFinish, dep, second = 3 }) => {
  const progress = useSharedValue(0);
  const duration = second * 1000;

  useEffect(() => {
    progress.value = withTiming(100, {
      duration: duration,
    });

    setTimeout(() => {
      finish();
    }, duration);
  }, dep);

  const finish = () => {
    onFinish?.();
  };

  const animatedStyle = useAnimatedStyle(
    () => ({
      width: `${progress.value}%`,
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <Animated.View style={[styles.bar, animatedStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(8),
    borderWidth: 1,
    padding: wp(1.5),
    borderRadius: 100,
    borderColor: Colors.Primary,
  },
  barContainer: {
    height: wp(2),
    width: '100%',
    borderRadius: 100,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: Colors.Primary,
    borderRadius: 100,
  },
});

export default RNProgress;
