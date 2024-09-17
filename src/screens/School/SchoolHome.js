import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import TopHeader from '../../componant/Common/TopHeader'
import Entypo from 'react-native-vector-icons/Entypo';


const SchoolHome = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`flex-1 px-1`}>
      {/* -----TopBar---- */}
      <View style={tw`flex-row tems-center justify-between h-14 px-4 bg-white border-b border-gray-200`}>
        <View style={tw`flex-row`}>
          {/* <TouchableOpacity onPress={handleBackPress} style={tw`flex-row items-center mr-3`}>
            <AntDesign name="arrowleft" color="black" size={20} />
          </TouchableOpacity> */}
          <View style={tw`py-1 px-3`}>
            <Text style={tw`text-lg text-black font-bold`}>ABC Driving School</Text>
            <Text style={tw`text-sm font-sm text-black`}>
              <Entypo name="location-pin" color="black" size={15} />
              Bareilly</Text>
          </View>
        </View>
        <TouchableOpacity
          //  onPress={() => navigation.navigate("Instructor/Profile")} 
          style={tw`flex-row items-center`}>
          <Entypo name="user" color="black" size={20} />
        </TouchableOpacity>
      </View>
      <View>
      </View>

      {/* -----Cards---- */}
      <View style={tw`flex flex-row justify-between items-center px-2 pt-3`}>
        <TouchableOpacity
          style={tw`w-35 h-32 bg-green-400 rounded-lg m-4 justify-center items-center`}
          onPress={() => navigation.navigate('School/NewEmp')}
        >
          <Text style={tw`text-sm font-bold text-white text-lg text-center`}>Add New Emp</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`w-35 h-32 bg-blue-400 rounded-lg m-4 justify-center items-center`}
          onPress={() => navigation.navigate('School/EmpList')}
        >
          <Text style={tw`text-sm font-bold text-white text-lg text-center`}>Employee List </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex flex-row justify-between items-center px-2`}>
        <TouchableOpacity
          style={tw`w-35 h-32 bg-red-400 rounded-lg m-4 justify-center items-center`}
          onPress={() => navigation.navigate('School/Ride/RideHistory')}
        >
          <Text style={tw`text-sm font-bold text-lg text-white text-center`}>Ride History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`w-35 h-32 bg-yellow-300 rounded-lg m-4 justify-center items-center`}
          onPress={() => navigation.navigate('School/NewEmp')}
        >
          <Text style={tw`text-sm font-bold text-white text-center`}>Add</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView >
  )
}
export default SchoolHome