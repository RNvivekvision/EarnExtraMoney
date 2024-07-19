import React, { forwardRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNInput, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';

const EAInput = forwardRef(
  (
    {
      title,
      titlePlaceholder,
      error,
      containerStyle,
      percent,
      children,
      ...rest
    },
    ref,
  ) => {
    const styles = useStyles({ error });
    return (
      <View style={[styles.container, containerStyle]}>
        {title && (
          <View style={RNStyles.flexRow}>
            <RNText style={styles.title}>{title}</RNText>
            <RNText style={styles.titlePlaceholder}>{titlePlaceholder}</RNText>
          </View>
        )}
        <View style={styles.inputContainer}>
          <RNInput
            ref={ref}
            placeholderTextColor={error ? Colors.error : Colors.Placeholder}
            style={styles.input}
            keyboardType={'numeric'}
            {...rest}
          />
          {percent && <RNText style={styles.titlePlaceholder}>{'%'}</RNText>}
          {children}
        </View>
      </View>
    );
  },
);

const useStyles = ({ error }) => {
  return StyleSheet.create({
    container: {
      paddingBottom: hp(2),
    },
    title: {
      color: error ? Colors.error : Colors.Black,
      fontFamily: FontFamily.SemiBold,
    },
    titlePlaceholder: {
      fontSize: FontSize.font12,
      paddingHorizontal: wp(1),
      color: error ? Colors.error : Colors.Black + '70',
    },
    inputContainer: {
      ...RNStyles.flexRow,
      backgroundColor: Colors.PlaceholderBackground,
      backgroundColor: Colors.Primary + '10',
      paddingHorizontal: wp(4),
      paddingVertical: hp(0.5),
      borderRadius: wp(3),
      marginTop: hp(1),
    },
    input: {
      flex: 1,
      marginVertical: 0,
      color: error ? Colors.error : Colors.Black,
      borderRadius: wp(2),
      paddingHorizontal: 0,
    },
  });
};

export default EAInput;
