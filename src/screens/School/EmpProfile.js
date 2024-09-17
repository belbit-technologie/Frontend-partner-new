import { View, SafeAreaView, TouchableOpacity, ScrollView, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import TopHeader from '../../componant/Common/TopHeader';

const EmpProfile = ({ route }) => {
  const navigation = useNavigation()
  console.log("route---", route)
  const { name, phone } = route.params;

  return (
    <SafeAreaView style={tw`flex-1`}>
      <TopHeader title="Employee Details" />
      <ScrollView style={tw`flex-1`}>
        <View style={tw`p-4 mb-5 items-center`}>
          <Image
            style={tw`w-30 h-30 border-4 border-yellow-300 rounded-full`}
            source={{ uri: 'https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufD' }}
          />
          <Text style={tw`text-xl font-bold text-black`}>{name}</Text>
        </View>

        {/* -----List---- */}
        <View style={tw`px-2 mt-3 `}>
          <View style={tw`flex-row my-2 items-center rounded-2xl justify-between h-16 px-4 bg-white border-b border-gray-200`}>
            <View style={tw`flex-row `}>
              <View
                style={tw`flex-row items-center mr-3`}>
                <AntDesign name="user" color="black" size={20} />
              </View>
              <Text style={tw`text-lg text-black`}>Shnauj Yadav</Text>
            </View>
            <TouchableOpacity style={tw`flex-row items-center`}>
              <AntDesign name="edit" color="black" size={20} />
            </TouchableOpacity>
          </View>
          <View style={tw`flex-row my-2 items-center rounded-2xl justify-between h-16 px-4 bg-white border-b border-gray-200`}>
            <View style={tw`flex-row `}>
              <View style={tw`flex-row items-center mr-3`}>
                <AntDesign name="mail" color="black" size={20} />
              </View>
              <Text style={tw`text-lgm text-black`}>shanujyadav@gmail.com</Text>
            </View>
            <TouchableOpacity style={tw`flex-row items-center`}>
              <AntDesign name="edit" color="black" size={20} />
            </TouchableOpacity>
          </View>
          <View style={tw`flex-row my-2 items-center rounded-2xl justify-between h-16 px-4 bg-white border-b border-gray-200`}>
            <View style={tw`flex-row `}>
              <View style={tw`flex-row items-center mr-3`}>
                <AntDesign name="phone" color="black" size={20} />
              </View>
              <Text style={tw`text-lg text-black`}>+91 {phone}</Text>
            </View>
            <TouchableOpacity style={tw`flex-row items-center`}>
              <AntDesign name="edit" color="black" size={20} />
            </TouchableOpacity>
          </View>
          <View style={tw`flex-row my-2 items-center rounded-2xl justify-between h-16 px-4 bg-white border-b border-gray-200`}>
            <View style={tw`flex-row `}>
              <View style={tw`flex-row items-center mr-3`}>
                <Entypo name="location-pin" color="black" size={20} />
              </View>
              <Text style={tw`text-lg text-black`}>Bareilly,India</Text>
            </View>
            <TouchableOpacity style={tw`flex-row items-center`}>
              <AntDesign name="edit" color="black" size={20} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={tw`flex-row my-2 items-center rounded-2xl justify-between h-16 px-4 bg-white border-b border-gray-200`}>
            <View style={tw`flex-row `}>
              <View style={tw`flex-row items-center mr-3`}>
                <AntDesign name="logout" color="black" size={20} />
              </View>
              <Text style={tw`text-lg text-black`}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EmpProfile