import { TransitionPresets } from '@react-navigation/stack';
const screenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};
const drawerOptions = {
  ...screenOptions,
  drawerType: 'front',
  drawerStyle: {
    width: '75%',
  },
};
const NavConfigs = { drawerOptions, screenOptions };
export default NavConfigs;
