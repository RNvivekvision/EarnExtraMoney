import { useState } from 'react';
import { RNContainer, RNHeader, RNText } from '../../Common';
import { FontFamily, FontSize, hp } from '../../Theme';
import { NativeAd, RenderLanguages } from '../../Components';
import { DummyData, Functions } from '../../Utils';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';
import { I18nManager } from 'react-native';
import RNRestart from 'react-native-restart';
import { useDummyData } from '../../Hooks';

const Langugage = ({ navigation }) => {
  const { languages } = useDummyData();

  const [State, setState] = useState({
    selectedLanguage: languages[0],
  });

  const onChangeLanguage = langugage => {
    setState(p => ({ ...p, selectedLanguage: langugage }));
  };

  const onNextPress = async () => {
    try {
      const isRtl = State.selectedLanguage.value === 'ar';
      Strings.setLanguage(State.selectedLanguage.value);
      I18nManager.forceRTL(isRtl);
      await Functions.setAppData({
        lang: State.selectedLanguage.value,
        hasUser: true,
      });

      if (isRtl) {
        RNRestart.restart();
      } else {
        navigation.reset({ index: 0, routes: [{ name: NavRoutes.Welcome }] });
      }
    } catch (e) {
      console.error('Error onNextPress -> ', e);
    }
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.SelectyourLanguages} onNextPress={onNextPress}>
        <RNText
          spacing={1}
          size={FontSize.font13}
          family={FontFamily.Medium}
          align={'center'}
          pVertical={hp(2)}>
          {Strings.SelectyourLanguagesDesc}
        </RNText>

        {languages.map((v, i) => (
          <RenderLanguages
            key={i}
            item={v}
            index={i}
            isChecked={v.title === State.selectedLanguage.title}
            onPress={onChangeLanguage}
          />
        ))}
      </RNHeader>

      <NativeAd big />
    </RNContainer>
  );
};

export default Langugage;
