import { useState } from 'react';
import { RNContainer, RNHeader, RNText } from '../../Common';
import { FontFamily, FontSize, hp } from '../../Theme';
import { NativeAd, RenderLanguages } from '../../Components';
import { DummyData } from '../../Utils';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';

const Langugage = ({ navigation }) => {
  const [State, setState] = useState({
    selectedLanguage: DummyData.languages[0],
  });

  const onChangeLanguage = langugage => {
    setState(p => ({ ...p, selectedLanguage: langugage }));
  };

  const onNextPress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: NavRoutes.Welcome }],
    });
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

        {DummyData.languages.map((v, i) => (
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
