import { useState } from 'react';
import { RNContainer, RNHeader } from '../../Common';
import { RenderSettings, Telegram } from '../../Components';
import { Strings, Svg } from '../../Constants';
import { useDummyData, useUserClick } from '../../Hooks';
import { DummyData, Functions } from '../../Utils';
import { wp } from '../../Theme';
import { useSelector } from 'react-redux';

const size = {
  setting: wp(75),
};

const Setting = ({ navigation }) => {
  const [State, setState] = useState({ showTelegram: false });
  const { setting } = useDummyData();
  const { adData } = useSelector(({ UserReducer }) => UserReducer);
  const { incrementCount } = useUserClick();

  const url = adData?.appExtraData?.url;

  const onItemPress = async item => {
    if (item?.link) {
      return await Functions.OpenUrl(url);
    }
    if (item?.policy) {
      return await Functions.OpenUrl(DummyData.privacyPolicy);
    }
    if (item?.telegram) {
      return setState(p => ({ ...p, showTelegram: true }));
    }

    await incrementCount();

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
  };

  const onTelegramClose = async () => {
    setState(p => ({ ...p, showTelegram: false }));
  };

  const onTelegramPress = async () => {
    onTelegramClose();
    await Functions.OpenUrl(DummyData.telegram);
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
        <Telegram
          visible={State.showTelegram}
          onClose={onTelegramClose}
          onPress={onTelegramPress}
        />
      </RNHeader>
    </RNContainer>
  );
};

export default Setting;
