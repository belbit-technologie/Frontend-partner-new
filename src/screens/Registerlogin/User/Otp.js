import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

function Otp() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('')


  // useEffect(() => {
  //   OTPVerify.getHash().then(console.log).catch(console.error);
  //   OTPVerify.startOtpListener(message => {
  //     const extractedOtp = /(\d{4,6})/g.exec(message)[1]
  //     setOtp(extractedOtp)
  //     OTPVerify.removeListener();
  //   })
  //   return () => OTPVerify.removeListener();
  // }, [])


  const onChangeOtp = (text) => {
    const entredOtp = text.replace(/\D/g, '').slice(0, 6);
    setOtp(entredOtp)
    if (entredOtp.length == '4')
      navigation.navigate('Selectpath')
  }
  

  return (
    <View
      style={tw`flex-1 justify-center items-center bg-white p-4`}>
      <View
        style={tw`flex-1 justify-center items-center bg-white p-4 rounded-[30px] bg-white `}>
        <Text style={tw`text-5xl font-bold mb-10 text-blue-500`}>Belbit</Text>

        <Text style={tw`text-2xl font-bold mb-5 text-black`}>
          Enter Recived OTP
        </Text>

        <TextInput
          placeholder="Enter OTP"
          keyboardType="phone-pad"
          onChangeText={onChangeOtp}
          value={otp}
          style={tw`w-[90%] p-3 mb-4 text-center border-0 font-bold text-xl rounded-[12px] border-b-2 border-gray-400`}
        />

        {/* <TouchableOpacity
          onPress={handleLogin}
          style={tw` w-[360px] bg-blue-500 py-3 px-5 rounded-lg mx-4 mt-4`}>
          <Text style={tw`text-xl font-bold text-white text-center`}>
            Validate OTP
          </Text>
        </TouchableOpacity> */}

      </View>
    </View>
  );
}

export default Otp;
