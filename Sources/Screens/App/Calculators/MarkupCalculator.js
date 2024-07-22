import { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../../Common';
import { EAContainer, EAInput, EAResult, NativeAd } from '../../../Components';
import { useUserClick } from '../../../Hooks';
import { Strings } from '../../../Constants';
import { Functions } from '../../../Utils';

const MarkupCalculator = () => {
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    cost: '',
    revenue: '',
    markup: 0,
    profit: 0,
  });

  const onCalculatePress = async () => {
    await incrementCount();
    const costValue = parseFloat(State.cost);
    const revenueValue = parseFloat(State.revenue);
    const markupAmount = revenueValue - costValue;
    const markupPercentage = (markupAmount / costValue) * 100;
    const profit = revenueValue - costValue;

    setState(p => ({
      ...p,
      markup: Functions.toFixed(markupPercentage),
      profit: Functions.toFixed(profit),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.MarkupCalculator}>
        <EAContainer>
          <EAInput
            title={Strings.Cost}
            value={State.cost}
            onChangeText={v => setState(p => ({ ...p, cost: v }))}
          />
          <EAInput
            title={Strings.Revenue}
            value={State.revenue}
            onChangeText={v => setState(p => ({ ...p, revenue: v }))}
          />
          <RNButton title={Strings.Calculate} onPress={onCalculatePress} />
        </EAContainer>

        <NativeAd />

        <EAContainer>
          <EAResult
            columns={[
              { title: Strings.MarkupPercentage, value: State.markup },
              { title: Strings.Profit, value: State.profit },
            ]}
          />
        </EAContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default MarkupCalculator;
