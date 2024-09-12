import { TextInput, View, TouchableOpacity, ScrollView, Text } from 'react-native'
import tw from 'twrnc';
import DocumentPicker from 'react-native-document-picker'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

const SchoolReg = () => {
  const navigation = useNavigation()
  const [fileName, setFileName] = useState('');

  const [data, setData] = useState({
    schoolname: "",
    ownername: "",
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

  const onClickSubmit = () => {
    console.log('data---', data)
    navigation.navigate('School/Home')
  }


  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      })
      setFileName(res[0].name)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled from picker');
      } else {
        console.error('Unknown Error: ', err);
      }
    }
  }

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`justify-center items-center p-2`}>
        <TextInput
          placeholder="Enter School Name"
          onChangeText={(text) => handleChange('schoolname', text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter Owner Name"
          onChangeText={(text) => handleChange('ownername', text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter Phone Number"
          onChangeText={(text) => handleChange('number', text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter Email"
          onChangeText={(text) => handleChange('email', text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter Password"
          onChangeText={(text) => handleChange('password', text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter Address"
          onChangeText={(text) => handleChange('address', text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter State"
          onChangeText={(text) => handleChange('state', text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter City"
          onChangeText={(text) => handleChange('city', text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />
        <TextInput
          placeholder="Enter PinCode"
          onChangeText={(text) => handleChange('pincode', text)}
          style={tw`w-[90%] px-4 mb-4 bg-white text-md text-black font-bold rounded-[15px] border border-gray-300 shadow-lg`}
        />

        {/* <View>
          <Button title="Select File" onPress={selectFile}
            style={tw`p-10,m-5 alignItem-center`} />
          {fileName ? <Text style={tw`text-lg mt-4`}>Selected File: {fileName}</Text> : null}
        </View> */}

        <TouchableOpacity style={tw`w-full bg-blue-500 py-2 rounded-lg mt-4`} onPress={onClickSubmit}>
          <Text style={tw`text-xl font-bold text-white text-center`}>Submit</Text>
        </TouchableOpacity>
      </View >
    </ScrollView>
  )
}
export default SchoolReg