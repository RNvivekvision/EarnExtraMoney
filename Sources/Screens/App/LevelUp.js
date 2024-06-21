import { RNContainer, RNHeader } from '../../Common';
import { RenderSmartWays } from '../../Components';
import { Strings } from '../../Constants';
import { useDummyData } from '../../Hooks';

const LevelUp = () => {
  const { levelUp } = useDummyData();

  return (
    <RNContainer>
      <RNHeader title={Strings.LevelUpYourSkills} back>
        {levelUp.map((v, i) => (
          <RenderSmartWays key={i} item={v} index={i} />
        ))}
      </RNHeader>
    </RNContainer>
  );
};

export default LevelUp;
