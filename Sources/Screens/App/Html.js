import { useState } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';
import { RNContainer, RNHeader, RNLoader, RNStyles } from '../../Common';
import { NativeAd } from '../../Components';

const Html = ({ route }) => {
  const { title, html } = route?.params;
  const [State, setState] = useState({ isLoading: false });

  return (
    <RNContainer>
      <RNHeader title={title} back noScroll>
        <View style={RNStyles.container}>
          <RNLoader visible={State.isLoading} />
          <WebView
            source={html}
            style={RNStyles.container}
            onLoadStart={() => setState(p => ({ ...p, isLoading: true }))}
            onLoadEnd={() => setState(p => ({ ...p, isLoading: false }))}
          />
          <NativeAd big />
        </View>
      </RNHeader>
    </RNContainer>
  );
};

export default Html;
