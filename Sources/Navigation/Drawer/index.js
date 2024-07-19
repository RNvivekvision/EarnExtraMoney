import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavRoutes from '../NavRoutes';
import NavConfigs from '../NavConfigs';
import DrawerContent from './DrawerContent';
import { SmartWays } from '../../Screens';

const { Navigator, Screen } = createDrawerNavigator();

const Drawer = () => {
  return (
    <Navigator
      screenOptions={NavConfigs.drawerOptions}
      drawerContent={p => <DrawerContent {...p} />}>
      <Screen name={NavRoutes.Drawer} component={SmartWays} />
    </Navigator>
  );
};

export default Drawer;
