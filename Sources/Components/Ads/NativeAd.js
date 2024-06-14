import { StyleSheet } from 'react-native';
import { RNText, RNStyles } from '../../Common';
import { Colors, FontFamily, hp, wp } from '../../Theme';
import Reanimated, { ZoomIn } from 'react-native-reanimated';

const NativeAd = ({ big }) => {
  if (big) {
    return (
      <Reanimated.View
        entering={ZoomIn.delay(200)}
        style={[styles.container, styles.big]}>
        <RNText family={FontFamily.Medium}>{'For Native 1'}</RNText>
      </Reanimated.View>
    );
  }

  return (
    <Reanimated.View entering={ZoomIn.delay(200)} style={styles.container}>
      <RNText family={FontFamily.Medium}>{'For Native 1'}</RNText>
    </Reanimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.center,
    borderWidth: 1,
    borderColor: Colors.Black + '50',
    borderStyle: 'dashed',
    borderRadius: wp(3),
    marginHorizontal: wp(2),
    marginVertical: hp(1),
    height: hp(15),
  },
  big: {
    height: hp(30),
  },
});

export default NativeAd;
