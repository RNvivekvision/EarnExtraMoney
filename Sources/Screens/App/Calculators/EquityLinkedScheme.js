import React, { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../../Common';
import { Images, Strings } from '../../../Constants';
import {
  EAButtons,
  EAContainer,
  EADatePicker,
  EAInput,
  EAResult,
  EAYearMonth,
  NativeAd,
} from '../../../Components';
import { Functions } from '../../../Utils';
import { useUserClick } from '../../../Hooks';

const EquityLinkedScheme = () => {
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    investmentAmount: '',
    expectedRateOfInterest: '',
    tenure: '',
    isYear: true,
    date: null,
    investment: 0,
    totalInterest: 0,
    maturityDate: null,
    maturityValue: 0,
  });

  const onCalculatePress = () => {
    incrementCount();
    // Convert strings to numbers
    const amount = parseFloat(State.investmentAmount);
    const rate = parseFloat(State.expectedRateOfInterest) / 12 / 100;
    const tenure = Functions.tenure(State.tenure, State.isYear);
    const currentDate = new Date(State.date);

    // Calculate maturity date
    const maturityDate = new Date(currentDate);
    maturityDate.setMonth(currentDate.getMonth() + tenure);

    // Calculate maturity value
    const maturityValue = amount * Math.pow(1 + rate, tenure);

    // Calculate total interest
    const totalInterest = maturityValue - amount;

    // Update state with calculated values
    setState(p => ({
      ...p,
      investment: Functions.toFixed(amount),
      totalInterest: Functions.toFixed(totalInterest),
      maturityDate: Functions.formatDate({ date: maturityDate }),
      maturityValue: Functions.toFixed(maturityValue),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.EquityLinkedSavingScheme}>
        <EAContainer>
          <EAInput
            title={Strings.InvestmentAmount}
            value={State.investmentAmount}
            onChangeText={v => setState(p => ({ ...p, investmentAmount: v }))}
          />
          <EAInput
            title={Strings.ExpectedRateOfInterest}
            titlePlaceholder={Strings.max50perannum}
            percent={true}
            maxLength={2}
            value={State.expectedRateOfInterest}
            onChangeText={v =>
              setState(p => ({ ...p, expectedRateOfInterest: v }))
            }
          />
          <EAInput
            title={Strings.Tenure}
            titlePlaceholder={Strings.max30year}
            value={State.tenure}
            onChangeText={v => setState(p => ({ ...p, tenure: v }))}>
            <EAYearMonth onChange={v => setState(p => ({ ...p, isYear: v }))} />
          </EAInput>
          <EADatePicker
            onDateChange={v => setState(p => ({ ...p, date: v }))}
          />
          <RNButton
            title={Strings.Calculate}
            style={{ marginTop: 25 }}
            onPress={onCalculatePress}
          />
        </EAContainer>

        <NativeAd />

        <EAContainer>
          <EAResult title={Strings.InvestmentAmount} value={State.investment} />
          <EAResult
            title={Strings.TotalInterestValue}
            value={State.totalInterest}
            needBGColor={true}
          />
          <EAResult
            title={Strings.MaturityDate}
            value={State.maturityDate}
            icon={Images.Calendar}
          />
          <EAResult
            title={Strings.MaturityValue}
            value={State.maturityValue}
            needBGColor={true}
          />
          <EAButtons
            button1={Strings.ShareResult}
            // button2={Strings.ConvertPDF}
            value={{
              [Strings.InvestmentAmount]: State.investment,
              [Strings.TotalInterestValue]: State.totalInterest,
              [Strings.MaturityDate]: State.maturityDate,
              [Strings.MaturityValue]: State.maturityValue,
            }}
          />
        </EAContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default EquityLinkedScheme;
