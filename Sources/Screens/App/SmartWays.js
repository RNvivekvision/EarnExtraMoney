import { RNContainer, RNHeader } from '../../Common';
import { RenderSmartWays, TwoAds } from '../../Components';
import { useDummyData, useUserClick } from '../../Hooks';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';
import { Functions } from '../../Utils';

const SmartWays = ({ navigation }) => {
  const { smartWays } = useDummyData();
  const { incrementCount } = useUserClick();

  const onSettigPress = () => {
    navigation.navigate(NavRoutes.Setting);
  };

  const onItemPress = item => {
    incrementCount();
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
        <TwoAds />
      </RNHeader>
    </RNContainer>
  );
};

export default SmartWays;
