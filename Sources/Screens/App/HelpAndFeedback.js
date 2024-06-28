import { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  RNButton,
  RNContainer,
  RNHeader,
  RNInput,
  RNStyles,
  RNText,
} from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Strings } from '../../Constants';
import { useUserClick } from '../../Hooks';

const HelpAndFeedback = ({ navigation }) => {
  const { incrementCount } = useUserClick();
  const InputRef = useRef();
  const [State, setState] = useState({ selectedSubject: Strings.Features });

  const onItemPress = () => {
    incrementCount();
    setState(p => ({ ...p, selectedSubject: v }));
  };

  const onSubmitPress = () => {
    incrementCount();
    navigation.goBack();
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.HelpAndFeedback} back style={styles.content}>
        <RNText family={FontFamily.Medium} size={FontSize.font18}>
          {Strings.Sendus}
        </RNText>
        <RNText
          family={FontFamily.SemiBold}
          size={FontSize.font18}
          color={Colors.Primary}>
          {Strings.YourFeedback}
        </RNText>
        <RNText
          pVertical={hp(1)}
          family={FontFamily.Medium}
          size={FontSize.font12}>
          {Strings.YourFeedbackDesc}
        </RNText>

        <RNText
          size={FontSize.font14}
          family={FontFamily.Medium}
          pTop={hp(1)}
          color={Colors.welcome}>
          {Strings.Subjects}
        </RNText>
        <View style={styles.subjectContainer}>
          {[
            Strings.Features,
            Strings.Issues,
            Strings.Performance,
            Strings.Others,
          ].map((v, i) => (
            <TouchableOpacity
              key={i}
              style={styles.renderContainer}
              activeOpacity={0.6}
              onPress={onItemPress}>
              <View style={styles.radioContainer}>
                {State.selectedSubject === v && <View style={styles.radio} />}
              </View>
              <RNText size={FontSize.font12} family={FontFamily.Medium}>
                {v}
              </RNText>
            </TouchableOpacity>
          ))}
        </View>

        <RNText
          size={FontSize.font14}
          family={FontFamily.Medium}
          pTop={hp(2)}
          color={Colors.welcome}>
          {Strings.Whattypeoffeaturedoyourequire}
        </RNText>
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

const size = wp(5);

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  subjectContainer: {
    ...RNStyles.flexRow,
    paddingVertical: hp(1),
  },
  renderContainer: {
    ...RNStyles.flexRowBetween,
    marginHorizontal: wp(1),
  },
  radioContainer: {
    ...RNStyles.center,
    borderWidth: 1,
    borderColor: Colors.Black,
    width: size,
    height: size,
    borderRadius: 100,
    marginRight: wp(1),
    // marginHorizontal: wp(2),
  },
  radio: {
    width: size * 0.6,
    height: size * 0.6,
    backgroundColor: Colors.Black,
    borderRadius: 100,
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
});

export default HelpAndFeedback;
