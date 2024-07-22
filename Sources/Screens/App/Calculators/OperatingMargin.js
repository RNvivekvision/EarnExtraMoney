import { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../../Common';
import { EAContainer, EAInput, EAResult, NativeAd } from '../../../Components';
import { Strings } from '../../../Constants';
import { Functions } from '../../../Utils';
import { useUserClick } from '../../../Hooks';

const OperatingMargin = () => {
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    operatingIncome: '',
    revenue: '',
    profit: 0,
  });

  const onCalculatePress = async () => {
    await incrementCount();
    const operatingIncome = parseFloat(State.operatingIncome);
    const revenue = parseFloat(State.revenue);
    const profit = Functions.toFixed((operatingIncome / revenue) * 100);
    setState(p => ({ ...p, profit: profit }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.OperatingMargin}>
        <EAContainer>
          <EAInput
            title={Strings.OperatingIncome}
            value={State.operatingIncome}
            onChangeText={v => setState(p => ({ ...p, operatingIncome: v }))}
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
          <EAResult title={Strings.Profit} value={State.profit} />
        </EAContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default OperatingMargin;
