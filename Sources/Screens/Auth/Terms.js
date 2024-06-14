import { StyleSheet } from 'react-native';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { DummyData } from '../../Utils';
import { LOTerms, NativeAd, RenderTerms } from '../../Components';
import { useState } from 'react';
import { NavRoutes } from '../../Navigation';

const Terms = ({ navigation }) => {
  const [State, setState] = useState({ isChecked: false });

  const onAcceptPress = () => {
    navigation.navigate(NavRoutes.Langugage);
  };

  return (
    <RNContainer>
      <RNHeader title={'Terms & Conditions'}>
        {DummyData.termsOfUse.map((v, i) => (
          <RenderTerms key={i} item={v} index={i} />
        ))}
        <LOTerms
          isChecked={State.isChecked}
          onPress={() => setState(p => ({ ...p, isChecked: !p.isChecked }))}
          title={'Please check for accept terms of condition'}
        />
        <RNButton
          title={'Accept'}
          disable={!State.isChecked}
          onPress={onAcceptPress}
        />
      </RNHeader>
      <NativeAd />
    </RNContainer>
  );
};

export default Terms;

const styles = StyleSheet.create({});
