import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';
import Entypo from 'react-native-vector-icons/Entypo';

const InstructorHome = () => {
  const navigation = useNavigation()

  const handleBackPress = () => {
    navigation.goBack()
  }

  const handleProfilePress = () => {
    // navigation.navigate('Profile')
  }

  return (
    <>
      <View style={tw`flex-row tems-center justify-between h-14 px-4 bg-white border-b border-gray-200`}>
        <View style={tw`flex-row`}>
          {/* <TouchableOpacity onPress={handleBackPress} style={tw`flex-row items-center mr-3`}>
            <AntDesign name="arrowleft" color="black" size={20} />
          </TouchableOpacity> */}
          <View style={tw`py-1 px-3`}>
            <Text style={tw`text-lg text-black font-bold`}>Shnauj Yadav</Text>
            <Text style={tw`text-sm font-sm text-black`}>
              <Entypo name="location-pin" color="black" size={15} />
              Bareilly</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Instructor/Profile")} style={tw`flex-row items-center`}>
          <Entypo name="user" color="black" size={20} />
        </TouchableOpacity>
      </View>
      <View>
      </View>
    </>
  )
}
export default InstructorHome