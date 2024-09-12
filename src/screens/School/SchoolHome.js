import { FlatList, SafeAreaView, View, Text, TouchableOpacity, Button } from 'react-native'
import tw from 'twrnc';
import React from 'react'
import { employees } from '../../libs/EmpData';
import { useNavigation } from '@react-navigation/native'



const SchoolHome = () => {
  const navigation = useNavigation()

  const ListItem = ({ name, phone, onPress }) => (
    <TouchableOpacity onPress={onPress} style={tw`p-1 bg-blue-400 my-2 rounded-lg px-4 text-right`}>
      <Text style={tw`text-lg font-bold text-black`}>{name}</Text>
      <Text style={tw`text-lg text-black`}>{phone}</Text>
    </TouchableOpacity>
  )

  const onClickEmp = (name, phone) => {
    navigation.navigate('School/EmpProfile', { name, phone })
  }


  return (
    <SafeAreaView style={tw`flex-1 px-1`}>
      <TouchableOpacity style={tw`w-full bg-blue-500 py-2 rounded-lg mt-4`} onPress={() => navigation.navigate('School/NewEmp')}>
        <Text style={tw`text-xl font-bold text-white text-center`}>Add new Emp</Text>
      </TouchableOpacity>

      <Text style={tw`text-black mt-4 mb-2 border-b text-lg`}>Employee List</Text>
      <FlatList
        data={employees}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            phone={item.phone}
            onPress={() => onClickEmp(item.name, item.phone)}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={tw`mx-5`} />}
      />
    </SafeAreaView >
  )
}
export default SchoolHome