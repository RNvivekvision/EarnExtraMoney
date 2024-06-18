import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNStyles, RNText } from '../../Common';
import Reanimated, { FadeInDown } from 'react-native-reanimated';
import { Strings } from '../../Constants';

const RenderSmartWays = ({ item, index, onPress }) => {
  return (
    <Reanimated.View
      entering={FadeInDown.delay(index * 100)}
      style={styles.container}>
      <TouchableOpacity
        onPress={() => onPress?.(item)}
        activeOpacity={0.6}
        disabled={!item.text}
        style={styles.button}>
        <item.icon
          style={{ marginHorizontal: wp(2) }}
          width={size.icon}
          height={size.icon}
        />

        <View style={styles.content}>
          <RNText
            size={FontSize.font14}
            pBottom={hp(0.5)}
            family={FontFamily.Medium}>
            {!item.text && !item.isLevelUp
              ? `${index}. ${item.title}`
              : item.title}
          </RNText>
          {item.isLevelUp && (
            <RNText
              color={Colors.welcomeDescription}
              size={FontSize.font8}
              family={FontFamily.Medium}>
              {Strings.level_description}
            </RNText>
          )}
          {item.text && (
            <RNText
              color={Colors.welcomeDescription}
              size={FontSize.font8}
              family={FontFamily.Medium}>
              {item.text}
            </RNText>
          )}
        </View>

        {item.knowMore && (
          <View style={styles.knowMoreContainer}>
            <RNText
              color={Colors.White}
              size={FontSize.font9}
              family={FontFamily.Medium}>
              {Strings.KnowMore}
            </RNText>
          </View>
        )}
      </TouchableOpacity>
    </Reanimated.View>
  );
};
const size = {
  icon: wp(25),
  radis: wp(4),
};
const styles = StyleSheet.create({
  container: {
    ...RNStyles.shadow,
    marginHorizontal: wp(4),
    marginVertical: hp(1),
    borderRadius: size.radis,
    backgroundColor: Colors.White,
  },
  button: {
    ...RNStyles.flexRow,
    borderRadius: size.radis,
    paddingVertical: hp(1),
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(3),
    justifyContent: 'center',
  },
  knowMoreContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderTopLeftRadius: size.radis,
    borderBottomRightRadius: size.radis,
    backgroundColor: Colors.Primary,
  },
});

export default RenderSmartWays;
