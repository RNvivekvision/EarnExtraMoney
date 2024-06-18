import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNContainer, RNHeader, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Strings, Svg } from '../../Constants';
import { NavRoutes } from '../../Navigation';
import { NativeAd } from '../../Components';

const Welcome = ({ navigation }) => {
  return (
    <RNContainer>
      <RNHeader title={Strings.WelcometoEasyEarnings}>
        <RNText style={styles.title1}>
          {Strings.WelcometoEasyEarnings_title0}
        </RNText>
        <RNText style={styles.title2}>
          {Strings.WelcometoEasyEarnings_title1}
        </RNText>

        <NativeAd big />

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate(NavRoutes.SmartWays)}
          style={styles.StartContainer}>
          <Svg.Start width={size.start * 2} height={size.start} />
          <View>
            <RNText family={FontFamily.Medium} size={FontSize.font20}>
              {Strings.LetsStart}
            </RNText>
            <RNText
              color={Colors.welcomeDescription}
              pTop={hp(0.5)}
              family={FontFamily.Medium}
              size={FontSize.font10}>
              {Strings.LetsStartDesc}
            </RNText>
          </View>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.6} style={styles.rateUsContainer}>
            <Svg.RateUs width={size.rateUs} height={size.rateUs} />
            <RNText style={styles.buttonTitle} pTop={hp(1)}>
              {Strings.RateUs}
            </RNText>
            <RNText style={styles.buttonText}>{Strings.Helpusimprove}</RNText>
          </TouchableOpacity>

          <View style={styles.shareButtonContainer}>
            <TouchableOpacity activeOpacity={0.6} style={styles.shareContainer}>
              <Svg.Share width={size.share} height={size.share} />
              <View style={{ paddingLeft: wp(4) }}>
                <RNText style={styles.buttonTitle}>{Strings.Share}</RNText>
                <RNText style={styles.buttonText}>{Strings.ShareDesc}</RNText>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.6} style={styles.shareContainer}>
              <Svg.Privacy width={size.share} height={size.share} />
              <View style={{ paddingLeft: wp(4) }}>
                <RNText style={styles.buttonTitle}>{Strings.Privacy}</RNText>
                <RNText style={styles.buttonText}>{Strings.PrivacyDesc}</RNText>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </RNHeader>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  title1: {
    fontFamily: FontFamily.Medium,
    fontSize: FontSize.font18,
    textAlign: 'center',
    paddingVertical: hp(2),
  },
  title2: {
    textAlign: 'center',
    paddingHorizontal: wp(6),
    fontFamily: FontFamily.Medium,
    fontSize: FontSize.font14,
    letterSpacing: 0.5,
    marginBottom: hp(2),
  },
  StartContainer: {
    ...RNStyles.shadow,
    ...RNStyles.flexRow,
    borderWidth: 1,
    borderColor: Colors.Placeholder,
    marginHorizontal: wp(4),
    marginVertical: hp(2),
    paddingVertical: hp(4),
    backgroundColor: Colors.White,
    borderRadius: wp(3),
  },
  buttonContainer: {
    ...RNStyles.flexRow,
    marginHorizontal: wp(4),
    marginVertical: hp(2),
    height: wp(40),
    // backgroundColor: '#f00',
  },
  rateUsContainer: {
    ...RNStyles.shadow,
    backgroundColor: Colors.White,
    width: '44%',
    height: '95%',
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  shareButtonContainer: {
    flex: 1,
    // height: '100%',
    justifyContent: 'space-between',
    marginLeft: wp(4),
  },
  shareContainer: {
    ...RNStyles.shadow,
    ...RNStyles.flexRow,
    backgroundColor: Colors.White,
    height: '42%',
    marginVertical: hp(1),
    paddingHorizontal: wp(4),
    borderRadius: wp(3),
  },
  buttonTitle: {
    fontSize: FontSize.font18,
    latterSpacing: 0.5,
    fontFamily: FontFamily.Medium,
  },
  buttonText: {
    fontSize: FontSize.font8,
    fontFamily: FontFamily.Medium,
    color: Colors.welcomeDescription,
  },
});

const size = {
  start: wp(15),
  rateUs: wp(20),
  share: wp(8),
};

export default Welcome;
