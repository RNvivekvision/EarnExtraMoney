import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { useDummyData, useInset, useUserClick } from '../../Hooks';
import { RNImage, RNStyles, RNText } from '../../Common';
import { DummyData, Functions } from '../../Utils';
import { Telegram } from '../../Components';
import { Svg } from '../../Constants';

const DrawerContent = ({ navigation }) => {
  const { setting } = useDummyData();
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({ showTelegram: false });
  const { adData } = useSelector(({ UserReducer }) => UserReducer);
  const styles = useStyles();
  const url = adData?.appExtraData?.url;

  const onPress = async item => {
    if (item?.link) {
      return await Functions.OpenUrl(url);
    }
    if (item?.policy) {
      return await Functions.OpenUrl(DummyData.privacyPolicy);
    }
    if (item?.telegram) {
      return setState(p => ({ ...p, showTelegram: true }));
    }

    await incrementCount();

    if (item?.navigate) {
      return navigation.navigate(item.navigate);
    }
    if (item?.rateUs) {
      return Functions.RateUs({
        onError: () => console.error('Error Rate Us'),
      });
    }
    if (item?.shareApp) {
      return await Functions.ShareApp();
    }
  };

  const onTelegramClose = async () => {
    setState(p => ({ ...p, showTelegram: false }));
  };

  const onTelegramPress = async () => {
    onTelegramClose();
    await Functions.OpenUrl(DummyData.telegram);
  };

  return (
    <View style={RNStyles.container}>
      <View style={styles.logoContainer}>
        <RNText style={styles.title}>{DummyData.appInfo.appName}</RNText>
      </View>

      <View style={RNStyles.container}>
        <Svg.AppIconSvg
          width={size.logo}
          height={size.logo}
          style={styles.logo}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.listContainer}>
            {setting.map((v, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.6}
                onPress={() => onPress(v)}
                style={styles.renderDrawer}>
                <RNImage source={v.icon} style={styles.icon} />
                <RNText
                  size={FontSize.font14}
                  family={FontFamily.SemiBold}
                  pLeft={wp(4)}>
                  {v.title}
                </RNText>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <Telegram
        visible={State.showTelegram}
        onClose={onTelegramClose}
        onPress={onTelegramPress}
      />
    </View>
  );
};

const size = { logo: wp(33), icon: wp(6) };
const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    logoContainer: {
      height: hp(25),
      paddingTop: inset.top + hp(2),
      backgroundColor: Colors.Primary,
    },
    title: {
      fontSize: FontSize.font20,
      fontFamily: FontFamily.SemiBold,
      alignSelf: 'center',
      color: Colors.White,
    },
    logo: {
      ...RNStyles.shadow,
      alignSelf: 'center',
      position: 'absolute',
      top: -wp(20),
      borderRadius: wp(5),
      zIndex: 1,
    },
    renderDrawer: {
      ...RNStyles.flexRow,
      paddingHorizontal: wp(6),
      paddingVertical: hp(1.5),
    },
    icon: {
      ...RNStyles.icon,
      width: size.icon,
      height: size.icon,
      tintColor: Colors.Primary,
    },
    listContainer: {
      paddingTop: hp(8),
      paddingBottom: hp(4),
    },
  });
};

export default DrawerContent;
