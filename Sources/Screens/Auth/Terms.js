import { useState } from 'react';
import { LOTerms, NativeAd, RenderTerms } from '../../Components';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { useDummyData, useGoogleAds, useUserClick } from '../../Hooks';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';

const Terms = ({ navigation }) => {
  const { termsOfUse } = useDummyData();
  const { incrementCount } = useUserClick();
  const { showInterstitialAd } = useGoogleAds();
  const [State, setState] = useState({ isChecked: false });

  const onItemPress = async () => {
    incrementCount();
    await showInterstitialAd();
  };

  const onTermPress = async () => {
    incrementCount();
    await showInterstitialAd();
    setState(p => ({ ...p, isChecked: !p.isChecked }));
  };

  const onAcceptPress = async () => {
    incrementCount();
    await showInterstitialAd();
    navigation.navigate(NavRoutes.Langugage);
  };

  return (
    <RNContainer useSafeArea>
      <RNHeader title={Strings.termsAndCondition}>
        {termsOfUse.map((v, i) => (
          <RenderTerms key={i} item={v} index={i} onPress={onItemPress} />
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
