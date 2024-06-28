import { wp } from '../Theme';

import AppIconSvg from '../Assets/SVG/appIcon.svg';
import Setting from '../Assets/SVG/setting.svg';
import SplashScreenSvg from '../Assets/SVG/splashScreen.svg';
import True from '../Assets/SVG/true.svg';

const size = wp(10);

const Svg = {
  True: p => <True width={size} height={size} {...p} />,
  SplashScreenSvg: p => <SplashScreenSvg width={size} height={size} {...p} />,
  AppIconSvg: p => <AppIconSvg width={size} height={size} {...p} />,
  Setting: p => <Setting width={size} height={size} {...p} />,
};

export default Svg;
