import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { rideData } from '../../../utils/RideData';
import { useNavigation } from '@react-navigation/native'
import TopHeader from '../../../componant/Common/TopHeader';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';



const RideHistory = () => {
  const navigation = useNavigation()

  const ListItem = ({ data }) => (
    <TouchableOpacity style={tw`p-1 bg-white border border-gray-300 my-2 rounded-lg px-4 h-24`}
    // onPress={() => navigation.navigate('School/Ride/RideDetails', { data })}
    >
      <View style={tw`flex-row justify-between items-center h-full`}>
        <View style={tw`w-[15%]`}>
          <FontAwesome6 style={tw`text-black`} size={30} name='car-rear' />
        </View>
        <View style={tw`w-[80%]`}>
          <Text style={tw`text-lg text-black`}>{data.user}</Text>
          <Text style={tw`text-md text-black`}>Rider - {data.trainer}</Text>
          <Text style={tw`text-md text-black`}>{data.dateTime}</Text>
          <Text style={tw`text-sm text-blue-400`}>₹ {data.price}</Text>
        </View>
        <View style={tw`w-[5%]`}>
          <AntDesign name='right' size={20} />
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={tw`flex-1 px-1`}>
      <TopHeader title="Ride History" />
      <FlatList
        style={tw`mx-1 mt-2`}
        data={rideData}
        renderItem={({ item }) => (
          <ListItem
            data={item} />)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={tw`mx-5`} />}
      />
    </SafeAreaView>
  )
}
export default RideHistory