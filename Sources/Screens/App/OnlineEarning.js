import { LOCards } from '../../Components';
import { Strings } from '../../Constants';
import { useDummyData } from '../../Hooks';

const OnlineEarning = () => {
  const { onlineEarning } = useDummyData();

  return <LOCards title={Strings.OnlineEarningIdeas} data={onlineEarning} />;
};

export default OnlineEarning;
