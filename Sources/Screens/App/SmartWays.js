import { RNContainer, RNHeader } from '../../Common';
import {
  EAScreen,
  EMICalculator,
  NativeAd,
  RenderSmartWays,
  TwoAds,
} from '../../Components';
import { useDummyData, useUserClick } from '../../Hooks';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';

const SmartWays = ({ navigation }) => {
  const { smartWays, emi } = useDummyData();
  const { incrementCount } = useUserClick();

  const onItemPress = async item => {
    await incrementCount();
    navigation.navigate(NavRoutes.Details, {
      title: item.title,
      data: item.data,
    });
  };

  const onPress = async item => {
    await incrementCount();
    // console.log('item -> ', JSON.stringify(item, null, 2));
    if (item.navigate) {
      return navigation.navigate(item.navigate);
    }
  };

  return (
    <RNContainer>
      <RNHeader
        back={false}
        title={Strings.SmartWaytoEarnMoney}
        onDrawerPress={() => navigation.openDrawer()}>
        <EMICalculator onPress={() => navigation.navigate(NavRoutes.EMI)} />
        <NativeAd />
        {smartWays.map((v, i) => (
          <RenderSmartWays
            key={i}
            item={v}
            index={i}
            onPress={onItemPress}
            isParent={true}
          />
        ))}
        <EAScreen title={Strings.EMICalculator} data={emi} onPress={onPress} />
        <TwoAds />
      </RNHeader>
    </RNContainer>
  );
};

export default SmartWays;
