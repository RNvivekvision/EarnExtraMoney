import { RNContainer, RNHeader } from '../../Common';
import { EAScreen, NativeAd } from '../../Components';
import { Strings } from '../../Constants';
import { Functions } from '../../Utils';
import { useDummyData, useUserClick } from '../../Hooks';

const EMI = ({ navigation }) => {
  const { incrementCount } = useUserClick();
  const { investment, finance, business, bankFinder, moreOptions } =
    useDummyData();

  const onPress = async item => {
    await incrementCount();
    if (item.nav) {
      return navigation.navigate(item.nav);
    }
    if (item.link) {
      await Functions.OpenUrl(item.link);
    }
  };

  return (
    <RNContainer>
      <RNHeader drawer={true} title={Strings.EMI}>
        <EAScreen
          title={Strings.InvestmentCalculator}
          horizontal={true}
          data={investment}
          onPress={onPress}
        />
        <NativeAd />
        <EAScreen
          title={Strings.FinanceCalculator}
          data={finance}
          onPress={onPress}
        />
        <EAScreen
          title={Strings.BusinessCalculator}
          data={business}
          onPress={onPress}
        />
        <EAScreen
          title={Strings.BankAndATMFinder}
          data={bankFinder}
          onPress={onPress}
        />
        <EAScreen
          title={Strings.MoreOptions}
          horizontal={true}
          data={moreOptions}
          onPress={onPress}
        />
      </RNHeader>
    </RNContainer>
  );
};

export default EMI;

// import React, { useState } from 'react';
// import { RNButton, RNContainer, RNHeader } from '../../Common';
// import { Images, Strings } from '../../Constants';
// import {
//   EAContainer,
//   EADatePicker,
//   EAInput,
//   EAYearMonth,
//   NativeAd,
//   EAResult,
//   EAButtons,
// } from '../../Components';
// import { Functions } from '../../Utils';
// import { useUserClick } from '../../Hooks';

// const EMI = () => {
//   const { incrementCount } = useUserClick();
//   const [State, setState] = useState({
//     principalAmount: '',
//     interest: '',
//     loanTenure: null,
//     isYear: true,
//     date: null,
//     totalInterest: 0,
//     totalPrinciple: 0,
//     totalPayment: 0,
//     loanLastDate: null,
//     emi: 0,
//   });

//   // console.log('State -> ', JSON.stringify(State, null, 2));

//   const settingUpState = ({ key, value }) => {
//     setState(p => ({ ...p, [key]: value }));
//   };

//   const onCalculatePress = async () => {
//     await incrementCount();
//     const { principalAmount, interest, loanTenure, isYear, date } = State;
//     const tenureMonths = isYear ? 12 * loanTenure : loanTenure;

//     const emi = Functions.EMI({
//       principalAmount: principalAmount,
//       interestRate: interest,
//       tenureMonths: tenureMonths,
//     });
//     const totalPayment = Functions.toFixed(emi * tenureMonths);
//     const totalPrinciple =
//       parseInt(principalAmount) > 0 ? parseInt(principalAmount) : 0;
//     const totalInterest = Functions.toFixed(totalPayment - principalAmount);
//     const loanLastDate = Functions.loanTenure(date, tenureMonths - 1);

//     setState(p => ({
//       ...p,
//       totalInterest: totalInterest,
//       totalPrinciple: totalPrinciple,
//       totalPayment: totalPayment,
//       loanLastDate: loanLastDate,
//       emi: emi,
//     }));
//   };

//   return (
//     <RNContainer>
//       <RNHeader title={Strings.EMI}>
//         <EAContainer>
//           <EAInput
//             title={Strings.PrincipalAmount}
//             placeholder={Strings.PrincipalAmount}
//             value={State.principalAmount}
//             onChangeText={v =>
//               settingUpState({ key: 'principalAmount', value: v })
//             }
//           />
//           <EAInput
//             title={Strings.Interest}
//             titlePlaceholder={Strings.max50perannum}
//             percent={true}
//             placeholder={Strings.Interest}
//             value={State.interest}
//             maxLength={2}
//             onChangeText={v => settingUpState({ key: 'interest', value: v })}
//           />
//           <EAInput
//             title={Strings.LoanTenure}
//             titlePlaceholder={Strings.max30year}
//             placeholder={Strings.LoanTenure}
//             value={State.loanTenure}
//             onChangeText={v => settingUpState({ key: 'loanTenure', value: v })}>
//             <EAYearMonth
//               onChange={v => settingUpState({ key: 'isYear', value: v })}
//             />
//           </EAInput>
//           <EADatePicker
//             onDateChange={date => settingUpState({ key: 'date', value: date })}
//           />
//           <RNButton
//             title={Strings.Calculate}
//             style={{ marginTop: 25 }}
//             onPress={onCalculatePress}
//           />
//         </EAContainer>

//         <NativeAd big />

//         <EAContainer>
//           <EAResult
//             columns={[
//               { title: Strings.TotalInterest, value: State.totalInterest },
//               { title: Strings.TotalPrinciple, value: State.totalPrinciple },
//             ]}
//           />
//           <EAResult
//             title={Strings.TotalPaymentPrincipleInterest}
//             value={State.totalPayment}
//             needBGColor={true}
//           />
//           <EAResult
//             title={Strings.LoanLastDate}
//             value={State.loanLastDate}
//             icon={Images.Calendar}
//           />
//           <EAResult
//             title={Strings.EMIMonthlyPayment}
//             value={State.emi}
//             needBGColor={true}
//           />
//           <EAButtons
//             button1={Strings.ShareResult}
//             // button2={Strings.ConvertPDF}
//             value={{
//               [Strings.TotalInterest]: State.totalInterest,
//               [Strings.TotalPrinciple]: State.totalPrinciple,
//               [Strings.TotalPaymentPrincipleInterest]: State.totalPayment,
//               [Strings.LoanLastDate]: State.loanLastDate,
//               [Strings.EMIMonthlyPayment]: State.emi,
//             }}
//           />
//         </EAContainer>
//       </RNHeader>
//     </RNContainer>
//   );
// };

// export default EMI;
