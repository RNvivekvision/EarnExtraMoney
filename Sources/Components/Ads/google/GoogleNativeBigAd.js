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
import { useAdStyles } from '../../../Hooks';
import { useSelector } from 'react-redux';

const GoogleNativeBigAd = () => {
  const NativeAdRef = useRef();
  const { Admob, Admanager1, Admanager2 } = useSelector(
    ({ UserReducer }) => UserReducer,
  );
  const [State, setState] = useState({
    showButton: false,
    adUnitID: Admob?.nativeAdvanced,
    index: 0,
  });
  const { containerBgColor, textColor, buttonBgColor, buttonTextColor } =
    useAdStyles();
  const adUnitID = Functions.isDev ? TestIds.Image : State.adUnitID;

  useEffect(() => {
    NativeAdRef.current?.loadAd();
  }, [adUnitID]);

  const onAdFailedToLoad = e => {
    console.log('Error GoogleNativeBigAd -> ', e);
    setState(p => ({ ...p, showButton: false }));
    const newIndex = State.index + 1;
    if (newIndex == 1) {
      setState(p => ({
        ...p,
        adUnitID: Admanager1?.nativeAdvanced,
        index: newIndex,
      }));
    } else if (newIndex == 2) {
      setState(p => ({
        ...p,
        adUnitID: Admanager2?.nativeAdvanced,
        index: newIndex,
      }));
    }
  };

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
