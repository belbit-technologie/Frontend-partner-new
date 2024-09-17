import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { employees } from '../../../utils/EmpData';
import { useNavigation } from '@react-navigation/native'
import TopHeader from '../../../componant/Common/TopHeader';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';



const RideHistory = () => {
  const navigation = useNavigation()

  const ListItem = ({ name, phone, onPress }) => (
    <TouchableOpacity onPress={onPress} style={tw`p-1 bg-blue-300 my-2 rounded-lg px-4 h-16`}>
      <View style={tw`flex-row justify-between items-center h-full`}>
        <View style={tw`w-[15%]`}>
          <FontAwesome6 style={tw`text-black`} size={30} name='car-rear' />
        </View>
        <View style={tw`w-[80%]`}>
          <Text style={tw`text-lg text-black`}>{phone}</Text>
        </View>
        <View style={tw`w-[5%]`}>
        </View>
      </View>
    </TouchableOpacity>
  )


  // const onClickEmp = (name, phone) => {
  //   navigation.navigate('School/EmpProfile', { name, phone })
  // }

  return (
    <SafeAreaView style={tw`flex-1 px-1`}>
      <TopHeader title="Ride History" />

      <FlatList
        style={tw`mx-1 mt-2`}
        data={employees}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            phone={item.phone}
            onPress={() => onClickEmp(item.name, item.phone)}
          />)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={tw`mx-5`} />}
      />
    </SafeAreaView>

  )
}
export default RideHistory