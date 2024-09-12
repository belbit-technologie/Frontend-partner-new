import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';

function Register() {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate('Home');
  }

  const handleLoginRedirect = () => {
    navigation.navigate('Login')
    // Adjust the route name if needed
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-black rounded p-4 `}>
      <View
        style={tw`flex-1 justify-center items-center bg-yellow-500 p-4 rounded-[30px]`}>
        <Text style={tw`text-5xl font-bold mb-10 text-black`}>Belbit</Text>
        <Text style={tw`text-2xl font-bold  mb-5 text-black`}>
          Create an account
        </Text>
        <TextInput
          placeholder="Username"
          style={tw`w-[300px] p-3 mb-4 border-0 font-bold text-xl rounded-[12px] border-b-2 border-black`}
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={tw`w-[300px] p-3 mb-4 border-0 font-bold text-xl rounded-[12px] border-b-2 border-black`}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={tw`w-[300px] p-3 mb-4 border-0 font-bold text-xl rounded-[12px] border-b-2 border-black`}
        />

        <TouchableOpacity
          onPress={handleRegister}
          style={tw` w-[360px] bg-black py-3 px-5 rounded-lg mb-4 mt-4`}>
          <Text style={tw`text-xl font-bold text-white text-center`}>
            Register
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLoginRedirect}
          style={tw`w-[360px] mt-10`}>
          <Text style={tw`text-lg text-black text-center`}>
            Already have a account ?
            <Text style={tw`text-xl font-bold text-black text-center`}>
              Login
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Register;
