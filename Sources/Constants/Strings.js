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

// const ar = Object.keys(Arabic);
// const zh = Object.keys(Chinese);
// const en = Object.keys(English);
// const fr = Object.keys(French);
// const de = Object.keys(German);
// const hi = Object.keys(Hindi);
// const id = Object.keys(Indonesian);
// const it = Object.keys(Italian);
// const ja = Object.keys(Japanese);
// const ko = Object.keys(Korean);
// const pt = Object.keys(Portuguese);
// const ru = Object.keys(Russian);
// const es = Object.keys(Spanish);
// const tr = Object.keys(Turkish);
// console.log(
//   JSON.stringify(
//     {
//       ar: ar.length,
//       zh: zh.length,
//       en: en.length,
//       fr: fr.length,
//       de: de.length,
//       hi: hi.length,
//       id: id.length,
//       it: it.length,
//       ja: ja.length,
//       ko: ko.length,
//       pt: pt.length,
//       ru: ru.length,
//       es: es.length,
//       tr: tr.length,
//     },
//     null,
//     2,
//   ),
// );

export default Strings;
