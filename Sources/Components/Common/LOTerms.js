import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Svg } from '../../Constants';

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
          {isChecked && (
            <Svg.True
              width={size.true}
              height={size.true}
              fill={Colors.Black}
            />
          )}
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

const size = { box: wp(7), true: wp(4) };
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
    width: size.box,
    height: size.box,
  },
});

export default LOTerms;
