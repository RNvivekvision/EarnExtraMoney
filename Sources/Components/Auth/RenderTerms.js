import { useState } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import { Colors, FontFamily, FontSize, hp, isAndroid, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import { Images } from '../../Constants';
if (isAndroid) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const RenderTerms = ({ item, index }) => {
  const [State, setState] = useState({ showText: index === 0 });
  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setState(p => ({ ...p, showText: !p.showText }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.titleContainer}>
        <View style={RNStyles.flexRow}>
          <RNImage source={item.icon} style={styles.icon} />
          <RNText style={styles.title}>{item.title}</RNText>
        </View>
        <RNImage source={Images.back} style={styles.back} />
      </TouchableOpacity>

      {State.showText && (
        <View style={styles.textContainer}>
          <RNText style={styles.text}>{item.text}</RNText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
    marginVertical: hp(1),
    borderWidth: 1,
    borderColor: Colors.Placeholder,
    borderRadius: wp(2),
  },
  titleContainer: {
    ...RNStyles.flexRowBetween,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
    borderWidth: 1,
    borderColor: Colors.Placeholder,
    borderRadius: wp(2),
  },
  icon: {
    width: wp(7),
    height: wp(7),
  },
  title: {
    paddingLeft: wp(2),
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Medium,
  },
  back: {
    width: wp(4),
    height: wp(4),
    tintColor: Colors.Black,
    transform: [{ rotate: '-90deg' }],
  },
  textContainer: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
  },
  text: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
  },
});

export default RenderTerms;
