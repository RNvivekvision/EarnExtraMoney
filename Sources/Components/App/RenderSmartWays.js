import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import Reanimated, { FadeInDown } from 'react-native-reanimated';
import { Strings } from '../../Constants';

const RenderSmartWays = ({ item, index, onPress, isParent }) => {
  const styles = useStyles({ isParent });

  return (
    <Reanimated.View
      entering={FadeInDown.delay(index * 100)}
      style={styles.container}>
      <TouchableOpacity
        onPress={() => onPress?.(item)}
        activeOpacity={0.6}
        disabled={!item.text}
        style={styles.button}>
        <RNImage source={item.icon} style={styles.icon} />

        <View style={styles.content}>
          <RNText
            size={isParent ? FontSize.font14 : FontSize.font12}
            pBottom={hp(0.5)}
            family={FontFamily.Medium}>
            {isParent ? item.title : `${index + 1}. ${item.title}`}
          </RNText>
          {item.text?.map((v, i) => (
            <View key={i} style={{ flexDirection: 'row' }}>
              <RNText size={FontSize.font8}>{isParent ? '' : '* '}</RNText>
              <RNText
                color={Colors.welcomeDescription}
                size={FontSize.font8}
                family={FontFamily.Medium}>
                {v}
              </RNText>
            </View>
          ))}
        </View>

        <View style={styles.knowMoreContainer}>
          <RNText
            color={Colors.White}
            size={FontSize.font8}
            family={FontFamily.Medium}>
            {Strings.KnowMore}
          </RNText>
        </View>
      </TouchableOpacity>
    </Reanimated.View>
  );
};
const size = {
  icon: wp(25),
  radis: wp(4),
};
const useStyles = ({ isParent }) => {
  return StyleSheet.create({
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
      paddingVertical: hp(isParent ? 1 : 2),
      paddingHorizontal: wp(4),
    },
    content: {
      flex: 1,
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
    icon: {
      width: size.icon,
      height: size.icon,
      marginRight: wp(4),
    },
  });
};

export default RenderSmartWays;
