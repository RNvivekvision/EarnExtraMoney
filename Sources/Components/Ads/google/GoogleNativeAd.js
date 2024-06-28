import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NativeAdView, {
  CallToActionView,
  HeadlineView,
  IconView,
  TestIds,
} from 'react-native-admob-native-ads';
import { Colors, FontFamily, FontSize, hp, wp } from '../../../Theme';
import { RNStyles } from '../../../Common';
import { Functions } from '../../../Utils';
import GoogleNativeBigAd from './GoogleNativeBigAd';

const GoogleNativeAd = ({ big }) => {
  const NativeAdRef = useRef();
  const [State, setState] = useState({
    showButton: false,
    adUnitID: null,
    adError: false,
  });
  const adUnitID = Functions.isDev ? TestIds.Image : State.adUnitID;

  // styles...
  const containerBgColor = {
    backgroundColor: Colors.Black,
  };
  const textColor = { color: Colors.Black };
  const buttonBgColor = {
    backgroundColor: Colors.Primary,
  };
  const buttonTextColor = {
    color: Colors.White,
  };

  useEffect(() => {
    NativeAdRef.current?.loadAd();
  }, []);

  const onAdFailedToLoad = e => {
    console.error('Error NativeAd -> ', e);
    setState(p => ({ ...p, adError: true }));
  };

  if (big) {
    return <GoogleNativeBigAd />;
  }

  if (State.adError) {
    return null;
  }

  return (
    adUnitID && (
      <NativeAdView
        ref={NativeAdRef}
        show={false}
        adUnitID={adUnitID}
        onAdLoaded={() => setState(p => ({ ...p, showButton: true }))}
        onAdFailedToLoad={onAdFailedToLoad}>
        <View style={styles.container}>
          <IconView style={styles.iconView} />
          <View style={styles.content}>
            <HeadlineView style={[styles.headlineView, textColor]} />
            {State.showButton && (
              <CallToActionView
                style={[styles.button, buttonBgColor]}
                textStyle={[styles.buttonText, buttonTextColor]}
                allCaps={true}
              />
            )}
          </View>
        </View>
      </NativeAdView>
    )
  );
};

const iconSize = wp(25);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRow,
    backgroundColor: Colors.White,
    paddingHorizontal: wp(6),
    paddingVertical: hp(1),
  },
  iconView: {
    width: iconSize,
    height: iconSize,
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(2),
  },
  headlineView: {
    fontSize: FontSize.font18,
    fontFamily: FontFamily.SemiBold,
    color: Colors.Black,
    textAlign: 'center',
    paddingVertical: hp(2),
  },
  button: {
    ...RNStyles.center,
    width: wp(50),
    height: hp(5),
    borderRadius: wp(10),
  },
  buttonText: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
    color: Colors.Black,
  },
});

export default GoogleNativeAd;
