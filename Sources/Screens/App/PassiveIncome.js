import { LOCards } from '../../Components';
import { Strings } from '../../Constants';
import { useDummyData } from '../../Hooks';

const PassiveIncome = () => {
  const { passiveIncome } = useDummyData();

  return <LOCards title={Strings.PassiveIncomeIdeas} data={passiveIncome} />;
};

export default PassiveIncome;
