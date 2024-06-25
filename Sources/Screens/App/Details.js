import { LOCards } from '../../Components';
import { NavRoutes } from '../../Navigation';

const Details = ({ navigation, route }) => {
  console.log('route -> ', JSON.stringify(route, null, 2));
  const { title, data } = route.params;

  const onItemPress = item => {
    console.log('item -> ', JSON.stringify(item, null, 2));
    navigation.push(NavRoutes.Details, {
      title: item.title,
      data: item.data,
    });
  };
  return <LOCards title={title} data={data} onPress={onItemPress} />;
};

export default Details;
