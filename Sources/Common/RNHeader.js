import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { RNIcon, RNStyles, RNText, RNScrollView } from './index';
import { Svg } from '../Constants';
import { useInset } from '../Hooks';

const RNHeader = ({
  title,
  scrollProps,
  containerStyle,
  titleStyle,
  children,
  style,
  footer,
  noScroll,
  back,
  onSettigPress,
  onNextPress,
}) => {
  const styles = useStyles();
  const navigation = useNavigation();

  const onBackPress = async () => {
    navigation.goBack();
  };

  return (
    <View style={RNStyles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={[styles.Container, containerStyle]}>
        {back && (
          <RNIcon
            Svg={Svg.Back}
            svgProps={{
              width: size.icon,
              height: size.icon,
              fill: Colors.White,
            }}
            onPress={onBackPress}
            containerStyle={styles.icon}
          />
        )}
        <RNText style={[styles.title, titleStyle]}>{title}</RNText>
        {onSettigPress && (
          <RNIcon
            Svg={Svg.SettingIcon}
            svgProps={{ width: size.icon, height: size.icon }}
            onPress={onSettigPress}
            containerStyle={styles.icon}
          />
        )}
        {onNextPress && (
          <TouchableOpacity onPress={onNextPress} style={styles.next}>
            <RNText
              color={Colors.White}
              family={FontFamily.SemiBold}
              size={FontSize.font12}>
              {'Next'}
            </RNText>
          </TouchableOpacity>
        )}
      </View>
      {noScroll ? (
        children
      ) : (
        <RNScrollView style={style} scrollProps={scrollProps}>
          {children}
        </RNScrollView>
      )}
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    footer: {
      paddingBottom: inset.bottom,
    },
    Container: {
      ...RNStyles.flexRowBetween,
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
      fontFamily: FontFamily.Medium,
      color: Colors.White,
      flex: 1,
    },
    next: {
      borderRadius: wp(2),
      backgroundColor: Colors.White + '20',
      paddingHorizontal: wp(3),
      paddingVertical: hp(1),
    },
  });
};

const size = { icon: wp(4), iconContainer: wp(7) };

export default RNHeader;
