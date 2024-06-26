import { Modal, View } from 'react-native';
import { RNStyles } from '../../Common';
import WebView from 'react-native-webview';

const LOHtml = ({ visible, onClose, html }) => {
  return (
    <Modal
      visible={visible}
      animationType={'slide'}
      presentationStyle={'pageSheet'}
      onRequestClose={onClose}>
      <View style={RNStyles.container}>
        <WebView source={html} style={{ flex: 1 }} />
      </View>
    </Modal>
  );
};

export default LOHtml;
