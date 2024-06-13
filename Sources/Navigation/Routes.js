import { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import { Onboarding, SplashScreen } from '../Screens';
import Splash from 'react-native-splash-screen';

const Stack = createStackNavigator();

const Routes = () => {
  useEffect(() => {
    Splash.hide();
  }, []);

  const Screens = useCallback(() => {
    return (
      <Stack.Navigator screenOptions={NavConfigs.screenOptions}>
        {/* <Stack.Screen name={NavRoutes.SplashScreen} component={SplashScreen} /> */}
        <Stack.Screen name={NavRoutes.OnBoarding} component={Onboarding} />
      </Stack.Navigator>
    );
  }, []);

  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
};

export default Routes;
