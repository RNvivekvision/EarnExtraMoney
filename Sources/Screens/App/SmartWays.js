import { RNContainer, RNHeader } from '../../Common';
import { RenderSmartWays, TwoAds } from '../../Components';
import { useDummyData, useUserClick } from '../../Hooks';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';
import { Functions } from '../../Utils';

const SmartWays = ({ navigation }) => {
  const { smartWays } = useDummyData();
  const { incrementCount } = useUserClick();

  const onItemPress = async item => {
    await incrementCount();
    navigation.navigate(NavRoutes.Details, {
      title: item.title,
      data: item.data,
    });
  };

  // onSettigPress={() => navigation.navigate(NavRoutes.Setting)}
  // onSharePress={Functions.ShareApp}

  return (
    <RNContainer>
      <RNHeader
        back={false}
        title={Strings.SmartWaytoEarnMoney}
        onDrawerPress={() => navigation.openDrawer()}>
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
