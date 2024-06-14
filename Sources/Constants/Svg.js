import { wp } from '../Theme';

import Chinese from '../Assets/SVG/chinese.svg';
import English from '../Assets/SVG/english.svg';
import French from '../Assets/SVG/french.svg';
import Germany from '../Assets/SVG/germany.svg';
import Hindi from '../Assets/SVG/hindi.svg';
import Indonesian from '../Assets/SVG/indonesian.svg';
import Italian from '../Assets/SVG/italian.svg';
import Japanese from '../Assets/SVG/japanese.svg';
import Portuguese from '../Assets/SVG/portuguese.svg';
import Russian from '../Assets/SVG/russian.svg';
import Korean from '../Assets/SVG/korean.svg';
import Spanish from '../Assets/SVG/spanish.svg';
import Turkish from '../Assets/SVG/turkish.svg';
import Arabic from '../Assets/SVG/arabic.svg';
import Start from '../Assets/SVG/start.svg';
import RateUs from '../Assets/SVG/rateus.svg';
import Share from '../Assets/SVG/share.svg';
import Privacy from '../Assets/SVG/privacy.svg';
import Onboarding0 from '../Assets/SVG/onboarding_0.svg';
import Onboarding1 from '../Assets/SVG/onboarding_1.svg';
import Onboarding2 from '../Assets/SVG/onboarding_2.svg';
import Onboarding3 from '../Assets/SVG/onboarding_3.svg';
import Terms0 from '../Assets/SVG/terms_0.svg';
import Terms1 from '../Assets/SVG/terms_1.svg';
import Terms2 from '../Assets/SVG/terms_2.svg';
import Terms3 from '../Assets/SVG/terms_3.svg';
import Terms4 from '../Assets/SVG/terms_4.svg';
import Back from '../Assets/SVG/back.svg';
import Setting from '../Assets/SVG/setting.svg';
import SplashScreenSvg from '../Assets/SVG/splashScreen.svg';
import True from '../Assets/SVG/true.svg';

const size = wp(10);

const Svg = {
  Chinese: p => <Chinese width={size} height={size} {...p} />,
  English: p => <English width={size} height={size} {...p} />,
  French: p => <French width={size} height={size} {...p} />,
  Germany: p => <Germany width={size} height={size} {...p} />,
  Hindi: p => <Hindi width={size} height={size} {...p} />,
  Indonesian: p => <Indonesian width={size} height={size} {...p} />,
  Italian: p => <Italian width={size} height={size} {...p} />,
  Japanese: p => <Japanese width={size} height={size} {...p} />,
  Portuguese: p => <Portuguese width={size} height={size} {...p} />,
  Russian: p => <Russian width={size} height={size} {...p} />,
  Korean: p => <Korean width={size} height={size} {...p} />,
  Spanish: p => <Spanish width={size} height={size} {...p} />,
  Turkish: p => <Turkish width={size} height={size} {...p} />,
  Arabic: p => <Arabic width={size} height={size} {...p} />,
  Start: p => <Start width={size} height={size} {...p} />,
  RateUs: p => <RateUs width={size} height={size} {...p} />,
  Share: p => <Share width={size} height={size} {...p} />,
  Privacy: p => <Privacy width={size} height={size} {...p} />,
  Onboarding0: p => <Onboarding0 width={size} height={size} {...p} />,
  Onboarding1: p => <Onboarding1 width={size} height={size} {...p} />,
  Onboarding2: p => <Onboarding2 width={size} height={size} {...p} />,
  Onboarding3: p => <Onboarding3 width={size} height={size} {...p} />,
  Terms0: p => <Terms0 width={size} height={size} {...p} />,
  Terms1: p => <Terms1 width={size} height={size} {...p} />,
  Terms2: p => <Terms2 width={size} height={size} {...p} />,
  Terms3: p => <Terms3 width={size} height={size} {...p} />,
  Terms4: p => <Terms4 width={size} height={size} {...p} />,
  Back: p => <Back width={size} height={size} {...p} />,
  Setting: p => <Setting width={size} height={size} {...p} />,
  SplashScreenSvg: p => <SplashScreenSvg width={size} height={size} {...p} />,
  True: p => <True width={size} height={size} {...p} />,
};

export default Svg;
