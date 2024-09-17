import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { employees } from '../../utils/EmpData';
import { useNavigation } from '@react-navigation/native'
import TopHeader from '../../componant/Common/TopHeader';

const EmpList = () => {
    const navigation = useNavigation()


    const ListItem = ({ name, phone, onPress }) => (
        <TouchableOpacity onPress={onPress} style={tw`p-1 bg-green-400 my-2 rounded-lg px-4 text-right`}>
            <Text style={tw`text-lg font-bold text-black`}>{name}</Text>
            <Text style={tw`text-lg text-black`}>{phone}</Text>
        </TouchableOpacity>
    )

    const onClickEmp = (name, phone) => {
        navigation.navigate('School/EmpProfile', { name, phone })
    }

    return (
        <SafeAreaView style={tw`flex-1 px-1 py-1`}>
            <TopHeader title="All Employee" />
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

export default EmpList