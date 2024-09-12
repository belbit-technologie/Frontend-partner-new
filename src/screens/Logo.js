import React, {useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import tw from 'twrnc';

function Logo({navigation}) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MobileNumber');
    }, 3000)
  }, [])

  return (
    <View style={tw`flex-1 justify-center items-center bg-[#fff]`}>
      <Image
        source={require('../../assets/logo.gif')}
        style={{width: 500, height: 400}}
      />
      <Text style={tw`w-[300px] text-3xl font-bold text-black text-center `}>
        Partner
      </Text>
    </View>
  );
}

export default Logo;
