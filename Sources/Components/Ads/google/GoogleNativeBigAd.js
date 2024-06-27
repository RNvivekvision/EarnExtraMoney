import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NativeAdView, {
  CallToActionView,
  HeadlineView,
  IconView,
  ImageView,
  TaglineView,
  TestIds,
} from 'react-native-admob-native-ads';
import { Colors, FontFamily, FontSize, hp, wp } from '../../../Theme';
import { RNStyles } from '../../../Common';
import { Functions } from '../../../Utils';

const GoogleNativeBigAd = () => {
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
    console.log('Error NativeAd -> ', e);
    setState(p => ({ ...p, adError: true }));
  };

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
          <View style={RNStyles.flexRow}>
            <IconView style={styles.smallIcon} />
            <View>
              <HeadlineView style={[styles.headlineView, textColor]} />
              <TaglineView
                numberOfLines={1}
                style={[styles.taglineView, textColor]}
              />
            </View>
          </View>
          <ImageView style={styles.largeIcon} />

          {State.showButton && (
            <CallToActionView
              style={[styles.button, buttonBgColor]}
              textStyle={[styles.buttonText, buttonTextColor]}
              allCaps={true}
            />
          )}
        </View>
      </NativeAdView>
    )
  );
};

const icon = { small: wp(12), large: wp(25) };
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    paddingHorizontal: wp(6),
    paddingVertical: hp(1),
  },
  smallIcon: {
    width: icon.small,
    height: icon.small,
    marginRight: wp(2),
  },
  largeIcon: {
    width: '100%',
    height: wp(50),
    alignSelf: 'center',
    marginVertical: hp(1),
  },
  headlineView: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Bold,
    color: Colors.White,
    width: '75%',
  },
  taglineView: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Regular,
    color: Colors.White,
    width: '75%',
  },
  button: {
    ...RNStyles.center,
    paddingVertical: wp(3),
    width: '100%',
    borderRadius: wp(3),
    marginBottom: hp(1),
  },
  buttonText: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
    color: Colors.Black,
  },
});

export default GoogleNativeBigAd;
