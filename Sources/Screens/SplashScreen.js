import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Splash from 'react-native-splash-screen';
import { RNProgress, RNStyles, RNText } from '../Common';
import { Colors, FontFamily, hp, wp } from '../Theme';
import { Images } from '../Constants';
import { NavRoutes } from '../Navigation';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    Splash.hide();
  }, []);

  const onProgressFinish = () => {
    navigation.replace(NavRoutes.OnBoarding);
  };

  return (
    <View style={RNStyles.container}>
      <Image
        source={Images.SplashScreen}
        resizeMode={'contain'}
        style={RNStyles.image100}
      />

      <View style={styles.loaderContainer}>
        <RNProgress onFinish={onProgressFinish} />
        <RNText
          align={'right'}
          color={Colors.Primary}
          pRight={wp(8)}
          pTop={wp(2)}
          family={FontFamily.SemiBold}>
          {'Loading...'}
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
