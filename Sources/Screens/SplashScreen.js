import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { requestTrackingPermission } from 'react-native-tracking-transparency';
import { StatusBar, StyleSheet, View } from 'react-native';
import { useGoogleAds, useLocalStorage } from '../Hooks';
import { RNProgress, RNStyles, RNText } from '../Common';
import { Colors, FontFamily, hp, wp } from '../Theme';
import { Strings, Svg } from '../Constants';
import { NavRoutes } from '../Navigation';
import { useSharedValue, withTiming } from 'react-native-reanimated';

const SplashScreen = ({ navigation }) => {
  const progress = useSharedValue(0);
  const duration = 2 * 1000;
  const { adData } = useSelector(({ UserReducer }) => UserReducer);
  const { localdata } = useLocalStorage();
  const { showAppOpenAd } = useGoogleAds();

  useEffect(() => {
    onProgressStart();
  }, [adData]);

  const onProgressStart = async () => {
    await requestPermission();
    showAppOpenAd();
    progress.value = withTiming(100, {
      duration: duration,
    });
  };

  const requestPermission = async () => {
    try {
      const status = await requestTrackingPermission();
    } catch (e) {
      console.log('Error requestPermission -> ', e);
    }
  };

  useEffect(() => {
    const id = setInterval(onProgressFinish, duration);
    return () => clearInterval(id);
  }, [localdata?.hasUser, adData]);

  const onProgressFinish = async () => {
    localdata?.lang && Strings.setLanguage(localdata?.lang);
    const screenName = localdata?.hasUser
      ? NavRoutes.Welcome
      : NavRoutes.OnBoarding;
    navigation.replace(screenName);
  };

  return (
    <View style={RNStyles.container}>
      <StatusBar barStyle={'dark-content'} translucent={true} />
      <Svg.SplashScreenSvg width={wp(100)} height={hp(100)} />

      <View style={styles.loaderContainer}>
        <RNProgress progress={progress} />
        <RNText
          align={'right'}
          color={Colors.Primary}
          pRight={wp(8)}
          pTop={wp(2)}
          family={FontFamily.SemiBold}>
          {Strings.Loading}
        </RNText>
      </View>
    </View>
  );
};

const thumbSize = wp(3.5);
const styles = StyleSheet.create({
  thumb: {
    width: thumbSize,
    height: thumbSize,
    backgroundColor: Colors.Primary,
    borderRadius: 100,
    marginLeft: wp(1),
  },
  loaderContainer: {
    position: 'absolute',
    bottom: hp(11),
    left: 0,
    right: 0,
  },
});

export default SplashScreen;
