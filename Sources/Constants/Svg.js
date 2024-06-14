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
};

export default Svg;
