import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNStyles } from '../../Common';
import { DummyData } from '../../Utils';
import { useInset } from '../../Hooks';
import {
  LOPagginationDots,
  NativeAd,
  RenderOnboarding,
} from '../../Components';
import Reanimated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { Colors, FontSize, hp, wp } from '../../Theme';

const Onboarding = ({ navigation }) => {
  const scroll = useSharedValue(0);
  const styles = useStyles();

  const onScroll = useAnimatedScrollHandler(({ contentOffset }) => {
    scroll.value = contentOffset.x;
  }, []);

  return (
    <RNContainer style={styles.container}>
      <View style={styles.flatlistContainer}>
        <Reanimated.FlatList
          data={DummyData.onboarding}
          keyExtractor={(v, i) => String(i)}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={0.16}
          onScroll={onScroll}
          renderItem={({ item, index }) => (
            <RenderOnboarding
              item={item}
              index={index}
              scroll={scroll}
              isLast={index === DummyData.onboarding.length - 1}
            />
          )}
        />
        <LOPagginationDots
          scroll={scroll}
          length={DummyData.onboarding.length}
        />
        <RNButton
          title={'SKIP'}
          style={styles.skip}
          textStyle={styles.skipText}
        />
        <View style={styles.buttonsContainer}>
          <RNButton
            title={'Back'}
            style={styles.back}
            textStyle={styles.backText}
          />
          <RNButton title={'Next'} style={styles.next} />
        </View>
      </View>

      {/* <NativeAd /> */}
    </RNContainer>
  );
};

const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    container: {
      paddingBottom: inset.bottom,
    },
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
      backgroundColor: Colors.skip,
    },
    skipText: {
      color: Colors.Black,
      fontSize: FontSize.font13,
    },
  });
};

export default Onboarding;
