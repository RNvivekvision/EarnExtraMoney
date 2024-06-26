import WebView from 'react-native-webview';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNImage, RNLoader, RNStyles } from '../../Common';
import { Colors, wp } from '../../Theme';
import { Images } from '../../Constants';
import { useState } from 'react';

const LOHtml = ({ visible, onClose, html }) => {
  const [State, setState] = useState({ isLoading: false });

  return (
    <Modal
      visible={visible}
      animationType={'slide'}
      presentationStyle={'pageSheet'}
      onRequestClose={onClose}>
      <View style={RNStyles.container}>
        <RNLoader visible={State.isLoading} />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onClose}
          style={styles.closeIcon}>
          <RNImage source={Images.cross} style={RNStyles.image50} />
        </TouchableOpacity>
        <WebView
          source={html}
          style={RNStyles.container}
          onLoadStart={() => setState(p => ({ ...p, isLoading: true }))}
          onLoadEnd={() => setState(p => ({ ...p, isLoading: false }))}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    ...RNStyles.center,
    ...RNStyles.shadow,
    width: wp(8),
    height: wp(8),
    backgroundColor: Colors.White,
    borderRadius: 100,
    zIndex: 11111,
    position: 'absolute',
    top: wp(4),
    right: wp(4),
  },
});

export default LOHtml;
