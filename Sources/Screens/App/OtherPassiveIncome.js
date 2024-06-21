import { RNContainer, RNHeader } from '../../Common';
import { RenderSmartWays } from '../../Components';
import { Strings } from '../../Constants';
import { useDummyData } from '../../Hooks';

const OtherPassiveIncome = () => {
  const { otherPassiveIncome } = useDummyData();
  return (
    <RNContainer>
      <RNHeader title={Strings.OtherPassiveIncomeSources} back>
        {otherPassiveIncome.map((v, i) => (
          <RenderSmartWays key={i} item={v} index={i} />
        ))}
      </RNHeader>
    </RNContainer>
  );
};

export default OtherPassiveIncome;
