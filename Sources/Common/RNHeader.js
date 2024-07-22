import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RNIcon, RNStyles, RNText, RNScrollView } from './index';
import { useInset, useUserClick } from '../Hooks';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Images, Strings } from '../Constants';

const RNHeader = ({
  title,
  scrollProps,
  containerStyle,
  titleStyle,
  children,
  style,
  noScroll,
  back = true,
  onDrawerPress,
}) => {
  const { incrementCount } = useUserClick();
  const navigation = useNavigation();
  const styles = useStyles();

  const onBackPress = async () => {
    await incrementCount();
    navigation.goBack();
  };

  const drawer = async () => {
    await incrementCount();
    onDrawerPress?.();
  };

  const Empty = () => (
    <View style={{ width: size.iconContainer, height: size.iconContainer }} />
  );

  return (
    <View style={RNStyles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={[styles.Container, containerStyle]}>
        {back && (
          <RNIcon
            icon={Images.back}
            onPress={onBackPress}
            containerStyle={styles.icon}
          />
        )}
        {onDrawerPress && (
          <RNIcon
            icon={Images.drawer}
            onPress={drawer}
            containerStyle={styles.icon}
            iconStyle={{ tintColor: Colors.White }}
          />
        )}
        {!back && !onDrawerPress && <Empty />}
        <RNText style={[styles.title, titleStyle]}>{title}</RNText>
        <Empty />
      </View>
      {noScroll ? (
        children
      ) : (
        <RNScrollView style={style} scrollProps={scrollProps}>
          {children}
        </RNScrollView>
      )}
    </View>
  );
};

const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    Container: {
      ...RNStyles.flexRow,
      backgroundColor: Colors.Primary,
      paddingHorizontal: wp(4),
      paddingTop: inset.top + hp(2),
      paddingVertical: hp(2),
    },
    icon: {
      ...RNStyles.center,
      width: size.iconContainer,
      height: size.iconContainer,
      borderRadius: wp(2),
      backgroundColor: Colors.White + '20',
    },
    title: {
      paddingHorizontal: hp(1),
      marginHorizontal: hp(1),
      fontSize: FontSize.font18,
      fontFamily: FontFamily.SemiBold,
      color: Colors.White,
      textAlign: 'center',
      flex: 1,
    },
  });
};

const size = { icon: wp(4), iconContainer: wp(8) };

export default RNHeader;
