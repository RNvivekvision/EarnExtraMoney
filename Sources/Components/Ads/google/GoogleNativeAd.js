import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NativeAdView, {
  CallToActionView,
  HeadlineView,
  IconView,
  StarRatingView,
  StoreView,
  TaglineView,
  TestIds,
} from 'react-native-admob-native-ads';
import { Colors, FontFamily, FontSize, hp, wp } from '../../../Theme';
import { RNStyles } from '../../../Common';
import { Functions } from '../../../Utils';
import { useSelector } from 'react-redux';
import GoogleNativeBigAd from './GoogleNativeBigAd';
import { useAdStyles } from '../../../Hooks';

const GoogleNativeAd = ({ big }) => {
  const NativeAdRef = useRef();
  const { adData, Admob, Admanager1, Admanager2 } = useSelector(
    ({ UserReducer }) => UserReducer,
  );
  const [State, setState] = useState({
    showButton: false,
    adUnitID: Admob?.nativeAdvanced,
    index: 0,
  });
  const { containerBgColor, textColor, buttonBgColor, buttonTextColor } =
    useAdStyles();
  const showAd = adData?.showAdInApp ?? false;
  const adUnitID = Functions.isDev ? TestIds.Image : State.adUnitID;

  useEffect(() => {
    NativeAdRef.current?.loadAd();
  }, [adUnitID]);

  const onAdFailedToLoad = e => {
    console.log('Error GoogleNativeAd -> ', e);
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

  if (!showAd) return;
  if (big) return <GoogleNativeBigAd />;

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
            <View style={RNStyles.flexRow}>
              <StarRatingView />
              <StoreView />
            </View>
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
    paddingHorizontal: wp(6),
  },
  headlineView: {
    fontSize: FontSize.font18,
    fontFamily: FontFamily.SemiBold,
    color: Colors.Black,
  },
  button: {
    ...RNStyles.center,
    width: wp(50),
    height: hp(5),
    borderRadius: wp(10),
    marginTop: hp(1),
  },
  buttonText: {
    fontSize: FontSize.font14,
    fontFamily: FontFamily.SemiBold,
    color: Colors.Black,
  },
});

export default GoogleNativeAd;
