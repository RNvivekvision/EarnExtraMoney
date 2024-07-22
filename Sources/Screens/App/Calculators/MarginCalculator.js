import { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../../Common';
import { EAContainer, EAInput, EAResult, NativeAd } from '../../../Components';
import { useUserClick } from '../../../Hooks';
import { Strings } from '../../../Constants';
import { Functions } from '../../../Utils';

const MarginCalculator = () => {
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    cost: '',
    revenue: '',
    markup: 0,
    profit: 0,
  });

  const onCalculatePress = async () => {
    await incrementCount();
    const cost = parseFloat(State.cost);
    const revenue = parseFloat(State.revenue);
    const markup = Functions.toFixed(((revenue - cost) / cost) * 100);
    const profit = Functions.toFixed(revenue - cost);
    setState(p => ({ ...p, markup: markup, profit: profit }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.MarginCalculator}>
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

export default MarginCalculator;
