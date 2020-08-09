import {
  NativeModules,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';

import React from 'react';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            NativeModules.ToastExample.show('hello', 5000);
          }}>
          <Text>Press Me :)</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default App;
