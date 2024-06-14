import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Reanimated, { SlideInLeft } from 'react-native-reanimated';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import { Images } from '../../Constants';

const RenderLanguages = ({ item, index, isChecked, onPress }) => {
  return (
    <Reanimated.View
      entering={SlideInLeft.delay(index * 100)}
      style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => onPress?.(item)}
        style={styles.button}>
        <View style={RNStyles.flexRow}>
          <item.Icon />
          <RNText style={styles.title}>{item.title}</RNText>
        </View>
        <View style={styles.checkBoxContainer}>
          {isChecked && <RNImage source={Images.true} style={styles.true} />}
        </View>
      </TouchableOpacity>
    </Reanimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.shadow,
    borderWidth: 1,
    marginHorizontal: wp(4),
    marginVertical: hp(1),
    borderColor: Colors.Placeholder,
    borderRadius: wp(2),
    backgroundColor: Colors.White,
  },
  button: {
    ...RNStyles.flexRowBetween,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.5),
  },
  title: {
    paddingHorizontal: wp(4),
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
  },
  checkBoxContainer: {
    ...RNStyles.center,
    width: wp(7),
    height: wp(7),
    borderRadius: wp(1),
    backgroundColor: Colors.Primary + '20',
  },
  true: {
    ...RNStyles.image60,
    tintColor: Colors.Primary,
  },
});

export default RenderLanguages;
