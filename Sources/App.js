// import { Routes } from './Navigation';
// import { Provider } from 'react-redux';
// import Store from './Redux';

import { Text, View } from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 24,
          fontFamily: 'Inter-Thin',
        }}>
        {'Hello World'}
      </Text>
    </View>
  );

  return <Routes />;

  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default App;
