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

const RecurringDeposit = () => {
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    investmentAmount: '',
    expectedRateOfInterest: '',
    tenure: '',
    isYear: true,
    date: null,
    totalInvestment: 0,
    totalInterest: 0,
    maturityDate: null,
    maturityValue: 0,
  });

  const onCalculatePress = async () => {
    await incrementCount();
    // Convert strings to numbers
    const investment = parseFloat(State.investmentAmount);
    const rate = parseFloat(State.expectedRateOfInterest);

    // Calculate monthly interest rate
    const monthlyInterestRate = rate / (12 * 100);

    // Calculate total number of installments
    const totalInstallments = Functions.tenure(State.tenure, State.isYear);

    // Calculate maturity amount
    const maturityAmount =
      (investment * ((1 + monthlyInterestRate) ** totalInstallments - 1)) /
      monthlyInterestRate;

    // Calculate maturity date
    const maturityDate = new Date(State.date.getTime());
    if (maturityDate) {
      maturityDate.setMonth(maturityDate.getMonth() + totalInstallments);
    }

    // Calculate total investment amount
    const totalInvestment = investment * totalInstallments;

    // Update state with results
    setState(p => ({
      ...p,
      totalInvestment: Functions.toFixed(totalInvestment),
      totalInterest: Functions.toFixed(maturityAmount - totalInvestment),
      maturityDate: Functions.formatDate({ date: maturityDate }),
      maturityValue: Functions.toFixed(maturityAmount),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.RecurringDeposit}>
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
                value: State.totalInvestment,
              },
              { title: Strings.TotalInterestValue, value: State.totalInterest },
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
              [Strings.TotalInvestmentAmount]: State.totalInvestment,
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

export default RecurringDeposit;
