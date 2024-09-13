import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

function MobileNumber() {
  const navigation = useNavigation()
  const [phoneNumber, setPhoneNumber] = useState('')

  const onChangePhoneNumber = (text) => {
    const number = text.replace(/\D/g, '').slice(0, 10)
    setPhoneNumber(number)
    if (number.length == '10') {
      navigation.navigate('Otp')
    }
  }

  return (
    <View
      style={tw`flex-1 justify-center items-center bg-white rounded`}>
      <View
        style={tw`flex-1 justify-center items-center bg-white p-4 rounded-[30px] bg-white `}>
        <Text style={tw`text-5xl font-bold mb-10 text-blue-500`}>Belbit</Text>
        <Text style={tw`text-2xl font-bold mb-5 text-black`}>
          Enter your mobile number
        </Text>

        <TextInput
          placeholder="Enter your mobile number"
          keyboardType="phone-pad"
          placeholderTextColor="#d6dbdf"
          onChangeText={onChangePhoneNumber}
          value={phoneNumber}
          style={tw`w-[90%] p-3 text-black mb-4 text-center border-0 font-bold text-xl rounded-[12px] border-b-2 border-gray-400`}
        />

        {/* <TouchableOpacity
            onPress={handleLoginRedirect}
            style={tw` w-[360px] bg-blue-500 py-3 px-5 rounded-lg mb-4 mt-4`}>
            <Text style={tw`text-xl font-bold text-white text-center`}>
              Send OTP
            </Text>
          </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default MobileNumber
