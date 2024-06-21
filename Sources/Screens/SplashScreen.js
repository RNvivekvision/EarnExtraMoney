import { useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Splash from 'react-native-splash-screen';
import { RNProgress, RNStyles, RNText } from '../Common';
import { Colors, FontFamily, hp, wp } from '../Theme';
import { Strings, Svg } from '../Constants';
import { NavRoutes } from '../Navigation';
import { useLocalStorage } from '../Hooks';

const SplashScreen = ({ navigation }) => {
  const { localdata } = useLocalStorage();

  useEffect(() => {
    Splash.hide();
  }, []);

  const onProgressFinish = () => {
    const screenName = localdata?.hasUser
      ? NavRoutes.Welcome
      : NavRoutes.OnBoarding;

    navigation.replace(screenName);
  };

  return (
    <View style={RNStyles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Svg.SplashScreenSvg width={wp(100)} height={hp(100)} />

      <View style={styles.loaderContainer}>
        <RNProgress onFinish={onProgressFinish} dep={localdata?.hasUser} />
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
    bottom: hp(12),
    left: 0,
    right: 0,
  },
});

export default SplashScreen;
