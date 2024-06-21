import { LOCards } from '../../Components';
import { Strings } from '../../Constants';
import { useDummyData } from '../../Hooks';

const OtherPassiveIncome = () => {
  const { otherPassiveIncome } = useDummyData();
  return (
    <LOCards
      title={Strings.OtherPassiveIncomeSources}
      data={otherPassiveIncome}
    />
  );
};

export default OtherPassiveIncome;
