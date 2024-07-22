import { Strings, Images, Htmls } from '../Constants';
import { NavRoutes } from '../Navigation';

const useDummyData = () => {
  return {
    onboarding: [
      {
        image: Images.onboarding_0,
        title: Strings.onboarding0_title,
        text1: Strings.onboarding0_text1,
        text2: Strings.onboarding0_text2,
      },
      {
        image: Images.onboarding_1,
        title: Strings.onboarding1_title,
        text1: Strings.onboarding1_text1,
        text2: Strings.onboarding1_text2,
      },
      {
        image: Images.onboarding_2,
        title: Strings.onboarding2_title,
        text1: Strings.onboarding2_text1,
        text2: Strings.onboarding2_text2,
      },
      {
        image: Images.onboarding_3,
        text2: Strings.onboarding3_text2,
      },
    ],
    termsOfUse: [
      {
        icon: Images.terms_0,
        title: Strings.Terms,
        text: Strings.terms_text_0,
      },
      {
        icon: Images.terms_1,
        title: Strings.ContentLiability,
        text: Strings.terms_text_1,
      },
      {
        icon: Images.terms_2,
        title: Strings.ReservationofRights,
        text: Strings.terms_text_2,
      },
      {
        icon: Images.terms_3,
        title: Strings.Disclaimer,
        text: Strings.terms_text_3,
      },
    ],
    languages: [
      {
        icon: Images.english,
        title: Strings.English,
        value: 'en',
      },
      {
        icon: Images.german,
        title: Strings.German,
        value: 'de',
      },
      {
        icon: Images.hindi,
        title: Strings.Hindi,
        value: 'hi',
      },
      {
        icon: Images.french,
        title: Strings.French,
        value: 'fr',
      },
      {
        icon: Images.portuguese,
        title: Strings.Portuguese,
        value: 'pt',
      },
      {
        icon: Images.indonesia,
        title: Strings.Indonesian,
        value: 'id',
      },
      {
        icon: Images.italian,
        title: Strings.Italian,
        value: 'it',
      },
      {
        icon: Images.spanish,
        title: Strings.Spanish,
        value: 'es',
      },
      {
        icon: Images.russian,
        title: Strings.Russian,
        value: 'ru',
      },
      {
        icon: Images.chinese,
        title: Strings.Chinese,
        value: 'zh',
      },
      {
        icon: Images.japanese,
        title: Strings.Japanese,
        value: 'ja',
      },
      {
        icon: Images.turkish,
        title: Strings.Turkish,
        value: 'tr',
      },
      {
        icon: Images.korean,
        title: Strings.Korean,
        value: 'ko',
      },
      {
        icon: Images.arabic,
        title: Strings.Arabic,
        value: 'ar',
      },
    ],
    smartWays: [
      {
        icon: Images.smartway_0,
        title: Strings.smartWay_title_0,
        text: Strings.smartWay_text_0,
        data: [
          {
            icon: Images.passive_0,
            title: Strings.passive_0_title,
            text: [
              Strings.passive_0_text_0,
              Strings.passive_0_text_1,
              Strings.passive_0_text_2,
            ],
            data: [
              {
                icon: Images.passive_0_0,
                title: Strings.passive_0_0_title,
                text: [Strings.passive_0_0_text_0, Strings.passive_0_0_text_1],
                html: Htmls.passive_0_0,
              },
              {
                icon: Images.passive_0_1,
                title: Strings.passive_0_1_title,
                text: [Strings.passive_0_1_text_0, Strings.passive_0_1_text_1],
                html: Htmls.passive_0_1,
              },
              {
                icon: Images.passive_0_2,
                title: Strings.passive_0_2_title,
                text: [Strings.passive_0_2_text_0, Strings.passive_0_2_text_1],
                html: Htmls.passive_0_2,
              },
            ],
          },
          {
            icon: Images.passive_1,
            title: Strings.passive_1_title,
            text: [
              Strings.passive_1_text_0,
              Strings.passive_1_text_1,
              Strings.passive_1_text_2,
            ],
            data: [
              {
                icon: Images.passive_1_0,
                title: Strings.passive_1_0_title,
                text: [Strings.passive_1_0_text_0, Strings.passive_1_0_text_1],
                html: Htmls.passive_1_0,
              },
              {
                icon: Images.passive_1_1,
                title: Strings.passive_1_1_title,
                text: [Strings.passive_1_1_text_0, Strings.passive_1_1_text_1],
                html: Htmls.passive_1_1,
              },
              {
                icon: Images.passive_1_2,
                title: Strings.passive_1_2_title,
                text: [Strings.passive_1_2_text_0, Strings.passive_1_2_text_1],
                html: Htmls.passive_1_2,
              },
              {
                icon: Images.passive_1_3,
                title: Strings.passive_1_3_title,
                text: [Strings.passive_1_3_text_0, Strings.passive_1_3_text_1],
                html: Htmls.passive_1_3,
              },
            ],
          },
          {
            icon: Images.passive_2,
            title: Strings.passive_2_title,
            text: [
              Strings.passive_2_text_0,
              Strings.passive_2_text_1,
              Strings.passive_2_text_2,
            ],
            data: [
              {
                icon: Images.passive_2_0,
                title: Strings.passive_2_0_title,
                text: [Strings.passive_2_0_text_0, Strings.passive_2_0_text_1],
                html: Htmls.passive_2_0,
              },
              {
                icon: Images.passive_2_1,
                title: Strings.passive_2_1_title,
                text: [Strings.passive_2_1_text_0, Strings.passive_2_1_text_1],
                html: Htmls.passive_2_1,
              },
              {
                icon: Images.passive_2_2,
                title: Strings.passive_2_2_title,
                text: [Strings.passive_2_2_text_0, Strings.passive_2_2_text_1],
                html: Htmls.passive_2_2,
              },
              {
                icon: Images.passive_2_3,
                title: Strings.passive_2_3_title,
                text: [Strings.passive_2_3_text_0, Strings.passive_2_3_text_1],
                html: Htmls.passive_2_3,
              },
              {
                icon: Images.passive_2_4,
                title: Strings.passive_2_4_title,
                text: [Strings.passive_2_4_text_0, Strings.passive_2_4_text_1],
                html: Htmls.passive_2_4,
              },
            ],
          },
          {
            icon: Images.passive_3,
            title: Strings.passive_3_title,
            text: [
              Strings.passive_3_text_0,
              Strings.passive_3_text_1,
              Strings.passive_3_text_2,
            ],
            data: [
              {
                icon: Images.passive_3_0,
                title: Strings.passive_3_0_title,
                text: [Strings.passive_3_0_text_0, Strings.passive_3_0_text_1],
                html: Htmls.passive_3_0,
              },
              {
                icon: Images.passive_3_1,
                title: Strings.passive_3_1_title,
                text: [Strings.passive_3_1_text_0, Strings.passive_3_1_text_1],
                html: Htmls.passive_3_1,
              },
              {
                icon: Images.passive_3_2,
                title: Strings.passive_3_2_title,
                text: [Strings.passive_3_2_text_0, Strings.passive_3_2_text_1],
                html: Htmls.passive_3_2,
              },
            ],
          },
          {
            icon: Images.passive_4,
            title: Strings.passive_4_title,
            text: [
              Strings.passive_4_text_0,
              Strings.passive_4_text_1,
              Strings.passive_4_text_2,
            ],
            data: [
              {
                icon: Images.passive_4_0,
                title: Strings.passive_4_0_title,
                text: [Strings.passive_4_0_text_0, Strings.passive_4_0_text_1],
                html: Htmls.passive_4_0,
              },
              {
                icon: Images.passive_4_1,
                title: Strings.passive_4_1_title,
                text: [Strings.passive_4_1_text_0, Strings.passive_4_1_text_1],
                html: Htmls.passive_4_1,
              },
              {
                icon: Images.passive_4_2,
                title: Strings.passive_4_2_title,
                text: [Strings.passive_4_2_text_0, Strings.passive_4_2_text_1],
                html: Htmls.passive_4_2,
              },
            ],
          },
          {
            icon: Images.passive_5,
            title: Strings.passive_5_title,
            text: [
              Strings.passive_5_text_0,
              Strings.passive_5_text_1,
              Strings.passive_5_text_2,
            ],
            data: [
              {
                icon: Images.passive_5_0,
                title: Strings.passive_5_0_title,
                text: [Strings.passive_5_0_text_0, Strings.passive_5_0_text_1],
                html: Htmls.passive_5_0,
              },
              {
                icon: Images.passive_5_1,
                title: Strings.passive_5_1_title,
                text: [Strings.passive_5_1_text_0, Strings.passive_5_1_text_1],
                html: Htmls.passive_5_1,
              },
              {
                icon: Images.passive_5_2,
                title: Strings.passive_5_2_title,
                text: [Strings.passive_5_2_text_0, Strings.passive_5_2_text_1],
                html: Htmls.passive_5_2,
              },
              {
                icon: Images.passive_5_3,
                title: Strings.passive_5_3_title,
                text: [Strings.passive_5_3_text_0, Strings.passive_5_3_text_1],
                html: Htmls.passive_5_3,
              },
              {
                icon: Images.passive_5_4,
                title: Strings.passive_5_4_title,
                text: [Strings.passive_5_4_text_0, Strings.passive_5_4_text_1],
                html: Htmls.passive_5_4,
              },
              {
                icon: Images.passive_5_5,
                title: Strings.passive_5_5_title,
                text: [Strings.passive_5_5_text_0, Strings.passive_5_5_text_1],
                html: Htmls.passive_5_5,
              },
            ],
          },
          {
            icon: Images.passive_6,
            title: Strings.passive_6_title,
            text: [
              Strings.passive_6_text_0,
              Strings.passive_6_text_1,
              Strings.passive_6_text_2,
            ],
            data: [
              {
                icon: Images.passive_6_0,
                title: Strings.passive_6_0_title,
                text: [Strings.passive_6_0_text_0, Strings.passive_6_0_text_1],
                html: Htmls.passive_6_0,
              },
              {
                icon: Images.passive_6_1,
                title: Strings.passive_6_1_title,
                text: [Strings.passive_6_1_text_0, Strings.passive_6_1_text_1],
                html: Htmls.passive_6_1,
              },
              {
                icon: Images.passive_6_2,
                title: Strings.passive_6_2_title,
                text: [Strings.passive_6_2_text_0, Strings.passive_6_2_text_1],
                html: Htmls.passive_6_2,
              },
              {
                icon: Images.passive_6_3,
                title: Strings.passive_6_3_title,
                text: [Strings.passive_6_3_text_0, Strings.passive_6_3_text_1],
                html: Htmls.passive_6_3,
              },
            ],
          },
          {
            icon: Images.passive_7,
            title: Strings.passive_7_title,
            text: [
              Strings.passive_7_text_0,
              Strings.passive_7_text_1,
              Strings.passive_7_text_2,
            ],
            data: [
              {
                icon: Images.passive_7_0,
                title: Strings.passive_7_0_title,
                text: [Strings.passive_7_0_text_0, Strings.passive_7_0_text_1],
                html: Htmls.passive_7_0,
              },
              {
                icon: Images.passive_7_1,
                title: Strings.passive_7_1_title,
                text: [Strings.passive_7_1_text_0, Strings.passive_7_1_text_1],
                html: Htmls.passive_7_1,
              },
            ],
          },
          {
            icon: Images.passive_8,
            title: Strings.passive_8_title,
            text: [
              Strings.passive_8_text_0,
              Strings.passive_8_text_1,
              Strings.passive_8_text_2,
            ],
            data: [
              {
                icon: Images.passive_8_0,
                title: Strings.passive_8_0_title,
                text: [Strings.passive_8_0_text_0, Strings.passive_8_0_text_1],
                html: Htmls.passive_8_0,
              },
              {
                icon: Images.passive_8_1,
                title: Strings.passive_8_1_title,
                text: [Strings.passive_8_1_text_0, Strings.passive_8_1_text_1],
                html: Htmls.passive_8_1,
              },
              {
                icon: Images.passive_8_2,
                title: Strings.passive_8_2_title,
                text: [Strings.passive_8_2_text_0, Strings.passive_8_2_text_1],
                html: Htmls.passive_8_2,
              },
            ],
          },
        ],
      },
      {
        icon: Images.smartway_1,
        title: Strings.smartWay_title_1,
        text: Strings.smartWay_text_1,
        data: [
          {
            icon: Images.otherPassive_0,
            title: Strings.otherPassive_0_title,
            text: [
              Strings.otherPassive_0_text_0,
              Strings.otherPassive_0_text_1,
              Strings.otherPassive_0_text_2,
            ],
            data: [
              {
                icon: Images.otherPassive_0_0,
                title: Strings.otherPassive_0_0_title,
                text: [
                  Strings.otherPassive_0_0_text_0,
                  Strings.otherPassive_0_0_text_1,
                ],
                html: Htmls.otherPassive_0_0,
              },
              {
                icon: Images.otherPassive_0_1,
                title: Strings.otherPassive_0_1_title,
                text: [
                  Strings.otherPassive_0_1_text_0,
                  Strings.otherPassive_0_1_text_1,
                ],
                html: Htmls.otherPassive_0_1,
              },
              {
                icon: Images.otherPassive_0_2,
                title: Strings.otherPassive_0_2_title,
                text: [
                  Strings.otherPassive_0_2_text_0,
                  Strings.otherPassive_0_2_text_1,
                ],
                html: Htmls.otherPassive_0_2,
              },
              {
                icon: Images.otherPassive_0_3,
                title: Strings.otherPassive_0_3_title,
                text: [
                  Strings.otherPassive_0_3_text_0,
                  Strings.otherPassive_0_3_text_1,
                ],
                html: Htmls.otherPassive_0_3,
              },
              {
                icon: Images.otherPassive_0_4,
                title: Strings.otherPassive_0_4_title,
                text: [
                  Strings.otherPassive_0_4_text_0,
                  Strings.otherPassive_0_4_text_1,
                ],
                html: Htmls.otherPassive_0_4,
              },
              {
                icon: Images.otherPassive_0_5,
                title: Strings.otherPassive_0_5_title,
                text: [
                  Strings.otherPassive_0_5_text_0,
                  Strings.otherPassive_0_5_text_1,
                ],
                html: Htmls.otherPassive_0_5,
              },
              {
                icon: Images.otherPassive_0_6,
                title: Strings.otherPassive_0_6_title,
                text: [
                  Strings.otherPassive_0_6_text_0,
                  Strings.otherPassive_0_6_text_1,
                ],
                html: Htmls.otherPassive_0_6,
              },
              {
                icon: Images.otherPassive_0_7,
                title: Strings.otherPassive_0_7_title,
                text: [
                  Strings.otherPassive_0_7_text_0,
                  Strings.otherPassive_0_7_text_1,
                ],
                html: Htmls.otherPassive_0_7,
              },
            ],
          },
          {
            icon: Images.otherPassive_1,
            title: Strings.otherPassive_1_title,
            text: [
              Strings.otherPassive_1_text_0,
              Strings.otherPassive_1_text_1,
              Strings.otherPassive_1_text_2,
            ],
            data: [
              {
                icon: Images.otherPassive_1_0,
                title: Strings.otherPassive_1_0_title,
                text: [
                  Strings.otherPassive_1_0_text_0,
                  Strings.otherPassive_1_0_text_1,
                ],
                html: Htmls.otherPassive_1_0,
              },
              {
                icon: Images.otherPassive_1_1,
                title: Strings.otherPassive_1_1_title,
                text: [
                  Strings.otherPassive_1_1_text_0,
                  Strings.otherPassive_1_1_text_1,
                ],
                html: Htmls.otherPassive_1_1,
              },
              {
                icon: Images.otherPassive_1_2,
                title: Strings.otherPassive_1_2_title,
                text: [
                  Strings.otherPassive_1_2_text_0,
                  Strings.otherPassive_1_2_text_1,
                ],
                html: Htmls.otherPassive_1_2,
              },
              {
                icon: Images.otherPassive_1_3,
                title: Strings.otherPassive_1_3_title,
                text: [
                  Strings.otherPassive_1_3_text_0,
                  Strings.otherPassive_1_3_text_1,
                ],
                html: Htmls.otherPassive_1_3,
              },
              {
                icon: Images.otherPassive_1_4,
                title: Strings.otherPassive_1_4_title,
                text: [
                  Strings.otherPassive_1_4_text_0,
                  Strings.otherPassive_1_4_text_1,
                ],
                html: Htmls.otherPassive_1_4,
              },
            ],
          },
          {
            icon: Images.otherPassive_2,
            title: Strings.otherPassive_2_title,
            text: [
              Strings.otherPassive_2_text_0,
              Strings.otherPassive_2_text_1,
              Strings.otherPassive_2_text_2,
            ],
            data: [
              {
                icon: Images.otherPassive_2_0,
                title: Strings.otherPassive_2_0_title,
                text: [
                  Strings.otherPassive_2_0_text_0,
                  Strings.otherPassive_2_0_text_1,
                ],
                html: Htmls.otherPassive_2_0,
              },
              {
                icon: Images.otherPassive_2_1,
                title: Strings.otherPassive_2_1_title,
                text: [
                  Strings.otherPassive_2_1_text_0,
                  Strings.otherPassive_2_1_text_1,
                ],
                html: Htmls.otherPassive_2_1,
              },
              {
                icon: Images.otherPassive_2_2,
                title: Strings.otherPassive_2_2_title,
                text: [
                  Strings.otherPassive_2_2_text_0,
                  Strings.otherPassive_2_2_text_1,
                ],
                html: Htmls.otherPassive_2_2,
              },
              {
                icon: Images.otherPassive_2_3,
                title: Strings.otherPassive_2_3_title,
                text: [
                  Strings.otherPassive_2_3_text_0,
                  Strings.otherPassive_2_3_text_1,
                ],
                html: Htmls.otherPassive_2_3,
              },
            ],
          },
          {
            icon: Images.otherPassive_3,
            title: Strings.otherPassive_3_title,
            text: [
              Strings.otherPassive_3_text_0,
              Strings.otherPassive_3_text_1,
              Strings.otherPassive_3_text_2,
            ],
            data: [
              {
                icon: Images.otherPassive_3_0,
                title: Strings.otherPassive_3_0_title,
                text: [
                  Strings.otherPassive_3_0_text_0,
                  Strings.otherPassive_3_0_text_1,
                ],
                html: Htmls.otherPassive_3_0,
              },
              {
                icon: Images.otherPassive_3_1,
                title: Strings.otherPassive_3_1_title,
                text: [
                  Strings.otherPassive_3_1_text_0,
                  Strings.otherPassive_3_1_text_1,
                ],
                html: Htmls.otherPassive_3_1,
              },
            ],
          },
          {
            icon: Images.otherPassive_4,
            title: Strings.otherPassive_4_title,
            text: [
              Strings.otherPassive_4_text_0,
              Strings.otherPassive_4_text_1,
              Strings.otherPassive_4_text_2,
            ],
            data: [
              {
                icon: Images.otherPassive_4_0,
                title: Strings.otherPassive_4_0_title,
                text: [
                  Strings.otherPassive_4_0_text_0,
                  Strings.otherPassive_4_0_text_1,
                ],
                html: Htmls.otherPassive_4_0,
              },
              {
                icon: Images.otherPassive_4_1,
                title: Strings.otherPassive_4_1_title,
                text: [
                  Strings.otherPassive_4_1_text_0,
                  Strings.otherPassive_4_1_text_1,
                ],
                html: Htmls.otherPassive_4_1,
              },
              {
                icon: Images.otherPassive_4_2,
                title: Strings.otherPassive_4_2_title,
                text: [
                  Strings.otherPassive_4_2_text_0,
                  Strings.otherPassive_4_2_text_1,
                ],
                html: Htmls.otherPassive_4_2,
              },
            ],
          },
          {
            icon: Images.otherPassive_5,
            title: Strings.otherPassive_5_title,
            text: [
              Strings.otherPassive_5_text_0,
              Strings.otherPassive_5_text_1,
              Strings.otherPassive_5_text_2,
            ],
            data: [
              {
                icon: Images.otherPassive_5_0,
                title: Strings.otherPassive_5_0_title,
                text: [
                  Strings.otherPassive_5_0_text_0,
                  Strings.otherPassive_5_0_text_1,
                ],
                html: Htmls.otherPassive_5_0,
              },
              {
                icon: Images.otherPassive_5_1,
                title: Strings.otherPassive_5_1_title,
                text: [
                  Strings.otherPassive_5_1_text_0,
                  Strings.otherPassive_5_1_text_1,
                ],
                html: Htmls.otherPassive_5_1,
              },
              {
                icon: Images.otherPassive_5_2,
                title: Strings.otherPassive_5_2_title,
                text: [
                  Strings.otherPassive_5_2_text_0,
                  Strings.otherPassive_5_2_text_1,
                ],
                html: Htmls.otherPassive_5_2,
              },
              {
                icon: Images.otherPassive_5_3,
                title: Strings.otherPassive_5_3_title,
                text: [
                  Strings.otherPassive_5_3_text_0,
                  Strings.otherPassive_5_3_text_1,
                ],
                html: Htmls.otherPassive_5_3,
              },
            ],
          },
          {
            icon: Images.otherPassive_6,
            title: Strings.otherPassive_6_title,
            text: [
              Strings.otherPassive_6_text_0,
              Strings.otherPassive_6_text_1,
              Strings.otherPassive_6_text_2,
            ],
            data: [
              {
                icon: Images.otherPassive_6_0,
                title: Strings.otherPassive_6_0_title,
                text: [
                  Strings.otherPassive_6_0_text_0,
                  Strings.otherPassive_6_0_text_1,
                ],
                html: Htmls.otherPassive_6_0,
              },
              {
                icon: Images.otherPassive_6_1,
                title: Strings.otherPassive_6_1_title,
                text: [
                  Strings.otherPassive_6_1_text_0,
                  Strings.otherPassive_6_1_text_1,
                ],
                html: Htmls.otherPassive_6_1,
              },
              {
                icon: Images.otherPassive_6_2,
                title: Strings.otherPassive_6_2_title,
                text: [
                  Strings.otherPassive_6_2_text_0,
                  Strings.otherPassive_6_2_text_1,
                ],
                html: Htmls.otherPassive_6_2,
              },
              {
                icon: Images.otherPassive_6_3,
                title: Strings.otherPassive_6_3_title,
                text: [
                  Strings.otherPassive_6_3_text_0,
                  Strings.otherPassive_6_3_text_1,
                ],
                html: Htmls.otherPassive_6_3,
              },
            ],
          },
        ],
      },
      {
        icon: Images.smartway_2,
        title: Strings.smartWay_title_2,
        text: Strings.smartWay_text_2,
        data: [
          {
            icon: Images.online_0,
            title: Strings.online_0_title,
            text: [
              Strings.online_0_text_0,
              Strings.online_0_text_1,
              Strings.online_0_text_2,
            ],
            data: [
              {
                icon: Images.online_0_0,
                title: Strings.online_0_0_title,
                text: [Strings.online_0_0_text_0, Strings.online_0_0_text_1],
                html: Htmls.online_0_0,
              },
              {
                icon: Images.online_0_1,
                title: Strings.online_0_1_title,
                text: [Strings.online_0_1_text_0, Strings.online_0_1_text_1],
                html: Htmls.online_0_1,
              },
              {
                icon: Images.online_0_2,
                title: Strings.online_0_2_title,
                text: [Strings.online_0_2_text_0, Strings.online_0_2_text_1],
                html: Htmls.online_0_2,
              },
              {
                icon: Images.online_0_3,
                title: Strings.online_0_3_title,
                text: [Strings.online_0_3_text_0, Strings.online_0_3_text_1],
                html: Htmls.online_0_3,
              },
              {
                icon: Images.online_0_4,
                title: Strings.online_0_4_title,
                text: [Strings.online_0_4_text_0, Strings.online_0_4_text_1],
                html: Htmls.online_0_4,
              },
              {
                icon: Images.online_0_5,
                title: Strings.online_0_5_title,
                text: [Strings.online_0_5_text_0, Strings.online_0_5_text_1],
                html: Htmls.online_0_5,
              },
              {
                icon: Images.online_0_6,
                title: Strings.online_0_6_title,
                text: [Strings.online_0_6_text_0, Strings.online_0_6_text_1],
                html: Htmls.online_0_6,
              },
              {
                icon: Images.online_0_7,
                title: Strings.online_0_7_title,
                text: [Strings.online_0_7_text_0, Strings.online_0_7_text_1],
                html: Htmls.online_0_7,
              },
              {
                icon: Images.online_0_8,
                title: Strings.online_0_8_title,
                text: [Strings.online_0_8_text_0, Strings.online_0_8_text_1],
                html: Htmls.online_0_8,
              },
              {
                icon: Images.online_0_9,
                title: Strings.online_0_9_title,
                text: [Strings.online_0_9_text_0, Strings.online_0_9_text_1],
                html: Htmls.online_0_9,
              },
              {
                icon: Images.online_0_10,
                title: Strings.online_0_10_title,
                text: [Strings.online_0_10_text_0, Strings.online_0_10_text_1],
                html: Htmls.online_0_10,
              },
              {
                icon: Images.online_0_11,
                title: Strings.online_0_11_title,
                text: [Strings.online_0_11_text_0, Strings.online_0_11_text_1],
                html: Htmls.online_0_11,
              },
              {
                icon: Images.online_0_12,
                title: Strings.online_0_12_title,
                text: [Strings.online_0_12_text_0, Strings.online_0_12_text_1],
                html: Htmls.online_0_12,
              },
            ],
          },
          {
            icon: Images.online_1,
            title: Strings.online_1_title,
            text: [
              Strings.online_1_text_0,
              Strings.online_1_text_1,
              Strings.online_1_text_2,
            ],
            data: [
              {
                icon: Images.online_1_0,
                title: Strings.online_1_0_title,
                text: [Strings.online_1_0_text_0, Strings.online_1_0_text_1],
                html: Htmls.online_1_0,
              },
              {
                icon: Images.online_1_1,
                title: Strings.online_1_1_title,
                text: [Strings.online_1_1_text_0, Strings.online_1_1_text_1],
                html: Htmls.online_1_1,
              },
              {
                icon: Images.online_1_2,
                title: Strings.online_1_2_title,
                text: [Strings.online_1_2_text_0, Strings.online_1_2_text_1],
                html: Htmls.online_1_2,
              },
              {
                icon: Images.online_1_3,
                title: Strings.online_1_3_title,
                text: [Strings.online_1_3_text_0, Strings.online_1_3_text_1],
                html: Htmls.online_1_3,
              },
              {
                icon: Images.online_1_4,
                title: Strings.online_1_4_title,
                text: [Strings.online_1_4_text_0, Strings.online_1_4_text_1],
                html: Htmls.online_1_4,
              },
              {
                icon: Images.online_1_5,
                title: Strings.online_1_5_title,
                text: [Strings.online_1_5_text_0, Strings.online_1_5_text_1],
                html: Htmls.online_1_5,
              },
              {
                icon: Images.online_1_6,
                title: Strings.online_1_6_title,
                text: [Strings.online_1_6_text_0, Strings.online_1_6_text_1],
                html: Htmls.online_1_6,
              },
              {
                icon: Images.online_1_7,
                title: Strings.online_1_7_title,
                text: [Strings.online_1_7_text_0, Strings.online_1_7_text_1],
                html: Htmls.online_1_7,
              },
              {
                icon: Images.online_1_8,
                title: Strings.online_1_8_title,
                text: [Strings.online_1_8_text_0, Strings.online_1_8_text_1],
                html: Htmls.online_1_8,
              },
            ],
          },
          {
            icon: Images.online_2,
            title: Strings.online_2_title,
            text: [
              Strings.online_2_text_0,
              Strings.online_2_text_1,
              Strings.online_2_text_2,
            ],
            data: [
              {
                icon: Images.online_2_0,
                title: Strings.online_2_0_title,
                text: [Strings.online_2_0_text_0, Strings.online_2_0_text_1],
                html: Htmls.online_2_0,
              },
              {
                icon: Images.online_2_1,
                title: Strings.online_2_1_title,
                text: [Strings.online_2_1_text_0, Strings.online_2_1_text_1],
                html: Htmls.online_2_1,
              },
              {
                icon: Images.online_2_2,
                title: Strings.online_2_2_title,
                text: [Strings.online_2_2_text_0, Strings.online_2_2_text_1],
                html: Htmls.online_2_2,
              },
            ],
          },
          {
            icon: Images.online_3,
            title: Strings.online_3_title,
            text: [
              Strings.online_3_text_0,
              Strings.online_3_text_1,
              Strings.online_3_text_2,
            ],
            data: [
              {
                icon: Images.online_3_0,
                title: Strings.online_3_0_title,
                text: [Strings.online_3_0_text_0, Strings.online_3_0_text_1],
                html: Htmls.online_3_0,
              },
              {
                icon: Images.online_3_1,
                title: Strings.online_3_1_title,
                text: [Strings.online_3_1_text_0, Strings.online_3_1_text_1],
                html: Htmls.online_3_1,
              },
              {
                icon: Images.online_3_2,
                title: Strings.online_3_2_title,
                text: [Strings.online_3_2_text_0, Strings.online_3_2_text_1],
                html: Htmls.online_3_2,
              },
              {
                icon: Images.online_3_3,
                title: Strings.online_3_3_title,
                text: [Strings.online_3_3_text_0, Strings.online_3_3_text_1],
                html: Htmls.online_3_3,
              },
              {
                icon: Images.online_3_4,
                title: Strings.online_3_4_title,
                text: [Strings.online_3_4_text_0, Strings.online_3_4_text_1],
                html: Htmls.online_3_4,
              },
              {
                icon: Images.online_3_5,
                title: Strings.online_3_5_title,
                text: [Strings.online_3_5_text_0, Strings.online_3_5_text_1],
                html: Htmls.online_3_5,
              },
              {
                icon: Images.online_3_6,
                title: Strings.online_3_6_title,
                text: [Strings.online_3_6_text_0, Strings.online_3_6_text_1],
                html: Htmls.online_3_6,
              },
              {
                icon: Images.online_3_7,
                title: Strings.online_3_7_title,
                text: [Strings.online_3_7_text_0, Strings.online_3_7_text_1],
                html: Htmls.online_3_7,
              },
            ],
          },
          {
            icon: Images.online_4,
            title: Strings.online_4_title,
            text: [
              Strings.online_4_text_0,
              Strings.online_4_text_1,
              Strings.online_4_text_2,
            ],
            data: [
              {
                icon: Images.online_4_0,
                title: Strings.online_4_0_title,
                text: [Strings.online_4_0_text_0, Strings.online_4_0_text_1],
                html: Htmls.online_4_0,
              },
              {
                icon: Images.online_4_1,
                title: Strings.online_4_1_title,
                text: [Strings.online_4_1_text_0, Strings.online_4_1_text_1],
                html: Htmls.online_4_1,
              },
              {
                icon: Images.online_4_2,
                title: Strings.online_4_2_title,
                text: [Strings.online_4_2_text_0, Strings.online_4_2_text_1],
                html: Htmls.online_4_2,
              },
              {
                icon: Images.online_4_3,
                title: Strings.online_4_3_title,
                text: [Strings.online_4_3_text_0, Strings.online_4_3_text_1],
                html: Htmls.online_4_3,
              },
            ],
          },
          {
            icon: Images.online_5,
            title: Strings.online_5_title,
            text: [
              Strings.online_5_text_0,
              Strings.online_5_text_1,
              Strings.online_5_text_2,
            ],
            data: [
              {
                icon: Images.online_5_0,
                title: Strings.online_5_0_title,
                text: [Strings.online_5_0_text_0, Strings.online_5_0_text_1],
                html: Htmls.online_5_0,
              },
              {
                icon: Images.online_5_1,
                title: Strings.online_5_1_title,
                text: [Strings.online_5_1_text_0, Strings.online_5_1_text_1],
                html: Htmls.online_5_1,
              },
              {
                icon: Images.online_5_2,
                title: Strings.online_5_2_title,
                text: [Strings.online_5_2_text_0, Strings.online_5_2_text_1],
                html: Htmls.online_5_2,
              },
              {
                icon: Images.online_5_3,
                title: Strings.online_5_3_title,
                text: [Strings.online_5_3_text_0, Strings.online_5_3_text_1],
                html: Htmls.online_5_3,
              },
            ],
          },
          {
            icon: Images.online_6,
            title: Strings.online_6_title,
            text: [
              Strings.online_6_text_0,
              Strings.online_6_text_1,
              Strings.online_6_text_2,
            ],
            data: [
              {
                icon: Images.online_6_0,
                title: Strings.online_6_0_title,
                text: [Strings.online_6_0_text_0, Strings.online_6_0_text_1],
                html: Htmls.online_6_0,
              },
              {
                icon: Images.online_6_1,
                title: Strings.online_6_1_title,
                text: [Strings.online_6_1_text_0, Strings.online_6_1_text_1],
                html: Htmls.online_6_1,
              },
              {
                icon: Images.online_6_2,
                title: Strings.online_6_2_title,
                text: [Strings.online_6_2_text_0, Strings.online_6_2_text_1],
                html: Htmls.online_6_2,
              },
            ],
          },
          {
            icon: Images.online_7,
            title: Strings.online_7_title,
            text: [
              Strings.online_7_text_0,
              Strings.online_7_text_1,
              Strings.online_7_text_2,
            ],
            data: [
              {
                icon: Images.online_7_0,
                title: Strings.online_7_0_title,
                text: [Strings.online_7_0_text_0, Strings.online_7_0_text_1],
                html: Htmls.online_7_0,
              },
              {
                icon: Images.online_7_1,
                title: Strings.online_7_1_title,
                text: [Strings.online_7_1_text_0, Strings.online_7_1_text_1],
                html: Htmls.online_7_1,
              },
              {
                icon: Images.online_7_2,
                title: Strings.online_7_2_title,
                text: [Strings.online_7_2_text_0, Strings.online_7_2_text_1],
                html: Htmls.online_7_2,
              },
              {
                icon: Images.online_7_3,
                title: Strings.online_7_3_title,
                text: [Strings.online_7_3_text_0, Strings.online_7_3_text_1],
                html: Htmls.online_7_3,
              },
              {
                icon: Images.online_7_4,
                title: Strings.online_7_4_title,
                text: [Strings.online_7_4_text_0, Strings.online_7_4_text_1],
                html: Htmls.online_7_4,
              },
            ],
          },
        ],
      },
      {
        icon: Images.smartway_3,
        title: Strings.smartWay_title_3,
        text: Strings.smartWay_text_3,
        data: [
          {
            icon: Images.level_0,
            title: Strings.level_0_title,
            text: [Strings.level_0_text_0, Strings.level_0_text_1],
            html: Htmls.level_0,
          },
          {
            icon: Images.level_1,
            title: Strings.level_1_title,
            text: [Strings.level_1_text_0, Strings.level_1_text_1],
            html: Htmls.level_1,
          },
          {
            icon: Images.level_2,
            title: Strings.level_2_title,
            text: [Strings.level_2_text_0, Strings.level_2_text_1],
            html: Htmls.level_2,
          },
          {
            icon: Images.level_3,
            title: Strings.level_3_title,
            text: [Strings.level_3_text_0, Strings.level_3_text_1],
            html: Htmls.level_3,
          },
          {
            icon: Images.level_4,
            title: Strings.level_4_title,
            text: [Strings.level_4_text_0, Strings.level_4_text_1],
            html: Htmls.level_4,
          },
          {
            icon: Images.level_5,
            title: Strings.level_5_title,
            text: [Strings.level_5_text_0, Strings.level_5_text_1],
            html: Htmls.level_5,
          },
          {
            icon: Images.level_0,
            title: Strings.level_6_title,
            text: [Strings.level_6_text_0, Strings.level_6_text_1],
            html: Htmls.level_6,
          },
          {
            icon: Images.level_1,
            title: Strings.level_7_title,
            text: [Strings.level_7_text_0, Strings.level_7_text_1],
            html: Htmls.level_7,
          },
          {
            icon: Images.level_2,
            title: Strings.level_8_title,
            text: [Strings.level_8_text_0, Strings.level_8_text_1],
            html: Htmls.level_8,
          },
          {
            icon: Images.level_3,
            title: Strings.level_9_title,
            text: [Strings.level_9_text_0, Strings.level_9_text_1],
            html: Htmls.level_9,
          },
          {
            icon: Images.level_4,
            title: Strings.level_10_title,
            text: [Strings.level_10_text_0, Strings.level_10_text_1],
            html: Htmls.level_10,
          },
          {
            icon: Images.level_5,
            title: Strings.level_11_title,
            text: [Strings.level_11_text_0, Strings.level_11_text_1],
            html: Htmls.level_11,
          },
          {
            icon: Images.level_0,
            title: Strings.level_12_title,
            text: [Strings.level_12_text_0, Strings.level_12_text_1],
            html: Htmls.level_12,
          },
          {
            icon: Images.level_1,
            title: Strings.level_13_title,
            text: [Strings.level_13_text_0, Strings.level_13_text_1],
            html: Htmls.level_13,
          },
          {
            icon: Images.level_2,
            title: Strings.level_14_title,
            text: [Strings.level_14_text_0, Strings.level_14_text_1],
            html: Htmls.level_14,
          },
          {
            icon: Images.level_3,
            title: Strings.level_15_title,
            text: [Strings.level_15_text_0, Strings.level_15_text_1],
            html: Htmls.level_15,
          },
          {
            icon: Images.level_4,
            title: Strings.level_16_title,
            text: [Strings.level_16_text_0, Strings.level_16_text_1],
            html: Htmls.level_16,
          },
          {
            icon: Images.level_5,
            title: Strings.level_17_title,
            text: [Strings.level_17_text_0, Strings.level_17_text_1],
            html: Htmls.level_17,
          },
        ],
      },
    ],
    setting: [
      {
        icon: Images.setting_0,
        title: Strings.Games,
        link: true,
      },
      {
        icon: Images.setting_1,
        title: Strings.Quiz,
        link: true,
      },
      {
        icon: Images.setting_2,
        title: Strings.RateUs,
        rateUs: true,
      },
      {
        icon: Images.setting_3,
        title: Strings.Shareapp,
        shareApp: true,
      },
      {
        icon: Images.setting_4,
        title: Strings.Contactus,
        navigate: NavRoutes.ContactUs,
      },
      {
        icon: Images.setting_5,
        title: Strings.HelpAndFeedback,
        navigate: NavRoutes.HelpAndFeedback,
      },
      {
        icon: Images.setting_6,
        title: Strings.Privacypolicy,
        policy: true,
      },
      {
        icon: Images.setting_7,
        title: Strings.Aboutus,
        navigate: NavRoutes.AboutUs,
      },
      {
        icon: Images.setting_8,
        title: Strings.ContactOfficial,
        telegram: true,
      },
    ],
    emi: [
      {
        image: Images.emi_0,
        title: Strings.LoanEligibility,
        navigate: NavRoutes.LoanEligibility,
      },
      {
        image: Images.emi_1,
        title: Strings.CompareLoans,
        navigate: NavRoutes.CompareLoans,
      },
      {
        image: Images.emi_2,
        title: Strings.TaxCalculation,
        navigate: NavRoutes.TaxCalculation,
      },
    ],
    investment: [
      {
        image: Images.investment_0,
        title: Strings.SystematicWithdrawalPlan,
        nav: NavRoutes.SWP,
      },
      {
        image: Images.investment_1,
        title: Strings.SystematicInvestmentPlan,
        nav: NavRoutes.SIP,
      },
      {
        image: Images.investment_2,
        title: Strings.EquityLinkedSavingScheme,
        nav: NavRoutes.EquityLinkedScheme,
      },
      {
        image: Images.investment_3,
        title: Strings.LumpsumCalculator,
        nav: NavRoutes.Lumpsum,
      },
    ],
    finance: [
      {
        image: Images.finance_0,
        title: Strings.FixedDeposit,
        nav: NavRoutes.FixedDeposit,
      },
      {
        image: Images.finance_1,
        title: Strings.RecurringDeposit,
        nav: NavRoutes.RecurringDeposit,
      },
      {
        image: Images.finance_2,
        title: Strings.PublicProvidentFund,
        nav: NavRoutes.PublicProvidentFund,
      },
      {
        image: Images.finance_3,
        title: Strings.SimpleandCompound,
        nav: NavRoutes.SimpleAndCompound,
      },
      {
        image: Images.finance_4,
        title: Strings.CurrencyConversion,
        nav: NavRoutes.CurrencyConversion,
      },
    ],
    business: [
      {
        image: Images.business_0,
        title: Strings.DiscountCalculator,
        nav: NavRoutes.DiscountCalculator,
      },
      {
        image: Images.business_1,
        title: Strings.PriceCalculator,
        nav: NavRoutes.PriceCalculator,
      },
      {
        image: Images.business_2,
        title: Strings.MarginCalculator,
        nav: NavRoutes.MarginCalculator,
      },
      {
        image: Images.business_3,
        title: Strings.MarkupCalculator,
        nav: NavRoutes.MarkupCalculator,
      },
      {
        image: Images.business_4,
        title: Strings.OperatingMargin,
        nav: NavRoutes.OperatingMargin,
      },
      {
        image: Images.business_5,
        title: Strings.MarginWithSales,
        nav: NavRoutes.MarginWithSales,
      },
    ],
    bankFinder: [
      {
        image: Images.BankFinder,
        title: Strings.BankFinder,
        link: `http://maps.apple.com/?q=Bank`,
      },
      {
        image: Images.ATMFinder,
        title: Strings.ATMFinder,
        link: `http://maps.apple.com/?q=ATM`,
      },
    ],
    moreOptions: [
      {
        image: Images.AllCalculatorTheory,
        title: Strings.AllCalculatorTheory,
        nav: NavRoutes.Theory,
      },
      {
        image: Images.FAQ,
        title: Strings.FAQ,
        nav: NavRoutes.FAQ,
      },
    ],
    FAQ: [
      {
        title: Strings.FAQ_Quesion_1,
      },
      {
        title: Strings.FAQ_Quesion_2,
      },
      {
        title: Strings.FAQ_Quesion_3,
      },
      {
        title: Strings.FAQ_Quesion_4,
      },
      {
        title: Strings.FAQ_Quesion_5,
      },
      {
        title: Strings.FAQ_Quesion_6,
      },
      {
        title: Strings.FAQ_Quesion_7,
      },
    ],
    Theory: {
      Tabs: [
        { label: Strings.Bank, value: 0 },
        { label: Strings.Finance, value: 1 },
        { label: Strings.Business, value: 2 },
        { label: Strings.Stock, value: 3 },
      ],
      TabContent: {
        0: [
          {
            image: Images.Bank_LoanEligibility,
            title: Strings.LoanEligibility,
            text: Strings.Theory,
          },
          {
            image: Images.Bank_CompareLoans,
            title: Strings.CompareLoans,
            text: Strings.Theory,
          },
          {
            image: Images.Bank_FD,
            title: Strings.FD,
            text: Strings.Theory,
          },
          {
            image: Images.Bank_RD,
            title: Strings.RD,
            text: Strings.Theory,
          },
          {
            image: Images.Bank_Saving,
            title: Strings.Saving,
            text: Strings.Theory,
            showNativeAd: true,
          },
          {
            image: Images.Bank_LoanToDepositeRatio,
            title: Strings.LoanToDepositRatio,
            text: Strings.Theory,
          },
          {
            image: Images.Bank_CreditCardPayOff,
            title: Strings.CreditCardPayoff,
            text: Strings.Theory,
          },
          {
            image: Images.Bank_Accounting,
            title: Strings.Accounting,
            text: Strings.Theory,
          },
          {
            image: Images.Bank_TypesOfBanks,
            title: Strings.TypesOfBanks,
            text: Strings.Theory,
          },
          {
            image: Images.Bank_Auditing,
            title: Strings.Auditing,
            text: Strings.Theory,
          },
          {
            image: Images.Bank_Loans,
            title: Strings.Loans,
            text: Strings.Theory,
          },
        ],
        1: [
          {
            image: Images.Finance_PPF,
            title: Strings.PPF,
            text: Strings.Theory,
          },
          {
            image: Images.Finance_SimpleCompoundInterest,
            title: Strings.SimpleandCompoundInterest,
            text: Strings.Theory,
          },
          {
            image: Images.Finance_SWP,
            title: Strings.SWP,
            text: Strings.Theory,
          },
          {
            image: Images.Finance_SIP,
            title: Strings.SIP,
            text: Strings.Theory,
          },
          {
            image: Images.Finance_Lumpsum,
            title: Strings.Lumpsum,
            text: Strings.Theory,
          },
          {
            image: Images.Finance_EMI,
            title: Strings.EMI,
            text: Strings.Theory,
            showNativeAd: true,
          },
          {
            image: Images.Finance_Mortgage,
            title: Strings.MortgageCalculator,
            text: Strings.Theory,
          },
          {
            image: Images.Finance_TVM,
            title: Strings.TVMCalculator,
            text: Strings.Theory,
          },
          {
            image: Images.Finance_Bond,
            title: Strings.BondCalculation,
            text: Strings.Theory,
          },
          {
            image: Images.Finance_IRR,
            title: Strings.IRRCalculator,
            text: Strings.Theory,
          },
          {
            image: Images.Finance_CashFlow,
            title: Strings.CashFlow,
            text: Strings.Theory,
          },
          {
            image: Images.Finance_BondValueation,
            title: Strings.BondValuation,
            text: Strings.Theory,
          },
          {
            image: Images.Finance_SecurityMarket,
            title: Strings.SecurityMarketEfficiency,
            text: Strings.Theory,
          },
          {
            image: Images.Finance_CapitalStructure,
            title: Strings.CapitalStructure,
            text: Strings.Theory,
          },
        ],
        2: [
          {
            image: Images.Business_GrossProfit,
            title: Strings.GrossProfit,
            text: Strings.Theory,
          },
          {
            image: Images.Business_CostOfGoods,
            title: Strings.CostOfGoodsSold,
            text: Strings.Theory,
          },
          {
            image: Images.Business_BCG,
            title: Strings.BCGMatrix,
            text: Strings.Theory,
          },
          {
            image: Images.Business_SWOT,
            title: Strings.SWOTAnalysis,
            text: Strings.Theory,
            showNativeAd: true,
          },
          {
            image: Images.Business_Product,
            title: Strings.ProductLifecycle,
            text: Strings.Theory,
          },
          {
            image: Images.Business_Change,
            title: Strings.ChangeCurve,
            text: Strings.Theory,
          },
          {
            image: Images.Business_Pyramid,
            title: Strings.PyramidOfResult,
            text: Strings.Theory,
          },
        ],
        3: [
          {
            image: Images.Stock_StockReturn,
            title: Strings.StockReturnsandCapitalGain,
            text: Strings.Theory,
          },
          {
            image: Images.Stock_PE,
            title: Strings.PERatio,
            text: Strings.Theory,
          },
          {
            image: Images.Stock_Fibonacci,
            title: Strings.FibonacciLevel,
            text: Strings.Theory,
          },
          {
            image: Images.Stock_Share,
            title: Strings.ShareMarket,
            text: Strings.Theory,
            showNativeAd: true,
          },
          {
            image: Images.Stock_BullBear,
            title: Strings.WhatisBullandBearMarket,
            text: Strings.Theory,
          },
          {
            image: Images.Stock_TopDown,
            title: Strings.TopDownBottomandMarket,
            text: Strings.Theory,
          },
        ],
      },
    },
    SimpleAndCompound: {
      dropdownData: [
        { label: Strings.Simple, value: Strings.Simple },
        { label: Strings.Compound, value: Strings.Compound },
      ],
    },
    CurrencyConversion: {
      currencies: [
        { label: Strings.INR, value: Strings.INR, text: 0 },
        { label: Strings.Dollar, value: Strings.Dollar, text: 0 },
        { label: Strings.Euro, value: Strings.Euro, text: 0 },
        { label: Strings.Dihram, value: Strings.Dihram, text: 0 },
        { label: Strings.Yen, value: Strings.Yen, text: 0 },
        { label: Strings.Pound, value: Strings.Pound, text: 0 },
      ],
      exchangeRates: {
        INR: 1,
        Dollar: 0.012002,
        Euro: 0.011086,
        Dihram: 0.044,
        Yen: 1.820458,
        Pound: 0.009513,
      },
    },
  };
};

export default useDummyData;
