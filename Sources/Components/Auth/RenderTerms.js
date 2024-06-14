import { useState } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import { Colors, FontFamily, FontSize, hp, isAndroid, wp } from '../../Theme';
import { RNStyles, RNText } from '../../Common';
import { Svg } from '../../Constants';
if (isAndroid) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const size = { icon: wp(8), back: wp(4) };
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
          <item.icon width={size.icon} height={size.icon} />
          <RNText style={styles.title}>{item.title}</RNText>
        </View>
        <Svg.Back
          width={size.back}
          height={size.back}
          fill={Colors.Black}
          style={{
            transform: [{ rotate: State.showText ? '90deg' : '-90deg' }],
          }}
        />
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
