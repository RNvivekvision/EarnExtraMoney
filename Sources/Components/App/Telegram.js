import { Modal, StyleSheet, View } from 'react-native';
import { RNButton, RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Images, Strings } from '../../Constants';
import { EAClose } from '../Common';

const Telegram = ({ visible, onClose, onPress }) => {
  return (
    <Modal
      visible={visible}
      animationType={'fade'}
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <EAClose onPress={onClose} />
          <RNImage source={Images.telegram} style={styles.icon} />
          <RNText style={styles.title}>{Strings.joinTelegram}</RNText>
          <RNText style={styles.text}>{Strings.joinTelegramDesc}</RNText>
          <RNButton
            title={Strings.JoinNow}
            style={styles.joinNow}
            onPress={onPress}
          />
        </View>
      </View>
    </Modal>
  );
};

const size = {
  box: wp(90),
  telegram: wp(25),
};
const styles = StyleSheet.create({
  overlay: {
    ...RNStyles.container,
    ...RNStyles.center,
    backgroundColor: Colors.Black + '40',
  },
  content: {
    backgroundColor: Colors.White,
    marginHorizontal: wp(4),
    paddingHorizontal: wp(4),
    borderRadius: wp(4),
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
    backgroundColor: Colors.telegram,
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
