import { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../../Common';
import { EAContainer, EAInput, EAResult, NativeAd } from '../../../Components';
import { useUserClick } from '../../../Hooks';
import { Strings } from '../../../Constants';
import { Functions } from '../../../Utils';

const PriceCalculator = () => {
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    cost: '',
    grossMargin: '',
    markup: 0,
  });

  const onCalculatePress = async () => {
    await incrementCount();
    const costValue = parseFloat(State.cost);
    const grossMarginValue = parseFloat(State.grossMargin) / 100; // Convert percentage to decimal
    const sellingPrice = costValue + costValue * grossMarginValue;
    const markupPercentage = ((sellingPrice - costValue) / costValue) * 100;
    setState(p => ({ ...p, markup: Functions.toFixed(markupPercentage) }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.PriceCalculator}>
        <EAContainer>
          <EAInput
            title={Cost}
            value={State.cost}
            onChangeText={v => setState(p => ({ ...p, cost: v }))}
          />
          <EAInput
            title={Strings.GrossMargin}
            percent={true}
            maxLength={2}
            value={State.grossMargin}
            onChangeText={v => setState(p => ({ ...p, grossMargin: v }))}
          />
          <RNButton title={Strings.Calculate} onPress={onCalculatePress} />
        </EAContainer>

        <NativeAd />

        <EAContainer>
          <EAResult title={Strings.MarkupPercentage} value={State.markup} />
        </EAContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default PriceCalculator;
