import { StyleSheet, View } from 'react-native';
import {
  RNButton,
  RNContainer,
  RNHeader,
  RNStyles,
  RNText,
} from '../../Common';
import { Strings, Svg } from '../../Constants';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { useUserClick } from '../../Hooks';
import { DummyData, Functions } from '../../Utils';

const AboutUs = ({ navigation }) => {
  const { incrementCount } = useUserClick();

  const onTermsPress = async () => {
    await incrementCount();
    await Functions.OpenUrl(DummyData.termsAndCondition);
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
