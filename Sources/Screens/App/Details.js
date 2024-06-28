import { useCallback } from 'react';
import { LOCards } from '../../Components';
import { NavRoutes } from '../../Navigation';

const Details = ({ navigation, route }) => {
  const { title, data } = route.params;

  const onItemPress = useCallback(item => {
    const screenName =
      item?.data?.length > 0 ? NavRoutes.Details : NavRoutes.Html;
    navigation.push(screenName, {
      title: item.title,
      data: item.data,
      html: item?.html,
    });
  }, []);

  return <LOCards title={title} data={data} onPress={onItemPress} />;
};

export default Details;
