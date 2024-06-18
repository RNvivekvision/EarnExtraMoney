import { useRef } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { RNButton, RNContainer, RNHeader, RNInput, RNText } from '../../Common';
import { Strings } from '../../Constants';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';

const ContactUs = ({ navigation }) => {
  const InputRef = useRef();

  const onSubmitPress = () => {
    navigation.goBack();
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.Contactus} back style={styles.content}>
        <RNText family={FontFamily.Medium} size={FontSize.font18}>
          {Strings.WriteUs}
        </RNText>
        <RNText
          family={FontFamily.SemiBold}
          size={FontSize.font18}
          color={Colors.Primary}>
          {Strings.Contactus}
        </RNText>
        <RNText
          pVertical={hp(1)}
          family={FontFamily.Medium}
          size={FontSize.font12}>
          {Strings.WriteUsDesc}
        </RNText>

        <RNInput placeholder={Strings.EnterYourName} style={styles.nameInput} />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => InputRef.current?.focus()}
          style={styles.inputContainer}>
          <RNInput
            ref={InputRef}
            placeholder={Strings.TypingSomethinghere}
            style={styles.input}
            multiline={true}
          />
        </TouchableOpacity>

        <RNButton
          title={Strings.Submit}
          style={styles.submit}
          onPress={onSubmitPress}
        />
      </RNHeader>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  inputContainer: {
    borderWidth: 1,
    height: hp(25),
    marginVertical: hp(1),
    borderRadius: wp(3),
    borderColor: Colors.Black,
  },
  input: {
    borderRadius: wp(3),
  },
  submit: {
    borderRadius: wp(3),
    marginHorizontal: 0,
  },
  nameInput: {
    borderWidth: 1,
    borderColor: Colors.Black,
    paddingVertical: hp(1.5),
    borderRadius: wp(2),
  },
});

export default ContactUs;
