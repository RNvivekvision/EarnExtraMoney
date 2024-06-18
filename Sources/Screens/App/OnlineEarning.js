import { RNContainer, RNHeader } from '../../Common';
import { DummyData } from '../../Utils';
import { RenderSmartWays } from '../../Components';
import { Strings } from '../../Constants';

const OnlineEarning = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.OnlineEarningIdeas} back>
        {DummyData.onlineEarning.map((v, i) => (
          <RenderSmartWays key={i} item={v} index={i} />
        ))}
      </RNHeader>
    </RNContainer>
  );
};

export default OnlineEarning;
