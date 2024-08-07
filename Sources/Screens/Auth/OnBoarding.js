import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNStyles } from '../../Common';
import { useDummyData, useInset, useUserClick } from '../../Hooks';
import {
  EAPagginationDots,
  NativeAd,
  RenderOnboarding,
} from '../../Components';
import Reanimated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { Colors, FontSize, hp, wp } from '../../Theme';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';

const Onboarding = ({ navigation }) => {
  const { incrementCount } = useUserClick();
  const { onboarding } = useDummyData();
  const [State, setState] = useState({ currentSlider: 0 });
  const flatListRef = useRef();
  const scroll = useSharedValue(0);
  const styles = useStyles();

  const show = {
    back: State.currentSlider > 0,
    getStarted: State.currentSlider < onboarding.length - 1,
    skip:
      State.currentSlider > 0 && State.currentSlider !== onboarding.length - 1,
  };

  const onScroll = useAnimatedScrollHandler(
    ({ contentOffset }) => (scroll.value = contentOffset.x),
    [],
  );

  const onViewableItemsChanged = ({ viewableItems }) => {
    const currentSlider = viewableItems[0].index;
    setState(p => ({ ...p, currentSlider }));
  };

  const onNext = async () => {
    await incrementCount();
    flatListRef.current.scrollToIndex({
      animated: true,
      index: State.currentSlider + 1,
    });
  };

  const onBack = async () => {
    await incrementCount();
    flatListRef.current.scrollToIndex({
      animated: true,
      index: State.currentSlider - 1,
    });
  };

  const onSkip = async () => {
    await incrementCount();
    flatListRef.current.scrollToIndex({
      animated: true,
      index: onboarding.length - 1,
    });
  };

  const onGetStarted = async () => {
    await incrementCount();
    navigation.navigate(NavRoutes.Terms);
  };

  return (
    <RNContainer style={styles.container} useSafeArea>
      <View style={styles.flatlistContainer}>
        <Reanimated.FlatList
          ref={flatListRef}
          data={onboarding}
          keyExtractor={(v, i) => String(i)}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={0.16}
          onScroll={onScroll}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
          renderItem={({ item, index }) => (
            <RenderOnboarding
              item={item}
              index={index}
              scroll={scroll}
              isLast={index === onboarding.length - 1}
            />
          )}
        />
        <EAPagginationDots scroll={scroll} length={onboarding.length} />
        {show.skip && (
          <RNButton
            title={Strings.SKIP}
            style={styles.skip}
            textStyle={styles.skipText}
            onPress={onSkip}
          />
        )}
        {show.getStarted ? (
          <View style={styles.buttonsContainer}>
            {show.back && (
              <RNButton
                title={Strings.Back}
                style={styles.back}
                textStyle={styles.backText}
                onPress={onBack}
              />
            )}
            <RNButton
              title={Strings.Next}
              style={styles.next}
              onPress={onNext}
            />
          </View>
        ) : (
          <RNButton
            title={Strings.GetStarted}
            style={{ marginVertical: hp(2) }}
            onPress={onGetStarted}
          />
        )}
      </View>

      <NativeAd />
    </RNContainer>
  );
};

const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    flatlistContainer: {
      flex: 1,
    },
    buttonsContainer: {
      ...RNStyles.flexRowCenter,
      paddingVertical: hp(1),
      paddingHorizontal: wp(4),
    },
    next: {
      width: '45%',
      marginHorizontal: wp(1),
    },
    back: {
      width: '45%',
      marginHorizontal: wp(1),
      backgroundColor: Colors.White,
      borderWidth: 1,
      borderColor: Colors.Primary,
    },
    backText: {
      color: Colors.Primary,
    },
    skip: {
      position: 'absolute',
      top: inset.top + hp(1),
      right: wp(2),
      borderRadius: wp(1),
      paddingVertical: hp(1),
      paddingHorizontal: wp(2),
      backgroundColor: Colors.Primary + '20',
    },
    skipText: {
      color: Colors.Primary,
      fontSize: FontSize.font13,
    },
  });
};

export default Onboarding;
