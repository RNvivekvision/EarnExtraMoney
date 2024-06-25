import { RNContainer, RNHeader } from '../../Common';
import { NativeAd, RenderSmartWays } from '../../Components';
import { Strings } from '../../Constants';
import { NavRoutes } from '../../Navigation';
import { useDummyData } from '../../Hooks';
import { Functions } from '../../Utils';

const SmartWays = ({ navigation }) => {
  const { smartWays } = useDummyData();

  const onSettigPress = () => {
    navigation.navigate(NavRoutes.Setting);
  };

  const onItemPress = item => {
    navigation.navigate(NavRoutes.Details, {
      title: item.title,
      data: item.data,
    });
  };

  return (
    <RNContainer>
      <RNHeader
        title={Strings.SmartWaytoEarnMoney}
        onSettigPress={onSettigPress}
        onSharePress={Functions.ShareApp}>
        {smartWays.map((v, i) => (
          <RenderSmartWays
            key={i}
            item={v}
            index={i}
            onPress={onItemPress}
            isParent={true}
          />
        ))}
        <NativeAd two />
      </RNHeader>
    </RNContainer>
  );
};

export default SmartWays;
