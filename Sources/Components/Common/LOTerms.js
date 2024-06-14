import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images } from '../../Constants';

const LOTerms = ({ containerStyle, onPress, isChecked, title }) => {
  const onBoxPress = () => {
    onPress?.(!isChecked);
  };

  return (
    <TouchableOpacity
      onPress={onBoxPress}
      style={[styles.container, containerStyle]}
      activeOpacity={0.6}>
      <View style={RNStyles.flexRow}>
        <View style={styles.Box}>
          {isChecked && <RNImage source={Images.true} style={styles.icon} />}
        </View>
        <RNText
          size={FontSize.font14}
          family={FontFamily.Medium}
          pHorizontal={wp(4)}>
          {title}
        </RNText>
      </View>
    </TouchableOpacity>
  );
};

const size = wp(7);
const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(2),
    paddingHorizontal: 0,
    paddingHorizontal: wp(4),
  },
  Box: {
    ...RNStyles.center,
    borderWidth: 1,
    borderColor: Colors.Black,
    borderRadius: wp(1),
    width: size,
    height: size,
  },
  icon: {
    ...RNStyles.image70,
    borderRadius: wp(2),
    tintColor: Colors.Black,
  },
});

export default LOTerms;
