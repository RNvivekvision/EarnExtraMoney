import React from 'react';
import { StatusBar, View } from 'react-native';
import { Colors } from '../Theme';
import RNStyles from './RNStyles';
import RNLoader from './RNLoader';
// import { useSelector } from 'react-redux';

const RNContainer = ({ style, children, isLoading }) => {
  // const { adLoading } = useSelector(({ UserReducer }) => UserReducer);

  return (
    <View style={[RNStyles.container, style]}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={Colors.Transparent}
      />
      {/* <RNLoader visible={isLoading || adLoading} /> */}
      <RNLoader visible={isLoading} />
      {children}
    </View>
  );
};

export default RNContainer;
