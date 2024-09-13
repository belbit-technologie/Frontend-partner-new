import tw from 'twrnc';
import React, { useState } from 'react'
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InstructorReg = () => {
  const navigation = useNavigation()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    image: "",
    drivinglicense: "",
    experience: "",
  })

  const [inputValues, setInputValues] = useState(Array(10).fill(''));

  const handleChange = (name, text) => {
  }

  const onClickSubmit = () => {
    navigation.navigate('Instructor/Home')
  }

  return (
    <>
      <View style={tw`h-12 bg-white flex-row items-center justify-center px-4 bg-white border-b border-gray-200`}>
      <Text style={tw`text-xl font-bold text-black`}>Register</Text>
      </View>
      <ScrollView style={tw`flex-1 bg-white mb-2`}>
        <View style={tw`p-4 justify-center items-center p-2`}>
          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="#000000"
            name="name"
            onChangeText={(text) => handleChange(name, text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter Email"
            placeholderTextColor="#000000"
            name="email"
            onChangeText={(text) => handleChange(name, text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter Password"
            placeholderTextColor="#000000"
            name="password"
            onChangeText={(text) => handleChange(name, text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter Number"
            placeholderTextColor="#000000"
            name="number"
            onChangeText={(text) => handleChange(name, text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter Address"
            placeholderTextColor="#000000"
            name="address"
            onChangeText={(text) => handleChange(name, text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter State"
            placeholderTextColor="#000000"
            name="state"
            onChangeText={(text) => handleChange(name, text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter City"
            placeholderTextColor="#000000"
            name="city"
            onChangeText={(text) => handleChange(name, text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter PinCode"
            placeholderTextColor="#000000"
            name="pincode"
            onChangeText={(text) => handleChange(name, text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TextInput
            placeholder="Enter Experience"
            placeholderTextColor="#000000"
            name="experience"
            onChangeText={(text) => handleChange(name, text)}
            style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
          />
          <TouchableOpacity style={tw`w-full bg-blue-500 py-2 rounded-lg mt-4`} onPress={onClickSubmit}>
            <Text style={tw`text-xl font-bold text-white text-center`}>Submit</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </>

  )
}
export default InstructorReg