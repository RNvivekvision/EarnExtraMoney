import { useState } from 'react';
import { NavRoutes } from '../../Navigation';
import { LOTerms, NativeAd, RenderTerms } from '../../Components';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { useDummyData } from '../../Hooks';

const Terms = ({ navigation }) => {
  const { termsOfUse } = useDummyData();
  const [State, setState] = useState({ isChecked: false });

  const onAcceptPress = () => {
    navigation.navigate(NavRoutes.Langugage);
  };

  return (
    <RNContainer useSafeArea>
      <RNHeader title={Strings.termsAndCondition}>
        {termsOfUse.map((v, i) => (
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
