import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc';

const TopHeader = ({ title }) => {
    const navigation = useNavigation()
    const handleBackPress = () => {
        navigation.goBack()
    }

    const handleProfilePress = () => {
        // navigation.navigate ('Profile')
    }

    return (   
        <View style={tw`flex-row items-center justify-between h-12 px-4 bg-white border-b border-gray-200`}>
            <TouchableOpacity onPress={handleBackPress} style={tw`flex-row items-center`}>
                <Icon name="arrowleft" color="black" size={20} />
            </TouchableOpacity>
            <Text style={tw`text-xl font-semibold text-black`}>{title}</Text>
            <TouchableOpacity onPress={handleProfilePress} style={tw`flex-row items-center`}>
            </TouchableOpacity>
        </View>
    )
}

export default TopHeader