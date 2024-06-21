import { RNContainer, RNHeader } from '../../Common';
import { RenderSmartWays } from '../../Components';
import { Strings } from '../../Constants';
import { useDummyData } from '../../Hooks';

const OnlineEarning = () => {
  const { onlineEarning } = useDummyData();

  return (
    <RNContainer>
      <RNHeader title={Strings.OnlineEarningIdeas} back>
        {onlineEarning.map((v, i) => (
          <RenderSmartWays key={i} item={v} index={i} />
        ))}
      </RNHeader>
    </RNContainer>
  );
};

export default OnlineEarning;
