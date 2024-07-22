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

const SIP = () => {
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    investment: '',
    interest: '',
    tenure: '',
    date: null,
    isYear: true,
    totalInvestmentAmount: 0,
    totalInterestValue: 0,
    maturityDate: null,
    maturityValue: 0,
  });

  const onCalculatePress = () => {
    incrementCount();
    // Parse start date
    const startDateObj = new Date(State.date);

    // Convert tenure to months
    const tenureInMonths = Functions.tenure(State.tenure, State.isYear);

    // Convert interest rate to monthly rate
    const monthlyRate = parseFloat(State.interest) / 100 / 12;

    // Calculate SIP
    let totalInvestment = 0;
    let totalInterest = 0;
    let maturityDate = new Date(startDateObj);
    maturityDate.setMonth(maturityDate.getMonth() + tenureInMonths);

    for (let i = 0; i < tenureInMonths; i++) {
      totalInvestment += parseInt(State.investment);
      totalInterest += totalInvestment * monthlyRate;
    }

    // Calculate maturity value
    const maturityValue = totalInvestment + totalInterest;
    setState(p => ({
      ...p,
      totalInvestmentAmount: Functions.toFixed(totalInvestment),
      totalInterestValue: Functions.toFixed(totalInterest),
      maturityDate: Functions.loanTenure(State.date, tenureInMonths - 1),
      maturityValue: Functions.toFixed(maturityValue),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.SystematicWithdrawalPlan}>
        <EAContainer>
          <EAInput
            title={Strings.InvestmentAmount}
            value={State.investment}
            onChangeText={v => setState(p => ({ ...p, investment: v }))}
          />
          <EAInput
            title={Strings.ExpectedRateOfInterest}
            titlePlaceholder={Strings.max50perannum}
            percent={true}
            value={State.interest}
            onChangeText={v => setState(p => ({ ...p, interest: v }))}
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

export default SIP;
