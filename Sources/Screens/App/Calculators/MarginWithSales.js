import { useState } from 'react';
import { EAContainer, EAInput, EAResult, NativeAd } from '../../../Components';
import { RNButton, RNContainer, RNHeader } from '../../../Common';
import { Strings } from '../../../Constants';
import { Functions } from '../../../Utils';
import { useUserClick } from '../../../Hooks';

const MarginWithSales = () => {
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    cost: '',
    revenue: '',
    salesTax: '',
    margin: 0,
    markup: 0,
    netPrice: 0,
    profit: 0,
  });

  const onCalculatePress = async () => {
    await incrementCount();
    const costValue = parseFloat(State.cost);
    const revenueValue = parseFloat(State.revenue);
    const salesTaxValue = parseFloat(State.salesTax);
    const netPrice = Functions.toFixed(
      revenueValue / (1 + salesTaxValue / 100),
    );
    const profit = Functions.toFixed(revenueValue - costValue);
    const margin = Functions.toFixed(
      ((revenueValue - costValue) / revenueValue) * 100,
    );
    const markup = Functions.toFixed(
      ((revenueValue - costValue) / costValue) * 100,
    );

    setState(p => ({
      ...p,
      margin: margin,
      markup: markup,
      netPrice: netPrice,
      profit: profit,
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={'Margin With Sales'}>
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
          <EAInput
            title={Strings.SalesTaxPercentage}
            maxLength={2}
            value={State.salesTax}
            onChangeText={v => setState(p => ({ ...p, salesTax: v }))}
          />
          <RNButton title={Strings.Calculate} onPress={onCalculatePress} />
        </EAContainer>

        <NativeAd />

        <EAContainer>
          <EAResult
            columns={[
              { title: Strings.MarginPercentage, value: State.margin },
              { title: Strings.MarkupPercentage, value: State.markup },
            ]}
          />
          <EAResult
            columns={[
              { title: Strings.NetPrice, value: State.netPrice },
              { title: Strings.Profit, value: State.profit },
            ]}
          />
        </EAContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default MarginWithSales;
