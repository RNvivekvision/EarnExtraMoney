import { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { RNButton, RNContainer, RNHeader, RNInput, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Strings } from '../../Constants';
import { useUserClick } from '../../Hooks';
import { DummyData, Functions } from '../../Utils';

const ContactUs = ({ navigation }) => {
  const InputRef = useRef();
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    name: '',
    input: '',
    isSubmitPressed: false,
  });
  const error = {
    name: State.isSubmitPressed && State.name.length < 4,
    input: State.isSubmitPressed && State.input.length < 4,
    noError: State.name.length >= 4 && State.input.length >= 4,
  };
  const styles = useStyles({ error });

  const onSubmitPress = async () => {
    setState(p => ({ ...p, isSubmitPressed: true }));

    if (!error.noError) return;

    await incrementCount();
    const email = DummyData.mail;
    const subject = `${DummyData.appInfo.appName} - ${Strings.Contactus}`;
    const body = `${State.name},\n\n ${State.input}`;

    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    await Functions.OpenUrl(url);
    setState(p => ({ ...p, isSubmitPressed: false, name: '', input: '' }));
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

        <RNInput
          placeholder={Strings.EnterYourName}
          placeholderTextColor={error.name ? Colors.error : Colors.Placeholder}
          style={styles.nameInput}
          value={State.name}
          onChangeText={v => setState(p => ({ ...p, name: v }))}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => InputRef.current?.focus()}
          style={styles.inputContainer}>
          <RNInput
            ref={InputRef}
            placeholder={Strings.TypingSomethinghere}
            placeholderTextColor={
              error.input ? Colors.error : Colors.Placeholder
            }
            style={styles.input}
            multiline={true}
            value={State.input}
            onChangeText={v => setState(p => ({ ...p, input: v }))}
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

const useStyles = ({ error }) => {
  return StyleSheet.create({
    content: {
      paddingHorizontal: wp(4),
      paddingVertical: hp(1),
    },
    inputContainer: {
      borderWidth: 1,
      height: hp(25),
      marginVertical: hp(1),
      borderRadius: wp(3),
      borderColor: error.input ? Colors.error : Colors.Black,
    },
    input: {
      borderRadius: wp(3),
      color: error.input ? Colors.error : Colors.Black,
    },
    submit: {
      borderRadius: wp(3),
      marginHorizontal: 0,
    },
    nameInput: {
      borderWidth: 1,
      borderColor: error.name ? Colors.error : Colors.Black,
      paddingVertical: hp(1.5),
      borderRadius: wp(2),
    },
  });
};

export default ContactUs;
