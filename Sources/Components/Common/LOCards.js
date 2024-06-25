import { RNContainer, RNHeader } from '../../Common';
import { RenderSmartWays } from '../App';

const LOCards = ({ title, data, onPress }) => {
  return (
    <RNContainer>
      <RNHeader title={title} back>
        {data?.length > 0 &&
          data.map((v, i) => (
            <RenderSmartWays key={i} item={v} index={i} onPress={onPress} />
          ))}
      </RNHeader>
    </RNContainer>
  );
};

export default LOCards;
