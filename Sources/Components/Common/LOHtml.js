import { Modal } from 'react-native';
import React, { useState } from 'react';
import { RNLoader, RNStyles } from '../../Common';
import WebView from 'react-native-webview';
import { NativeAd } from '../Ads';
import LOClose from './LOClose';

const LOHtml = ({ visible, onClose, html }) => {
  const [State, setState] = useState({ isLoading: false });

  return (
    <Modal
      visible={visible}
      animationType={'slide'}
      presentationStyle={'pageSheet'}
      onRequestClose={onClose}>
      <LOClose onPress={onClose} />
      <RNLoader visible={State.isLoading} />
      <WebView
        source={html}
        style={RNStyles.container}
        onLoadStart={() => setState(p => ({ ...p, isLoading: true }))}
        onLoadEnd={() => setState(p => ({ ...p, isLoading: false }))}
      />
      <NativeAd big />
    </Modal>
  );
};

export default LOHtml;
