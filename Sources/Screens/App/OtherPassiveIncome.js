import { RNContainer, RNHeader } from '../../Common';
import { DummyData } from '../../Utils';
import { RenderSmartWays } from '../../Components';
import { Strings } from '../../Constants';

const OtherPassiveIncome = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.OtherPassiveIncomeSources} back>
        {DummyData.otherPassiveIncome.map((v, i) => (
          <RenderSmartWays key={i} item={v} index={i} />
        ))}
      </RNHeader>
    </RNContainer>
  );
};

export default OtherPassiveIncome;
