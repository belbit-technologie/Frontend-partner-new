import { TextInput, View, TouchableOpacity, ScrollView, Text } from 'react-native'
import tw from 'twrnc';
import DocumentPicker from 'react-native-document-picker'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

const NewEmp = () => {
    const navigation = useNavigation()
    const [fileName, setFileName] = useState('')
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        number: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        certificate: "",
        license: "",
    })

    const handleChange = (name, text) => {
        setData({ ...data, [name]: text })
    }

    const onAddEmp = () => {
        console.log('data---', data)
        navigation.navigate('School/Home')
    }

    return (
        <ScrollView style={tw`flex-1 bg-white p-2`}>
            <View style={tw`justify-center items-center`}>
                <TextInput
                    placeholder="Enter  Name"
                    onChangeText={(text) => handleChange('name', text)}
                    style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
                />
                <TextInput
                    placeholder="Enter Phone Number"
                    onChangeText={(text) => handleChange('number', text)}
                    style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
                />
                <TextInput
                    placeholder="Enter Email"
                    onChangeText={(text) => handleChange('email', text)}
                    style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
                />
                <TextInput
                    placeholder="Enter Address"
                    onChangeText={(text) => handleChange('address', text)}
                    style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
                />
                <TextInput
                    placeholder="Enter State"
                    onChangeText={(text) => handleChange('state', text)}
                    style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
                />
                <TextInput
                    placeholder="Enter City"
                    onChangeText={(text) => handleChange('city', text)}
                    style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
                />
                <TextInput
                    placeholder="Enter PinCode"
                    onChangeText={(text) => handleChange('pincode', text)}
                    style={tw`w-[90%] px-4 mb-4 bg-white text-md text-gray-800 font-bold rounded-[15px] border border-gray-300 shadow-lg`}
                />

                {/* <View>
        <Button title="Select File" onPress={selectFile}
          style={tw`p-10,m-5 alignItem-center`} />
        {fileName ? <Text style={tw`text-lg mt-4`}>Selected File: {fileName}</Text> : null}
      </View> */}

                <TouchableOpacity style={tw`w-full bg-blue-500 py-2 rounded-lg mt-4`} onPress={onAddEmp}>
                    <Text style={tw`text-xl font-bold text-white text-center`}>Add</Text>
                </TouchableOpacity>
            </View >
        </ScrollView>
    )
}
export default NewEmp