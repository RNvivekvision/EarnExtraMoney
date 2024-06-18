import { RNContainer, RNHeader } from '../../Common';
import { DummyData } from '../../Utils';
import { RenderSmartWays } from '../../Components';
import { Strings } from '../../Constants';

const LevelUp = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.LevelUpYourSkills} back>
        {DummyData.levelUp.map((v, i) => (
          <RenderSmartWays key={i} item={v} index={i} />
        ))}
      </RNHeader>
    </RNContainer>
  );
};

export default LevelUp;
