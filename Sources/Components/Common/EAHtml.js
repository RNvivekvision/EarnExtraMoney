import { Modal } from 'react-native';
import React, { useState } from 'react';
import { RNLoader, RNStyles } from '../../Common';
import WebView from 'react-native-webview';
import { NativeAd } from '../Ads';
import EAClose from './EAClose';

const EAHtml = ({ visible, onClose, html }) => {
  const [State, setState] = useState({ isLoading: false });

  return (
    <Modal
      visible={visible}
      animationType={'slide'}
      presentationStyle={'pageSheet'}
      onRequestClose={onClose}>
      <EAClose onPress={onClose} />
      <RNLoader visible={State.isLoading} />
      <WebView
        originWhitelist={['*']}
        source={html}
        style={RNStyles.container}
        onLoadStart={() => setState(p => ({ ...p, isLoading: true }))}
        onLoadEnd={() => setState(p => ({ ...p, isLoading: false }))}
        onError={e => console.log('Error WebView -> ', e)}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
      <NativeAd big />
    </Modal>
  );
};

export default EAHtml;
