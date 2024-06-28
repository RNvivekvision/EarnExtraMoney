import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  RNButton,
  RNContainer,
  RNGradient,
  RNHeader,
  RNImage,
  RNStyles,
  RNText,
} from '../../Common';
import { Strings, Svg } from '../../Constants';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { useDummyData, useUserClick } from '../../Hooks';

const AboutUs = ({ navigation }) => {
  const { FollowOn } = useDummyData();
  const { incrementCount } = useUserClick();

  const onTermsPress = () => {
    incrementCount();
    navigation.goBack();
  };

  const onSocialPress = () => {
    incrementCount();
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.Aboutus} back>
        <View style={styles.appIconContainer}>
          <Svg.AppIconSvg width={size.appIcon} height={size.appIcon} />
        </View>

        <RNText
          align={'center'}
          size={FontSize.font18}
          family={FontFamily.Medium}>
          {Strings.EarnMoney}
        </RNText>
        <RNText
          align={'center'}
          size={FontSize.font12}
          pVertical={hp(1)}
          pHorizontal={wp(4)}
          family={FontFamily.Medium}>
          {Strings.EarnMoneyDesc}
        </RNText>

        <RNButton
          title={Strings.termsAndCondition}
          style={{ borderRadius: wp(3) }}
          onPress={onTermsPress}
        />

        <RNText
          align={'center'}
          family={FontFamily.Medium}
          pVertical={hp(1)}
          size={FontSize.font14}>
          {Strings.Followon}
        </RNText>

        <View style={styles.deviderContainer}>
          <RNGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[Colors.White, Colors.White + '10']}
            style={styles.left}
          />
          <View style={RNStyles.devider} />
          <RNGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={[Colors.White, Colors.White + '10']}
            style={[styles.left, styles.right]}
          />
        </View>

        <View style={styles.iconContainer}>
          {FollowOn.map((v, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.6}
              onPress={onSocialPress}
              style={styles.renderContainer}>
              <RNImage source={v.icon} style={styles.icon} />
              <RNText
                pTop={hp(0.5)}
                size={FontSize.font12}
                family={FontFamily.Medium}>
                {v.title}
              </RNText>
            </TouchableOpacity>
          ))}
        </View>
      </RNHeader>
    </RNContainer>
  );
};

const size = {
  appIcon: wp(40),
  logo: wp(10),
};
const styles = StyleSheet.create({
  appIconContainer: {
    ...RNStyles.center,
    paddingVertical: hp(1),
  },
  left: {
    height: 20,
    position: 'absolute',
    left: 0,
    top: -hp(1),
    width: wp(50),
    zIndex: 1,
  },
  right: {
    right: 0,
    left: null,
  },
  iconContainer: {
    ...RNStyles.flexRow,
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  renderContainer: {
    ...RNStyles.center,
    marginHorizontal: wp(4),
  },
  icon: {
    width: size.logo,
    height: size.logo,
  },
});

export default AboutUs;
