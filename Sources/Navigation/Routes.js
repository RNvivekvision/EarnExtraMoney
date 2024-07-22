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
  CompareLoans,
  ContactUs,
  CurrencyConversion,
  Details,
  DiscountCalculator,
  EMI,
  EquityLinkedScheme,
  FAQ,
  FixedDeposit,
  HelpAndFeedback,
  Langugage,
  LoanEligibility,
  Lumpsum,
  MarginCalculator,
  MarginWithSales,
  MarkupCalculator,
  Onboarding,
  OperatingMargin,
  PriceCalculator,
  PublicProvidentFund,
  RecurringDeposit,
  SimpleAndCompound,
  SIP,
  SplashScreen,
  SWP,
  TaxCalculation,
  Terms,
  Theory,
  Welcome,
} from '../Screens';
import { useGoogleAds } from '../Hooks';
import Drawer from './Drawer';

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
        <Stack.Screen name={NavRoutes.SmartWays} component={Drawer} />
        <Stack.Screen name={NavRoutes.EMI} component={EMI} />
        <Stack.Screen
          name={NavRoutes.LoanEligibility}
          component={LoanEligibility}
        />
        <Stack.Screen name={NavRoutes.CompareLoans} component={CompareLoans} />
        <Stack.Screen
          name={NavRoutes.TaxCalculation}
          component={TaxCalculation}
        />
        <Stack.Screen name={NavRoutes.Details} component={Details} />
        <Stack.Screen
          name={NavRoutes.HelpAndFeedback}
          component={HelpAndFeedback}
        />
        <Stack.Screen name={NavRoutes.ContactUs} component={ContactUs} />
        <Stack.Screen name={NavRoutes.AboutUs} component={AboutUs} />
        <Stack.Screen name={NavRoutes.Lumpsum} component={Lumpsum} />
        <Stack.Screen name={NavRoutes.SIP} component={SIP} />
        <Stack.Screen name={NavRoutes.SWP} component={SWP} />
        <Stack.Screen name={NavRoutes.Theory} component={Theory} />
        <Stack.Screen name={NavRoutes.FAQ} component={FAQ} />
        <Stack.Screen name={NavRoutes.FixedDeposit} component={FixedDeposit} />
        <Stack.Screen
          name={NavRoutes.DiscountCalculator}
          component={DiscountCalculator}
        />
        <Stack.Screen
          name={NavRoutes.PriceCalculator}
          component={PriceCalculator}
        />
        <Stack.Screen
          name={NavRoutes.MarginCalculator}
          component={MarginCalculator}
        />
        <Stack.Screen
          name={NavRoutes.MarkupCalculator}
          component={MarkupCalculator}
        />
        <Stack.Screen
          name={NavRoutes.OperatingMargin}
          component={OperatingMargin}
        />
        <Stack.Screen
          name={NavRoutes.MarginWithSales}
          component={MarginWithSales}
        />
        <Stack.Screen
          name={NavRoutes.RecurringDeposit}
          component={RecurringDeposit}
        />
        <Stack.Screen
          name={NavRoutes.PublicProvidentFund}
          component={PublicProvidentFund}
        />
        <Stack.Screen
          name={NavRoutes.SimpleAndCompound}
          component={SimpleAndCompound}
        />
        <Stack.Screen
          name={NavRoutes.CurrencyConversion}
          component={CurrencyConversion}
        />
        <Stack.Screen
          name={NavRoutes.EquityLinkedScheme}
          component={EquityLinkedScheme}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
