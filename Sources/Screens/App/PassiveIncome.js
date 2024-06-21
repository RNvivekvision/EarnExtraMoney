import { RNContainer, RNHeader } from '../../Common';
import { RenderSmartWays } from '../../Components';
import { Strings } from '../../Constants';
import { useDummyData } from '../../Hooks';

const PassiveIncome = () => {
  const { passiveIncome } = useDummyData();

  return (
    <RNContainer>
      <RNHeader title={Strings.PassiveIncomeIdeas} back>
        {passiveIncome.map((v, i) => (
          <RenderSmartWays key={i} item={v} index={i} />
        ))}
      </RNHeader>
    </RNContainer>
  );
};

export default PassiveIncome;
