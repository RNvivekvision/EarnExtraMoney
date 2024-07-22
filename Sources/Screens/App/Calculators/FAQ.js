import { View } from 'react-native';
import { RNContainer, RNHeader } from '../../../Common';
import { NativeAd, RenderFAQ } from '../../../Components';
import { useDummyData } from '../../../Hooks';
import { Strings } from '../../../Constants';

const FAQ = () => {
  const { FAQ } = useDummyData();
  return (
    <RNContainer>
      <RNHeader title={Strings.ApplyLoan}>
        {FAQ.map((v, i) => (
          <View key={i}>
            {i === 4 && <NativeAd />}
            <RenderFAQ key={i} item={v} index={i} />
          </View>
        ))}
      </RNHeader>
    </RNContainer>
  );
};

export default FAQ;
