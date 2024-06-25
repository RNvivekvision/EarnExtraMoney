import { wp } from '../Theme';

import AboutUs from '../Assets/SVG/aboutUs.svg';
import AppIconSvg from '../Assets/SVG/appIcon.svg';
import Back from '../Assets/SVG/back.svg';
import ContactUs from '../Assets/SVG/contactUs.svg';
import Games from '../Assets/SVG/games.svg';
import HelpAndFeedback from '../Assets/SVG/helpAndFeedback.svg';
import PrivacyPolicy from '../Assets/SVG/privacyPolicy.svg';
import Quiz from '../Assets/SVG/quiz.svg';
import RateUsSetting from '../Assets/SVG/rateUs_setting.svg';
import Setting from '../Assets/SVG/setting.svg';
import SettingIcon from '../Assets/SVG/settingIcon.svg';
import ShareSetting from '../Assets/SVG/share_setting.svg';
import Share from '../Assets/SVG/share.svg';
import SplashScreenSvg from '../Assets/SVG/splashScreen.svg';
import True from '../Assets/SVG/true.svg';

const size = wp(10);

const Svg = {
  AboutUs: p => <AboutUs width={size} height={size} {...p} />,
  AppIconSvg: p => <AppIconSvg width={size} height={size} {...p} />,
  Back: p => <Back width={size} height={size} {...p} />,
  ContactUs: p => <ContactUs width={size} height={size} {...p} />,
  Games: p => <Games width={size} height={size} {...p} />,
  HelpAndFeedback: p => <HelpAndFeedback width={size} height={size} {...p} />,
  PrivacyPolicy: p => <PrivacyPolicy width={size} height={size} {...p} />,
  Quiz: p => <Quiz width={size} height={size} {...p} />,
  RateUsSetting: p => <RateUsSetting width={size} height={size} {...p} />,
  Setting: p => <Setting width={size} height={size} {...p} />,
  SettingIcon: p => <SettingIcon width={size} height={size} {...p} />,
  ShareSetting: p => <ShareSetting width={size} height={size} {...p} />,
  Share: p => <Share width={size} height={size} {...p} />,
  SplashScreenSvg: p => <SplashScreenSvg width={size} height={size} {...p} />,
  True: p => <True width={size} height={size} {...p} />,
};

export default Svg;
