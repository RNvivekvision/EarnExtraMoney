import { StyleSheet, View } from 'react-native';
import { RNText, RNStyles } from '../../Common';
import { Colors, FontFamily, hp, wp } from '../../Theme';
import Reanimated, { FadeInDown } from 'react-native-reanimated';

const NativeAd = ({ big, two }) => {
  if (two) {
    return (
      <Reanimated.View
        entering={FadeInDown.delay(200)}
        style={styles.twoContainer}>
        <View style={styles.box}>
          <RNText family={FontFamily.Medium}>{'Native Ad'}</RNText>
        </View>
        <View style={styles.box}>
          <RNText family={FontFamily.Medium}>{'Native Ad'}</RNText>
        </View>
      </Reanimated.View>
    );
  }

  if (big) {
    return (
      <Reanimated.View
        entering={FadeInDown.delay(200)}
        style={[styles.container, styles.big]}>
        <RNText family={FontFamily.Medium}>{'Native Ad'}</RNText>
      </Reanimated.View>
    );
  }

  return (
    <Reanimated.View entering={FadeInDown.delay(200)} style={styles.container}>
      <RNText family={FontFamily.Medium}>{'Native Ad'}</RNText>
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
  twoContainer: {
    height: hp(20),
    flexDirection: 'row',
    marginHorizontal: wp(3),
    marginVertical: hp(1),
  },
  box: {
    ...RNStyles.center,
    flex: 1,
    marginHorizontal: wp(1),
    borderWidth: 1,
    borderColor: Colors.Black + '50',
    borderStyle: 'dashed',
    borderRadius: wp(3),
  },
});

export default NativeAd;
