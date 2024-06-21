import { LOCards } from '../../Components';
import { Strings } from '../../Constants';
import { useDummyData } from '../../Hooks';

const LevelUp = () => {
  const { levelUp } = useDummyData();

  return <LOCards title={Strings.LevelUpYourSkills} data={levelUp} />;
};

export default LevelUp;
