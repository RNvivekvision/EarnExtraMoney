import { Alert, Linking, Platform, Share } from 'react-native';
import Rate, { AndroidMarket } from 'react-native-rate';
import AsyncStorage from '@react-native-async-storage/async-storage';

const isDev = __DEV__;
const androidPackage = 'com.earn.money';
const iosAppId = '6505100117';
const appLink = Platform.select({
  android: `https://play.google.com/store/apps/details?id=${androidPackage}`,
  ios: `https://apps.apple.com/in/app/id${iosAppId}`,
});
const splited = appLink.split('/');
const AppleAppID = splited[splited.length - 1].substring(2);

const ALERT = ({ Title, Text, Buttons }) => Alert.alert(Title, Text, Buttons);
const wait = ms => new Promise(r => setTimeout(r, ms));
const OpenUrl = url => Linking.openURL(url);

const setAppData = async data => {
  const previousValue = await getAppData();
  if (previousValue) {
    await AsyncStorage.setItem(
      'appdata',
      JSON.stringify({ ...previousValue, ...data }),
    );
  } else {
    await AsyncStorage.setItem('appdata', JSON.stringify(data));
  }
};

const getAppData = async () => {
  const value = await AsyncStorage.getItem('appdata');
  return JSON.parse(value);
};

const RateUs = ({ onSuccess, onError } = {}) => {
  const options = {
    AppleAppID: AppleAppID,
    GooglePackageName: androidPackage,
    AmazonPackageName: androidPackage,
    preferredAndroidMarket: AndroidMarket.Google,
    preferInApp: true,
    openAppStoreIfInAppFails: true,
    fallbackPlatformURL: appLink,
    inAppDelay: 1000,
  };
  Rate.rate(options, (success, error) => {
    if (error) return onError?.(error);
    return onSuccess?.(success);
  });
};

const ShareApp = async ({ title, message, url } = {}) => {
  const Title = 'Earn Extra Money';
  const Message = `Share ${Title} app to your friends. by clicking the following url`;

  await Share.share({
    title: title ?? Title,
    message: message ?? Message,
    url: url ?? appLink,
  });
};

const formatDate = ({ date }) => {
  const d = new Date(date);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[d.getMonth()];
  const day = d.getDate();
  const year = d.getFullYear();
  if (day && month && year) {
    return `${day || ''} ${month || ''} ${year || ''}`;
  }
};

const EMI = ({ principalAmount, interestRate, tenureMonths }) => {
  const monthlyInterestRate = parseInt(interestRate) / 12 / 100;
  const principalAmountNum = parseInt(principalAmount);
  return toFixed(
    (principalAmountNum *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, tenureMonths)) /
      (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1),
  );
};

const toFixed = (amount, digit = 2) => {
  if (!amount) return 0;
  return parseFloat(amount).toFixed(digit);
};

const loanTenure = (startDate, tenure) => {
  const newDate = new Date(startDate);
  newDate.setMonth(newDate.getMonth() + tenure);
  return formatDate({ date: newDate });
};

const tenure = (tenure, isYear) =>
  isYear ? parseInt(tenure) * 12 : parseInt(tenure);

const Functions = {
  isDev,
  ALERT,
  OpenUrl,
  setAppData,
  getAppData,
  wait,
  RateUs,
  ShareApp,
  formatDate,
  EMI,
  toFixed,
  loanTenure,
  tenure,
};

export default Functions;
