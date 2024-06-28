import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNButton, RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images, Strings } from '../../Constants';

const Telegram = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType={'fade'}
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={onClose}
            style={styles.closeIcon}>
            <RNImage source={Images.cross} style={RNStyles.image50} />
          </TouchableOpacity>
          <RNImage source={Images.telegram} style={styles.icon} />
          <RNText style={styles.title}>{Strings.joinTelegram}</RNText>
          <RNText style={styles.text}>{Strings.joinTelegramDesc}</RNText>
          <RNButton title={Strings.JoinNow} style={styles.joinNow} />
        </View>
      </View>
    </Modal>
  );
};

const size = {
  box: wp(90),
  cross: wp(8),
  telegram: wp(30),
};
const styles = StyleSheet.create({
  overlay: {
    ...RNStyles.container,
    ...RNStyles.center,
    backgroundColor: Colors.Black + '40',
  },
  content: {
    backgroundColor: Colors.White,
    // width: size.box,
    // height: size.box,
    marginHorizontal: wp(4),
    paddingHorizontal: wp(4),
    borderRadius: wp(4),
  },
  closeIcon: {
    ...RNStyles.center,
    ...RNStyles.shadow,
    width: size.cross,
    height: size.cross,
    backgroundColor: Colors.White,
    borderRadius: wp(2),
    position: 'absolute',
    top: wp(3),
    right: wp(3),
  },
  title: {
    textAlign: 'center',
    fontSize: FontSize.font18,
    fontFamily: FontFamily.SemiBold,
    paddingHorizontal: wp(2),
    color: Colors.telegram,
    paddingVertical: hp(1),
  },
  text: {
    textAlign: 'center',
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
    paddingHorizontal: wp(4),
  },
  joinNow: {
    borderRadius: wp(3),
    marginVertical: hp(2),
  },
  icon: {
    width: size.telegram,
    height: size.telegram,
    marginTop: hp(4),
    marginBottom: hp(2),
    alignSelf: 'center',
  },
});

export default Telegram;
