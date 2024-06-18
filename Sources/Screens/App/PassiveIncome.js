import { RNContainer, RNHeader } from '../../Common';
import { DummyData } from '../../Utils';
import { RenderSmartWays } from '../../Components';
import { Strings } from '../../Constants';

const PassiveIncome = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.PassiveIncomeIdeas} back>
        {DummyData.passiveIncome.map((v, i) => (
          <RenderSmartWays key={i} item={v} index={i} />
        ))}
      </RNHeader>
    </RNContainer>
  );
};

export default PassiveIncome;
