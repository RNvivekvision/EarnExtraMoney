import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors, FontFamily, hp, wp } from '../../Theme';
import { RNText } from '../../Common';

const EADropDown = ({
  title,
  data,
  value,
  placeholder,
  maxHeight,
  onChange,
  position,
  containerStyle,
  dropdownStyle,
  dropdownPlaceholderStyle,
  dropDownSelectedTextStyle,
  dropDownIconStyle,
  dropDownItemTextStyle,
  search,
  searchPlaceholder,
  renderInputSearch,
  inputSearchStyle,
  renderLeftIcon,
  itemContainerStyle,
  dropDownContainerStyle,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {title && <RNText color={Colors.DropdownPlaceHolder}>{title}</RNText>}
      {data?.length > 0 && (
        <Dropdown
          style={[styles.dropdownStyle, dropdownStyle]}
          placeholderStyle={[styles.placeholderStyle, dropdownPlaceholderStyle]}
          selectedTextStyle={[
            styles.selectedTextStyle,
            dropDownSelectedTextStyle,
          ]}
          iconStyle={[styles.iconStyle, dropDownIconStyle]}
          itemContainerStyle={[styles.itemContainerStyle, itemContainerStyle]}
          containerStyle={[styles.containerStyle, dropDownContainerStyle]}
          itemTextStyle={[styles.itemTextStyle, dropDownItemTextStyle]}
          activeColor={Colors.Button}
          data={data}
          maxHeight={maxHeight ?? hp(25)}
          labelField="label"
          valueField="value"
          placeholder={placeholder ?? ''}
          value={value}
          onChange={onChange}
          dropdownPosition={position ?? 'auto'}
          search={search}
          searchPlaceholder={searchPlaceholder}
          renderInputSearch={
            renderInputSearch ? v => renderInputSearch?.(v) : null
          }
          inputSearchStyle={[styles.inputSearchStyle, inputSearchStyle]}
          renderLeftIcon={renderLeftIcon}
          {...rest}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(1),
  },
  dropdownStyle: {
    backgroundColor: Colors.Primary + '10',
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    paddingVertical: hp(0.5),
    marginTop: hp(1.5),
  },
  placeholderStyle: {
    color: Colors.Placeholder,
  },
  selectedTextStyle: {
    fontFamily: FontFamily.Medium,
    color: Colors.Primary,
  },
  itemTextStyle: {
    fontFamily: FontFamily.Medium,
    color: Colors.Primary,
  },
  iconStyle: {
    width: wp(8),
    height: wp(8),
    tintColor: Colors.Primary,
  },
  inputSearchStyle: {},
  itemContainerStyle: {
    backgroundColor: Colors.Primary + '15',
  },
  containerStyle: {
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.Primary + '50',
    borderBottomLeftRadius: wp(3),
    borderBottomRightRadius: wp(3),
    overflow: 'hidden',
  },
});

export default EADropDown;
