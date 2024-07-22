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

const SWP = () => {
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    investmentAmount: '',
    expectedRateOfInterest: '',
    tenure: '',
    monthlyWithdrawalAmount: '',
    date: null,
    isYear: true,
    totalInvestmentAmount: 0,
    totalInterestValue: 0,
    maturityDate: null,
    maturityValue: 0,
  });

  const onCalculatePress = () => {
    incrementCount();
    // Retrieve values from State
    const {
      investmentAmount,
      expectedRateOfInterest,
      tenure,
      monthlyWithdrawalAmount,
      date,
      isYear,
    } = State;

    // Convert strings to numbers
    const investmentAmountNum = parseFloat(investmentAmount);
    const interestRateNum = parseFloat(expectedRateOfInterest);
    const tenureNum = isYear ? 12 * parseInt(tenure) : parseInt(tenure);
    const monthlyWithdrawalAmountNum = parseFloat(monthlyWithdrawalAmount);

    // Calculate total investment amount
    let totalInvestmentAmount = investmentAmountNum;

    // Calculate total interest value
    const interestRate = interestRateNum / 100;
    let totalInterestValue = 0;
    for (let i = 0; i < tenureNum; i++) {
      totalInterestValue +=
        (totalInvestmentAmount + totalInterestValue) * (interestRate / 12);
      totalInvestmentAmount += monthlyWithdrawalAmountNum;
    }

    // Calculate maturity date
    const maturityDate = new Date(date);
    maturityDate.setMonth(maturityDate.getMonth() + tenureNum);

    // Calculate maturity value
    const maturityValue = totalInvestmentAmount + totalInterestValue;

    // Update State with calculated values
    setState(prevState => ({
      ...prevState,
      totalInvestmentAmount: Functions.toFixed(totalInvestmentAmount),
      totalInterestValue: Functions.toFixed(totalInterestValue),
      maturityDate: Functions.formatDate({ date: maturityDate }),
      maturityValue: Functions.toFixed(maturityValue),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.SystematicInvestmentPlan}>
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

          <EAInput
            title={Strings.MonthlyWithdrawalAmount}
            value={State.monthlyWithdrawalAmount}
            onChangeText={v =>
              setState(p => ({ ...p, monthlyWithdrawalAmount: v }))
            }
          />

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
          <EAResult
            columns={[
              {
                title: Strings.TotalInvestmentAmount,
                value: State.totalInvestmentAmount,
              },
              {
                title: Strings.TotalInterestValue,
                value: State.totalInterestValue,
              },
            ]}
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
              [Strings.TotalInvestmentAmount]: State.totalInvestmentAmount,
              [Strings.TotalInterestValue]: State.totalInterestValue,
              [Strings.MaturityDate]: State.maturityDate,
              [Strings.MaturityValue]: State.maturityValue,
            }}
          />
        </EAContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default SWP;
