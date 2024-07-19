import { useState } from 'react';
import { EACards, EAHtml } from '../../Components';
import { NavRoutes } from '../../Navigation';
import { useUserClick } from '../../Hooks';

const Details = ({ navigation, route }) => {
  const [State, setState] = useState({ showHtml: false, html: null });
  const { incrementCount } = useUserClick();
  const { title, data } = route.params;

  const onItemPress = async item => {
    if (item?.data?.length > 0) {
      await incrementCount();
      return navigation.push(NavRoutes.Details, {
        title: item.title,
        data: item.data,
        html: item?.html,
      });
    }
    setState(p => ({ ...p, showHtml: true, html: item?.html }));
  };

  return (
    <>
      <EACards title={title} data={data} onPress={onItemPress} />
      <EAHtml
        visible={State.showHtml}
        html={State.html}
        onClose={() => setState(p => ({ ...p, showHtml: false }))}
      />
    </>
  );
};

export default Details;
