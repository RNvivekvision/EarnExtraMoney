import { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../../Common';
import { EAContainer, EAInput, EAResult, NativeAd } from '../../../Components';
import { useUserClick } from '../../../Hooks';
import { Strings } from '../../../Constants';
import { Functions } from '../../../Utils';

const DiscountCalculator = () => {
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    price: '',
    discount: '',
    discountPrice: 0,
    savedAmount: 0,
  });

  const onCalculatePress = async () => {
    await incrementCount();
    const price = parseFloat(State.price);
    const discountPercentage = parseFloat(State.discount);

    const discountedPrice = price - price * (discountPercentage / 100);
    const savedAmount = price - discountedPrice;

    setState(p => ({
      ...p,
      discountPrice: Functions.toFixed(discountedPrice),
      savedAmount: Functions.toFixed(savedAmount),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.DiscountCalculator}>
        <EAContainer>
          <EAInput
            title={Strings.Price}
            value={State.price}
            onChangeText={v => setState(p => ({ ...p, price: v }))}
          />
          <EAInput
            title={Strings.DiscountPercentage}
            percent={true}
            maxLength={2}
            value={State.discount}
            onChangeText={v => setState(p => ({ ...p, discount: v }))}
          />
          <RNButton title={Strings.Calculate} onPress={onCalculatePress} />
        </EAContainer>

        <NativeAd />

        <EAContainer>
          <EAResult title={Strings.DiscountPrice} value={State.discountPrice} />
          <EAResult
            title={Strings.SavedAmount}
            needBGColor={true}
            value={State.savedAmount}
          />
        </EAContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default DiscountCalculator;
