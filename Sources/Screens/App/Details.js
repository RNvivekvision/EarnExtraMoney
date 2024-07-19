import { useState } from 'react';
import { LOCards, LOHtml } from '../../Components';
import { NavRoutes } from '../../Navigation';
import { useUserClick } from '../../Hooks';

const Details = ({ navigation, route }) => {
  const [State, setState] = useState({ showHtml: false, html: null });
  const { incrementCount } = useUserClick();
  const { title, data } = route.params;

  const onItemPress = async item => {
    await incrementCount();
    if (item?.data?.length > 0) {
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
      <LOCards title={title} data={data} onPress={onItemPress} />
      <LOHtml
        visible={State.showHtml}
        html={State.html}
        onClose={() => setState(p => ({ ...p, showHtml: false }))}
      />
    </>
  );
};

export default Details;
