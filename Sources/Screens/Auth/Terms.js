import { useState } from 'react';
import { LOTerms, NativeAd, RenderTerms } from '../../Components';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { useDummyData, useUserClick } from '../../Hooks';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';

const Terms = ({ navigation }) => {
  const { termsOfUse } = useDummyData();
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({ isChecked: false });

  const onTermPress = () => {
    incrementCount();
    setState(p => ({ ...p, isChecked: !p.isChecked }));
  };

  const onAcceptPress = () => {
    incrementCount();
    navigation.navigate(NavRoutes.Langugage);
  };

  return (
    <RNContainer useSafeArea>
      <RNHeader title={Strings.termsAndCondition}>
        {termsOfUse.map((v, i) => (
          <RenderTerms key={i} item={v} index={i} onPress={incrementCount} />
        ))}
        <LOTerms
          isChecked={State.isChecked}
          onPress={onTermPress}
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
