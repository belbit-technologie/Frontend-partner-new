import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import TopHeader from '../../../componant/Common/TopHeader';


const RideDetails = ({ route }) => {
    const data = route.params.data

    return (
        <>
            <TopHeader title="Details" />
            <View style={tw`p-1 bg-white border border-gray-300 my-2 rounded-lg px-4 h-26`}>
                <View style={tw`flex-row justify-between items-center h-full`}>
                    <View style={tw`w-[20%]`}>
                        <FontAwesome6 style={tw`text-black`} size={30} name='car-rear' />
                    </View>
                    <View style={tw`w-[80%]`}>
                        <Text style={tw`text-lg text-black`}>{data.user}</Text>
                        <Text style={tw`text-md text-black`}>Rider - {data.trainer}</Text>
                        <Text style={tw`text-md text-black`}>{data.dateTime}</Text>
                        <Text style={tw`text-sm text-blue-400`}>₹ {data.price}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}
export default RideDetails