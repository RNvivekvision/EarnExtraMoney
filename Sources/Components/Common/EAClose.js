import { StyleSheet, TouchableOpacity } from 'react-native';
import { RNImage, RNStyles } from '../../Common';
import { Images } from '../../Constants';
import { Colors, wp } from '../../Theme';

const EAClose = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.closeIcon}>
      <RNImage source={Images.cross} style={RNStyles.image50} />
    </TouchableOpacity>
  );
};

const size = { cross: wp(8) };
const styles = StyleSheet.create({
  closeIcon: {
    ...RNStyles.center,
    ...RNStyles.shadow,
    width: size.cross,
    height: size.cross,
    backgroundColor: Colors.White,
    borderRadius: wp(2),
    position: 'absolute',
    top: wp(4),
    right: wp(4),
    zIndex: 1,
  },
});

export default EAClose;
