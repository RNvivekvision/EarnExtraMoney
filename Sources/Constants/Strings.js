import LocalizedStrings from 'react-native-localization';
import {
  Arabic,
  Chinese,
  English,
  French,
  German,
  Hindi,
  Indonesian,
  Italian,
  Japanese,
  Korean,
  Portuguese,
  Russian,
  Spanish,
  Turkish,
} from './Languages';

const Strings = new LocalizedStrings({
  ar: Arabic,
  zh: Chinese,
  en: English,
  fr: French,
  de: German,
  hi: Hindi,
  id: Indonesian,
  it: Italian,
  ja: Japanese,
  ko: Korean,
  pt: Portuguese,
  ru: Russian,
  es: Spanish,
  tr: Turkish,
});

export default Strings;
