import { RNContainer, RNHeader } from '../../Common';
import { NativeAd, RenderSmartWays } from '../../Components';
import { Strings } from '../../Constants';
import { NavRoutes } from '../../Navigation';
import { useDummyData } from '../../Hooks';

const SmartWays = ({ navigation }) => {
  const { smartWays } = useDummyData();

  const onSettigPress = () => {
    navigation.navigate(NavRoutes.Setting);
  };

  const onItemPress = item => {
    if (item.navigate) {
      navigation.navigate(item.navigate);
    }
  };

  return (
    <RNContainer>
      <RNHeader
        title={Strings.SmartWaytoEarnMoney}
        onSettigPress={onSettigPress}>
        {smartWays.map((v, i) => (
          <RenderSmartWays key={i} item={v} index={i} onPress={onItemPress} />
        ))}
        <NativeAd two />
      </RNHeader>
    </RNContainer>
  );
};

export default SmartWays;
