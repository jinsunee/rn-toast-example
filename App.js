import {
  Alert,
  Image,
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
            // NativeModules.ToastExample.show('hello', 5000);
            NativeModules.ShareExtensionComponent.getSharedText((message) => {
              Alert.alert(message?.data);
              console.log(message?.data);
            });
          }}>
          <Text>Press Me :)</Text>
        </TouchableOpacity>

        <Image
          source={{
            uri:
              'https://i.pinimg.com/564x/02/eb/87/02eb87c9cbe8be237093910f091918a3.jpg',
          }}
          mode="resize"
          style={{width: 200, height: 200}}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
