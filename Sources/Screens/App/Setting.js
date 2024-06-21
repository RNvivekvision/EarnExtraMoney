import { RenderSettings } from '../../Components';
import { RNContainer, RNHeader } from '../../Common';
import { Strings, Svg } from '../../Constants';
import { wp } from '../../Theme';
import { useDummyData } from '../../Hooks';
import { Functions } from '../../Utils';

const size = {
  setting: wp(75),
};

const Setting = ({ navigation }) => {
  const { setting } = useDummyData();

  const onItemPress = async item => {
    if (item?.navigate) {
      return navigation.navigate(item.navigate);
    }
    if (item?.rateUs) {
      Functions.RateUs({
        onError: () => console.error('Error Rate Us'),
      });
    }
    if (item?.shareApp) {
      await Functions.ShareApp();
    }
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.Setting} back>
        <Svg.Setting
          width={size.setting}
          height={size.setting * 0.7}
          style={{ alignSelf: 'center' }}
        />

        {setting.map((v, i) => (
          <RenderSettings key={i} item={v} index={i} onPress={onItemPress} />
        ))}
      </RNHeader>
    </RNContainer>
  );
};

export default Setting;
