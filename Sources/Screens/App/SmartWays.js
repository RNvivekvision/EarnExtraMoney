import { RNContainer, RNHeader } from '../../Common';
import { DummyData } from '../../Utils';
import { NativeAd, RenderSmartWays } from '../../Components';
import { Strings } from '../../Constants';
import { NavRoutes } from '../../Navigation';

const SmartWays = ({ navigation }) => {
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
        {DummyData.smartWays.map((v, i) => (
          <RenderSmartWays key={i} item={v} index={i} onPress={onItemPress} />
        ))}
        <NativeAd two />
      </RNHeader>
    </RNContainer>
  );
};

export default SmartWays;
