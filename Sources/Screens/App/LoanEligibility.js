import React, { useState } from 'react';
import { RNButton, RNContainer, RNHeader, RNText } from '../../Common';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import {
  EAButtons,
  EAContainer,
  EAInput,
  EAResult,
  EAYearMonth,
  NativeAd,
} from '../../Components';
import { Strings } from '../../Constants';
import { useUserClick } from '../../Hooks';

const LoanEligibility = () => {
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    grossMonthlyIncome: '',
    totalMonthlyEmi: '',
    loanAmount: '',
    interestRate: '',
    tenure: '',
    isYear: true,
    eligibleAmount: 0,
    eligibleEmi: 0,
  });

  const onCalculatePress = async () => {
    await incrementCount();
    const monthlyInterestRate = parseFloat(State.interestRate) / 100 / 12;
    const totalMonths = State.isYear
      ? parseInt(State.tenure) * 12
      : parseInt(State.tenure);
    const monthlyIncome = parseFloat(State.grossMonthlyIncome);
    const monthlyEmi = parseFloat(State.totalMonthlyEmi);
    const eligibleAmount =
      ((monthlyIncome - monthlyEmi) *
        (1 - Math.pow(1 + monthlyInterestRate, -totalMonths))) /
      monthlyInterestRate;
    const eligibleEmi =
      (eligibleAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalMonths)) /
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    setState(prevState => ({
      ...prevState,
      eligibleAmount: isNaN(eligibleAmount) ? 0 : Math.round(eligibleAmount),
      eligibleEmi: isNaN(eligibleEmi) ? 0 : Math.round(eligibleEmi),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.LoanEligibility}>
        <EAContainer>
          <EAInput
            title={Strings.GrossMonthlyIncome}
            value={State.grossMonthlyIncome}
            onChangeText={v => setState(p => ({ ...p, grossMonthlyIncome: v }))}
          />
          <EAInput
            title={Strings.TotalMonthlyEMI}
            value={State.totalMonthlyEmi}
            onChangeText={v => setState(p => ({ ...p, totalMonthlyEmi: v }))}
          />
          <EAInput
            title={Strings.LoanAmount}
            value={State.loanAmount}
            onChangeText={v => setState(p => ({ ...p, loanAmount: v }))}
          />
          <EAInput
            title={Strings.AnnualInterestRate}
            titlePlaceholder={Strings.max50perannum}
            maxLength={2}
            value={State.interestRate}
            onChangeText={v => setState(p => ({ ...p, interestRate: v }))}
          />
          <EAInput
            title={Strings.Tenure}
            titlePlaceholder={Strings.max30year}
            value={State.tenure}
            onChangeText={v => setState(p => ({ ...p, tenure: v }))}>
            <EAYearMonth onChange={v => setState(p => ({ ...p, isYear: v }))} />
          </EAInput>
          <RNButton
            title={Strings.Calculate}
            style={{ marginVertical: 0 }}
            onPress={onCalculatePress}
          />
        </EAContainer>

        <NativeAd big />

        <EAContainer>
          <EAResult
            title={Strings.LoanAmountYouAreEligibleFor}
            value={State.eligibleAmount}
            needBGColor={true}
          />
          <EAResult
            title={Strings.EMIYouAreEligibleFor}
            value={State.eligibleEmi}
            needBGColor={true}
          />
          <EAButtons
            button1={Strings.ShareResult}
            value={{
              [Strings.LoanAmountYouAreEligibleFor]: State.eligibleAmount,
              [Strings.EMIYouAreEligibleFor]: State.eligibleEmi,
            }}
          />
          <RNText
            size={FontSize.font12}
            pHorizontal={wp(4)}
            family={FontFamily.Medium}
            pTop={hp(2)}
            align={'center'}>
            {Strings.LoanEmiDesc}
          </RNText>
        </EAContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default LoanEligibility;
