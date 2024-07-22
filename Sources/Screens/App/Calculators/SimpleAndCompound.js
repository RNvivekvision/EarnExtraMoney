import React, { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../../Common';
import { Strings } from '../../../Constants';
import { Functions } from '../../../Utils';
import {
  EAButtons,
  EAContainer,
  EADropDown,
  EAInput,
  EAResult,
  EAYearMonth,
  NativeAd,
} from '../../../Components';
import { useDummyData, useUserClick } from '../../../Hooks';

const SimpleAndCompound = () => {
  const { incrementCount } = useUserClick();
  const { SimpleAndCompound } = useDummyData();
  const [State, setState] = useState({
    amount: '',
    rateOfInterest: '',
    tenure: '',
    isYear: true,
    typeOfInterest: SimpleAndCompound.dropdownData[0],
    investmentAmount: 0,
    totalInterestValue: 0,
    maturityAmount: 0,
  });

  const onCalculatePress = async () => {
    await incrementCount();
    const { amount, rateOfInterest, tenure, isYear, typeOfInterest } = State;
    const principal = parseFloat(amount);
    const rate = parseFloat(rateOfInterest) / 100; // converting percentage to decimal
    const time = isYear ? parseFloat(tenure) : parseFloat(tenure) / 12; // converting months to years if needed

    if (typeOfInterest.value === Strings.Simple) {
      const interest = principal * rate * time;
      const maturityAmount = principal + interest;
      setState(p => ({
        ...p,
        investmentAmount: Functions.toFixed(principal),
        totalInterestValue: Functions.toFixed(interest),
        maturityAmount: Functions.toFixed(maturityAmount),
      }));
    } else if (typeOfInterest.value === Strings.Compound) {
      const n = 12; // assuming interest is compounded monthly
      const compoundInterest =
        principal * Math.pow(1 + rate / n, n * time) - principal;
      const maturityAmount = principal + compoundInterest;
      setState(p => ({
        ...p,
        investmentAmount: Functions.toFixed(principal),
        totalInterestValue: Functions.toFixed(compoundInterest),
        maturityAmount: Functions.toFixed(maturityAmount),
      }));
    }
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.SimpleandCompound}>
        <EAContainer>
          <EAInput
            title={Strings.Amount}
            value={State.amount}
            onChangeText={v => setState(p => ({ ...p, amount: v }))}
          />
          <EAInput
            title={Strings.RateOfInterest}
            titlePlaceholder={Strings.max50perannum}
            percent={true}
            value={State.rateOfInterest}
            onChangeText={v => setState(p => ({ ...p, rateOfInterest: v }))}
          />
          <EAInput
            title={Strings.Tenure}
            titlePlaceholder={Strings.max30year}
            value={State.tenure}
            onChangeText={v => setState(p => ({ ...p, tenure: v }))}>
            <EAYearMonth onChange={v => setState(p => ({ ...p, isYear: v }))} />
          </EAInput>

          <EADropDown
            title={Strings.TypeOfInterest}
            data={SimpleAndCompound.dropdownData}
            onChange={v => setState(p => ({ ...p, typeOfInterest: v }))}
            value={State.typeOfInterest?.value}
          />

          <RNButton
            title={Strings.Calculate}
            style={{ marginTop: 15 }}
            onPress={onCalculatePress}
          />
        </EAContainer>

        <NativeAd />

        <EAContainer>
          <EAResult
            title={Strings.InvestmentAmount}
            value={State.investmentAmount}
            needBGColor={true}
          />
          <EAResult
            title={Strings.TotalInterestValue}
            value={State.totalInterestValue}
            needBGColor={true}
          />
          <EAResult
            title={Strings.MaturityAmount}
            value={State.maturityAmount}
            needBGColor={true}
          />
          <EAButtons
            button1={Strings.ShareResult}
            // button2={Strings.ConvertPDF}
            value={{
              [Strings.InvestmentAmount]: State.investmentAmount,
              [Strings.TotalInterestValue]: State.totalInterestValue,
              [Strings.MaturityAmount]: State.maturityAmount,
            }}
          />
        </EAContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default SimpleAndCompound;
