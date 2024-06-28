import { useEffect, useRef } from 'react';
import Splash from 'react-native-splash-screen';
import { AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { getAdData } from '../Redux/ExtraReducers';
import {
  AboutUs,
  ContactUs,
  Details,
  HelpAndFeedback,
  Html,
  Langugage,
  Onboarding,
  Setting,
  SmartWays,
  SplashScreen,
  Terms,
  Welcome,
} from '../Screens';
import { useGoogleAds } from '../Hooks';

const Stack = createStackNavigator();

const Routes = () => {
  const { adData } = useSelector(({ UserReducer }) => UserReducer);
  const dispatch = useDispatch();
  const { showAppOpenAd } = useGoogleAds();
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        showAppOpenAd();
      }
      appState.current = nextAppState;
    });
    return () => subscription.remove();
  }, [adData]);

  useEffect(() => {
    dispatch(getAdData());
    Splash.hide();
  }, []);

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
        <Stack.Screen name={NavRoutes.Details} component={Details} />
        <Stack.Screen name={NavRoutes.Html} component={Html} />
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
