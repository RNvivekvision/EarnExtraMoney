import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Reanimated, { FadeInDown } from 'react-native-reanimated';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import { Images, Strings } from '../../Constants';
import { useSelector } from 'react-redux';
import { Functions } from '../../Utils';

const TwoAds = () => {
  const { adData } = useSelector(({ UserReducer }) => UserReducer);
  const url = adData?.appExtraData?.url;

  const onPlayGamesPress = async () => {
    await Functions.OpenUrl(url);
  };

  const onPlayQuizPress = async () => {
    await Functions.OpenUrl(url);
  };

  return (
    <Reanimated.View entering={FadeInDown.delay(500)} style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPlayGamesPress}
        style={styles.content}>
        <View style={styles.adsContainer}>
          <RNText style={styles.adText}>{Strings.AD}</RNText>
        </View>
        <RNImage source={Images.playGames} style={styles.icon} />
        <RNText style={styles.title}>{Strings.playGames}</RNText>
        <RNText style={styles.text}>{Strings.playGamesDesc}</RNText>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPlayQuizPress}
        style={styles.content}>
        <View style={styles.adsContainer}>
          <RNText style={styles.adText}>{Strings.AD}</RNText>
        </View>
        <RNImage source={Images.playQuiz} style={styles.icon} />
        <RNText style={styles.title}>{Strings.playQuiz}</RNText>
        <RNText style={styles.text}>{Strings.playQuizDesc}</RNText>
      </TouchableOpacity>
    </Reanimated.View>
  );
};

const size = {
  box: wp(40),
  icon: wp(20),
};
const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRowBetween,
    paddingHorizontal: wp(3),
    marginVertical: hp(1),
  },
  content: {
    ...RNStyles.flexCenter,
    width: size.box,
    height: size.box,
    borderRadius: wp(3),
    marginHorizontal: wp(2),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.Placeholder,
  },
  icon: {
    width: size.icon,
    height: size.icon,
  },
  title: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.SemiBold,
    paddingVertical: hp(0.5),
  },
  text: {
    fontSize: FontSize.font10,
    color: Colors.welcome,
    textAlign: 'center',
    paddingHorizontal: wp(4),
  },
  adsContainer: {
    backgroundColor: Colors.ads,
    paddingHorizontal: wp(5),
    paddingVertical: hp(0.5),
    position: 'absolute',
    top: 0,
    left: -wp(4.5),
    transform: [{ rotate: '-40deg' }],
  },
  adText: {
    fontSize: FontSize.font10,
    fontFamily: FontFamily.SemiBold,
  },
});

export default TwoAds;
