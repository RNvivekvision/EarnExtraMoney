import { useState } from 'react';
import { NavRoutes } from '../../Navigation';
import { LOTerms, NativeAd, RenderTerms } from '../../Components';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { DummyData } from '../../Utils';
import { Strings } from '../../Constants';

const Terms = ({ navigation }) => {
  const [State, setState] = useState({ isChecked: false });

  const onAcceptPress = () => {
    navigation.navigate(NavRoutes.Langugage);
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.termsAndCondition}>
        {DummyData.termsOfUse.map((v, i) => (
          <RenderTerms key={i} item={v} index={i} />
        ))}
        <LOTerms
          isChecked={State.isChecked}
          onPress={() => setState(p => ({ ...p, isChecked: !p.isChecked }))}
          title={Strings.Pleasecheckforaccept}
        />
        <RNButton
          title={Strings.Accept}
          disable={!State.isChecked}
          onPress={onAcceptPress}
        />
      </RNHeader>
      <NativeAd />
    </RNContainer>
  );
};

export default Terms;
