import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

function Selectpath() {
  const navigation = useNavigation();
  return (
    <View
      style={tw`flex-1 justify-center items-center bg-[#000] w-full h-full`}>
      <TouchableOpacity
        onPress={() => navigation.navigate('School/Reg')}
        style={tw`bg-blue-500 justify-center items-center rounded-full mb-4 w-[200px] h-[200px]`} 
      >
        <Text style={tw`text-3xl font-bold text-white text-center`}>
          Driving School
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Instructor/Reg')}
        style={tw`bg-yellow-500 justify-center items-center rounded-full mb-4 w-[200px] h-[200px]`}
      >
        <Text style={tw`text-3xl font-bold text-white text-center`}>
          Driving Instructor
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export default Selectpath
