import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNHeader, RNText } from '../../../Common';
import {
  EAContainer,
  EAInput,
  EADropDown,
  NativeAd,
} from '../../../Components';
import { Colors, FontFamily, hp } from '../../../Theme';
import { Functions } from '../../../Utils';
import { Strings } from '../../../Constants';
import { useDummyData, useUserClick } from '../../../Hooks';

const CurrencyConversion = () => {
  const { incrementCount } = useUserClick();
  const {
    CurrencyConversion: { currencies, exchangeRates },
  } = useDummyData();
  const [State, setState] = useState({
    amount: '',
    currencyOfTheAmount: currencies[0],
    currencies: currencies,
  });

  const onCalculatePress = async () => {
    await incrementCount();
    const convertedCurrencies = currencies.map(currency => {
      const convertedAmount =
        (parseFloat(State.amount) * exchangeRates[currency.label]) /
        exchangeRates[State.currencyOfTheAmount.label];
      return { ...currency, text: Functions.toFixed(convertedAmount) };
    });
    setState(p => ({ ...p, currencies: convertedCurrencies }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.CurrencyConversion}>
        <EAContainer>
          <EAInput
            title={Strings.Amount}
            value={State.amount}
            onChangeText={v => setState(p => ({ ...p, amount: v }))}
          />
          <EADropDown
            title={Strings.CurrencyOfTheAmount}
            data={currencies}
            onChange={v => setState(p => ({ ...p, currencyOfTheAmount: v }))}
            value={State.currencyOfTheAmount?.value}
          />
          <RNButton
            title={Strings.Calculate}
            style={{ marginBottom: 0 }}
            onPress={onCalculatePress}
          />
        </EAContainer>

        <NativeAd />

        <EAContainer>
          <RNText family={FontFamily.Medium} pBottom={hp(2)}>
            {Strings.AmountInDifferentCurrency}
          </RNText>
          {State.currencies.map((v, i) => (
            <View key={i} style={styles.renderContainer}>
              <RNText
                style={styles.renderText}>{`${v.text} ${v.label}`}</RNText>
            </View>
          ))}
        </EAContainer>
      </RNHeader>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  renderContainer: {
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBlockColor: Colors.White + '30',
  },
  renderText: {
    color: Colors.Button,
    textAlign: 'center',
    fontFamily: FontFamily.Medium,
  },
});

export default CurrencyConversion;
