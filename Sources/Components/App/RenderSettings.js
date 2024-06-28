import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import Reanimated, { FadeInDown } from 'react-native-reanimated';

const RenderSettings = ({ item, index, onPress }) => {
  return (
    <Reanimated.View
      entering={FadeInDown.delay(index * 100)}
      style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => onPress?.(item)}
        style={RNStyles.flexRow}>
        <View style={styles.iconContainer}>
          <RNImage source={item.icon} style={RNStyles.icon} />
        </View>
        <RNText style={styles.title}>{item.title}</RNText>
      </TouchableOpacity>
    </Reanimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(6),
    marginVertical: hp(1),
  },
  iconContainer: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    backgroundColor: Colors.Primary + '20',
    borderRadius: wp(2),
  },
  title: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
    paddingHorizontal: wp(4),
  },
});

export default RenderSettings;
