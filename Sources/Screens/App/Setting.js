import { RenderSettings } from '../../Components';
import { RNContainer, RNHeader } from '../../Common';
import { Strings, Svg } from '../../Constants';
import { DummyData } from '../../Utils';
import { wp } from '../../Theme';

const size = {
  setting: wp(75),
};

const Setting = ({ navigation }) => {
  const onItemPress = item => {
    if (item?.navigate) {
      return navigation.navigate(item.navigate);
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

        {DummyData.setting.map((v, i) => (
          <RenderSettings key={i} item={v} index={i} onPress={onItemPress} />
        ))}
      </RNHeader>
    </RNContainer>
  );
};

export default Setting;
