import { StyleSheet, View } from 'react-native';
import Reanimated, { FadeInDown } from 'react-native-reanimated';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import { NativeAd } from '../Ads';

const RenderTabContent = ({ item, index }) => {
  return (
    <>
      {item?.showNativeAd && <NativeAd />}
      <Reanimated.View
        entering={FadeInDown.delay(index * 100)}
        style={styles.container}>
        <RNImage source={item.image} style={styles.image} />
        <View style={styles.content}>
          <RNText family={FontFamily.Medium}>{item.title}</RNText>
          <RNText
            size={FontSize.font12}
            family={FontFamily.SemiBold}
            pTop={hp(0.5)}
            color={Colors.Primary + '99'}>
            {item.text}
          </RNText>
        </View>
      </Reanimated.View>
    </>
  );
};

const imgSize = wp(10);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRow,
    marginHorizontal: wp(4),
    backgroundColor: Colors.Primary + '20',
    marginVertical: hp(1),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    height: hp(10),
    borderRadius: wp(4),
  },
  image: {
    width: imgSize,
    height: imgSize,
    marginHorizontal: wp(4),
    tintColor: Colors.Primary,
  },
  content: {
    borderLeftWidth: wp(0.2),
    borderLeftColor: Colors.Primary,
    flex: 1,
    height: '100%',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    justifyContent: 'space-between',
  },
});

export default RenderTabContent;
