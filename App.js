import React from 'react';
import {Text, View} from 'react-native';
const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text 
      style={{
        fontSize:24,
        color:'red',
      }}>This is an add to cart Application</Text>
    </View>
  );
};
export default HelloWorldApp;