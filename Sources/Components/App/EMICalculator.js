import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNButton, RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import Reanimated, { ZoomIn } from 'react-native-reanimated';
import { Images, Strings } from '../../Constants';

const EMICalculator = ({ onPress }) => {
  return (
    <Reanimated.View entering={ZoomIn.delay(200)} style={styles.reanimated}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={styles.container}>
        <View style={styles.content}>
          <RNText
            size={FontSize.font18}
            color={Colors.White}
            family={FontFamily.SemiBold}>
            {Strings.EMICalculator}
          </RNText>
          <RNText size={FontSize.font14} color={Colors.White}>
            {Strings.EMICalculatorDesc}
          </RNText>
          <RNButton
            title={Strings.CalculateNow}
            style={styles.button}
            textStyle={styles.buttonText}
            onPress={onPress}
          />
        </View>
        <RNImage source={Images.EmiCalculator} style={styles.EmiCalculator} />
      </TouchableOpacity>
    </Reanimated.View>
  );
};

const iconSize = wp(35);
const styles = StyleSheet.create({
  reanimated: {
    marginHorizontal: wp(4),
    marginVertical: hp(1),
    borderRadius: wp(3),
  },
  container: {
    ...RNStyles.flexRow,
    backgroundColor: Colors.Primary,
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderRadius: wp(3),
  },
  content: {
    flex: 1,
  },
  EmiCalculator: {
    width: iconSize,
    height: iconSize,
  },
  button: {
    backgroundColor: Colors.White + '20',
    width: wp(33),
    paddingVertical: hp(1.5),
    marginHorizontal: 0,
    marginTop: hp(2),
    marginBottom: 0,
  },
  buttonText: {
    color: Colors.White,
    fontSize: FontSize.font12,
  },
});

export default EMICalculator;
