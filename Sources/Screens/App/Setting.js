import { useCallback, useState } from 'react';
import { RNContainer, RNHeader } from '../../Common';
import { RenderSettings, Telegram } from '../../Components';
import { Strings, Svg } from '../../Constants';
import { useDummyData } from '../../Hooks';
import { Functions } from '../../Utils';
import { wp } from '../../Theme';

const size = {
  setting: wp(75),
};

const Setting = ({ navigation }) => {
  const [State, setState] = useState({ showTelegram: false });
  const { setting } = useDummyData();

  const onItemPress = useCallback(async item => {
    if (item?.navigate) {
      return navigation.navigate(item.navigate);
    }
    if (item?.rateUs) {
      return Functions.RateUs({
        onError: () => console.error('Error Rate Us'),
      });
    }
    if (item?.shareApp) {
      return await Functions.ShareApp();
    }
    if (item?.telegram) {
      return setState(p => ({ ...p, showTelegram: true }));
    }
  }, []);

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

        <Telegram
          visible={State.showTelegram}
          onClose={() => setState(p => ({ ...p, showTelegram: false }))}
        />
      </RNHeader>
    </RNContainer>
  );
};

export default Setting;
