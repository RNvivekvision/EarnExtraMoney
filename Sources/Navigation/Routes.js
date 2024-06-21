import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import {
  AboutUs,
  ContactUs,
  HelpAndFeedback,
  Langugage,
  LevelUp,
  Onboarding,
  OnlineEarning,
  OtherPassiveIncome,
  PassiveIncome,
  Setting,
  SmartWays,
  SplashScreen,
  Terms,
  Welcome,
} from '../Screens';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={NavConfigs.screenOptions}>
        <Stack.Screen name={NavRoutes.SplashScreen} component={SplashScreen} />
        {/* Auth */}
        <Stack.Screen name={NavRoutes.OnBoarding} component={Onboarding} />
        <Stack.Screen name={NavRoutes.Terms} component={Terms} />
        <Stack.Screen name={NavRoutes.Langugage} component={Langugage} />

        {/* App */}
        <Stack.Screen name={NavRoutes.Welcome} component={Welcome} />
        <Stack.Screen name={NavRoutes.SmartWays} component={SmartWays} />
        <Stack.Screen
          name={NavRoutes.PassiveIncome}
          component={PassiveIncome}
        />
        <Stack.Screen
          name={NavRoutes.OtherPassiveIncome}
          component={OtherPassiveIncome}
        />
        <Stack.Screen
          name={NavRoutes.OnlineEarning}
          component={OnlineEarning}
        />
        <Stack.Screen name={NavRoutes.LevelUp} component={LevelUp} />
        <Stack.Screen name={NavRoutes.Setting} component={Setting} />
        <Stack.Screen
          name={NavRoutes.HelpAndFeedback}
          component={HelpAndFeedback}
        />
        <Stack.Screen name={NavRoutes.ContactUs} component={ContactUs} />
        <Stack.Screen name={NavRoutes.AboutUs} component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
