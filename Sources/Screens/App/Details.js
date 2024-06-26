import { View } from 'react-native';
import { LOCards, LOHtml } from '../../Components';
import { NavRoutes } from '../../Navigation';
import { RNStyles } from '../../Common';
import { useState } from 'react';

const Details = ({ navigation, route }) => {
  const { title, data } = route.params;
  const [State, setState] = useState({ showHtml: false, html: null });

  const onItemPress = item => {
    if (item?.data?.length > 0) {
      navigation.push(NavRoutes.Details, {
        title: item.title,
        data: item.data,
      });
    } else {
      setState(p => ({ ...p, showHtml: true, html: item.html }));
    }
  };

  return (
    <View style={RNStyles.container}>
      <LOCards title={title} data={data} onPress={onItemPress} />
      <LOHtml
        visible={State.showHtml}
        onClose={() => setState(p => ({ ...p, showHtml: false }))}
        html={State.html}
      />
    </View>
  );
};

export default Details;
